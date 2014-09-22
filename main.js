var myApp = angular.module('myApp', []);

myApp.directive('button', function() {
  return {
    restrict: 'E',
    //习题： 默认的按钮控件就有class="btn btn-primary"
    //习题： attributes.type 可以为default,info,success,warning,danger,primary,根据type用css修饰按钮
    compile: function(element, attributes) {
      element.addClass('btn');
      if ( attributes.type === 'submit' ) {
        element.addClass('btn-primary');
      }
      if ( attributes.size ) {
        element.addClass('btn-' + attributes.size);
      }
    }
  };
});
