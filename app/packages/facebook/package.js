Package.describe({
  name: 'zuldena:facebook',
  summary: 'retrieve facebook news',
  version: '1.0.0'
});

Package.onUse(function(api) {
  api.use('templating');
  api.use(['accounts-facebook', 'facebook'], ['client', 'server']);
  api.addFiles('server/facebook.js','server');
  api.addFiles('client/facebook.js','client');
});
