'use strict';

/* jasmine specs for controllers go here */
describe('Test Share Data betwwen Controllers using Service', function() {

  describe('Controller FirstCtrl', function(){
    beforeEach(module('myApp'));

    var scope, ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('FirstCtrl', {$scope: scope});
    }));

    it('should have scope varialbe todo, and its value should be \'Learn AngularJS\'', function() {
      expect(scope.todo).toEqual('Learn AngularJS');
    });
  });

  describe('Controller SecondCtrl', function(){
    beforeEach(module('myApp'));

    var scope, ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('SecondCtrl', {$scope: scope});
    }));

    it('should also have scope variable todo,  and its value should also be \'Learn AngularJS\'', function() {
      expect(scope.todo).toEqual('Learn AngularJS');
    });
  });

});