import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('post');
  },
  actions: {
    createPost: function(model) {
      // var model = this.modelFor('posts/new')
      var _this = this;
      model.save().then(function(){
        _this.transitionTo('posts.show', model)
      })
    }
  }
});
