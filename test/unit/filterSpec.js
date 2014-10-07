describe('filter', function() {

	beforeEach(module('myApp'));

	describe('shiftString', function() {

	  it('should shift string by specified number',
	      inject(function(shiftStringFilter) {
	    expect(shiftStringFilter('abcdefg',2)).toBe('fgabcde');
	    expect(shiftStringFilter('this is a filter',3)).toBe('terthis is a fil');
	  }));
	});
});