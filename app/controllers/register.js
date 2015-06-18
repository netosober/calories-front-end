import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    register: function() {
      var self = this;
      var user = this.store.createRecord('user', {
        email: this.get('email'),
        password: this.get('password')
      });
      user.save().then(function() {
        self.transitionTo('login');
      });
    }
  }
});
