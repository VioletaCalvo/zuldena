Meteor.setInterval(function(){
}, 60000);

Meteor.methods({

	// Should return rss Feed
	scrapeRssFeed:function(url){
		return Scrape.feed(url);
	},

	// Should scrape a website
	scrapeWebsite:function(url){
		return Scrape.website(url);
	}
});
