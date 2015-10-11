processReponse = function (reponse) {
  console.dir(reponse.data[0].link);
  var fields = {
    service: 'instagram',
    link: reponse.data[0].link,
    userId: Meteor.userId(),
    text: reponse.data[0].caption.text || "texte par défaut",
    imageUrl: reponse.data[0].images.standard_resolution.url,
    name: reponse.data[0].user.username,
    createdAt: reponse.data[0].created_time
  };
  ApisInformations.insert(fields);
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
