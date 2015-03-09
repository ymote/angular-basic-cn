'use strict';

describe('Test Promise.', function() {

  describe('Story: John order Pizza. deliver time is 30 min.', function() {

    beforeEach(function() {
      browser.get('index.html');

      element(by.model('exercise')).click();

      var name = element(by.model('name'));
      name.clear();
      name.sendKeys('John');

      var food = element(by.model('food'));
      food.clear();
      food.sendKeys('Pizza');

      var deliver = element(by.model('deliver'));
      deliver.clear();
      deliver.sendKeys('30 min');

      var reason = element(by.model('reason'));
      reason.clear();
      reason.sendKeys('餐馆没开门');

    });

    it('On successful order, should show 3 messages -- 食物名字，外卖送达时间以及正在享用。', function() {
      element(by.css('.xiju')).click();
      element.all(by.repeater('message in messages')).then(function(rows) {
        var length = rows.length;
        expect(length).toBe(3);
        if(length==3){
          expect(rows[0].getText()).toBe('John'+"晚饭要点外卖"+'Pizza');
          expect(rows[1].getText()).toBe('30 min'+'后，外卖送到了。');
          expect(rows[2].getText()).toBe('John' + "正在享用美味的食物" + 'Pizza');          
        }
      });
    });

    it('On unsuccessful order, should show 3 messages -- 食物名字，取消原因，正在挨饿。', function() {
      element(by.css('.beiju')).click();
      element.all(by.repeater('message in messages')).then(function(rows) {
        var length = rows.length;
        expect(length).toBe(3);
        if(length==3){
          expect(rows[0].getText()).toBe('John'+"晚饭要点外卖"+'Pizza');
          expect(rows[1].getText()).toBe("外卖取消了，原因是"+'餐馆没开门');
          expect(rows[2].getText()).toBe('John' + "因为" + '餐馆没开门' + "所以正在挨饿");         
        }
      });
    });

  });
  
});