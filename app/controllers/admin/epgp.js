import Ember from 'ember';
import fetch from 'ember-network/fetch';
import { API_PATH, API_EPGP_UPLOAD_PATH } from '../../const';

export default Ember.Controller.extend({
  isProcessing: false,
  submitError: false,

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
        this.set('isProcessing', false);

        if(response.status >= 400) {
          Ember.get(this, 'flashMessages').alert('The API Key you entered is invalid');
          return this.set('submitError', 'The API Key you entered is invalid');
        }

        Ember.get(this, 'flashMessages').success('Success!', {sticky: true});
      });
    }
  }
});
