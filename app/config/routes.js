
FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "home"});
  },
  name:'home'
});


FlowRouter.route('/signup', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "signup"});
  }
});


FlowRouter.route('/signin', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "login"});
  }
});


FlowRouter.route('/feed', {
  action: function() {
    BlazeLayout.render("feedLayout", {content: "feed"});
  },
  name: 'feed'
});

FlowRouter.route('/scrape', {
  action: function() {
    BlazeLayout.render("feedLayout", {content: "scrape"});
  }
});
