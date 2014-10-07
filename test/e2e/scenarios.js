'use strict';

describe('Angular Button Directive', function() {

  describe('index page', function() {

    beforeEach(function() {
      browser.get('index.html');
    });

    it('should style button based on attributes', function() {
      var defaultBtn = element(by.css('#default'));
      expect(defaultBtn.getAttribute('class')).toMatch(/btn.*btn-primary/);
      var successBtn = element(by.css('#success'));
      expect(successBtn.getAttribute('class')).toMatch(/btn.*btn-success/);
    });

  });
  
});