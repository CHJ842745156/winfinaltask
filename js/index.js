// head获取时间
var mydate=new Date();
var year=mydate.getFullYear();
var monthnum=mydate.getMonth();
var month=["January","Feberary","March","April","May","June","July","August","September","October","November","December"];
var date=mydate.getDate();
document.getElementById("getdate").innerHTML=month[monthnum]+"."+date+"."+year;

//购物车数据
var itemnum=0;
var totalprice=0.00;
document.getElementById("itemnum").firstChild.innerHTML=itemnum;
document.getElementById("totalprice").innerHTML="$"+totalprice;