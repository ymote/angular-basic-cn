'use strict';

/* jasmine specs for controllers go here */
describe('Angular controllers', function() {

  describe('MainCtrl', function(){
    beforeEach(module('myApp'));

    var scope, ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('MainCtrl', {$scope: scope});
    }));

    it('scope.data should have three attributes -- character: Superheroic, language: Javascript, acronym: MVW', function() {
      expect(scope.data.character).toEqual('Superheroic');
      expect(scope.data.language).toEqual('Javascript');
      expect(scope.data.acronym).toEqual('MVW');
    });
  });

});
