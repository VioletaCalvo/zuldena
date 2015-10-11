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
    self = this.userId ;
    reponse = twitter.homeTimeline();
    processReponse(reponse);
  }
});
