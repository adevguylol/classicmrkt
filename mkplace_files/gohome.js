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

/* Mouseover and Back to Home for H1 */

/* Function to capture mouseover and mouseout events on the H1 */
function mouseOverH1() {
	if(!document.getElementById && !document.getElementsByTagName) return false;
	var el = document.getElementsByTagName('h1');
	el[0].onmouseover = function() {
		// When the mouse is over, change the background and cursor
		this.style.cursor = "pointer";
	}
	el[0].onmouseout = function() {
		// When the mouse is out, change cursor back
		this.style.cursor = "default";
	}
}

/* Function to return to Main Page when clicking H1 */
function clickH1() {
	if(!document.getElementById && !document.getElementsByTagName) return false;
	var el = document.getElementsByTagName('h1');
	el[0].onclick = function() {
		window.location.href = "/default.aspx"   
	}
}

function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}

addLoadEvent(clickH1);
addLoadEvent(mouseOverH1);

}
/*
     FILE ARCHIVED ON 18:25:25 Oct 02, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:33:51 Aug 25, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 794.832
  exclusion.robots: 0.076
  exclusion.robots.policy: 0.068
  cdx.remote: 0.065
  esindex: 0.012
  LoadShardBlock: 740.635 (3)
  PetaboxLoader3.resolve: 756.969 (3)
  PetaboxLoader3.datanode: 75.133 (4)
  load_resource: 131.836
*/