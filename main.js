var myApp = angular.module('myApp', []);

myApp.directive('alert', function () {
  return {
    restrict:'EA',
    replace: true,
    template:
    '<div class="alert alert-{{type}}">' +
      '<button type="button" class="close" ng-click="close()">&times;</button>' +
      '<div ng-transclude></div>' +
    '</div>',
    transclude:true,
    scope:{
      type:'=',
      close:'&'
    }
  };
});

myApp.directive('panel', function(){
  return {
    restrict:'EA',
    replace: true,
    template:
    '<div class="panel panel-{{type}}">' +
      '<div class="panel-heading">{{title}}</div>' +
      '<div class="panel-body"><div ng-transclude></div></div>' +
    '</div>',
    transclude:true,
    scope:{
      type:'=',
      title: '=',
    }
  }
});

myApp.controller('AlertController', function ($scope) {
  $scope.alerts = [
    { type: 'danger', msg: '系统遇到错误，以下是详细的错误信息。。。' }, 
    { type: 'success', msg: '成功更新了您的资料' },
    { type: 'info', msg: 'info 这里是详细的填写说明。。。'},
    { type: 'warning', msg: '您的资料不完整，请仔细检查填写结果。'}
  ];

  $scope.addAlert = function() {
    var newAlert = angular.copy($scope.alerts[Math.floor(Math.random()*$scope.alerts.length)]);
    $scope.alerts.push(newAlert);
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };

  var panels = [
    { type: 'danger', title: '错误', content: '系统遇到错误，以下是详细的错误信息。。。' }, 
    { type: 'success', title: '成功', content: '成功更新了您的资料' },
    { type: 'info', title: '信息', content: 'info 这里是详细的填写说明。。。'},
    { type: 'warning', title: '警告' , content: '您的资料不完整，请仔细检查填写结果。'}
  ];

  $scope.randomPanel = function(){
    $scope.panel = panels[Math.floor(Math.random()*panels.length)];
  }

});