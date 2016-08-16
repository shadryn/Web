import Ember from 'ember';

export default Ember.Controller.extend({
  items: Ember.A([
    { url: 'assets/img/portfolio/menti-logo.jpg',
      description: 'Menti Logo'
    },
    { url: 'assets/img/portfolio/ab-permissions.png',
      description: 'App Builder permissions screen'
    },
    { url: 'assets/img/portfolio/ab-dashboard.png',
      description: 'App Builder dashboard'
    },
    { url: 'assets/img/portfolio/ab-create-platform.png',
      description: 'App Builder create platform screen'
    },
    { url: 'assets/img/portfolio/ab-create-platform2.png',
      description: 'App Builder create platform overview screen'
    }
  ])
});
