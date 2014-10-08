'use strict';

describe('Angular Promise', function() {

  describe('index page', function() {

    beforeEach(function() {
      browser.get('index.html');
    });

    it('should show food on page', function() {
      var foodResult = element(by.css('.food'));
      var noFoodResult = element(by.css('.no-food'));

      element(by.css('.menu div:nth-child(1) button')).click();
      expect(foodResult.getText()).toBe('今晚的食物是麦当劳');

      element(by.css('.menu div:nth-child(3) button')).click();
      expect(foodResult.getText()).toBe('今晚的食物是小肥羊');

      element(by.css('.menu div:nth-child(4) button')).click();
      expect(foodResult.isDisplayed()).toBeFalsy();
      expect(noFoodResult.isDisplayed()).toBeTruthy();
    });

  });
  
});