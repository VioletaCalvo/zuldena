Meteor.startup(function () {
	// Facebook service configuration
	ServiceConfiguration.configurations.remove({
		service: 'facebook'
	});

	ServiceConfiguration.configurations.insert({
		service: 'facebook',
		appId: Meteor.settings.facebook.appId,
		secret: Meteor.settings.facebook.secret
	});

	// Twitter service configuration
	ServiceConfiguration.configurations.remove({
    service: 'twitter'
	});

	ServiceConfiguration.configurations.insert({
		service: 'twitter',
		consumerKey: Meteor.settings.twitter.consumerKey,
		secret: Meteor.settings.twitter.secret
	});

	// Google service configuration
	ServiceConfiguration.configurations.remove({
    service: 'google'
	});

	ServiceConfiguration.configurations.insert({
		service: 'google',
		clientId: Meteor.settings.google.clientId,
		secret: Meteor.settings.google.secret
	});

	// Instagram service configuration
	ServiceConfiguration.configurations.remove({
    service: 'instagram'
	});

	ServiceConfiguration.configurations.insert({
		service: 'instagram',
		clientId: Meteor.settings.instagram.clientId,
		secret: Meteor.settings.instagram.secret
	});
});