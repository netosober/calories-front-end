import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('meals', { path: '/meals' }, function() {
    this.route('edit', { path: '/:meal_id' });
    this.route('new', { path: '/new' });
  });
  this.route('login');
  this.route('register');
  this.route('profile');
});

export default Router;
