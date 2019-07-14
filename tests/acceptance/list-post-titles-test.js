import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | list post titles', function(hooks) {
  setupApplicationTest(hooks);

  test('should show home page = /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  });
});
