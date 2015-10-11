Template.feeds.helpers({
	twitterFeed: function () {
		 var tweets = ApisInformations.find({service:'twitter'}, {sort: {createdAt:-1}, limit:5});
		 return tweets;
	},
	instagram: function() {
		var instagrams = ApisInformations.find({service:'instagram'}, {sort:{createdAt:-1}, limit:5});
		return instagrams;
	}
});
