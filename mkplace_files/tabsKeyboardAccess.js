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

function keyboardAccess() {
    var menuItems = document.getElementById("tabs").getElementsByTagName("A");
    for (var i=0; i<menuItems.length; i++) {
        menuItems[i].onfocus=function() {
            this.className+=(this.className.length>0? " ": "") + "keyboardFocus"; //a:focus
        }
        menuItems[i].onblur=function() {
            this.className=this.className.replace(new RegExp("( ?|^)keyboardFocus\\b"), "");    
        }
    }
}

// Firefox, etc.:
if(window.addEventListener){
    window.addEventListener('load', keyboardAccess, false);
}
// IE-Win:
else if(window.attachEvent) {
    window.attachEvent('onload', keyboardAccess);
}

}
/*
     FILE ARCHIVED ON 18:25:27 Oct 02, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:33:51 Aug 25, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 167.052
  exclusion.robots: 0.106
  exclusion.robots.policy: 0.094
  cdx.remote: 0.068
  esindex: 0.011
  LoadShardBlock: 122.711 (3)
  PetaboxLoader3.datanode: 578.274 (4)
  load_resource: 581.139
  PetaboxLoader3.resolve: 72.538
*/