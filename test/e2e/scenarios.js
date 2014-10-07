'use strict';

describe('Angular Filter', function() {

  describe('index page', function() {

    beforeEach(function() {
      browser.get('index.html');
    });

    it('should reverse order through ng-click on attributes', function() {
      element(by.model('search')).clear();
      element(by.css('a.name')).click();
      var first = element(by.repeater('actor in avengers.cast').row(0));
      var name = first.element(by.css('td:nth-child(1)')).getText();
      expect(name.getText()).toBe('TOM HIDDLESTON');
      element(by.css('a.name')).click();
      expect(name.getText()).toBe('CHRIS EVANS');
      element(by.css('a.character')).click();
      var character = first.element(by.css('td:nth-child(2)')).getText();
      expect(character.getText()).toBe("tony stark / iron man");
      element(by.css('a.character')).click();
      expect(character.getText()).toBe("bruce banner / the hulk");
    });

  });
  
});