processReponse = function (result) {
  console.log('processReponse called');
  _.each(result.items, function(video) {
    var videoId = video.id.videoId;
    alreadyInDb = ApisInformations.findOne({itemId:videoId});
    if (alreadyInDb != undefined) {
      var fields = {
        // itemId: videoId,
        service: 'youtube',
        // userId: Meteor.userId(),
        url: "https://www.youtube.com/watch?v=" + videoId
      };

      console.log("https://www.youtube.com/watch?v="+videoId);
      ApisInformations.insert(fields);
       //console.log(id);
      //console.log(fields);
    }
  });
};

Meteor.startup(function (){
  YoutubeApi.authenticate({
  	type:'oauth',
  	token: Users.findOne(Meteor.userId).services.google.accessToken
  });
  YoutubeApi.authenticate({
    type: 'key',
    key: Meteor.settings.GoogleKey
  });
});

Meteor.methods({
  searchVideo: function() {
    console.log('searchVideo called');
    search = '';
    YoutubeApi.search.list({
        part: "id",
        type: "video",
        maxResults: 5,
        q: search,
    }, function (error, data) {
        if (!error) {
          ApisInformationdata
        }
    });
  }
});
