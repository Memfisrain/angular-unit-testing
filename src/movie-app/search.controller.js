angular.module("movieApp", [])
  .controller("searchController", ['$scope', '$location', function ($scope, $location) {
    this.query = "";

    this.search = function() {
      if(this.query) {
        $location.url("/results?q=" + this.query);
      }
    }
  }]);