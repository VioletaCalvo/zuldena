Template.signup.events({
	'submit form': function (evt, tmpl) {
		evt.preventDefault();
		var form = evt.target;

		var fullname 	= form.fullname.value;
		var email 		= form.email.value;
		var password 	= form.password.value

		//Create account
		 Accounts.createUser({
            	email: email,
            	password: password,
            	profile: {
            		name: fullname
            	}
        }, function (error) {
        	if (error) {
        		 toastr.error(error.reason, 'Error'); 
        	}
        	else {

				Meteor.loginWithPassword(email, password, function (error) {
					if (error) {
						toastr.error(error.reason, 'Error'); 
					}
					else {
						FlowRouter.go('feeds');
						toastr.success('Account created', 'Registration'); 
					}
				}); 
	
        		
        	}
        });
	}
});