import Ember from 'ember';
import fetch from 'ember-network/fetch';
import { API_PATH, API_EPGP_LOOT_PATH } from '../../const';

export default Ember.Route.extend({
  transitionTarget: '',
  raidDate: 'latest',

  model(params) {
    if (params.raidDate) {
      return fetch(`${API_PATH}${API_EPGP_LOOT_PATH}/${params.raidDate}`)
        .then((response) => { return response.json(); });
    }
  },

  redirect(model, transition) {
    if (!transition.params['raiding.loot'].raidDate) {
      this.transitionTo('raiding.loot', this.get('raidDate'));
    }
  }
});
