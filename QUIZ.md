**1.** 提交并预览，改变SecondCtrl中输入框中的值，看看reversedMessage是怎样实现的。

**2.** 前面提到了24行和44行两个```ng-click```方法，这两个方法在main.js中已经定义，请实现这两个方法。

要实现的流程是：

    a. 改变FirstCtrl中输入框中的值
    b. 点击更新message按钮会更新到DataStore
    c. 点击SecondCtrl中更新按钮会从DataStore中获得更新的message
    d. 同时会更新倒序的message