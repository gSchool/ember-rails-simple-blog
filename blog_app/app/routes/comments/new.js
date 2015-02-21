import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var post = this.modelFor('posts/show')
    return this.store.createRecord('comment', {post: post});
  }
});
