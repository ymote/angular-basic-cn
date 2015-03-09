var myApp = angular.module('myApp', []);

myApp.controller("AppCtrl", function($scope) {
  $scope.number='13812345678';
  
  $scope.callContent = function(number, network, message) {
    alert("号码： " + number + " 运营商： "+ network + " 通话内容： " + message);
  }
});

myApp.directive("phone", function() {
  return {
    restrict: "E",
    scope: {
      number: "@",
      network: "=",
      makeCall: "&"
    },
    template: '<div class="panel panel-info"><div class="panel-heading">通话控制面板</div>'+
      '<div class="panel-body"><p>呼叫号码: {{number}}</p>'+
      '<p>我的运营商:<select ng-model="network" ng-options="net for net in networks"></select></p>' +
      '<p><input type="text" ng-model="value" class="form-control" placeholder="输入通话内容"></p>' +
      '<p><button class="btn btn-default" ng-click="makeCall({number: number, network:network, message: value})">拨打电话</button></p>'+
      '</div></div>',

    link: function(scope) {
      scope.networks = ["移动","联通"];
      scope.network = scope.networks[0]
    }
  }
});