import DS from 'ember-data';

const { String: { pluralize, underscore } } = Ember;

export default DS.JSONAPIAdapter.extend({
  namespace: '/api/v1',
  pathForType(type) {
    return pluralize(type);
  }
});
