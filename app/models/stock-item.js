import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  price: DS.attr('number'),
  availableDate: DS.attr('date'),
  taxable: DS.attr('boolean')
});
