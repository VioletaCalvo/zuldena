processReponse = function (reponse) {
  _.each(reponse.data, function(instagram) {
    if (!ApisInformations.findOne({itemId:instagram.id})) {
      var fields = {
        itemId: instagram.id,
        service: 'instagram',
        link: instagram.link,
        userId: Meteor.userId(),
        text: instagram.caption.text || "texte par défaut",
        imageUrl: instagram.images.standard_resolution.url,
        name: instagram.user.username,
        createdAt: new Date(parseInt(instagram.created_time) * 1000)
      };
      ApisInformations.insert(fields);
    }
  });
};

Meteor.methods({
  getUserInstagrams:function(){
    self = this.userId ;
    accessToken = Users.findOne(Meteor.userId()).services.instagram.accessToken;
    endpoint =
      "https://api.instagram.com/v1/users/self/feed?access_token=" +
       accessToken;
    HTTP.get (endpoint, function (error, result) {
      if (!error) {
        processReponse(result.data);
      }
    });
  }
});
