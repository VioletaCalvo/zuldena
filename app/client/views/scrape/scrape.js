Template.scrape.events({
	'click #scrape_submit':function(e,tmpl){
		e.preventDefault();
		var website = $('#scrape_site').val();
		Meteor.call('scrapeRssFeed', website, function(error, result){
						if(error){
							$('#scrape_result').append("<p class='confirmation-not-ok'>Votre site n'a pas été enregistré</p>");
						}else{
							PersonalSites.insert({user_id:Meteor.userId(), url:website});
							$('#scrape_result').append("<p class='confirmation-ok'>Votre site est désormais enregistré</p>");
						}
		});
	}
});
