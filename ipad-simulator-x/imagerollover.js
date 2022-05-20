function imagerollover(){
	var allimages=document.getElementsByTagName("img")
	var preloadimages=[]
	for (var i=0; i<allimages.length; i++){
		if (allimages[i].getAttribute("data-over")){ //if image carries "data-over" attribute
			preloadimages.push(new Image()) //preload "over" image
			preloadimages[preloadimages.length-1].src=allimages[i].getAttribute("data-over")
			allimages[i].onmouseover=function(){
				this.src=this.getAttribute("data-over")
			}
			allimages[i].onmouseout=function(){
				this.src=this.getAttribute("data-out")
			}
		} //end if
	} //end for loop
}

//Usage: Call following function at the end of the page:
//imagerollover()