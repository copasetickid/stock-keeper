import { moduleForModel, test } from 'ember-qunit';

moduleForModel('store', 'Unit | Model | store', {
  // Specify the other units that are required for this test.
  needs: ['model:user', 'model:stock-item']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
