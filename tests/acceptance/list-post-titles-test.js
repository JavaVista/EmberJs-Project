import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | list post titles', function(hooks) {
  setupApplicationTest(hooks);

  test('should show home page = /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  });

  test('should show list of post titles on the home page', async function(assert) {
    
  });

  test('should link to information about me', async function(assert) {
    
  });

  test('should list post titles', async function(assert) {
    
  });

  test('should show more details for list of post titles', async function(assert) {
    
  });

});
