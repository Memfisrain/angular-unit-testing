angular.module("movieApp")
	.controller('homeController', ['$scope', '$interval', function($scope, $interval) {
		var results = [
			{
				Title: "Star Wars: Episode IV - A New Hope",
				imdbID:"tt0076759"
			},
			{
				Title: "Star Wars: Episode V - The Empire Strikes Back",
				imdbID:"tt0080684"
			}
		];

		$scope.result = results[0];
		var i = 1;

		var interval = $interval(function() {
			$scope.result = results[i++ % results.length];
		}, 5000);
	}])