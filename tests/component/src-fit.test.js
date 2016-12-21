/* global assert, process, setup, suite, test */
var entityFactory = require('../helpers').entityFactory;
var componentName = 'src-fit';

suite(componentName, function () {
  setup(function (done) {
    var el = this.el = entityFactory();
    el.setAttribute(componentName, '');
    el.addEventListener('loaded', function () {
      var component = el.components[componentName];
      // Configure mock methods etc. 
      // component.getGamepadsByPrefix = function () { return component.getGamepadsByPrefixMockValue; };
      done();
    });
  });

  suite('image', function () {
    test.skip('fixed width, variable height', function () {
      var el = this.el;
      var component = el.components[componentName];

      // Create spies, set mocks, etc.
      // var addControllerAttributesSpy = this.sinon.spy(controllerComponent, 'addControllerAttributes');
      // var removeControllerAttributesSpy = this.sinon.spy(controllerComponent, 'removeControllerAttributes');
      // controllerComponent.getGamepadsByPrefixMockValue = false;
      // delete controllerComponent.controllerPresent;

      // do the check
      // controllerComponent.checkIfControllerPresent();

      // check assertions
      // assert.notOk(addControllerAttributesSpy.called);
      // assert.ok(removeControllerAttributesSpy.called);
      // assert.ok(controllerComponent.controllerPresent === false); // not undefined
    });

    test.skip('fixed height, variable width', function () {
      var el = this.el;
      var component = el.components[componentName];
    });

    test.skip('variable height, variable width', function () {
      var el = this.el;
      var component = el.components[componentName];
    });
  });

  suite('video', function () {
    test.skip('fixed width, variable height', function () {
      var el = this.el;
      var component = el.components[componentName];

      // Create spies, set mocks, etc.
      // var addControllerAttributesSpy = this.sinon.spy(controllerComponent, 'addControllerAttributes');
      // var removeControllerAttributesSpy = this.sinon.spy(controllerComponent, 'removeControllerAttributes');
      // controllerComponent.getGamepadsByPrefixMockValue = false;
      // delete controllerComponent.controllerPresent;

      // do the check
      // controllerComponent.checkIfControllerPresent();

      // check assertions
      // assert.notOk(addControllerAttributesSpy.called);
      // assert.ok(removeControllerAttributesSpy.called);
      // assert.ok(controllerComponent.controllerPresent === false); // not undefined
    });

    test.skip('fixed height, variable width', function () {
      var el = this.el;
      var component = el.components[componentName];
    });

    test.skip('variable height, variable width', function () {
      var el = this.el;
      var component = el.components[componentName];
    });
  });
});
