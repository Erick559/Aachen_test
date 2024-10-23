require.config(sb4runtime.requiresetting);

// create body content
var sourceBodyContent=
    '\t<div aria-hidden="true" style="height:0px;" id="sb4Svg"><svg focusable="false" xmlns="http://www.w3.org/2000/svg"  width="0"   height="0">   <defs>        <linearGradient id="sb4FillNone" x1="0%" y1="100%" x2="0%" y2="0%"></linearGradient>    </defs></svg></div>\n' +
    // NVDA not read play button if not this div, see #AXON-5060
     '\t<div id="a508" class="sb4-not-focus"  tabindex="1" aria-label="lesson" style="left:5%;width: 90%; height: 90%; display: block; position: absolute;" class="notouch"></div>\n' +
    '\t<!--<div style="position:absolute"><button id="lesson_begin" aria-label="lesson begin" role="tooltip" style="width:1px;height:1px;border:none;background-color:rgba(255,255,255,0)"></button></div>\n' +
    '\t<div style="position:absolute"><button id="tab_previous" style="width:1px;height:1px;border:none;background-color:rgba(255,255,255,0)"></button></div>-->\n' +
    '\t<!--<div id="temp_previous_div" aria-hidden="true"></div>-->\n' +
    '\t<!--<div id="temp_previous_div"></div>-->\t\n' +
    '\t<main aria-label="lesson">\n' +
    '\t<div id="playerstage" class="sb4stage"\n' +
    '\t\tstyle="float: left; border: 0px; border-color: red; border-style: dashed;">\n' +
    '\t</div>\n' +
    '\t</main>\n' +
    '\t<div id="player-msgbox" style="width:10px;height:20px"></div>\n' +
     '\t<div id="playFull" class=\'fullscreen notVisible\'></div>\n' +
     '<div id="fullscreen" ><div id="loadingDiv" class="loading"></div></div>'+
    '\t<!--<div id="temp_next_div"></div>-->\n' +
    '\t<!--<div id="temp_next_div" aria-hidden="true"></div>\n' +
    '\t<div style="position:absolute" ><button aria-hidden="true" id="tab_next" style="width:1px;height:1px;border:none;background-color:rgba(255,255,255,0)"></button></div>\n' +
    '\t<div style="position:absolute" ><button id="lesson_end"  aria-label="lesson end" role="tooltip" style="width:1px;height:1px;border:none;background-color:rgba(255,255,255,0)"></button></div>-->\t\n' +
    '\t\n' ;
document.body.innerHTML = sourceBodyContent;

// create head
for(var index=0; index<SB4API.configCssList.length; index++){
    var css = document.createElement('link');
     css.setAttribute("rel", "stylesheet");
     css.setAttribute("type", "text/css");
     css.setAttribute("href", SB4API.addBustParam(SB4API.configCssList[index]));
     document.head.appendChild(css);
}
for(var index=0; index<SB4API.configJsList.length; index++){
      var js = document.createElement('script');
     js.setAttribute("src", SB4API.addBustParam(SB4API.configJsList[index]));
     document.head.appendChild(js);
}

SB4API.stageLog = function (message) {
    if (typeof StageLogFunction == 'function') {
        StageLogFunction(message);
    }else{
        console.log(message);
    }

};

require(["sb4core/loading","underscore"], function () {

require(["sb4core/init"], function(){

	require([ "axon" ], function() {

	});

});

});