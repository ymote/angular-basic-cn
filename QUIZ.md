**1.** 提交并预览，调整数据的显示，搜索，排序以及限制输出的各种参数，页面会实时更新。

**2.** 练习中提到了排序的方向，在**main.js**41行我们定义了$scope.reverse变量来控制排序方向。**index.html**中第24行提示了用法```orderBy:attr:reverse```,reverse为true时是从大到小排列，reverse不存在或为false时，排序的顺序是从小到大。

请在**index.html**中第20行和21行中ng-click上加上翻转$scope.reverse，使得点击同一属性可以翻转以该属性排序的次序。