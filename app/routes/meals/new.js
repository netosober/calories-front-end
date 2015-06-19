import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return this.store.createRecord('meal');
  },
  actions: {
    willTransition: function() {
      this.controller.get('model').rollback();
    }
  }
});
