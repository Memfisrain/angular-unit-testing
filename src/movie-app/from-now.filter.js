angular.module('movieApp')
	.filter('fromNow', function() {
		return function(v) {
			if (v == undefined) {
				throw new Error('filter-now error');
			}

			var date = v;

			if (typeof v === 'string') {
				date = new Date(v);
			}

			if (isNaN(date.getTime())) {
				return v;
			} else {
				return date;
			}
		}
	});