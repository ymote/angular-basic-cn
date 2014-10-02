var myApp = angular.module('myApp', []);

myApp.factory('DataStore', function() {
  var dataToShare = {
    message: "rats live on no evil star", 
  };

  var setMessage = function(message){
    dataToShare.message = message;
  };

  var getMessage = function(){
    return dataToShare.message;
  }

  return {
    'getMessage': getMessage,
    'setMessage': setMessage,
  } 
})

function FirstCtrl($scope, DataStore){

  $scope.message = DataStore.getMessage();

  $scope.saveMessage = function(){
    //调用工厂中setMessage方法来保存更新的message

  };

}

function SecondCtrl($scope, DataStore){

  $scope.message = DataStore.getMessage();

  $scope.reversedMessage = function(message) {
    return message.split("").reverse().join("");
  };

  $scope.fetchMessage = function(){
    //调用工厂中getMessage方法来获取更新过的message

  };

}