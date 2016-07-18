import Ember from 'ember';
import config from './config/environment';
import ResetScrollMixin from 'ember-cli-reset-scroll';

const Router = Ember.Router.extend(ResetScrollMixin, {
  location: config.locationType,
  resetScroll: undefined
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
