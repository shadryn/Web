import Ember from 'ember';
//import fetch from 'ember-network/fetch';
//import { API_PATH, API_MEMBERS_PATH } from '../const';

export default Ember.Route.extend({
  transitionTarget: '',

  model() {
    /*return new Ember.RSVP.Promise((resolve) => {
      return Ember.RSVP.Promise.all([
        () => {*/
          //return new Ember.RSVP.Promise((resolve) => {
          //  fetch(API_PATH + API_MEMBERS_PATH).then((response) => { resolve(response.json()); });
          //});
  /*      }
      ], (data) => {
        console.log('data', data);

        resolve(data);
      });
    });*/
    /*return fetch(API_PATH + API_MEMBERS_PATH)
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
  },

  actions: {
    error(reason) {
      alert(reason); // "FAIL"

      // Can transition to another route here, e.g.
      // this.transitionTo('index');

      // Uncomment the line below to bubble this error event:
      // return true;
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
