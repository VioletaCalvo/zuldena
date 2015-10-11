Template.settings.events({
	'click .btn-facebook': function (evt, tmpl) {
		if (!_.contains(Accounts.oauth.serviceNames(), 'facebook')) {
			Meteor.linkWithFacebook({}, function (error) {
				if (error) {
					toastr.error(error.reason);
				}
				else {
					FlowRouter.go('feeds');
					toastr.success("Facebook account connected!");
				}
			});
		}
		else{
			toastr.success('already configured');
		}
	},

	'click .btn-twitter': function (evt, tmpl) {
		if (!_.contains(Accounts.oauth.serviceNames(), 'twitter')) {
			Meteor.linkWithTwetter({}, function (error) {
				if (error) {
					toastr.error(error.reason);
				}
				else {
					FlowRouter.go('feeds');
					toastr.success("Twitter account connected!");

				}
			});
		}
		else{
			toastr.success('already configured');
		}
	},

	'click .btn-youtube': function (evt, tmpl) {
		if (!_.contains(Accounts.oauth.serviceNames(), 'google')) {
			Meteor.linkWithGoogle({}, function (error) {
				if (error) {
					toastr.error(error.reason);
				}
				else {
					FlowRouter.go('feeds');
					toastr.success("Google account connected!");
				}
			});
		}
		else{
			toastr.success('already configured');
		}
	},

	'click .btn-instagram': function (evt, tmpl) {
		if (!_.contains(Accounts.oauth.serviceNames(), 'instagram')) {
			Meteor.linkWithInstagram({}, function (error) {
				if (error) {
					toastr.error(error.reason);
				}
				else {
					FlowRouter.go('feeds');
					toastr.success("Instagram account connected!");
				}
			});
		}
		else{
			toastr.success('already configured');
		}
	}
});
