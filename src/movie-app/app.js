angular.module("movieApp", ['ui.bootstrap', 'ngRoute', 'omdb', 'movieCore', 'ngMockE2E'])
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
	})
	.run(function($httpBackend) {
		var results = ['tt0076759','tt0080684','tt0086190'];
		var headers = {
			headers: {'Content-Type': 'application/json'}
		};

		$httpBackend.whenGET(function(s) {
			return s.indexOf('popular') !== -1;
		}).respond(200, results, headers);

		$httpBackend.whenGET(/.*/).passThrough();
	})