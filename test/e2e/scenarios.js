'use strict';

describe('Angular Controller', function() {

  describe('index page', function() {

    beforeEach(function() {
      browser.get('index.html');
    });

    it('should filter the phone list as user types into the search box', function() {
      var firstInput = element(by.css('.first input'));
      firstInput.clear();
      firstInput.sendKeys('87654321');
      element(by.css('.first .btn-primary')).click();
      element(by.css('.second .btn-primary')).click();
      var secondMsg = element(by.css('.second .message'));
      var secondRMsg = element(by.css('.second .reverse-message'));
      expect(secondMsg.getText()).toBe('从DataStore获得message: 87654321');
      expect(secondRMsg.getText()).toBe('倒序的message是： 12345678');
    });

  });
  
});