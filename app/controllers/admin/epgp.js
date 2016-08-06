import Ember from 'ember';
import fetch from 'ember-network/fetch';
import moment from 'moment';
import { API_PATH, API_EPGP_UPLOAD_PATH } from '../../const';

export default Ember.Controller.extend({
  moment: Ember.inject.service(),
  raidDate: '',
  epgpData: '',
  isProcessing: false,
  submitError: false,

  init: function() {
    this.set('raidDate', moment());
  },

  actions: {
    changeDefaultFormat: function() {
      this.set('moment.defaultFormat', 'MM-DD-YYYY');
    },
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
          raidDate: moment(this.get('raidDate')).format('MM-DD-YYYY'),
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
