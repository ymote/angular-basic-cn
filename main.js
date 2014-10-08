var myApp = angular.module('myApp', []);

myApp.controller("AppCtrl", function($scope,$q) {

  $scope.messages = [];

  var Person = function(name,$scope) {

    this.name = name;

    this.eat = function(food) {
      $scope.messages.push(name + "正在享用美味的食物" + food);
    };

    this.hungry = function(reason){
      $scope.messages.push(name + "因为" + reason + "所以正在挨饿");
    };

  };

  var Restaurant = function ($q, $scope) {
    
    var currentOrder;
   
    this.takeOrder = function (person, order) {
      currentOrder = {
        deferred : $q.defer(),
        item : order
      };
      $scope.messages.push(person.name+"晚饭要点外卖"+order);
      return currentOrder.deferred.promise;
    };

    this.deliverOrder = function(diliverTime) {
      currentOrder.deferred.resolve(currentOrder.item);
      $scope.messages.push(diliverTime+"后，外卖送到了。");
    };

    this.problemWithOrder = function(reason) {
      currentOrder.deferred.reject(reason);
      $scope.messages.push("外卖取消了，原因是"+reason);
    };

  };

  var lilei = new Person("李雷", $scope);

  var shangriLa = new Restaurant($q, $scope);

  var order = function(person,food){
    $scope.messages = [];
    var orderFood = shangriLa.takeOrder(person, food);
    orderFood.then(person.eat,person.hungry);      
  };
  
  $scope.eat = function(){
    order(lilei, "鱼香肉丝");
    shangriLa.deliverOrder("30 分钟");
  };

  $scope.notEat = function(){
    order(lilei, "鱼香肉丝");
    shangriLa.problemWithOrder("餐馆今天没开门");
  };

  $scope.xiju = function(){
    var person = new Person($scope.name, $scope);
    //完成吃到晚饭流程


  };

  $scope.beiju = function(){
    var person = new Person($scope.name, $scope);
    //完成挨饿流程    


  };

});
