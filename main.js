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

//根据alert指令的例子完成panel指令
//template的内容在index.html中有说明
//注意scope传入type和title
myApp.directive('panel', function(){
  return {
    restrict:'EA',
    replace: true,
    template: 
      //完成template的内容的构建
      '',

 
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

  //随机在$scope.alerts中选择alert并加到$scope.alerts的末尾
  //双向绑定会自动更新页面
  $scope.addAlert = function() {


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

  //从panels中随机选择一个panel,并附值给$scope.panel
  $scope.randomPanel = function(){

  };

});