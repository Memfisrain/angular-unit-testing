describe('from-now filter', function () {
	var fromNow;

	beforeEach(module('movieApp'));

	beforeEach(inject(function(_$filter_) {
		fromNow = _$filter_('fromNow');
	}));

	it('should throw error if value is undefined', function() {
		expect(fromNow).toThrow();
	});

	it('should return same value for invalid date', function() {
		expect(fromNow('foo')).toBe('foo');
	});

	it('should return value of years ago fro date Object', function() {
		var value = new angular.mock.TzDate(0, '2013-07-01T00:00:00.000Z');
		var baseDate = new angular.mock.TzDate(0, '2015-08-01T20:00:00.000Z');

		expect(fromNow(value, baseDate)).toBe('2 years ago');
	})
})