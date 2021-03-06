import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function(params) {
    return this.store.find('meal', params.meal_id);
  },
  actions: {
    willTransition: function() {
      this.controller.get('model').rollback();
    }
  }
});
