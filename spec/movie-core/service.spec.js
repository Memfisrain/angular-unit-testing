describe("MovieCore", function() {
  var PopularMovies, $httpBackend;

  beforeEach(module("movieCore"));

  beforeEach(inject(function(_PopularMovies_, _$httpBackend_) {
    PopularMovies = _PopularMovies_;
    $httpBackend = _$httpBackend_;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
  });

  it("Should create popular movie", function() {

    var expectedData = function(data) {
      return true;
    };

    $httpBackend.expectPOST(/./, expectedData)
      .respond(201);

    var popularMovie = new PopularMovies({
      movieId: "tt0076759",
      description: "Great movie!"
    });

    popularMovie.$save();

    expect($httpBackend.flush).not.toThrow();
  });

  it("should get popular movie by id", function() {
    $httpBackend.expectGET("popular/tt0076759")
      .respond(201);

    PopularMovies.get({movieId: "tt0076759"});

    expect($httpBackend.flush).not.toThrow();
  });

  it("should update popular movie", function() {
    var expectedData = function(data) {
      return angular.fromJson(data).movieId === "tt0076759";
    };

    $httpBackend.expectPUT(/./, expectedData)
      .respond(201);

    var popularMovie = new PopularMovies({
      movieId: "tt0076759",
      description: "Great movie!!!!!!"
    });

    popularMovie.$update();

    expect($httpBackend.flush).not.toThrow();
  });

  it("should authenticate requests", function() {
    var expectedHeaders = function(headers) {
      dump(angular.mock.dump(headers));
      return true;
    };

    $httpBackend.expectGET(/./, expectedHeaders)
    .respond(201);

    PopularMovies.get({movieId: "tt0076759"})
  })
});