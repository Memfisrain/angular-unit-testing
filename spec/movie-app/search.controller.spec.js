describe('Search Controller', function() {
  var $scope;
  var $location;
  var $timeout;
  var ctrl;

  beforeEach(module('movieApp'));

  beforeEach(inject(function(_$controller_, _$location_, _$timeout_) {
    $scope = {};
    $location = _$location_;
    $timeout = _$timeout_;

    ctrl = _$controller_('searchController', {$scope: $scope, $location: _$location_, $timeout: $timeout}, {query: ""});
  }));


  it('Should redirect to the query results page for non-empty query', function() {
    ctrl.query = "search";
    ctrl.search();

    expect($location.url()).toEqual("/results?q=search");
  });

  it("Should not redirect to query results for empty query", function() {
    ctrl.query = "";
    ctrl.search();

    expect($location.url()).toBe("");
  });

  it('should redirect after 1 second of keyboard inactivity', function() {
    ctrl.query = 'star wars';
    ctrl.keyup();
    $timeout.flush();

    expect($timeout.verifyNoPendingTasks).not.toThrow();

    expect($location.url()).toEqual("/results?q=" + encodeURIComponent('star wars'));
  })

  it('should cancel timeout in keydown', function() {
    ctrl.query = 'star wars';
    ctrl.keyup();
    ctrl.keydown();

    expect($timeout.verifyNoPendingTasks).not.toThrow();

    //expect($location.url()).toEqual("/results?q=" + encodeURIComponent('star wars'));
  })
});
