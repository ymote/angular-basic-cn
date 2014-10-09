'use strict';

describe('Angular Promise', function() {

  describe('John order Pizza story. deliver time is 30 min.', function() {

    beforeEach(function() {
      browser.get('index.html');

      var query = element(by.model('query'));
      query.clear();

    });

    it('Should show 3 phones on page when 显示数量 is 3', function() {
      var name = element(by.model('number'));
      name.clear();
      name.sendKeys('3');

      element.all(by.repeater('phone in phones')).then(function(rows) {
        var length = rows.length;
        expect(length).toBe(3);
      });
    });

    it('Should change number of phones on page when 显示数量 is changed', function() {
      var name = element(by.model('number'));
      name.clear();
      name.sendKeys('5');

      element.all(by.repeater('phone in phones')).then(function(rows) {
        var length = rows.length;
        expect(length).toBe(5);
      });

      var name = element(by.model('number'));
      name.clear();
      name.sendKeys('10');

      element.all(by.repeater('phone in phones')).then(function(rows) {
        var length = rows.length;
        expect(length).toBe(10);
      });
    });

  });
  
});