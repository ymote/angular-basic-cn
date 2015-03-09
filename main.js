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
    $scope.limit = 10;
    $scope.reverse = true;

    $scope.boxOfficeInUS = 220000000;
    $scope.boxOfficeInCN = 1400000000;

    $scope.rating = 8.234;

    var releaseDate = new Date("2012-05-04");
    $scope.release = releaseDate.getTime();
}