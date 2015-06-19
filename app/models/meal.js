import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  calories: DS.attr('number'),
  day: DS.attr('date'),
  hour: DS.attr('string')
});
