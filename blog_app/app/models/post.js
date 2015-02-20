import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  link: DS.attr('string'),
  username: DS.attr('string'),
  description: DS.attr('string'),
  comments: DS.hasMany('comment')
});
