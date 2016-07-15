import Ember from 'ember';
import fetch from 'ember-network/fetch';

export default Ember.Route.extend({
  model() {
    return fetch('https://api.github.com/users/jsmylnycky')
      .then(function(response) {
        return response.json();
      });
  }
});
