'use strict';

/* jasmine specs for controllers go here */
describe('Angular controllers', function() {

  describe('FirstCtrl', function(){
    beforeEach(module('myApp'));

    var scope, ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('FirstCtrl', {$scope: scope});
    }));

    it('should has right scope data', function() {
      expect(scope.todo).toEqual('Learn AngularJS');
    });
  });

  describe('SecondCtrl', function(){
    beforeEach(module('myApp'));

    var scope, ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('SecondCtrl', {$scope: scope});
    }));

    it('should has right scope data', function() {
      expect(scope.todo).toEqual('Learn AngularJS');
    });
  });

});