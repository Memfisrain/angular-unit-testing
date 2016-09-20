angular.module('movieApp')
	.filter('fromNow', function() {
		return function(v, base) {
			if (v == undefined) {
				throw new Error('filter-now error');
			}

			var date = v;
			var baseDate = base;;

			if (typeof v === 'string') {
				date = new Date(v);
			}

			if (isNaN(date.getTime())) {
				return v;
			}

			var YEAR_IN_MS = 1000 * 60 * 60 * 24 * 365;
			var now = base || new Date;

			var dateDiff = ((now.getTime() - date.getTime()) / 1000); // in seconds
			var tzDiff = (now.getTimezoneOffset() - date.getTimezoneOffset()) * 60; // in seconds
			var diffInS = dateDiff + tzDiff;

			var yearsDiff = Math.floor(diffInS * 1000 / YEAR_IN_MS);
			console.log(yearsDiff);

			return yearsDiff + ' years ago';
		}
	});