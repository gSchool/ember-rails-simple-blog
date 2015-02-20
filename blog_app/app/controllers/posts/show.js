import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deletePost: function(model){
      var _this = this;
      model.destroyRecord().then(function(){
        _this.transitionToRoute('posts.index')
      })
    }
  }
});
