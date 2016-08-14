define('jackalope/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('jackalope/tests/const.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | const.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'const.js should pass jshint.');
  });
});
define('jackalope/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('jackalope/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('jackalope/tests/helpers/ember-keyboard/register-test-helpers', ['exports', 'ember', 'ember-keyboard'], function (exports, _ember, _emberKeyboard) {

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
define('jackalope/tests/helpers/flash-message', ['exports', 'ember', 'ember-cli-flash/flash/object'], function (exports, _ember, _emberCliFlashFlashObject) {
  var K = _ember['default'].K;

  _emberCliFlashFlashObject['default'].reopen({ init: K });
});
define('jackalope/tests/helpers/flash-message.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/flash-message.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/flash-message.js should pass jshint.');
  });
});
define('jackalope/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'jackalope/tests/helpers/start-app', 'jackalope/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _jackalopeTestsHelpersStartApp, _jackalopeTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _jackalopeTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _jackalopeTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('jackalope/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('jackalope/tests/helpers/resolver', ['exports', 'jackalope/resolver', 'jackalope/config/environment'], function (exports, _jackalopeResolver, _jackalopeConfigEnvironment) {

  var resolver = _jackalopeResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _jackalopeConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _jackalopeConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('jackalope/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('jackalope/tests/helpers/start-app', ['exports', 'ember', 'jackalope/app', 'jackalope/config/environment'], function (exports, _ember, _jackalopeApp, _jackalopeConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _jackalopeConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _jackalopeApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('jackalope/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('jackalope/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('jackalope/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('jackalope/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass jshint.');
  });
});
define('jackalope/tests/routes/social.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/social.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/social.js should pass jshint.');
  });
});
define('jackalope/tests/test-helper', ['exports', 'jackalope/tests/helpers/resolver', 'jackalope/tests/helpers/flash-message', 'ember-qunit'], function (exports, _jackalopeTestsHelpersResolver, _jackalopeTestsHelpersFlashMessage, _emberQunit) {

  (0, _emberQunit.setResolver)(_jackalopeTestsHelpersResolver['default']);
});
define('jackalope/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('jackalope/tests/unit/controllers/raiding-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

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
define('jackalope/tests/unit/controllers/raiding-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/raiding-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/raiding-test.js should pass jshint.');
  });
});
define('jackalope/tests/unit/helpers/epgp-total-test', ['exports', 'nobreaks/helpers/epgp-total', 'qunit'], function (exports, _nobreaksHelpersEpgpTotal, _qunit) {

  (0, _qunit.module)('Unit | Helper | epgp total');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _nobreaksHelpersEpgpTotal.epgpTotal)([42]);
    assert.ok(result);
  });
});
define('jackalope/tests/unit/helpers/epgp-total-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/helpers/epgp-total-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/epgp-total-test.js should pass jshint.');
  });
});
define('jackalope/tests/unit/helpers/index-to-class-test', ['exports', 'nobreaks/helpers/index-to-class', 'qunit'], function (exports, _nobreaksHelpersIndexToClass, _qunit) {

  (0, _qunit.module)('Unit | Helper | index to class');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _nobreaksHelpersIndexToClass.indexToClass)([42]);
    assert.ok(result);
  });
});
define('jackalope/tests/unit/helpers/index-to-class-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/helpers/index-to-class-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/index-to-class-test.js should pass jshint.');
  });
});
define('jackalope/tests/unit/routes/admin-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:admin', 'Unit | Route | admin', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('jackalope/tests/unit/routes/admin-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/admin-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/admin-test.js should pass jshint.');
  });
});
define('jackalope/tests/unit/routes/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('jackalope/tests/unit/routes/index-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass jshint.');
  });
});
define('jackalope/tests/unit/routes/join-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:join', 'Unit | Route | join', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('jackalope/tests/unit/routes/join-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/join-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/join-test.js should pass jshint.');
  });
});
define('jackalope/tests/unit/routes/raiding-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:raiding', 'Unit | Route | raiding', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('jackalope/tests/unit/routes/raiding-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/raiding-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/raiding-test.js should pass jshint.');
  });
});
define('jackalope/tests/unit/routes/social-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:social', 'Unit | Route | social', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('jackalope/tests/unit/routes/social-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/social-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/social-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('jackalope/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map