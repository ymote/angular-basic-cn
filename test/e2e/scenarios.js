'use strict';

describe('Test Defining Methods on Controllers', function() {

  describe('I enter \'87654321\' in the first input, '+
    'and follow the procedures described in exercise.', function() {

    beforeEach(function() {
      browser.get('index.html');
      var firstInput = element(by.css('.first input'));
      firstInput.clear();
      firstInput.sendKeys('87654321');
      element(by.css('.first .btn-primary')).click();
      element(by.css('.second .btn-primary')).click();      
    });

    it('I should see \'从DataStore获得message: 87654321\' '+
        'and \'倒序的message是： 12345678\'.', function() {

      var secondMsg = element(by.css('.second .message'));
      expect(secondMsg.getText()).toBe('从DataStore获得message: 87654321');
      
      var secondRMsg = element(by.css('.second .reverse-message'));
      expect(secondRMsg.getText()).toBe('倒序的message是： 12345678');
      
    });

  });
  
});