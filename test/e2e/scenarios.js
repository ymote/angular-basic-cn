'use strict';

describe('Test ng-repeat filter', function() {

  describe('When I click the select button in a table row, the information '+
    'should be displayed in the h3 tag', function() {

    beforeEach(function() {
      browser.get('index.html');
    });

    var checkRow = function(rowIndex){
      var row = element(by.repeater('actor in avengers.cast').row(rowIndex));
      var index = row.element(by.css('td:nth-child(1)')).getText();
      var name = row.element(by.css('td:nth-child(2)')).getText();
      var character = row.element(by.css('td:nth-child(3)')).getText();
      var button = row.element(by.css('.btn-primary')); 
      expect(index).toBe((rowIndex+1).toString());

      button.click();
      var h3 = element(by.css('h3'));
      expect(h3.getText()).toContain(name);
      expect(h3.getText()).toContain(character);
    };
    
    it('select the first row and the 4th row should work', function() {
      element(by.model('search')).clear();
      checkRow(0);
      checkRow(3);
    });



  });
  
});