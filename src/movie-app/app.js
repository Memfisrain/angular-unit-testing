angular.module("movieApp", ['ui.bootstrap', 'ngRoute', 'omdb', 'movieCore'])
	.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'movie-app/home.html',
				controller: 'homeController'
			})
			.when('/results', {
				templateUrl: 'movie-app/results.html',
				controller: 'resultsController'
			})
			.otherwise({
				redirectTo: '/'
			});
	});