processReponse = function (reponse) {
  var fields = {
    service: 'twitter',
    userId: Meteor.userId(),
    text: reponse.data[0].text,
    name: reponse.data[0].user.name,
    createdAt: reponse.data[0].created_at
  };
  ApisInformations.insert(fields);
  var fieldtwo = {
    service: 'twitter',
    userId: Meteor.userId(),
    text: reponse.data[1].text,
    name: reponse.data[1].user.name,
    createdAt: reponse.data[1].created_at
  };
  ApisInformations.insert(fieldtwo);
};


//
// createApplicationToken = function() {
//   var url = 'https://api.twitter.com/oauth2/token';
//   var config = Accounts.loginServiceConfiguration.findOne({service: 'twitter'});
//   var base64AuthToken = new Buffer(config.consumerKey + ":" + config.secret).toString('base64');
//
//   var result = HTTP.post(url, {
//     params: {
//       'grant_type': 'client_credentials'
//     },
//     headers: {
//       'Authorization': 'Basic ' + base64AuthToken,
//       'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
//     }
//   });
//   this.app_auth_token = result.data.access_token;
//   return this.app_auth_token;
// };
//
// Meteor.methods({
//   fetchFromService: function() {
//     console.log('fetchFromService method called');
//     userName = Users.findOne(Meteor.userId()).fistName;
//     var secretToken = Users.findOne(Meteor.userId()).services.twitter.accessTokenSecret;
//     var publicToken = Users.findOne(Meteor.userId()).services.twitter.accessToken;
//     var appToken = createApplicationToken();
//     var pushContent = {
//       headers: {
//         "timeout": 30000,
//         'Authorization': 'Bearer ' + appToken,
//         "access_secret_token": secretToken
//       }
//     };
//     var url = "https://api.twitter.com/1.1/statuses/home_timeline.json?access_token=";
//     //synchronous GET
//     var result = HTTP.get(url, pushContent.headers);
//     if(result.statusCode==200) {
//       var respJson = JSON.parse(result.content);
//       console.log("fetchFromService response received.");
//       processServiceReponse(respJson);
//     } else {
//       console.log("fetchFromService Response issue: ", result.statusCode);
//       var errorJson = JSON.parse(result.content);
//       throw new Meteor.Error(result.statusCode, errorJson.error);
//     }
//   }
// });

if(Meteor.isServer){
  var twitter  = new TwitterApi();
  Meteor.methods({
    getUserTweets:function(){
      self = this.userId ;
      reponse = twitter.homeTimeline();
      processReponse(reponse);
    }
  });
}
