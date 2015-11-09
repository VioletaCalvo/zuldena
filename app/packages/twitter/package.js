Package.describe({
  name: 'zuldena:twitter',
  summary: 'retrieve tweets',
  version: '1.0.0'
});

Package.onUse(function(api) {
  api.use('templating');
  api.use(['accounts-twitter', 'twitter', 'sewdn:twitter-api'], ['client', 'server']);
  api.addFiles('server/twitter.js','server');
  api.addFiles('client/twitter.js','client');
});
