import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var post = this.modelFor('posts/show')
    return this.store.createRecord('comment', {post: post});
  },
  actions: {
    createComment: function(model){
      var _this = this;
      model.save().then(function(){
        _this.transitionTo('comments.index')
      });
    }
  }
});
