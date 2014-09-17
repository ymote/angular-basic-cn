var myApp = angular.module('myApp', []);

myApp.factory('DataStore', function() {
  var dataToShare = {
    message: "Use service to share data between controllers", 
    //todo
    todo: 'Learn AngularJS'
  };

  return dataToShare;
})

function FirstCtrl($scope, DataStore){

  $scope.message = DataStore.message;

  //add todo variable

}

function SecondCtrl($scope, DataStore){

  $scope.message = DataStore.message;

  //add todo variable

}