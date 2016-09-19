angular.module("movieApp")
	.controller('homeController', ['$scope', '$interval', 'omdbApi', 'PopularMovies', function($scope, $interval, omdbApi, PopularMovies) {
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

		console.dir(PopularMovies);

		//$scope.result = results[0];

		function findMovie(id) {
			omdbApi.find(id)
				.then(function(movie) {
					$scope.result = movie;
				});
		}

		/*PopularMovies
			.get()
			.then(function(results) {*/
				findMovie(results[0].imdbID);

				var i = 1;

				$interval(function() {
					findMovie(results[i++ % results.length].imdbID);
				}, 5000);
			/*});*/
	}])