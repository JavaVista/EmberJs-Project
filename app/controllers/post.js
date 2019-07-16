import Controller from '@ember/controller';
import pagedArray from 'ember-cli-pagination/computed/paged-array';


export default Controller.extend({
  // setup our query params
  queryParams: ["page", "perPage"],

  // set default values, can cause problems if left out
  // if value matches default, it won't display in the URL
  page: 1,
  perPage: 10,

  // can be called anything, I've called it pagedContent
  // remember to iterate over pagedContent in your template
  pagedContent: pagedArray('content', {
    page: Ember.computed.alias("parent.page"),
    perPage: Ember.computed.alias("parent.perPage")
  }),

  // binding the property on the paged array
  // to a property on the controller
  totalPages: Ember.computed.oneWay("pagedContent.totalPages")
});

/* import Controller from '@ember/controller';

export default Controller.extend({
});
 */