import Controller from '@ember/controller';
import { computed } from '@ember/object'
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Controller.extend({
  queryParams: ["page", "perPage"],
  page: 1,
  perPage: 10,

  pagedContent: pagedArray('model', {
    page:computed.alias("parent.page"),
    perPage: computed.alias("parent.perPage")
  }),

  totalPages: computed.oneWay("pagedContent.totalPages")
});