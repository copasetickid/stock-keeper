import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  accessToken: DS.attr('string'),
  stores: DS.hasMany('store')
});
