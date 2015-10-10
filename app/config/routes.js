
FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "home"});
  }
});

FlowRouter.route('/feed', {
  action: function() {
    BlazeLayout.render("feedLayout", {content: "feed"});
  }
});