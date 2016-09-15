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

	var $scope;
	var $interval;
	var $controller;

	beforeEach(module('movieApp'));

	beforeEach(inject(function(_$controller_, _$rootScope_, _$interval_) {
		$scope = _$rootScope_.$new();
		$interval = _$interval_;

		_$controller_('homeController', {$scope: $scope, $interval: $interval});

		$scope.$digest();
	}));

	it('should rotate every 5 seconds', function() {
		expect($scope.result.Title).toBe(results[0].Title);
		// waiting for 5 seconds;
		$interval.flush(5000);
		expect($scope.result.Title).toBe(results[1].Title);
	})
});