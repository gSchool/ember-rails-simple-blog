import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    deleteComment: function(model){
      model.destroyRecord().then(function(){

      });
    }
  }
});
