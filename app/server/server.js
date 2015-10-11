Meteor.setInterval(function(){
			
// 60 000 so every minutes
	console.log("Chron en javascript");
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

if(Meteor.isServer){
	Meteor.methods({
		getMyVideos:function(){
			YoutubeApi.authenticate({
				type:'oauth',
				token: Users.find(Meteor.userId()).services.google.accessToken
			});
			YoutubeApi.channels.list({
			    "part": "id",
			    "mySubscribers": true,
			    "maxResults": 50
			}, function (err, data) {
			    console.log(err, data);
			});
		}	
	});
}
