Meteor.startup(function () {
  Tracker.autorun(function () {
    if (Meteor.userId()){
      FlowRouter.go('feeds');
    }
    else{
      FlowRouter.go('home');
    }
  });
});
