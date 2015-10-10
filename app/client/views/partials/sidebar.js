Template.sidebar.events({
	'click .logout-btn': function (evt,tmpl) {
		Meteor.logout();
		FlowRouter.go('home');
	}
})