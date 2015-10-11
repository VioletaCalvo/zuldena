Meteor.startup(function () {
  Tracker.autorun(function () {
    if (Meteor.userId()){
      Meteor.call('searchVideo');
    }
  });
});
