processReponse = function (reponse) {
  _.each(reponse.data, function(tweet) {
    if (!ApisInformations.findOne({itemId:tweet.id})) {
      var fields = {
        itemId: tweet.id,
        service: 'twitter',
        userId: Meteor.userId(),
        text: tweet.text,
        name: tweet.user.name,
        createdAt: new Date(tweet.created_at)
      };
      ApisInformations.insert(fields);
    }
  });
};


var twitter  = new TwitterApi();
Meteor.methods({
  getUserTweets:function(){
    if (Users.findOne(Meteor.userId()).services.twitter) {
      reponse = twitter.homeTimeline();
      processReponse(reponse);
    }
  }
});
