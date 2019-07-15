import DS from 'ember-data';
// Keeping the information from our host
export default DS.JSONAPIAdapter.extend({
    host: 'https://jsonplaceholder.typicode.com'
});
