import Ember from 'ember';

export default Ember.Controller.extend({
  tabsSelection: 'epgp',

  tabChange: function() {
    this.transitionToRoute('admin.' + this.tabsSelection);
  }.observes('tabsSelection')
});
