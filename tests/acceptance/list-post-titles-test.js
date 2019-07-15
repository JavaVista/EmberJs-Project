import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import {
  click,
  currentURL,
  visit
} from '@ember/test-helpers';

module('Acceptance | list post titles', function(hooks) {
  setupApplicationTest(hooks);

  test('should show list of post titles on the home page', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/list', 'should redirect automatically to the list of post title');
  });

  test('should link to information about me', async function(assert) {
    
  });

  test('should list post titles', async function(assert) {
    
  });

  test('should show more details for list of post titles', async function(assert) {
    
  });

});
