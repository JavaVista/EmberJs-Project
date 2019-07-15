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

    assert.equal(currentURL(), '/post', 'should redirect automatically to the list of post title');
  });

  test('should link to information about me', async function(assert) {
    await visit('/');
    await click(".menu-about");
    assert.equal(currentURL(), '/about', 'should navigate to about me');
  });

  test('should list post titles', async function(assert) {
    await visit('/');
    assert.equal(this.element.querySelectorAll('.listing').length, 100, 'should display 3 listings');
  });

  test('should show more details for list of post titles', async function(assert) {
/*     TODO: Example test
    await visit('/rentals');
    await click(".grand-old-mansion");
    assert.equal(currentURL(), '/rentals/grand-old-mansion', 'should navigate to show route');
    assert.ok(this.element.querySelector('.show-listing h2').textContent.includes('Grand Old Mansion'), 'should list rental title');
    assert.ok(this.element.querySelector('.show-listing .description'), 'should list a description of the property'); */
  });

});
