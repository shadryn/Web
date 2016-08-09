import Ember from 'ember';
import fetch from 'ember-network/fetch';
import { API_PATH, API_EPGP_UPLOAD_PATH } from '../../const';

export default Ember.Controller.extend({
  epgpData: '',
  isProcessing: false,
  submitError: false,

  init: function() {

  },

  actions: {
    submit: function() {
      this.setProperties({
        isProcessing: true,
        submitError: false
      });

      fetch(API_PATH + API_EPGP_UPLOAD_PATH, {
        method: 'post',
        headers: {
          'Authorization': this.get('apiKey'),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          epgpData: this.get('epgpData')
        })
      })
      .then((response) => {
        if (response.status >= 400) {
          return response.json().then(Ember.RSVP.reject.bind(Ember.RSVP));
        }

        return response.json();
      })
      .then(() => {
        this.set('isProcessing', false);
        Ember.get(this, 'flashMessages').success('Success!');
      })
      .catch((response) => {
        this.set('isProcessing', false);
        this.set('submitError', response.error.message);
      });
    }
  }
});
