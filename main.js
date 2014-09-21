var myApp = angular.module('myApp', []);

myApp.controller("AppCtrl", function($scope,$q) {

  //习题，创建$scope.food变量保存food
  $scope.eat = function(food){
    var deferred = $q.defer();
    var promise = deferred.promise;

    //习题，将结果通过$scope显示在页面上
    promise.then(function(food){
      alert("今天晚饭的食物是"+food);
    }, function(reason){
      alert(reason);
    });

    if(!food){
      deferred.reject("今晚不吃饭，要减肥。");
    } 
    else {
      deferred.resolve(food);
    }  
  };

});
