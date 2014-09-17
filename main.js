var myApp = angular.module('myApp', []);

myApp.filter('myReverse',function(){
  //input是过滤器作用的对象，uppercase是传入的参数
  //比如{{ message | myReverse:true }}，input是message,uppercase是true
  return function(input, uppercase){
    var out = "";
    for (var i = 0; i < input.length; i++) {
      out = input.charAt(i) + out;
    }
    // conditional based on optional argument
    if (uppercase) {
      out = out.toUpperCase();
    }
    return out;    
  }
})

//给定字符串并传入要移动的位数，过滤器将字符串每一位右移指定的位数，最末位补到最前。
//比如{{ 'abcd' | shiftString:2 }} -> 'cdab'
myApp.filter('shiftString',function(){
  return function(input, numberToShift){
    //首先取numberToShift对input.length的余数
    numberToShift = numberToShift%input.length;
    //使用数组储存新的字符串中的字符
    var letters = new Array(input.length);
    for (var i = 0; i < input.length; i++) {
      //依照规则遍历字符串并存在letters的相对应的位置



    }
    //将改造好的数组转换成字符串输出  
    return letters.join('');    
  }  
})

function MainCtrl($scope, DataStore){

  $scope.message = DataStore.getMessage();

  $scope.reversedMessage = function(message) {
    return message.split("").reverse().join("");
  };

}

myApp.factory('DataStore', function() {
  var dataToShare = {
    message: "rats live on no evil star", 
  };

  var setMessage = function(message){
    dataToShare.message = message;
  };

  var getMessage = function(){
    return dataToShare.message;
  }

  return {
    'getMessage': getMessage,
    'setMessage': setMessage,
  } 
})
