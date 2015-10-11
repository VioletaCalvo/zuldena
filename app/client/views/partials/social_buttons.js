Template.socialButtons.events({
	'click .btn-facebook': function (evt, tmpl) {
		Meteor.linkWithFacebook({}, function (error) {
			if (error) {
				toastr.error(error.reason);
			}
			else {
				FlowRouter.go('feeds');
				toastr.success("Facebook account connected!");
			}
		}); 
	},

	'click .btn-twitter': function (evt, tmpl) {
		Meteor.linkWithFacebook({}, function (error) {
			if (error) {
				toastr.error(error.reason);
			}
			else {
				FlowRouter.go('feeds');
				toastr.success("Twitter account connected!");

			}
		}); 
	},

	'click .btn-youtube': function (evt, tmpl) {
		toastr.warning('NOT IMPLEMENTED');
	},

	'click .btn-instagram': function (evt, tmpl) {
		toastr.warning('NOT IMPLEMENTED');
	}
})