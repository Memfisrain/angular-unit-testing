describe('Home controller', function() {
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

	var resultsIds = results.map(function(v) {
		return v.imdbID;
	});

	var $scope;
	var $interval;
	var $controller;

	beforeEach(module('movieApp'));

	beforeEach(inject(function(_$q_, _PopularMovies_) {
		spyOn(_PopularMovies_, 'get').and.callFake(function(cb) {
			cb(resultsIds)
		});
	}));

	beforeEach(inject(function(_$q_, _omdbApi_) {
		spyOn(_omdbApi_, 'find').and.callFake(function() {
			var defered = _$q_.defer();
			var args = _omdbApi_.find.calls.mostRecent().args[0];

			if (resultsIds.indexOf(args) !== -1) {

				results.forEach(function(res, i) {
					if (res.imdbID === args) {
						defered.resolve(res);
					}
				});

			} else {
				defered.reject();
			}

			return defered.promise;
		})
	}));

	beforeEach(inject(function(_$controller_, _$rootScope_, _$interval_, _omdbApi_, _PopularMovies_) {
		$scope = _$rootScope_.$new();
		$interval = _$interval_;

		_$controller_('homeController', {
			$scope: $scope,
			$interval: $interval,
			omdbApi: _omdbApi_,
			PopularMovies: _PopularMovies_
		});

		$scope.$digest();
	}));

	it('should rotate every 5 seconds', function() {
		expect($scope.result.Title).toBe(results[0].Title);
		// waiting for 5 seconds;
		$interval.flush(5000);
		expect($scope.result.Title).toBe(results[1].Title);
		$interval.flush(5000);
		expect($scope.result.Title).toBe(results[0].Title);
	})
});