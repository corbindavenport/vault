//
//  iWeb - GoogleMap.js
//  Copyright (c) 2007 Apple Inc. All rights reserved.
//

function GoogleMap(instanceID)
{if(instanceID){Widget.apply(this,arguments);}}
GoogleMap.prototype=new Widget();GoogleMap.prototype.constructor=GoogleMap;GoogleMap.prototype.widgetIdentifier="com-apple-iweb-widget-GoogleMap";GoogleMap.prototype.mapRequestTemplate='center=#{center}&zoomLevel=#{zoomLevel}&showZoom=#{showZoom}&mapType=#{mapType}&locatedAddress=#{locatedAddress}&locatedAddressPoint=#{locatedAddressPoint}&showInfo=#{showInfo}&language=#{language}';GoogleMap.prototype.iframeTemplate='<iframe id="#{instanceID}-iframe" name="#{instanceID}-iframe" src="#{mapURL}?#{mapRequest}" width="100%" height="100%" scrolling="no" marginheight="0" marginwidth="0" frameborder="0"></iframe>';GoogleMap.prototype.mapURL='http://www.me.com/st/1/sharedassets/maps/iweb2/';GoogleMap.prototype.onload=function()
{var mapRequestTemplate=new Template(this.mapRequestTemplate);var mapRequest=mapRequestTemplate.evaluate({center:this.escapedPreferenceForKey("center"),zoomLevel:this.escapedPreferenceForKey("zoomLevel"),showZoom:this.escapedPreferenceForKey("showZoom"),mapType:this.escapedPreferenceForKey("mapType"),locatedAddress:this.escapedPreferenceForKey("locatedAddress"),locatedAddressPoint:this.escapedPreferenceForKey("locatedAddressPoint"),showInfo:this.escapedPreferenceForKey("showInfo"),language:this.escapedPreferenceForKey("language")});var iframeTemplate=new Template(this.iframeTemplate);var iframeText=iframeTemplate.evaluate({instanceID:this.instanceID,mapRequest:mapRequest,mapURL:this.mapURL});this.div().innerHTML=iframeText;if(this.preferences&&this.preferences.postNotification)
this.preferences.postNotification("BLWidgetIsSafeToDrawNotification",1);}
GoogleMap.prototype.escapedPreferenceForKey=function(key)
{var value=this.preferenceForKey(key);if(value!==undefined)
value=encodeURIComponent(value);return value;}
