import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    post: DS.hasMany('post'),

    username: DS.attr('string'),
    name: DS.attr('string'),
    email: DS.attr('string'),
    phone: DS.attr('string'),
    website: DS.attr('string'),
    address: DS.attr(),
    company: DS.attr()
});
