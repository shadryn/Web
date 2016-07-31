import Ember from 'ember';
import config from './config/environment';
import ResetScrollMixin from 'ember-cli-reset-scroll';
import googlePageview from './mixins/google-pageview';

const Router = Ember.Router.extend(ResetScrollMixin, googlePageview, {
  location: config.locationType,
  resetScroll: undefined
});

/* Router.extend(googlePageview, {
  location: config.locationType
}); */

Router.map(function() {
  this.route('raiding', function() {
    this.route('roster');
    this.route('loot');
    this.route('loot', { path: 'loot/:raidDate' });
    this.route('progress');
  });
  this.route('join');
  this.route('social');
  this.route('admin', function() {
    this.route('epgp');
  });
});

export default Router;
