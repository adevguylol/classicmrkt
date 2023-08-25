var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*
 * popupver2.js
 * 
 * Popup shows when...
 * - clicks the product thumbnail image.
 *
 * Popup hides when...
 * - click the product thumbnail image.
 * - mouseout the product thumbnail image.
 * - mouseout the popup div. 
 * - mouseover another thumbnail image
 *
 * NOTE: The popup width, height, position, top, and left is defined in CSS
 * file.
 * 
 */
 
 
var millisec = 250;
var timeoutId;
var visiblePopup = null;
var imgArrow_on = "/searchResults/resultListMoreInfo-over.jpg";
var imgArrow = "/searchResults/resultListMoreInfo.jpg";
var imgArrowClassName = "moreInfoImage";

/*
 * handleover() 
 * parameter
 *		imageServerPath - arrow images's server path
 *		divObj - div object that triggers popup
 *		popdivId - targeted popup div id
 */  
function handleover(imageServerPath, divObj, popdivId)
{
	
	if(popdivId == visiblePopup)
		clearpopup();
	
	var elmImgs = divObj.getElementsByTagName("img");	
	imageServerPath += imgArrow_on;	
	for(var i=0; i<elmImgs.length; i++)
	{
		if(elmImgs[i].className == imgArrowClassName)
			elmImgs[i].setAttribute("src", imageServerPath);
	}

	//create onlcick event on this target
	divObj.onclick = function()
	{
		showHidePopup(popdivId)
	}
}

/*
 * handleover() 
 * parameter
 *		imageServerPath - arrow images's server path
 *		divObj - div object that triggers popup

 */ 
function handleout(imageServerPath, divObj) 
{
	var elmImgs = divObj.getElementsByTagName("img");	
	imageServerPath += imgArrow;	
	for(var i=0; i<elmImgs.length; i++)
	{
		if(elmImgs[i].className == imgArrowClassName)
			elmImgs[i].setAttribute("src", imageServerPath);
	}
	delayhide()
}

/*
 * showHidePopup()
 * parameter
 * 		popupdivId - targeted popup div id
 */
function showHidePopup(popdivId)
{
	if(document.getElementById)
	{
		var obj = document.getElementById(popdivId);
		if(obj.style.visibility == "hidden" || obj.style.visibility == "")
		{
			obj.style.visibility = "visible";
    		hidepopup();
			visiblePopup=popdivId;
		}
		else
			hidepopup();
	}
	return false;
}

/*
 * delayhide() 
 * 		delays popup closing timing.
 */
function delayhide()
{
	clearpopup();
	timeoutId = setTimeout(function(){hidepopup()}, millisec);
}

/*
 * hidepopup() 
 * 		close the targetd popup when a user click the "x".
 */
function hidepopup()
{
	clearpopup();
	if(visiblePopup!=null)
	{
		var o = document.getElementById(visiblePopup);		
		visiblePopup=null;
		o.style.visibility = "hidden";
	}
	return false;
}

/*
 * clearpopup() 
 * 		cancel the setTimeout(), so when a user mouseover the popup,
 * it will not disappeared. 
 */
function clearpopup()
{
	if(typeof timeoutId != "undefined")
	{
		clearTimeout(timeoutId);
	}
}



}
/*
     FILE ARCHIVED ON 18:25:31 Oct 02, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:33:53 Aug 25, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 136.445
  exclusion.robots: 0.066
  exclusion.robots.policy: 0.057
  cdx.remote: 0.051
  esindex: 0.009
  LoadShardBlock: 110.187 (3)
  PetaboxLoader3.datanode: 118.002 (4)
  load_resource: 2309.645
  PetaboxLoader3.resolve: 2284.47
*/