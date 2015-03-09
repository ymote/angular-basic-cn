'use strict';

describe('Test Promise.', function() {

  describe('', function() {
    var foodResult, noFoodResult;

    beforeEach(function() {
      browser.get('index.html');
    });

    it('Click the 1st button should display \'今晚的食物是麦当劳\'.', function(){
      foodResult = element(by.css('.food'));
      element(by.css('.menu div:nth-child(1) button')).click();
      expect(foodResult.getText()).toBe('今晚的食物是麦当劳');      
    });

    it('Click the 3rd button should display \'今晚的食物是小肥羊\'.', function(){
      foodResult = element(by.css('.food'));
      element(by.css('.menu div:nth-child(3) button')).click();
      expect(foodResult.getText()).toBe('今晚的食物是小肥羊');    
    });
    
    it('Click the 4th button should display \'今晚减肥，不吃晚饭\'.', function(){
      var noFoodResult = element(by.css('.no-food'));
      element(by.css('.menu div:nth-child(4) button')).click();
      expect(noFoodResult.isDisplayed()).toBeTruthy();      
    });
    
  });
  
});