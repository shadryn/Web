import Ember from 'ember';

export default Ember.Controller.extend({
  tabsSelection: 'raiding.roster',

  tabChange: function() {
    this.transitionToRoute(this.tabsSelection);
  }.observes('tabsSelection')
});
