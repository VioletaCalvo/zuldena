Meteor.publish('tweets', function () {
	return ApisInformations.find({service:'twitter'}, {sort: {createdAt:-1}, limit:100});
});

Meteor.publish('posts', function () {
	return ApisInformations.find({service:'facebook'}, {sort: {createdAt:-1}, limit:100});
});

Meteor.publish('photos', function () {
	return ApisInformations.find({service:'instagram'}, {sort: {createdAt:-1}, limit:100});
});

Meteor.publish('videos', function () {
	return ApisInformations.find({service:'youtube'}, {sort: {createdAt:-1}, limit:100});
});