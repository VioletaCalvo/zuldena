Package.describe({
  name: 'zuldana:twitter',
  summary: 'retrieve tweets',
  version: '1.0.0'
});

Package.onUse(function(api) {
  api.use('templating');
  api.use(['accounts-twitter', 'twitter'], ['client', 'server']);
  api.addFiles('server/twitter.js','server');
});
