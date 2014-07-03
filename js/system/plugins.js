/*
 * Salvattore 1.0.4 by @rnmp and @ppold
 * https://github.com/rnmp/salvattore
 */

!function(a,b){"object"==typeof exports?module.exports=b():"function"==typeof define&&define.amd?define("salvattore",[],b):a.salvattore=b()}(this,function(){window.matchMedia||(window.matchMedia=function(){"use strict";var a=window.styleMedia||window.media;if(!a){var b=document.createElement("style"),c=document.getElementsByTagName("script")[0],d=null;b.type="text/css",b.id="matchmediajs-test",c.parentNode.insertBefore(b,c),d="getComputedStyle"in window&&window.getComputedStyle(b,null)||b.currentStyle,a={matchMedium:function(a){var c="@media "+a+"{ #matchmediajs-test { width: 1px; } }";return b.styleSheet?b.styleSheet.cssText=c:b.textContent=c,"1px"===d.width}}}return function(b){return{matches:a.matchMedium(b||"all"),media:b||"all"}}}()),function(){if(window.matchMedia&&window.matchMedia("all").addListener)return!1;var a=window.matchMedia,b=a("only all").matches,c=!1,d=0,e=[],f=function(){clearTimeout(d),d=setTimeout(function(){for(var b=0,c=e.length;c>b;b++){var d=e[b].mql,f=e[b].listeners||[],g=a(d.media).matches;if(g!==d.matches){d.matches=g;for(var h=0,i=f.length;i>h;h++)f[h].call(window,d)}}},30)};window.matchMedia=function(d){var g=a(d),h=[],i=0;return g.addListener=function(a){b&&(c||(c=!0,window.addEventListener("resize",f,!0)),0===i&&(i=e.push({mql:g,listeners:h})),h.push(a))},g.removeListener=function(a){for(var b=0,c=h.length;c>b;b++)h[b]===a&&h.splice(b,1)},g}}(),function(){for(var a=0,b=["ms","moz","webkit","o"],c=0;c<b.length&&!window.requestAnimationFrame;++c)window.requestAnimationFrame=window[b[c]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[b[c]+"CancelAnimationFrame"]||window[b[c]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(b){var c=(new Date).getTime(),d=Math.max(0,16-(c-a)),e=window.setTimeout(function(){b(c+d)},d);return a=c+d,e}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)})}();var a=function(a,b){"use strict";var c={},d=[],e=function(a,b,c){a.dataset?a.dataset[b]=c:a.setAttribute("data-"+b,c)};return c.obtain_grid_settings=function(b){var c,d,e=a.getComputedStyle(b,":before"),f=e.getPropertyValue("content").slice(1,-1),g=f.match(/^\s*(\d+)(?:\s?\.(.+))?\s*$/);return g?(c=g[1],d=g[2],d=d?d.split("."):["column"]):(g=f.match(/^\s*\.(.+)\s+(\d+)\s*$/),d=g[1],c=g[2],c&&(c=c.split("."))),{numberOfColumns:c,columnClasses:d}},c.add_columns=function(a,d){for(var f,g=c.obtain_grid_settings(a),h=g.numberOfColumns,i=g.columnClasses,j=new Array(+h),k=b.createDocumentFragment(),l=h;0!==l--;)f="[data-columns] > *:nth-child("+h+"n-"+l+")",j.push(d.querySelectorAll(f));j.forEach(function(a){var c=b.createElement("div"),d=b.createDocumentFragment();c.className=i.join(" "),Array.prototype.forEach.call(a,function(a){d.appendChild(a)}),c.appendChild(d),k.appendChild(c)}),a.appendChild(k),e(a,"columns",h)},c.remove_columns=function(c){var d=b.createRange();d.selectNodeContents(c);var f=Array.prototype.filter.call(d.extractContents().childNodes,function(b){return b instanceof a.HTMLElement}),g=f.length,h=f[0].childNodes.length,i=new Array(h*g);Array.prototype.forEach.call(f,function(a,b){Array.prototype.forEach.call(a.children,function(a,c){i[c*g+b]=a})});var j=b.createElement("div");return e(j,"columns",0),i.filter(function(a){return!!a}).forEach(function(a){j.appendChild(a)}),j},c.recreate_columns=function(b){a.requestAnimationFrame(function(){c.add_columns(b,c.remove_columns(b))})},c.media_query_change=function(a){a.matches&&Array.prototype.forEach.call(d,c.recreate_columns)},c.get_css_rules=function(a){var b;try{b=a.sheet.cssRules||a.sheet.rules}catch(c){return[]}return b||[]},c.get_stylesheets=function(){return Array.prototype.concat.call(Array.prototype.slice.call(b.querySelectorAll("style[type='text/css']")),Array.prototype.slice.call(b.querySelectorAll("link[rel='stylesheet']")))},c.media_rule_has_columns_selector=function(a){for(var b,c=a.length;c--;)if(b=a[c],b.selectorText&&b.selectorText.match(/\[data-columns\](.*)::?before$/))return!0;return!1},c.scan_media_queries=function(){var b=[];a.matchMedia&&(c.get_stylesheets().forEach(function(d){Array.prototype.forEach.call(c.get_css_rules(d),function(d){d.media&&c.media_rule_has_columns_selector(d.cssRules)&&b.push(a.matchMedia(d.media.mediaText))})}),b.forEach(function(a){a.addListener(c.media_query_change)}))},c.next_element_column_index=function(a){var b,c,d,e=a.children,f=e.length,g=e.length-1;for(g;g>=0&&(c=e[g],d=c.children.length,!(0!==g&&b>d));g--){if(g+1===f){g=0;break}b=d}return g},c.create_list_of_fragments=function(a){for(var c=new Array(a),d=0;d!==a;)c[d]=b.createDocumentFragment(),d++;return c},c.append_elements=function(a,b){var d=a.children,e=d.length,f=c.create_list_of_fragments(e),g=c.next_element_column_index(a);b.forEach(function(a){f[g].appendChild(a),g===e-1?g=0:g++}),Array.prototype.forEach.call(d,function(a,b){a.appendChild(f[b])})},c.prepend_elements=function(a,d){var e=a.children,f=e.length,g=c.create_list_of_fragments(f),h=f-1;d.forEach(function(a){var b=g[h];b.insertBefore(a,b.firstChild),0===h?h=f-1:h--}),Array.prototype.forEach.call(e,function(a,b){a.insertBefore(g[b],a.firstChild)});for(var i=b.createDocumentFragment(),j=d.length%f;0!==j--;)i.appendChild(a.lastChild);a.insertBefore(i,a.firstChild)},c.register_grid=function(f){if("none"!==a.getComputedStyle(f).display){var g=b.createRange();g.selectNodeContents(f);var h=b.createElement("div");h.appendChild(g.extractContents()),e(h,"columns",0),c.add_columns(f,h),d.push(f)}},c.init=function(){var a=b.querySelectorAll("[data-columns]");Array.prototype.forEach.call(a,c.register_grid),c.scan_media_queries()},c.init(),{append_elements:c.append_elements,prepend_elements:c.prepend_elements,register_grid:c.register_grid}}(window,window.document);return a});


/* Picturefill */

(function(w){"use strict";w.picturefill=function(){var ps=w.document.getElementsByTagName("span");for(var i=0,il=ps.length;i<il;i++){if(ps[i].getAttribute("data-picture")!==null){var sources=ps[i].getElementsByTagName("span"),matches=[];for(var j=0,jl=sources.length;j<jl;j++){var media=sources[j].getAttribute("data-media");if(!media||(w.matchMedia&&w.matchMedia(media).matches)){matches.push(sources[j]);}}
var picImg=ps[i].getElementsByTagName("img")[0];if(matches.length){var matchedEl=matches.pop();if(!picImg||picImg.parentNode.nodeName==="NOSCRIPT"){picImg=w.document.createElement("img");picImg.alt=ps[i].getAttribute("data-alt");}
picImg.src=matchedEl.getAttribute("data-src");matchedEl.appendChild(picImg);}
else if(picImg){picImg.parentNode.removeChild(picImg);}}}};if(w.addEventListener){w.addEventListener("resize",w.picturefill,false);w.addEventListener("DOMContentLoaded",function(){w.picturefill();w.removeEventListener("load",w.picturefill,false);},false);w.addEventListener("load",w.picturefill,false);}
else if(w.attachEvent){w.attachEvent("onload",w.picturefill);}}(this));


/*--------------------------------------------------------------------
 * jQuery pixel/em conversion plugins: toEm() and toPx()
 * by Scott Jehl (scott@filamentgroup.com), http://www.filamentgroup.com
 * Copyright (c) Filament Group
 * Dual licensed under the MIT (filamentgroup.com/examples/mit-license.txt) or GPL (filamentgroup.com/examples/gpl-license.txt) licenses.
 * Article: http://www.filamentgroup.com/lab/update_jquery_plugin_for_retaining_scalable_interfaces_with_pixel_to_em_con/
 * Options:
        scope: string or jQuery selector for font-size scoping
 * Usage Example: $(myPixelValue).toEm(); or $(myEmValue).toPx();
--------------------------------------------------------------------*/

$.fn.toEm = function(settings){
    settings = jQuery.extend({
        scope: 'body'
    }, settings);
    var that = parseInt(this[0],10),
        scopeTest = jQuery('<div style="display: none; font-size: 1em; margin: 0; padding:0; height: auto; line-height: 1; border:0;">&nbsp;</div>').appendTo(settings.scope),
        scopeVal = scopeTest.height();
    scopeTest.remove();
    return (that / scopeVal).toFixed(8);
};


$.fn.toPx = function(settings){
    settings = jQuery.extend({
        scope: 'body'
    }, settings);
    var that = parseFloat(this[0]),
        scopeTest = jQuery('<div style="display: none; font-size: 1em; margin: 0; padding:0; height: auto; line-height: 1; border:0;">&nbsp;</div>').appendTo(settings.scope),
        scopeVal = scopeTest.height();
    scopeTest.remove();
    return Math.round(that * scopeVal);
};

function viewport() {
    var height = (window.innerHeight ? window.innerHeight : $w.height());
    var padded_cover = height - $(3.25).toPx({}) - $(.4).toPx({});
    var full = height - $(.7).toPx({});
    var ninety = height * 0.90;
    var three_quarters = height * 0.75;
    var half = height * 0.5;
    var two_thirds = height * 0.68;
    var third = height * 0.3;
    var fifth = height * 0.2;
    padded_cover = parseInt(padded_cover) + 'px';
    full = parseInt(full) + 'px';
    ninety = parseInt(ninety) + 'px';
    three_quarters = parseInt(three_quarters) + 'px';
    two_thirds = parseInt(two_thirds) + 'px';
    half = parseInt(half) + 'px';
    third = parseInt(third) + 'px';
    fifth = parseInt(fifth) + 'px';
    $(".padded_cover").css('height',padded_cover);
    $(".full").css('height',full);
    $(".ninety").css('height',ninety);
    $(".three_quarters").css('height',three_quarters);
    $(".two_thirds").css('height',two_thirds);
    $(".half").css('height',half);
    $(".third").css('height',third);
    $(".fifth").css('height',fifth);

}

$(document).ready(function() {
    viewport();

    $(window).resize(function() {
        viewport();
    });
});
