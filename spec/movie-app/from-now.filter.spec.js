fdescribe('from-now filter', function () {
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
})