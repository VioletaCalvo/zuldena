Meteor.startup(function () {
  console.log('iepa2!');
  Tracker.autorun(function () {
    if (Meteor.userId()){
      console.log('iepa2!');
      //Meteor.call('fetchFromService');
      Meteor.call('getUserTweets');
    }
  });
});
