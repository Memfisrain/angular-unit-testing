angular.module('movieApp')
	.directive('movieResult', function() {
		return {
			restrict: "EA",
			replace: true,
			template: 
				"<div>" +
					"<img ng-src='{{result.Poster}}'>" +
					"<div>{{result.Title}}</div>" +
				"</div>",
			scope: {
				result: "="
			},
			link: function(scope, element, attrs) {

			}
		}
	});