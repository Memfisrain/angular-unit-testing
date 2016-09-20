xdescribe('movie result directive', function() {
	var result = {
		Poster: "http://localhost/image.jpg",
		Title: "Star Wars: Episode - a New hope",
		Director: "George Lucas",
		Actors: "mark Hamill, Harrison Form, Carrie Fisher",
		Released: '25 May 1977',
		Genre: "Action, Adventure, Fantasy"
	};

	var $element;
	var $scope;

	beforeEach(module('movieApp'));

	beforeEach(inject(function(_$compile_, _$rootScope_) {
		$scope = _$rootScope_.$new();

		$scope.result = result;

		$element = _$compile_(
			'<movie-result result="result"></movie-result>'
		)($scope);

		$scope.$digest();

		console.log($element.html());
	}));

	it('should output movie result to expected HTML format', function() {
		var HTML = '<img ng-src="http://localhost/image.jpg" src="http://localhost/image.jpg"><div class="ng-binding">' + result.Title + '</div>';
		expect($element.html()).toEqual(HTML);
	});
});