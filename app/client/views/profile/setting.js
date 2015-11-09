Template.settings.events({
	'click .btn-facebook': function (evt, tmpl) {
		Meteor.call('checkUserServices', 'facebook', function(error, configured) {
			if (error) {
				toastr.error(error.reason);
			}
			else if (configured) {
				toastr.success('already configured');
			}
			else {
				Meteor.linkWithFacebook({}, function (error) {
					if (error) {
						toastr.error(error.message);
					}
					else {
						FlowRouter.go('feeds');
						toastr.success("Facebook account connected!");
					}
				});
			}
		});
	},

	'click .btn-twitter': function (evt, tmpl) {
		Meteor.call('checkUserServices', 'twitter', function(error, configured) {
			if (error) {
				toastr.error(error.reason);
			}
			else if (configured) {
				toastr.success('already configured');
			}
			else {
				Meteor.linkWithTwitter({}, function (error) {
					if (error) {
						toastr.error(error.message);
					}
					else {
						FlowRouter.go('feeds');
						toastr.success("Twitter account connected!");
					}
				});
			}
		});
	},

	'click .btn-instagram': function (evt, tmpl) {
		Meteor.call('checkUserServices', 'instagram', function(error, configured) {
			if (error) {
				toastr.error(error.reason);
			}
			else if (configured) {
				toastr.success('already configured');
			}
			else {
				Meteor.linkWithInstagram({}, function (error) {
					if (error) {
						toastr.error(error.message);
					}
					else {
						FlowRouter.go('feeds');
						toastr.success("Instagram account connected!");
					}
				});
			}
		});
	}
});
