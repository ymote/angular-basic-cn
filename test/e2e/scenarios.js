'use strict';

describe('Test ng-repeat filter', function() {

  describe('select 4th table row', function() {
    
    var row, button, h3;

    beforeEach(function() {
      browser.get('index.html');
      row = element(by.repeater('actor in avengers.cast').row(3));
      button = row.element(by.css('.btn-primary'));
      h3 = element(by.css('h3'));
      button.click();
    });

    it('should show the index 4 in table row', function(){
      var index = row.element(by.css('td:nth-child(1)')).getText();
      expect(index).toBe((rowIndex+1).toString());
    });
    
    it('should show actor name in h3 tag', function(){
      var name = row.element(by.css('td:nth-child(2)')).getText();
      expect(h3.getText()).toContain(name);
    });
    
    it('should show character name in h3 tag', function(){
      var character = row.element(by.css('td:nth-child(3)')).getText();
      expect(h3.getText()).toContain(character);
    });
    
  });
  
});