describe("Results controller", function () {
  var results = {
    Search: [
      {
        "Title": "Star Wars",
        "Year": "1983",
        "Rated": "N/A",
        "Released": "01 May 1983"
      },
      {
        "Title": "Red Wiles",
        "Year": "1923",
        "Rated": "N/A",
        "Released": "01 May 1923"
      },
      {
        "Title": "Heat",
        "Year": "1995",
        "Rated": "N/A",
        "Released": "01 May 1995"
      }
    ]
  };

  var $controller,
    $scope,
    $q,
    $rootScope,
    $location,
    $exceptionHandler,
    omdbApi;

  beforeEach(module("omdb"));
  beforeEach(module("movieApp"));

  beforeEach(module(function($exceptionHandlerProvider) {
    $exceptionHandlerProvider.mode('log');
  }))

  beforeEach(inject(function(_$controller_, _$q_, _$rootScope_, _$location_, _$exceptionHandler_, _omdbApi_) {
    $controller = _$controller_;
    $scope = {};
    $q = _$q_;
    $rootScope = _$rootScope_;
    $location = _$location_;
    $exceptionHandler = _$exceptionHandler_;
    omdbApi = _omdbApi_;
  }));

  it("should load search results", function() {
    spyOn(omdbApi, "search").and.callFake(function() {
      var deferred = $q.defer();
      deferred.resolve(results);
      return deferred.promise;
    });

    var film = "star wars";

    $location.search("q", film);

    $controller("resultsController", {$scope: $scope});

    $rootScope.$digest(); // trigger angular event cycle which pick up our resolved promise

    console.log($scope.results[0]);

    expect($scope.results[0].Title).toBe(results.Search[0].Title);
    expect($scope.results[1].Title).toBe(results.Search[1].Title);
    expect($scope.results[2].Title).toBe(results.Search[2].Title);

    expect(omdbApi.search).toHaveBeenCalledWith(film);
  });

  it("should set result status to error", function() {
    var message = "film doesn't exist";
    var film = "star wars";

    spyOn(omdbApi, "search").and.callFake(function() {
      var deferred = $q.defer();
      deferred.reject(message);
      return deferred.promise;
    });

    $location.search("q", film);
    
    $controller("resultsController", {$scope: $scope});
    $rootScope.$digest();

    console.log($exceptionHandler.errors)
    
    expect($exceptionHandler.errors[0]).toBe(message);

    expect($scope.errorMessage).toBe(message);
    expect($scope.results).toEqual([]);
    expect(omdbApi.search).toHaveBeenCalledWith(film);
  })
});