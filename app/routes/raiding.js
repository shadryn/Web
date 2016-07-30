import Ember from 'ember';
//import fetch from 'ember-network/fetch';
//import { API_PATH, API_MEMBERS_PATH } from '../const';

export default Ember.Route.extend({
  transitionTarget: '',

  model() {
  },

  actions: {
    error(reason) {
      alert(reason); // "FAIL"
    }
  },

  redirect(model, transition) {
    let target = (transition.targetName !== 'raiding.index') ? transition.targetName : 'raiding.roster';
    this.set('transitionTarget', target);
    this.transitionTo(target);
  },

  setupController(controller) {
    controller.set('tabsSelection', this.get('transitionTarget'));
  }
});
