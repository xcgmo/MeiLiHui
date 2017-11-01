function bigMirror(domObj,width,height,multiple,bigMirrorDom,bigImgDom){
domObj.onmousemove = function(event){
		let evt = event || window.event;
		let left1 = evt.pageX-domObj.offsetLeft-bigMirrorDom.offsetWidth/2;
		let top1 =  evt.pageY-domObj.offsetTop-bigMirrorDom.offsetHeight/2;
		if(left1<0){
			left1=0;
		}else if(left1>width-bigMirrorDom.offsetWidth){
			left1=width-bigMirrorDom.offsetWidth;
		}
		if(top1<0){
			top1=0;
		}else if(top1>height-bigMirrorDom.offsetHeight){
			top1=height-bigMirrorDom.offsetHeight;
		}		
		
		bigMirrorDom.style.left = left1+"px";
		bigMirrorDom.style.top =top1+"px";
		
		//console.log();
		bigImgDom.style.left = -1*multiple*left1+"px";
		bigImgDom.style.top =-1*multiple*top1+"px";
	}	
	
	
	
}