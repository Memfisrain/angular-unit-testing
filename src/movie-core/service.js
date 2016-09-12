angular.module("movieCore", ["ngResource"])
  .factory("PopularMovies", function ($resource) {
    var token = "tedd";

    return $resource("popular/:movieId", {movieId: "@id"}, {
      update: {
        method: "PUT",
        headers: {
          authToken: token
        }
      },
      get: {
        method: "GET",
        headers: {
          authToken: token
        }
      },
      post: {
        method: "POST",
        headers: {
          authToken: token
        }
      },
      save: {
        method: "POST",
        headers: {
          authToken: token
        }
      }
    });
  });