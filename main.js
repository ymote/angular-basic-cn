var myApp = angular.module('myApp', []);

myApp.factory('DataStore', function() {
  var dataToShare = {
    message: "Use service to share data between controllers", 
    //todo
    todo: 'Learn AngularJS'
  };

  return dataToShare;
})

myApp.controller('FirstCtrl',function($scope, DataStore){

  $scope.message = DataStore.message;

  //add todo variable

});

myApp.controller('SecondCtrl', function($scope, DataStore){

  $scope.message = DataStore.message;

  //add todo variable

});