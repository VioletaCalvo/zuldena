Template.sidebar.events({
	'click .logout-btn': function (evt,tmpl) {
		Meteor.logout();
		FlowRouter.go('home');
		toastr.success('You are logged out!');
	}
})