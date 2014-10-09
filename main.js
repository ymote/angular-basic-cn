var myApp = angular.module('myApp', []);

myApp.controller("AppCtrl", function($scope,$http) {
  var phones;

  $http.get('./phones.json').success(function(data) {
    phones = data;
    $scope.phones = data;
  });

  $scope.orderProp = 'age';

  //增加可以控制显示数量的函数
  //显示的数量为$socpe.number,在页面上可以输入
  $scope.$watch('number',function(){
    $scope.phones = phones.slice(0,parseInt($scope.number,10));
  })

});
