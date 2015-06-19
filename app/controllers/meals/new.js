import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    create: function() {
      var self = this;
      var meal = this.get('model');
      meal.save().then(function() {
        self.store.unloadRecord(meal);
        self.transitionTo('meals');
      });
    },
    cancel: function() {
      this.get('model').rollback();
      this.transitionTo('meals');
    }
  }
});
