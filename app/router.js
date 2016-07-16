import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('raiding', function() {
    this.route('roster');
    this.route('loot');
    this.route('progress');
  });
  this.route('join');
  this.route('social');
  this.route('admin', function() {
    this.route('epgp');
  });
});

export default Router;
