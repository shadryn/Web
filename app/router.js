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
  this.route('social');
});

export default Router;
