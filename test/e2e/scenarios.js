'use strict';

describe('Angular Directive', function() {

  describe('index page', function() {

    beforeEach(function() {
      browser.get('index.html');
    });

    it('should generate alert and panel widgets', function() {
      var addAlertBtn = element(by.css('.add-alert'));
      element.all(by.repeater('alert in alerts')).then(function(oldRows){
        var oldLength = oldRows.length;
        addAlertBtn.click();
        element.all(by.repeater('alert in alerts')).then(function(newRows){
          var newLength = newRows.length;
          expect(newLength).toBe(oldLength+1);

          var selectPanelBtn = element(by.css('.select-panel'));
          selectPanelBtn.click();
          var panel = element(by.css('.panel'));
          var panelHead = element(by.css('.panel-heading'));
          var panelBody = element(by.css('.panel-body'));
          var panelContent = element(by.css('.panel-body div span'));
          expect(panel.isPresent()).toBe(true);
          expect(panelHead.isPresent()).toBe(true);
          expect(panelContent.isPresent()).toBe(true);
          expect(panelBody.isPresent()).toBe(true);
        });
      });
    });

  });
  
});
