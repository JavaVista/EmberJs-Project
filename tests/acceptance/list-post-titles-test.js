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
    await visit('/');
    await click(".menu-about");
    assert.equal(currentURL(), '/about', 'should navigate to about me');
  });

  test('should list post TEST titles', async function(assert) {
    await visit('/');
    assert.equal(this.element.querySelectorAll('.listing').length, 3, 'should display 3 listings');
  });

  test('should show more details for list of post titles', async function(assert) {
    
  });

});
