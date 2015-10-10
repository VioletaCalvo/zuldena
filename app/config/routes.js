
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

FlowRouter.route('/feeds', {
  action: function() {
    BlazeLayout.render("feedLayout", {content: "feed"});
  },
  name: 'feeds'
});

FlowRouter.route('/feeds/:provider', {
  action: function() {
    BlazeLayout.render("feedLayout", {content: "feedDetails"});
  },
  name: 'feedDetails'
});

FlowRouter.route('/settings', {
  action: function() {
    BlazeLayout.render("feedLayout", {content: "settings"});
  },
  name: 'settings'
});

FlowRouter.route('/scrape', {
  action: function() {
    BlazeLayout.render("feedLayout", {content: "scrape"});
  }
});

FlowRouter.notFound = {
    action: function() {
      BlazeLayout.render("notFound");
    }
};