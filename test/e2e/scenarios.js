'use strict';

describe('Test Filters', function() {

  describe('index page', function() {
    var first, name, character;

    beforeEach(function() {
      browser.get('index.html');
      element(by.model('search')).clear();
    });

    it('should show actors\'name in alphabetical order when click the link on name -- the first is CHRIS EVANS', function(){
      element(by.css('a.name')).click();
      first = element(by.repeater('actor in avengers.cast').row(0));
      name = first.element(by.css('td:nth-child(1)')).getText();
      expect(name.getText()).toBe('CHRIS EVANS');
    })
    
    it('should show actors\'name in reverse order when click the link on name twice -- the first is TOM HIDDLESTON', function(){
      element(by.css('a.name')).click();
      element(by.css('a.name')).click();
      first = element(by.repeater('actor in avengers.cast').row(0));
      name = first.element(by.css('td:nth-child(1)')).getText();  
      expect(name.getText()).toBe('TOM HIDDLESTON');
    });

    it('should show actors\'character in alphabetical order when click the link on character -- the first is bruce banner / the hulk', function() {
      element(by.css('a.character')).click();
      first = element(by.repeater('actor in avengers.cast').row(0));
      character = first.element(by.css('td:nth-child(2)')).getText();
      expect(character.getText()).toBe("bruce banner / the hulk"); 
    });

    it('should show actors\'character in reverse order when click the link on character -- the first is tony stark / iron man', function() {
      element(by.css('a.character')).click();
      element(by.css('a.character')).click();
      first = element(by.repeater('actor in avengers.cast').row(0));
      character = first.element(by.css('td:nth-child(2)')).getText();
      expect(character.getText()).toBe("tony stark / iron man");     
    });
  });
  
});