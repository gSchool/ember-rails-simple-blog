import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    editComment: function(model){
      var _this = this;
      model.save().then(function(){
        _this.transitionTo('comments.index')
      });
    }
  }
});
