// head获取时间
var mydate=new Date();
var year=mydate.getFullYear();
var month=mydate.getMonth();
var date=mydate.getDate();
document.getElementById("getdate").innerHTML=year+"."+month+"."+date;
