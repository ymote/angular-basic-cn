angular.module('myApp', [])

.controller('MainCtrl',function($scope){

  $scope.data = { greeting: "Hello" };

  //change the character
  $scope.data.character='Supersonic';
  
  //language and acronym are missing, please help write them
  //language
 $scope.data.language='Javascript '
  //acronym
 $scope.data.acronym = 'MVC'
});
