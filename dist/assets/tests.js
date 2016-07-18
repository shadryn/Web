define('nobreaks/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('nobreaks/tests/components/flash-messages.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/flash-messages.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/flash-messages.js should pass jshint.');
  });
});
define('nobreaks/tests/const.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | const.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'const.js should pass jshint.');
  });
});
define('nobreaks/tests/controllers/admin.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/admin.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/admin.js should pass jshint.');
  });
});
define('nobreaks/tests/controllers/admin/epgp.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/admin/epgp.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/admin/epgp.js should pass jshint.');
  });
});
define('nobreaks/tests/controllers/raiding.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/raiding.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/raiding.js should pass jshint.');
  });
});
define('nobreaks/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('nobreaks/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('nobreaks/tests/helpers/ember-keyboard/register-test-helpers', ['exports', 'ember', 'ember-keyboard'], function (exports, _ember, _emberKeyboard) {

  var keyEvent = function keyEvent(app, attributes, type) {
    var event = attributes.split('+').reduce(function (event, attribute) {
      if (['ctrl', 'meta', 'alt', 'shift'].indexOf(attribute) > -1) {
        event[attribute + 'Key'] = true;
      } else {
        event.keyCode = (0, _emberKeyboard.getKeyCode)(attribute);
      }

      return event;
    }, {});

    return app.testHelpers.triggerEvent(document, type, event);
  };

  exports['default'] = function () {
    _ember['default'].Test.registerAsyncHelper('keyDown', function (app, attributes) {
      return keyEvent(app, attributes, 'keydown');
    });

    _ember['default'].Test.registerAsyncHelper('keyUp', function (app, attributes) {
      return keyEvent(app, attributes, 'keyup');
    });

    _ember['default'].Test.registerAsyncHelper('keyPress', function (app, attributes) {
      return keyEvent(app, attributes, 'keypress');
    });
  };
});
define('nobreaks/tests/helpers/epgp-total.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/epgp-total.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/epgp-total.js should pass jshint.');
  });
});
define('nobreaks/tests/helpers/flash-message', ['exports', 'ember', 'ember-cli-flash/flash/object'], function (exports, _ember, _emberCliFlashFlashObject) {
  var K = _ember['default'].K;

  _emberCliFlashFlashObject['default'].reopen({ init: K });
});
define('nobreaks/tests/helpers/flash-message.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/flash-message.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/flash-message.js should pass jshint.');
  });
});
define('nobreaks/tests/helpers/index-to-class.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/index-to-class.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/index-to-class.js should pass jshint.');
  });
});
define('nobreaks/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'nobreaks/tests/helpers/start-app', 'nobreaks/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _nobreaksTestsHelpersStartApp, _nobreaksTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _nobreaksTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _nobreaksTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('nobreaks/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('nobreaks/tests/helpers/resolver', ['exports', 'nobreaks/resolver', 'nobreaks/config/environment'], function (exports, _nobreaksResolver, _nobreaksConfigEnvironment) {

  var resolver = _nobreaksResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _nobreaksConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _nobreaksConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('nobreaks/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('nobreaks/tests/helpers/start-app', ['exports', 'ember', 'nobreaks/app', 'nobreaks/config/environment'], function (exports, _ember, _nobreaksApp, _nobreaksConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _nobreaksConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _nobreaksApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('nobreaks/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('nobreaks/tests/models/member.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/member.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/member.js should pass jshint.');
  });
});
define('nobreaks/tests/models/roster.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/roster.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/roster.js should pass jshint.');
  });
});
define('nobreaks/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('nobreaks/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('nobreaks/tests/routes/admin.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/admin.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/admin.js should pass jshint.');
  });
});
define('nobreaks/tests/routes/admin/epgp.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/admin/epgp.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/admin/epgp.js should pass jshint.');
  });
});
define('nobreaks/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass jshint.');
  });
});
define('nobreaks/tests/routes/join.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/join.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/join.js should pass jshint.');
  });
});
define('nobreaks/tests/routes/raiding.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/raiding.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/raiding.js should pass jshint.');
  });
});
define('nobreaks/tests/routes/raiding/loot.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/raiding/loot.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/raiding/loot.js should pass jshint.');
  });
});
define('nobreaks/tests/routes/raiding/progress.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/raiding/progress.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/raiding/progress.js should pass jshint.');
  });
});
define('nobreaks/tests/routes/raiding/roster.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/raiding/roster.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/raiding/roster.js should pass jshint.');
  });
});
define('nobreaks/tests/routes/social.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/social.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/social.js should pass jshint.');
  });
});
define('nobreaks/tests/test-helper', ['exports', 'nobreaks/tests/helpers/resolver', 'nobreaks/tests/helpers/flash-message', 'ember-qunit'], function (exports, _nobreaksTestsHelpersResolver, _nobreaksTestsHelpersFlashMessage, _emberQunit) {

  (0, _emberQunit.setResolver)(_nobreaksTestsHelpersResolver['default']);
});
define('nobreaks/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('nobreaks/tests/unit/controllers/raiding-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:raiding', 'Unit | Controller | raiding', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('nobreaks/tests/unit/controllers/raiding-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/raiding-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/raiding-test.js should pass jshint.');
  });
});
define('nobreaks/tests/unit/helpers/epgp-total-test', ['exports', 'nobreaks/helpers/epgp-total', 'qunit'], function (exports, _nobreaksHelpersEpgpTotal, _qunit) {

  (0, _qunit.module)('Unit | Helper | epgp total');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _nobreaksHelpersEpgpTotal.epgpTotal)([42]);
    assert.ok(result);
  });
});
define('nobreaks/tests/unit/helpers/epgp-total-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/helpers/epgp-total-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/epgp-total-test.js should pass jshint.');
  });
});
define('nobreaks/tests/unit/helpers/index-to-class-test', ['exports', 'nobreaks/helpers/index-to-class', 'qunit'], function (exports, _nobreaksHelpersIndexToClass, _qunit) {

  (0, _qunit.module)('Unit | Helper | index to class');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _nobreaksHelpersIndexToClass.indexToClass)([42]);
    assert.ok(result);
  });
});
define('nobreaks/tests/unit/helpers/index-to-class-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/helpers/index-to-class-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/index-to-class-test.js should pass jshint.');
  });
});
define('nobreaks/tests/unit/routes/admin-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:admin', 'Unit | Route | admin', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('nobreaks/tests/unit/routes/admin-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/admin-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/admin-test.js should pass jshint.');
  });
});
define('nobreaks/tests/unit/routes/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('nobreaks/tests/unit/routes/index-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass jshint.');
  });
});
define('nobreaks/tests/unit/routes/join-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:join', 'Unit | Route | join', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('nobreaks/tests/unit/routes/join-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/join-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/join-test.js should pass jshint.');
  });
});
define('nobreaks/tests/unit/routes/raiding-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:raiding', 'Unit | Route | raiding', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('nobreaks/tests/unit/routes/raiding-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/raiding-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/raiding-test.js should pass jshint.');
  });
});
define('nobreaks/tests/unit/routes/social-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:social', 'Unit | Route | social', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('nobreaks/tests/unit/routes/social-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/social-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/social-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('nobreaks/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map