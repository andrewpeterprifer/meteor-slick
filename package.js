Package.describe({
  summary: 'the last carousel you\'ll ever need',
  name: 'andrewpeterprifer:slick',
  version: '1.6.0',
  git: 'https://github.com/andrewpeterprifer/meteor-slick',
});

Package.onUse(function (api) {
  api.use('jquery', 'client');

  api.use('less');

  api.addAssets([
    'vendor/slick/slick/ajax-loader.gif',
    'vendor/slick/slick/fonts/slick.eot',
    'vendor/slick/slick/fonts/slick.svg',
    'vendor/slick/slick/fonts/slick.ttf',
    'vendor/slick/slick/fonts/slick.woff',
  ], 'client');

  api.addFiles([
    'vendor/slick/slick/slick.css',
    'vendor/slick/slick/slick.js',
    'lib/theme.less',
  ], 'client');
});