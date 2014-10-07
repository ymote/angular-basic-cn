var myApp = angular.module('myApp', []);

myApp.factory('Avengers', function() {
    var Avengers = {};
    Avengers.cast = [
      {
        name: "Robert Downey Jr.",
        character: "Tony Stark / Iron Man"
      },
      {
        name: "Chris Evans",
        character: "Steve Rogers / Captain America"
      },
      {
        name: "Mark Ruffalo",
        character: "Bruce Banner / The Hulk"
      },
      {
        name: "Chris Hemsworth",
        character: "Thor"
      },
      {
        name: "Scarlett Johansson",
        character: "Natasha Romanoff / Black Widow"
      },
      {
        name: "Jeremy Renner",
        character: "Clint Barton / Hawkeye"
      },
      {
        name: "Tom Hiddleston",
        character: "Loki"
      }
    ];
    return Avengers;
})

function SuperherosCtrl($scope, Avengers) {
    $scope.avengers = Avengers;

    //完成该方法，将选中的actor值附到$scope上，并在页面上显示出来
    $scope.select = function(actor){


    };
}