Template.feeds.helpers({
	twitterFeed: function () {
		 var tweets = ApisInformations.find({service:'twitter'}, {sort: {createdAt:-1}, limit:5});
		 return tweets;
	}
})