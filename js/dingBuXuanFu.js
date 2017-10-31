//function $(str){
//	if(str.charAt(0)=="#"){
//		return document.getElementById(str.substring(1));
//	}else if(str.charAt(0)=="@"){
//		return document.getElementsByName(str.substring(1));
//	}
//}

var MaxscrollTop = 0;
window.onload = function(){
	 MaxscrollTop = document.getElementById("nav").offsetTop;
	 console.log(MaxscrollTop);
}

window.onscroll = function(){
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	
	if(scrollTop>=130){
		document.getElementById("nav").style.position = "fixed";
		document.getElementById("nav").style.top = "0px";
		document.getElementById("title-ll").style.top="42px";
//		document.getElementById("nav").style.top = "0px";
	}else if(scrollTop<=130){
		document.getElementById("nav").style.position = "static";
		
		document.getElementById("title-ll").style.top="166px";
	}
}