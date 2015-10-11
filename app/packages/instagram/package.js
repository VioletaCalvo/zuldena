Package.describe({
  name: 'zuldena:instagram',
  summary: 'retrieve instagram feeds',
  version: '1.0.0'
});

Package.onUse(function(api) {
  // accounts-instagram is required by bozhao:link-accounts
  // service-configuration is required by bozhao:accounts-instagram
  // check is required by instagram-fetcher
  api.use(['service-configuration', 'bozhao:accounts-instagram'],
          ['client', 'server']);
  api.addFiles('server/instagram.js','server');
  api.addFiles('client/instagram.js','client');
});
