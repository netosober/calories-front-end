import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    update: function() {
      var self = this;
      var meal = this.get('model');
      meal.save().then(function() {
        self.transitionTo('meals');
      });
    },
    cancel: function() {
      this.get('model').rollback();
      this.transitionTo('meals');
    }
  }
});
