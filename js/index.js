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
function cart(totalprice){
	document.getElementById("itemnum").firstChild.innerHTML=itemnum;
	document.getElementById("totalprice").innerHTML="$"+totalprice;
}

// 显示隐藏项目
function showCart(){
	document.getElementById("cartinfo").className="show flr";
}
function hideCart(){
	document.getElementById("cartinfo").className="hide flr";
}

// trendlist样式改变
function trendlistchange(){
	var trendTypeList=document.getElementById("trendtypelist").childNodes;
	var trendItem=document.getElementById("trenditem").childNodes;
	for(var i=0;i<trendTypeList.length;i++){
		trendTypeList[i].index=i;
		trendTypeList[i].onmouseover=function(){
			for(var j=0;j<trendTypeList.length;j++){
				trendTypeList[j].className="";
			}
			this.className="mouseover";
			for(var k=0;k<trendItem.length;k++){
				trendItem[k].className="hide";
			}
			trendItem[this.index].className="show";
		}
	}
}

// maincon轮播
// 初始图
var sliderContainer=document.getElementById("slidercontainer").childNodes;
window.onload=function(){
	for(var i=0;i<sliderContainer.length;i++){
		if(i==0){
			sliderContainer[i].style.display="flex";
		}
		else{
			sliderContainer[i].style.display="none";
		}
	}
}
// item改变
var mainconSliderCount = 0;
function mainconSliderCountUp(){
	var i=0;
	if(mainconSliderCount<5){
		mainconSliderCount++;		
		for(i;i<sliderContainer.length;i++){
			if(i==mainconSliderCount){
				sliderContainer[i].style.display="flex";
			}
			else{
				sliderContainer[i].style.display="none";
			}
		}	
	}
	else{
		mainconSliderCount=0;
		for(i;i<sliderContainer.length;i++){
			if(i==mainconSliderCount){
				sliderContainer[i].style.display="flex";
			}
			else{
				sliderContainer[i].style.display="none";
			}
		}
	}
}
function mainconSliderCountDown(){
	var i=0;
	if(mainconSliderCount>0){
		mainconSliderCount--;		
		for(i;i<sliderContainer.length;i++){
			if(i==mainconSliderCount){
				sliderContainer[i].style.display="flex";
			}
			else{
				sliderContainer[i].style.display="none";
			}
		}	
	}
	else{
		mainconSliderCount=5;
		for(i;i<sliderContainer.length;i++){
			if(i==mainconSliderCount){
				sliderContainer[i].style.display="flex";
			}
			else{
				sliderContainer[i].style.display="none";
			}
		}
	}
}

// feature item改变
var featureShow = document.getElementById("featureshow").childNodes;
var featureItemCount = 0;
function featureItemCountUp(){
	if(featureItemCount<4){
		featureItemCount++;
		for(var i=0;i<featureShow.length;i++){
			featureShow[i].className="hide";
			featureShow[featureItemCount].className="show";
		}
	}
	else{
		featureItemCount=0;
		for(var i=0;i<featureShow.length;i++){
			featureShow[i].className="hide";
			featureShow[featureItemCount].className="show";
		}
	}
}
function featureItemCountDown(){
	if(featureItemCount>0){
		featureItemCount--;
		for(var i=0;i<featureShow.length;i++){
			featureShow[i].className="hide";
			featureShow[featureItemCount].className="show";
		}
	}
	else{
		featureItemCount=4;
		for(var i=0;i<featureShow.length;i++){
			featureShow[i].className="hide";
			featureShow[featureItemCount].className="show";
		}
	}
}

// 滚动条
var newItemRange=document.getElementById("itemslider");
var newDiffItem=document.getElementById("newdiffitem");
newItemRange.onmousemove=function(){
	var deviation=newItemRange.value*9.5;
	var str="-"+deviation;
	newDiffItem.style.left="-"+deviation+"px";
}

// 添加到购物车
function featureAddToCart(obj){
	var getNode=obj.parentNode.parentNode.parentNode.parentNode;
	var seekingPrice=getNode.childNodes;
	var priceTag=seekingPrice[1].firstChild.lastChild;
	var price;
	for(var i=0;i<2;i++){
		if(priceTag.childNodes[i].className=="final"){
			price=priceTag.childNodes[i].innerHTML;
		}
	}
	var realprice=price.trim().substr(1);
	itemnum++;
	console.log(realprice);
	totalprice=totalprice+parseInt(realprice);
	cart(totalprice);
}










// logo横滚
var logoleftdis = 0;
function logoright(){
	logoleftdis +=240;
	document.getElementById("logoslider").firstChild.style.left="-"+logoleftdis+"px";
}
function logoleft(){
	logoleftdis -=240;
	document.getElementById("logoslider").firstChild.style.left="-"+logoleftdis+"px";
}

//主要的功能就这些了