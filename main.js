var myApp = angular.module('myApp', []);

myApp.directive('pagination', function() {
  return {
    restrict: 'E',
    
    scope: {
      numPages: '=',
      currentPage: '=',
      onSelectPage: '&'
    },

    //习题：previous 改为 &laquo; 以及 next 改为 &raquo;
    template:
      '<div class="col-xs-offset-2"><ul class="pagination">' +
        '<li ng-class="{disabled: noPrevious()}"><a ng-click="selectPrevious()">previous</a></li>' +
        '<li ng-repeat="page in pages" ng-class="{active: isActive(page)}"><a ng-click="selectPage(page)">{{page}}</a></li>' +
        '<li ng-class="{disabled: noNext()}"><a ng-click="selectNext()">next</a></li>' +
        '</ul>' +
      '</div>',

    replace: true,

    //习题：增加跳到首页以及跳到尾页的方法
    link: function(scope) {

      scope.$watch('numPages', function(value) {
        scope.pages = [];
        for(var i=1;i<=value;i++) {
          scope.pages.push(i);
        }
        if ( scope.currentPage > value ) {
          scope.selectPage(value);
        }
      });

      scope.noPrevious = function() {
        return scope.currentPage === 1;
      };

      scope.noNext = function() {
        return scope.currentPage === scope.numPages;
      };

      scope.isActive = function(page) {
        return scope.currentPage === page;
      };

      scope.selectPage = function(page) {
        if ( ! scope.isActive(page) ) {
          scope.currentPage = page;
          scope.onSelectPage({ page: page });
        }
      };

      scope.selectPrevious = function() {
        if ( !scope.noPrevious() ) {
          scope.selectPage(scope.currentPage-1);
        }
      };

      scope.selectNext = function() {
        if ( !scope.noNext() ) {
          scope.selectPage(scope.currentPage+1);
        }
      };
    }
  };
});
