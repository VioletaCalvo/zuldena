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
	},

	'submit form':function (e,tmpl){
		e.preventDefault();
		
		var link = e.target.scrape_site.value;
		
		Meteor.call('scrapeRssFeed', link, function(error, result){
						if(error){
							console.log(error);
							$('#scrape_result').append("<p class='confirmation-not-ok'>Votre site n'a pas été enregistré</p>");
						}else{
							console.log(result);
							Meteor.call('getHtmlContent', link, Meteor.userId()); 
							//var id = PersonalSites.insert({contenu:String(contenu), user_id:Meteor.userId(), url:link});

							$('#scrape_result').append("<p class='confirmation-ok'>Votre site est désormais enregistré</p>");
						}
		});
	}
});
