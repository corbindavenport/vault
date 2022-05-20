var urlCount=0;
var urlPos=0;
var urlHistory = [];
var iPhoneApps = [];
addressBarStatus = true;
iPhoneApps[1] = "http://ec2-72-44-51-230.z-1.compute-1.amazonaws.com/ichess.html"; //
iPhoneApps[2] = "http://onetrip.org/onetrip/?pass&go"; //
iPhoneApps[3] = "http://mini.zoho.com/"; //
iPhoneApps[4] = "http://digg.com/iphone/";// 
iPhoneApps[5] = "http://www.publictivity.com/im/";// 
iPhoneApps[6] = "http://www.gasapp.com/new.html";// 
iPhoneApps[7] = "http://gobekdeligi.com/idelicious/"; //
iPhoneApps[8] = "http://m.youtube.com/"; //
iPhoneApps[9] = "http://www.kudit.com"; //
iPhoneApps[10] = "http://www.moviesapp.com/"; //
iPhoneApps[11] = "http://www.chandlerkent.com/iphlickr"; //
iPhoneApps[12] = "http://www.iphonehangman.com/"; //
iPhoneApps[99] = "http://reader.mac.com/"; //

function Safari_Refresh(alink){
	goActive();
	var tmp = document.getElementById('safari_window').src;
	if(tmp!=''){
		document.getElementById('safari_window').src=tmp;
	}
	return false;
}

function Safari_Back(alink){
	goOn();
	if(urlHistory.length > 0 && urlPos > 1){
		document.getElementById('safari_window').src = urlHistory[urlPos-2];
		document.getElementById('safari_location').value = urlHistory[urlPos-2];
		urlPos--;
	}
 return false;
}

function Safari_Forward(alink){
	goOn();
	if(urlHistory.length > 0 && urlPos < urlHistory.length){
		document.getElementById('safari_window').src = urlHistory[urlPos];
		document.getElementById('safari_location').value = urlHistory[urlPos];
		urlPos++;
	}
 return false;
}

function Rotate_Phone(obj){
 hand = document.getElementById('wrapper');
 //alert(hand.className);
 if(hand.className == "tall"){
  hand.className ="wide";
 }else{
  hand.className = "tall";
 }
 swapAddressBar(addressBarStatus);  
 document.getElementById('safari_location').focus();
 return false;
}

function setScrolling(onoff){
 var z = document.getElementById('safari_window');
 var queryStr = window.top.location.search.substring(1);
 var y = getParameter(queryStr, 'scroll');
 z.scrolling = onoff;
 if(onoff == 'auto'){
  if(y == 'on'){
  // z.style.overflow = '-moz-scrollbars-vertical';
  }
 }
}

function fixWebSite(){
  //var iframeObj = document.getElementById('safari_window');
  //var iframeDoc = (iframeObj.contentWindow || iframeObj.contentDocument);
  //if (iframeDoc.document) iframeDoc = iframeDoc.document;
  //document.getElementById('safari_title').innerHTML = iframeDoc.title; //access issues
  //return true;
}

function loadFromList(id){
	document.getElementById('safari_window').src = iPhoneApps[id];
	document.getElementById('safari_location').value = iPhoneApps[id];
 return false;
}

iPhoneDate = "";
xyz = 0;
var datenow;

function UpdateStatus(){
	datenow = new Date();
	iHour = datenow.getHours();
	iMinute = datenow.getMinutes();
	iSecond = datenow.getSeconds();
	if(iHour < 12){ampm = "AM"}else{ampm = "PM";iHour = iHour-12;}
	if(iHour < 10){iHour = "0" + iHour;}
	if(iHour == 0){iHour = "12";}
	if(iMinute < 10){iMinute = "0" + iMinute;}
	iPhoneDate = iHour + ":" + iMinute + " " + ampm;
	x = document.getElementById("iphone_bars");
	if(xyz > 0){
		document.getElementById("iphone_time").innerHTML = iPhoneDate;
		if((iSecond*iMinute%5) == 0){
			x.className = "none";}else{
			x.className = "full";
		}
	}
	xyz = 1;
	window.setTimeout(UpdateStatus, 30000);
}

UpdateStatus();

function goActive(){
	locationObj1.className='loadingAact';
	locationObj2.className='loadingBact';
	locationObj3.className='loadingCact';
	setTimeout(goOff,350);
}

function goOff(){
	locationObj1.className='loadingAoff';
	locationObj2.className='loadingBoff';
	locationObj3.className='loadingCoff';
	xyz = 0;
}

function goON(){
	locationObj1.className='loadingAon';
	locationObj2.className='loadingBon';
	locationObj3.className='loadingCon';
}

function getParameter ( queryString, parameterName ) {
// Add "=" to the parameter name (i.e. parameterName=value)
var parameterName = parameterName + "=";
if ( queryString.length > 0 ) {
// Find the beginning of the string
begin = queryString.indexOf ( parameterName );
// If the parameter name is not found, skip it, otherwise return the value
if ( begin != -1 ) {
// Add the length (integer) to the beginning
begin += parameterName.length;
// Multiple parameters are separated by the "&" sign
end = queryString.indexOf ( "&" , begin );
if ( end == -1 ) {
end = queryString.length
}
// Return the string
return unescape ( queryString.substring ( begin, end ) );
}
// Return "null" if no parameter has been found
return "null";
}
} 

function correctPNG() // correctly handle PNG transparency in Win IE 5.5 & 6.
{
   //alert("ie6");
   var arVersion = navigator.appVersion.split("MSIE")
   var version = parseFloat(arVersion[1]);
   if ((version >= 5.5 && version < 7) && (document.body.filters)) 
   {
      for(var i=0; i<document.images.length; i++)
      {
         var img = document.images[i]
         var imgName = img.src.toUpperCase()
         if (imgName.substring(imgName.length-3, imgName.length) == "PNG")
         {
            var imgID = (img.id) ? "id='" + img.id + "' " : ""
            var imgClass = (img.className) ? "class='" + img.className + "' " : ""
            var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='" + img.alt + "' "
            var imgStyle = "display:inline-block;" + img.style.cssText 
            if (img.align == "left") imgStyle = "float:left;" + imgStyle
            if (img.align == "right") imgStyle = "float:right;" + imgStyle
            if (img.parentElement.href) imgStyle = "cursor:hand;" + imgStyle
            var strNewHTML = "<span " + imgID + imgClass + imgTitle
            + " style=\"" + "width:" + img.width + "px; height:" + img.height + "px;" + imgStyle + ";"
            + "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader"
            + "(src=\'" + img.src + "\', sizingMethod='scale');\"></span>" 
            img.outerHTML = strNewHTML
            i = i-1
         }
      }
   }    
}

//navigator.userAgent.substr(navigator.userAgent.indexOf("MSIE")+5),1) < 7
//if(window.attachEvent != "undefined" ){ 
//	window.attachEvent("onload", correctPNG);
//}


/// Library Calls
$(document).ready(function() {
	locationObj1 = document.getElementById("safari_addressbglt");
	locationObj2 = document.getElementById("safari_input");
	locationObj3 = document.getElementById("safari_addressbgrt");
	$('#safari_location').focus(function(){
		$(this).select();
		locationObj1.className='loadingAon';
		locationObj2.className='loadingBon';
		locationObj3.className='loadingCon';
	});
	$('#safari_location').blur(function(){
		locationObj1.className='loadingAoff';
		locationObj2.className='loadingBoff';
		locationObj3.className='loadingCoff';
	});
	$('#tips_head').click(function(){
		$('#tips').toggle('fast');
	});
	$('#faq_head').click(function(){
		$('#faq').toggle('fast');
	});
	$('#apps_head').click(function(){
		$('#apps').toggle('fast');
	});
	$("html").keypress(function(e){
		if(window.event)	keycode = window.event.keyCode; //ie
		else if (e)	keycode = e.which; //ff
		if(keycode == 32){
			Rotate_Phone(null);//spacebar rotates
			return false;
		}
	});
	if (document.images){
	   img1 = new Image();
	   img2 = new Image();
	   img3 = new Image();
	   img4 = new Image();
	   img5 = new Image();
	   img6 = new Image();
	   img7 = new Image();
	   img1.src = "/img/UIRoundedTextFieldLeft.png";
	   img2.src = "/img/UIRoundedTextFieldMiddle.png";
	   img3.src = "/img/UIRoundedTextFieldRight.png";
	   img4.src = "/img/UIRoundedTextFieldProgressLeft.png";
	   img5.src = "/img/UIRoundedTextFieldProgressMiddle.png";
	   img6.src = "/img/UIRoundedTextFieldProgressRight.png";
	   img7.src = "/img/iphone_hor.png";
	}
});

function handler(event) {
  //alert(event.data.foo);
  alert(event.keyCode);
  alert(event.which);
  alert(event.type);
  alert(event.target);
}

function changeBG(HexColor){
 document.getElementById("docbody").style.backgroundColor = "#" + HexColor;
}

function swapAddressBar(onoff){
if(onoff){
if(document.getElementById('wrapper').className == "wide"){
 document.getElementById('safari_address').style.display="block";
 document.getElementById('safari_window').style.height="200px";
 document.getElementById('safari_window').style.top="111px";
}else if(document.getElementById('wrapper').className == "tall"){
 document.getElementById('safari_address').style.display="block";
 document.getElementById('safari_window').style.height="365px";
 document.getElementById('safari_window').style.top="210px";
}
}else{
if(document.getElementById('wrapper').className == "wide"){
 document.getElementById('safari_address').style.display="none";
 document.getElementById('safari_window').style.height="260px";
 document.getElementById('safari_window').style.top="51px";
}else if(document.getElementById('wrapper').className == "tall"){
 document.getElementById('safari_address').style.display="none";
 document.getElementById('safari_window').style.height="425px";
 document.getElementById('safari_window').style.top="150px";
}
}
}
