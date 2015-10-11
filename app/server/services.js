Meteor.methods({
	// Should return if user has already configured the service
	checkUserServices: function(serviceName){
    services = Users.findOne(Meteor.userId()).services;
    return services[serviceName] !== undefined;
	}
});
