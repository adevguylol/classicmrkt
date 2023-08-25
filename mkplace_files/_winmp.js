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

function truncate(s, at, postfix)
{
	if (s.length > at)
	{
		var cutOffIdx = at - 1;
		var spaceIdx = s.lastIndexOf(' ', cutOffIdx);
		if (spaceIdx > -1)
			cutOffIdx = spaceIdx;
		s = s.substr(0, cutOffIdx) + postfix;
	}
	
	return s;
}

function show_ads(attempt, header, containerId)
{   
	if (typeof zSr != 'undefined')
	{
		var i = 6;
		var itemHtml = '';
		if (i < zSr.length)
		{
            itemHtml += '<ul>';
            
            if (typeof header != 'undefined')
                itemHtml += '<li class="title">' + unescape(header) + '</li>';
                
			while (i < zSr.length)
			{
				var descr	= truncate(zSr[i++], 80, "...");
				var unused	= zSr[i++];
				var clickURL= zSr[i++];
				var title	= truncate(zSr[i++], 40, "...");
				var sitehost= zSr[i++];
                var bid		= zSr[i++];
                itemHtml += '<li><meta name="WT.ad" content="' + title + '"><a href="' + clickURL + '" target="WinMP_Ad" onclick="dcsMultiTrack(\'WT.ac\', \'' + title  + '\');">' + title + '</a>&nbsp;:&nbsp;' + descr + '</li>';

			}
			itemHtml += '</ul>';
			document.getElementById(containerId).innerHTML  += itemHtml;
		}
	}
	else
	{
		if (attempt <= 20)
			window.setTimeout("show_ads(" + ++attempt + ", '" + header + "', '" + containerId + "')", 500);
	}
}

function addToProdComp(prodId, checked, maxCount, maxReachedMsg)
{
	var cnt = setCookieValue("prodcomp", prodId, (checked?prodId:null), maxCount, maxReachedMsg);
	if (cnt < 0)
		return false;
	var prodcountT = document.getElementById("prodCompCountT");
	var prodcountB = document.getElementById("prodCompCountB");
	if (cnt > 0)
	{
		if (prodcountT)
			prodcountT.innerHTML = "&nbsp;" + cnt + "&nbsp;";
		if (prodcountB)
			prodcountB.innerHTML = "&nbsp;" + cnt + "&nbsp;";
	}		
	else
	{
		if (prodcountT)
			prodcountT.innerHTML = "";
		if (prodcountB)
			prodcountB.innerHTML = "";
	}
	return true;
}

function setCookieValue(name, currVal, newVal, maxCount, maxReachedMsg) 
{
	var valcount = 0;
	var val = getCookieValue(name);
	if (val && val.length > 0)
	{
		var values = val.split("|");
		var found = -1;
		if (currVal)
			for(var valIdx = 0; valIdx < values.length; valIdx++)
			{
				if (values[valIdx] == currVal)
					found = valIdx;
			}
		if (!newVal && found > -1)
		{
			var newvalues = new Array();
			if (found < values.length - 1)
			{
				newvalues = newvalues.concat(values.slice(found + 1, values.length));
			}
			if (found > 0)
			{
				newvalues = newvalues.concat(values.slice(0, found));
			}
			values = newvalues;
		}
		if (newVal && found == -1)
			if (values.length < maxCount)
				values[values.length] = newVal;
			else
			{
				alert(maxReachedMsg);
				return -1;
			}
		newVal = values.join("|");
		if (newVal.length > 0)
			document.cookie = name + "=" + escape(newVal) + ";";
		else
			document.cookie = name + "=";
		valcount = values.length;
	}
	else
	{
		if (newVal)
		{
			document.cookie = name + "=" + escape(newVal) + ";";
			valcount = 1;
		}
	}
	return valcount;
}

function getCookieValue(name) 
{
	var dc = document.cookie;
	var search = name + "=";
	var pos = dc.indexOf("; " + search);
	if (pos == -1) 
	{
		pos = dc.indexOf(search);
		if (pos == -1) return null;
	} 
	else
	{
		pos += 2;
	}
	var pos2 = dc.indexOf(";", pos);
	if (pos2 == -1)
		pos2 = dc.length;
	var val = dc.substring(pos + search.length, pos2);
	return unescape(val);
}

function submitProdComp(name, msg)
{
	var val = getCookieValue(name);
	if (!val || val.length == 0 || val.split("|").length < 2)
	{
		alert(unescape(msg));
		return false;
	}
	return true;
}

function adjustScreenElementsWidth(width)
{
	try
	{
		var availWidth;
		if (document.body.clientWidth)
			availWidth = document.body.clientWidth;
		else 
			availWidth = window.innerWidth;
		if (width > availWidth)
		{
			document.getElementById("headerTile").style.width = width;
			document.getElementById("dark2whiteBar").style.width = width;
			document.getElementById("footerTile").style.width = width;
		}
	}
	catch(e)	
	{ }
}

function Redirect(strURL) 
{
	window.location=strURL;
	return false;
}

function Refresh(strURL) 
{
	window.location=strURL;
	return false;
}

function handleSearchBarKeyPress(e, textboxId, selectId)
{
    var keyPressed;
    if (document.all)
    {
	    keyPressed = e.keyCode;
    }
    else
    {
	    keyPressed = e.which;
    }
    if (keyPressed == 13)
    { 
	    return submitSearch(textboxId,selectId);
    }
    else	
    {
	    return true;
    }
}

function submitSearch(searchTextboxId,filterDropdownId)
{

var textboxSearch = document.getElementById(searchTextboxId);
var dropdownFilter = document.getElementById(filterDropdownId);

if (textboxSearch == null || dropdownFilter == null)
{
  return true;
}

var searchText = textboxSearch.value; 
searchText = searchText.trim();

var i = dropdownFilter.selectedIndex;
    
if (((i == 0 && searchText.length <= 1)) || ((i > 0) && (searchText.length == 1)))
{
  alert('Please enter at least 2 characters into the search box.');
  return false;
}

if(( i > 0) && (searchText.length <= 0))
  var url = "category.aspx";
else
var url = "results.aspx";

if ((searchText != null) && (searchText.length >= 2))      
{
  if (url.indexOf("?") < 0)
    url += "?";
  url += "text=" + escape(searchText);
}

  
if (url.indexOf("?") < 0)
    url += "?";
else 
    url += "&";    
  
dropdownValue = dropdownFilter.options[i].value;
url += dropdownValue.replace("?","");


location = url;
return false;
}

function tbd()
{
}

function strtrim() 
{
    var s;
    s = this.replace(/^\s+/g,'');
    s = s.replace(/\s{2,999}/g,' ');
    s = s.replace(/[\%\<\>\"]/g,'');
    s = s.replace(/\s+$/g,'');
    return s;
}

String.prototype.trim = strtrim;

function PopUp(url,name,options)
{
    var PopWindow = window.open(url,name,options);
    PopWindow.opener = this;
    PopWindow.focus();
}
    

var imageId;
	
function ChangeImgRim(section, imgId)
{
		var elmImg;
		elmImg = document.getElementById(imgId);
		var ratingImg=null;
		for(var i = 0;i<section.attributes.length; i++)
	    {
		    if (section.attributes[i].nodeName.toLowerCase() == "image")
		    {
			    ratingImg = section.attributes[i].nodeValue;			
		    break;
		    }	
		}
		if (ratingImg != null)
		  elmImg.src=ratingImg;		
	return false;
}

function RestoreImgRim(imgId)
{
	var originalImg;
	var elmImg;
	elmImg = document.getElementById(imgId);
	originalImg = elmImg.attributes.getNamedItem("originalImg").value;
	elmImg.src = originalImg;
}




}
/*
     FILE ARCHIVED ON 14:26:16 Sep 30, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:33:51 Aug 25, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 108.817
  exclusion.robots: 0.097
  exclusion.robots.policy: 0.085
  cdx.remote: 0.077
  esindex: 0.012
  LoadShardBlock: 55.356 (3)
  PetaboxLoader3.datanode: 65.108 (4)
  load_resource: 98.967
  PetaboxLoader3.resolve: 66.237
*/