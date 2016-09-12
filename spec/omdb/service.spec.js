describe("omdb service", function () {
  var movieData = {
    "Title": "Heat",
    "Year": "1995",
    "Rated": "R",
    "Released": "15 Dec 1995",
    "Runtime": "170 min",
    "Genre": "Action, Crime, Drama",
    "Director": "Michael Mann",
    "Writer": "Michael Mann",
    "Actors": "Al Pacino, Robert De Niro, Val Kilmer, Jon Voight",
    "Plot": "A group of professional bank robbers start to feel the heat from police when they unknowingly leave a clue at their latest heist.",
    "Language": "English, Spanish",
    "Country": "USA",
    "Awards": "12 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNGMwNzUwNjYtZWM5NS00YzMyLWI4NjAtNjM0ZDBiMzE1YWExXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    "Metascore": "76",
    "imdbRating": "8.2",
    "imdbVotes": "430,609",
    "imdbID": "tt0113277",
    "Type": "movie",
    "Response": "True"
  };
  var movieDataById = {
    "Title": "Heat",
    "Year": "1995",
    "Rated": "R",
    "Released": "15 Dec 1995",
    "Runtime": "170 min",
    "Genre": "Action, Crime, Drama",
    "Director": "Michael Mann",
    "Writer": "Michael Mann",
    "Actors": "Al Pacino, Robert De Niro, Val Kilmer, Jon Voight",
    "Plot": "A group of professional bank robbers start to feel the heat from police when they unknowingly leave a clue at their latest heist.",
    "Language": "English, Spanish",
    "Country": "USA",
    "Awards": "12 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNGMwNzUwNjYtZWM5NS00YzMyLWI4NjAtNjM0ZDBiMzE1YWExXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    "Metascore": "76",
    "imdbRating": "8.2",
    "imdbVotes": "430,609",
    "imdbID": "tt0113277",
    "Type": "movie",
    "Response": "True"
  };
  var baseUrl = "http://omdbapi.com/";
  var omdbApi = {};
  var $httpBackend;

  beforeEach(angular.mock.module("omdb"));

  beforeEach(angular.mock.inject(function (_omdbApi_, _$httpBackend_) {
    omdbApi = _omdbApi_;
    $httpBackend = _$httpBackend_;
  }));


  it("service should return correct movie data", function (done) {
    var expectedUrl = baseUrl + "?t=heat";

    $httpBackend
      .when("GET", expectedUrl)
      .respond(200, movieData);

    omdbApi.search("heat")
      .then(function (res) {
        expect(res.data).toEqual(movieData);
        done();
      });

    $httpBackend.flush();
  });

  it("should handle error", function () {
    var expectedUrl = baseUrl + "?i=tt1212";
    var expectedResponse = {"Response": "False", "Error": "Incorrect IMDb ID."};

    $httpBackend
      .when("GET", expectedUrl)
      .respond(500, expectedResponse);

    omdbApi.find("tt1212")
      .catch(function (err) {
        expect(err).toEqual(expectedResponse);
      })
  });

  it("should return movie data by id", function () {
    var expectedUrl = baseUrl + "?i=tt0113277";

    $httpBackend
      .expect("GET", expectedUrl)
      .respond(200, movieDataById);

    omdbApi.find("tt0113277")
      .then(function (res) {
        expect(res.data).toEqual(movieDataById);
      });

    $httpBackend.flush();
  });
});