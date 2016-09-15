angular.module("movieApp")
  .controller("searchController", ['$scope', '$location', '$timeout', function ($scope, $location, $timeout) {
    var timeout;
    var _this = this;

    this.query = "";

    this.keyup = function() {
    	timeout = $timeout(function() {
    		_this.search();
    	}, 1000);
    };

    this.keydown = function() {
    	$timeout.cancel(timeout)
    };

    this.search = function() {
      if(this.query) {
        $location.url("/results?q=" + this.query);
      }
    }
  }]);