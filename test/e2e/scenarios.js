'use strict';

describe('Test Promise.', function() {

  describe('', function() {

    beforeEach(function() {
      browser.get('index.html');

      var query = element(by.model('query'));
      query.clear();

    });

    it('Should show 3 phones on page when 显示数量 is 3 -- $scope.number=3.', function() {
      var name = element(by.model('number'));
      name.clear();
      name.sendKeys('3');

      element.all(by.repeater('phone in phones')).then(function(rows) {
        var length = rows.length;
        expect(length).toBe(3, 'There should be 3 phones on page');
      });
    });

    it('Should change number of phones on page when 显示数量 is changed -- $scope.number change.', function() {
      var name = element(by.model('number'));
      name.clear();
      name.sendKeys('5');

      element.all(by.repeater('phone in phones')).then(function(rows) {
        var length = rows.length;
        expect(length).toBe(5, 'Should show 5 phones on page when $scope.number=5.');
      });

      var name = element(by.model('number'));
      name.clear();
      name.sendKeys('10');

      element.all(by.repeater('phone in phones')).then(function(rows) {
        var length = rows.length;
        expect(length).toBe(10, 'Should show 10 phones on page when $scope.number=10.');
      });
    });

  });
  
});