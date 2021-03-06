/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'calories-front-end',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };
  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.contentSecurityPolicy = {
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self'",
      'connect-src': "'self' http://localhost:3000",
      'img-src': "'self' data:",
      'style-src': "'self' 'unsafe-inline' 'unsafe-eval'",
      'media-src': "'self'"
    }
    ENV['simple-auth-devise'] = {
      serverTokenEndpoint: 'http://localhost:3000/api/v1/users/sign_in'
    }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';

  }

  if (environment === 'production') {

  }
  ENV['simple-auth'] = {
    crossOriginWhitelist: ['*'],
    authorizer: 'simple-auth-authorizer:devise',
    store: 'simple-auth-session-store:local-storage'
  }

  return ENV;
};
