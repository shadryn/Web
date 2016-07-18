import Ember from 'ember';
import fetch from 'ember-network/fetch';
import { API_PATH, API_MEMBERS_PATH } from '../../const';

export default Ember.Route.extend({

  model() {
    return fetch(API_PATH + API_MEMBERS_PATH)
      .then((response) => { return response.json(); });
  }
});
