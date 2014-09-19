var myApp = angular.module('myApp', []);

myApp.directive("helloworld", function(){
  return {
    restrict: 'E',
    template: '<h2>指令(directive)是Angular中最强大的部分</h2>'
  }
});
