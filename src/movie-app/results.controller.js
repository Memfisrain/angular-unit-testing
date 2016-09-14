angular.module("movieApp")
  .controller("resultsController", function($scope, $location, omdbApi) {
    var query = $location.search().q;
    $scope.results = [];

    omdbApi.search(query)
      .then(function (data) {
        console.log(data);
        $scope.results = data.Search;
      })
      .catch(function(err) {
        $scope.errorMessage = err.message;
      })
  });