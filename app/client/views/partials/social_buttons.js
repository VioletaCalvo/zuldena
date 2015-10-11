Template.socialButtons.events({
	'click .btn-facebook': function (evt, tmpl) {
		Meteor.loginWithFacebook();
	},

	'click .btn-twitter': function (evt, tmpl) {
		Meteor.loginWithTwitter();
	},

	'click .btn-youtube': function (evt, tmpl) {
		Meteor.loginWithGoogle();
	},

	'click .btn-instagram': function (evt, tmpl) {
		Meteor.loginWithInstagram();
	}
});
