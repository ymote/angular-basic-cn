angular.module('myApp', [])

.controller('MainCtrl',function($scope){

  $scope.data = { greeting: "Hello" };

  //change the character
  $scope.data.character='Welcome to the ';
  
  //language and acronym are missing, please help write them
  //language
 $scope.data.language='Javascript '
  //acronym
 $scope.data.acronym = 'MVC'
});
