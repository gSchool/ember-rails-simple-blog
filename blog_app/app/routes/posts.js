import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function(model){
      var _this = this;
      model.save().then(function(){
        _this.transitionTo('posts.show', model)
      });
    }
  }
});
