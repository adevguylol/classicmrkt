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
    var menuItems = document.getElementById("topNavigation").getElementsByTagName("A");
    for (var i=0; i<menuItems.length; i++) {
        menuItems[i].onfocus=function() {
            this.className+=(this.className.length>0? " ": "") + "keyboardFocus"; //a:focus
            this.parentNode.className+=(this.parentNode.className.length>0? " ": "") + "listHover"; //li < a:focus

            if(this.parentNode.parentNode.parentNode.nodeName == "LI") {
                this.parentNode.parentNode.parentNode.className+=(this.parentNode.parentNode.parentNode.className.length>0? " ": "") + "listHover"; //li < ul < li < a:focus
            }
        }
        menuItems[i].onblur=function() {
            this.className=this.className.replace(new RegExp("( ?|^)keyboardFocus\\b"), "");
            this.parentNode.className=this.parentNode.className.replace(new RegExp("( ?|^)listHover\\b"), "");
            if(this.parentNode.parentNode.parentNode.nodeName == "LI") {
                this.parentNode.parentNode.parentNode.className=this.parentNode.parentNode.parentNode.className.replace(new RegExp("( ?|^)listHover\\b"), "");
            }
        }
        menuItems[i].onmouseover=function() {
            if(menuItems[i] != this) {
               for(var k = 0; k < menuItems.length; k++){
                     menuItems[k].blur();

               }
            }
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
     FILE ARCHIVED ON 18:25:17 Oct 02, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:33:50 Aug 25, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 161.746
  exclusion.robots: 0.088
  exclusion.robots.policy: 0.075
  cdx.remote: 0.07
  esindex: 0.011
  LoadShardBlock: 108.515 (3)
  PetaboxLoader3.datanode: 74.814 (4)
  load_resource: 83.666
  PetaboxLoader3.resolve: 51.13
*/