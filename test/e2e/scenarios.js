'use strict';

describe('Test Transclude.', function() {

  describe('', function() {

    beforeEach(function() {
      browser.get('index.html');
    });
  
    it('Click the addAlert button should create a new alert widget from the 4 alerts.', function(){
      var addAlertBtn = element(by.css('.add-alert'));
      element.all(by.repeater('alert in alerts')).then(function(oldRows){
        var oldLength = oldRows.length;
        addAlertBtn.click();
        element.all(by.repeater('alert in alerts')).then(function(newRows){
          var newLength = newRows.length;
          expect(newLength).toBe(oldLength+1);
        });
      });      
    });
    
    it('Click the randomPanel button should create a new panel from panels. All parts of panel -- '
      +'panel-heading, panel-body and panel content should present.', function(){
      var selectPanelBtn = element(by.css('.select-panel'));
      selectPanelBtn.click();
      var panel = element(by.css('.panel'));
      var panelHead = element(by.css('.panel-heading'));
      var panelBody = element(by.css('.panel-body'));
      var panelContent = element(by.css('.panel-body div span'));
      expect(panel.isPresent()).toBe(true);
      expect(panelHead.isPresent()).toBe(true);
      expect(panelContent.getText()).toBeTruthy();
      expect(panelBody.isPresent()).toBe(true);    
    });

  });
  
});
