describe('Test Angular Filter\n', function() {

	beforeEach(module('myApp'));

	describe('shiftString filter should shift string by speficied number\n', function() {

	  it('shift \'abcdefg\' by 2 should return \'fgabcde\'; shift \'this is a filter by 3 \' should '+
	    'return \'terthis is a fil\'',
	      inject(function(shiftStringFilter) {
	    expect(shiftStringFilter('abcdefg',2)).toBe('fgabcde');
	    expect(shiftStringFilter('this is a filter',3)).toBe('terthis is a fil');
	  }));
	});
});