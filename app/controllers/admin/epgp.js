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
        this.set('isProcessing', false);

        if(response.status >= 400) {
          return this.set('submitError', 'The API Key you entered is invalid');
        }

        Ember.get(this, 'flashMessages').success('Success!');
      });
    }
  }
});
