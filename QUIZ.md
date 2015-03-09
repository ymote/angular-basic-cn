**1.** 提交并预览，页面上会输出四种类型的通知信息。使用```ng-transclude```的写法使得```alert```指令看起来非常直观，
从**index.html**基本就可以猜到输出的内容。

**2.** **main.js**中还定义了```panel```指令，panel可以有标题和内容，适合输出比较长的通知内容。完成对panel指令的template的构建，
panel的DOM模版在**index.html**中注释中有提到，参考alert指令的写法完成panel指令。

**3.** **main.js**控制器中还有两个没实现的方法。 一个是  ```$scope.addAlert```，从$scope.alerts中随机选择一个alert并加到$scope.alerts末尾。
页面中的ng-repeat会自动将增加的项显示出来。

另一个是```$scope.randomPanel```,在这个方法中我们希望从panels数组变量中随机选择一个panel并附给$scope.panel。
**index.html**第19行的panel指令负责将$scope.panel显示出来。完成这两个方法。