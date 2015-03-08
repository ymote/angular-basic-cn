'use strict';

describe('Test Defining Methods on Controllers', function() {

  describe('when I am on index page. I enter \'87654321\' in the first input, '+
    'then I click the button in first controller to save the message, '+
    'then I click the button in second controller to retrive the message.', function() {

    beforeEach(function() {
      browser.get('index.html');
      var firstInput = element(by.css('.first input'));
      firstInput.clear();
      firstInput.sendKeys('87654321');
      element(by.css('.first .btn-primary')).click();
      element(by.css('.second .btn-primary')).click();      
    });

    it('I should see \'从DataStore获得message: 87654321\' '+
        ' in <p class=\'message\'> element', function() {

      var secondMsg = element(by.css('.second .message'));
      expect(secondMsg.getText()).toBe('从DataStore获得message: 87654321');
      
    });

    it('I should see \'倒序的message是： 12345678\' in '+
      '<p class=\'reverse-message\'> element', function(){
      
      var secondRMsg = element(by.css('.second .reverse-message'));
      expect(secondRMsg.getText()).toBe('倒序的message是： 12345678');
            
    });


  });
  
});