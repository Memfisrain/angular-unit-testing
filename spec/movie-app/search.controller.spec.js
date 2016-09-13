describe('Search Controller', function() {
  var $scope;
  var $location;
  var ctrl;

  beforeEach(module('movieApp'));

  beforeEach(inject(function(_$controller_, _$location_) {
    $scope = {};
    $location = _$location_;

    ctrl = _$controller_('searchController', {$scope: $scope, $location: _$location_}, {query: ""});
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
});
