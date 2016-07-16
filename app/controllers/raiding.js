import Ember from 'ember';

export default Ember.Controller.extend({
  tabsSelection: 'roster',

  tabChange: function() {
    this.transitionToRoute('raiding.' + this.tabsSelection);
  }.observes('tabsSelection')
});
