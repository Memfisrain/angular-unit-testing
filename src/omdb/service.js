angular.module("omdb", [])
  .factory("omdbApi", function($http) {
    var service = {};

    var baseUrl = "http://omdbapi.com/";

    service.search = function(query) {
      return $http.get(baseUrl + "?t=" + encodeURIComponent(query));
    };

    service.find = function(id) {
      return $http.get(baseUrl + "?i=" + encodeURIComponent(id));
    };

    return service;
  });