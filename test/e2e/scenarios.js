'use strict';

describe('Test Pagination with 5 pages', function() {

  describe('', function() {

    beforeEach(function() {
      browser.get('index.html');
      var numPages = element(by.model('numPages'));
      numPages.clear();
      numPages.sendKeys('5');       
    });

    it('Click the left link in pagination should go to the first page -- the first <li> has class \'active\'', function(){
      var fisrtLink = element(by.css('.pagination')).element(by.css('li:first-child')).element(by.css('a'));
      var fisrtLi = element(by.css('.pagination')).element(by.css('li:nth-child(2)')); 
      fisrtLink.click();
      expect(fisrtLi.getAttribute('class')).toContain('active');
    });

    it('Click the right link in pagination should go to the last page -- the last <li> has class \'active\'', function(){
      var lastLink = element(by.css('.pagination')).element(by.css('li:last-child')).element(by.css('a'));
      var lastLi = element(by.css('.pagination')).element(by.css('li:nth-child(6)')); 
      lastLink.click();
      expect(lastLi.getAttribute('class')).toContain('active');
    });    
  });
  
});