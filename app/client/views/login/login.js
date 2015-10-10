Accounts.ui.config({
    forceEmailLowercase: true,
    requestPermissions: {},
    extraSignupFields: [{
        fieldName: 'first-name',
        fieldLabel: 'First name',
        inputType: 'text',
        visible: true,
        validate: function(value, errorFunction) {
          if (!value) {
            errorFunction("Please write your first name");
            return false;
          } else {
            return true;
          }
        }
    }, {
        fieldName: 'last-name',
        fieldLabel: 'Last name',
        inputType: 'text',
        visible: true,
    }]
});

Template.login.events({
    'submit form': function(evt, tmpl) {
        evt.preventDefault();
        
        var form        = evt.target;
        var email       = form.email.value;
        var password    = form.password.value;

        Meteor.loginWithPassword(email, password, function (error) {
            if (error) {
                toastr.error(error.reason, 'Error'); 
            }
            else {
                FlowRouter.go('feeds'); 
                toastr.success('You are logged in'); 
            }
        }); 
    }
})