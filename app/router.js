import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('raiding');
  this.route('join');
  this.route('social');
});

export default Router;
