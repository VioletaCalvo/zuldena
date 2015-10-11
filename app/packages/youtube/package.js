Package.describe({
  name: 'zuldena:youtube',
  summary: 'retrieve youtube videos',
  version: '1.0.0'
});

Package.onUse(function(api) {
  api.use(['accounts-google', 'renaldo:youtube-api'], ['client', 'server']);
  api.addFiles('server/youtube.js','server');
  api.addFiles('client/youtube.js','client');
});
