$(function() {
var NebPay = require("nebpay"); //https://github.com/nebulasio/nebPay
    var nebPay = new NebPay();
    var dappAddress = "n1mshDgPpzGBDje6nQBJtf18ubQAEGN7P5c";
    var txHash = "739693986ececd9363423bd3b15bd9876d577b13f481693c64ff62324a0c30dd";
$("#registerbutton").click(function(){
to = dappAddress;
value = "0";
callFunction = "save";
callArgs = "[]";

nebPay.call(to, value, callFunction, callArgs, { //使用nebpay的call接口去调用合约,
listener: function(resp){
console.log(JSON.stringify(resp));
}
});
});
$("#searchbutton").click(function(){
to = dappAddress;
value = "0";
callFunction = "get";
callArgs = "[]";

nebPay.simulateCall(to, value, callFunction, callArgs, { //使用nebpay的call接口去调用合约,
listener: function(resp){
var myArr = JSON.parse(resp.result);

var tempStr = "";
if(myArr.length == 0){
	alert("No records found.");
}
for(var i=0;i<myArr.length;i++){
if(i%2 == 0){
tempStr += '<tr class="warning">';
}else{
tempStr += '<tr class="info">';
}
tempStr += '<td >';
tempStr += (i+1);
tempStr += '</td>';
tempStr += '<td>';
tempStr += new Date(myArr[i].registerTime * 1000).toLocaleString();
tempStr += '</td>';
tempStr += '</tr>';
}
//console.log(tempStr);
$("#searchresult").html(tempStr);
}
});
});

});


