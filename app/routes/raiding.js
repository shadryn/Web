import Ember from 'ember';
import fetch from 'ember-network/fetch';
import { API_PATH, API_MEMBERS_PATH } from '../const';

export default Ember.Route.extend({

  model() {
    return fetch(API_PATH + API_MEMBERS_PATH)
      .then((response) => { return response.json(); }); /*
      .then((members) => {

        let transformed = [];
        members.forEach((member) => {
          transformed.push({
            id: member._id,
            type: 'member',
            attributes: {
              name: member.name
            },
            relationships: []
          });
        });

        console.dir(transformed);

        this.get('store').push({data: transformed});

        console.dir(this.get('store').findAll('member'));
      }); */
  }
});
