Template.feeds.helpers({
	twitterFeed: function () {
		 var tweets = ApisInformations.find(
			 {service:'twitter', userId:Meteor.userId()},
			 {sort: {createdAt:-1}, limit:5});
		 return tweets;
	},
	instagram: function() {
		var instagrams = ApisInformations.find(
			{service:'instagram', userId:Meteor.userId()},
			{sort:{createdAt:-1}, limit:5});
		return instagrams;
	}
});
