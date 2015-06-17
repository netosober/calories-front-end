import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('meals', function() {
    this.resource('meal', { path: '/:meal_id' });
  });
});

export default Router;
