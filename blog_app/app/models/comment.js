import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  body: DS.attr('string'),
  post: DS.belongsTo('post')
});
