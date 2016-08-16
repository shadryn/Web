import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    Ember.run.scheduleOnce('afterRender', this, () => {
      $('.materialboxed').materialbox();
    });
  }
});
