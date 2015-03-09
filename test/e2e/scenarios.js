'use strict';

describe('Test Directive', function() {

  describe('index page', function() {

    beforeEach(function() {
      browser.get('index.html');
    });

    it('Default button should have css class btn-primary', function() {
      var defaultBtn = element(by.css('#default'));
      expect(defaultBtn.getAttribute('class')).toMatch(/btn.*btn-primary/);
    });
    
    it('Button with type attribute should have the type in css class. E.g. type="success" should have class \'btn-success\'', function(){
      var successBtn = element(by.css('#success'));
      expect(successBtn.getAttribute('class')).toMatch(/btn.*btn-success/);
    });

  });
  
});