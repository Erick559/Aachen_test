/**
 * Created by wzhonggo on 2020/6/1.
 */
// ie not support ResizeObserver
if(typeof  ResizeObserver!="function"){
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.ResizeObserver=e()}(this,function(){"use strict";var t=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some(function(t,r){return t[0]===e&&(n=r,!0)}),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];t.call(e,i[1],i[0])}},e}()}(),e="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,n="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),r="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(n):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)},i=2;var o=20,s=["top","right","bottom","left","width","height","size","weight"],c="undefined"!=typeof MutationObserver,a=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,o=!1,s=0;function c(){n&&(n=!1,t()),o&&h()}function a(){r(c)}function h(){var t=Date.now();if(n){if(t-s<i)return;o=!0}else n=!0,o=!1,setTimeout(a,e);s=t}return h}(this.refresh.bind(this),o)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return t.forEach(function(t){return t.broadcastActive()}),t.length>0},t.prototype.connect_=function(){e&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),c?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){e&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;s.some(function(t){return!!~n.indexOf(t)})&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),h=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},u=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||n},f=b(0,0,0,0);function d(t){return parseFloat(t)||0}function p(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce(function(e,n){return e+d(t["border-"+n+"-width"])},0)}function v(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return f;var r=u(t).getComputedStyle(t),i=function(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=t["padding-"+i];e[i]=d(o)}return e}(r),o=i.left+i.right,s=i.top+i.bottom,c=d(r.width),a=d(r.height);if("border-box"===r.boxSizing&&(Math.round(c+o)!==e&&(c-=p(r,"left","right")+o),Math.round(a+s)!==n&&(a-=p(r,"top","bottom")+s)),!function(t){return t===u(t).document.documentElement}(t)){var h=Math.round(c+o)-e,v=Math.round(a+s)-n;1!==Math.abs(h)&&(c-=h),1!==Math.abs(v)&&(a-=v)}return b(i.left,i.top,c,a)}var l="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof u(t).SVGGraphicsElement}:function(t){return t instanceof u(t).SVGElement&&"function"==typeof t.getBBox};function _(t){return e?l(t)?function(t){var e=t.getBBox();return b(0,0,e.width,e.height)}(t):v(t):f}function b(t,e,n,r){return{x:t,y:e,width:n,height:r}}var m=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=b(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=_(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),y=function(){return function(t,e){var n,r,i,o,s,c,a,u=(r=(n=e).x,i=n.y,o=n.width,s=n.height,c="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,a=Object.create(c.prototype),h(a,{x:r,y:i,width:o,height:s,top:i,right:r+o,bottom:s+i,left:r}),a);h(this,{target:t,contentRect:u})}}(),g=function(){function e(e,n,r){if(this.activeObservations_=[],this.observations_=new t,"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof u(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new m(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof u(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(e){e.isActive()&&t.activeObservations_.push(e)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map(function(t){return new y(t.target,t.broadcastRect())});this.callback_.call(t,e,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),w="undefined"!=typeof WeakMap?new WeakMap:new t,O=function(){return function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=a.getInstance(),r=new g(e,n,this);w.set(this,r)}}();return["observe","unobserve","disconnect"].forEach(function(t){O.prototype[t]=function(){var e;return(e=w.get(this))[t].apply(e,arguments)}}),void 0!==n.ResizeObserver?n.ResizeObserver:O});
}

// document.currentScript polyfill for ie11
(function (document) {
  var currentScript = 'currentScript';

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function () {
        // IE 8-10 support script readyState
        // IE 11+ support stack trace
        try {
          throw new Error();
        }
        catch (err) {
          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i = 0,
            stackDetails = (/.*at [^(]*\((.*):(.+):(.+)\)$/ig).exec(err.stack),
            scriptLocation = (stackDetails && stackDetails[1]) || false,
            line = (stackDetails && stackDetails[2]) || false,
            currentLocation = document.location.href.replace(document.location.hash, ''),
            pageSource,
            inlineScriptSourceRegExp,
            inlineScriptSource,
            scripts = document.getElementsByTagName('script'); // Live NodeList collection

          if (scriptLocation === currentLocation) {
            pageSource = document.documentElement.outerHTML;
            inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
            inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
          }

          for (; i < scripts.length; i++) {
            // If ready state is interactive, return the script tag
            if (scripts[i].readyState === 'interactive') {
              return scripts[i];
            }

            // If src matches, return the script tag
            if (scripts[i].src === scriptLocation) {
              return scripts[i];
            }

            // If inline source matches, return the script tag
            if (
              scriptLocation === currentLocation &&
              scripts[i].innerHTML &&
              scripts[i].innerHTML.trim() === inlineScriptSource
            ) {
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


function SB4InitAPI(wrapperId, config) {
    // get wrapper , default is document.body if not find by id
    this.SBContentWrapper = document.getElementById(wrapperId);
    if (this.SBContentWrapper == null) {
        return;
    }
    this.config = {
        "launchPath": "",
        "allowURLParams": true,
        "minScale": 0.25,
        "maxScale": 4,
        "scaleMobile": 1,
        "scaleDesktop": 0,
        "scale": 1,
        "transform-origin": "left top"
    };
    this.profileList = [{"d":"Default","w":1280,"h":720,"force":true,"t":"PC","hMap":{"iMD06C9LLS8R4C4J1H8VO4JBSIO":0,"i915RLLCM03JIE8K8TU5UVO2BI4":0,"iOD6HHRK79BHCBUUM5JQT08HBMS":0,"iBP4FID13O12E50DT0PFDUL0DG8":0,"iJT3C48AO4FO08OARBIOA28RGNG":0,"i5H60Q9VFSFU15A50Q3CM2K7TLO":0},"id":"_"},{"d":"Phone Portrait","w":405,"h":720,"force":false,"t":"PHONE","hMap":{},"id":"PHONE-405x720"}];
    this.firstSceneId = 'i915RLLCM03JIE8K8TU5UVO2BI4';
    this.scromMode=0;
    this.previewEmbed=false;
    if (_.isObject(config)) {
        this.config = _.extend(this.config, config);
    }
    // overrite config
    if (config) {
        if (config["scaleRange"]) {
            var scaleArray = config["scaleRange"].split("-");
            this.config["minScale"] = parseFloat(scaleArray[0]) != NaN ? parseFloat(scaleArray[0]) : this.config["minScale"];
            this.config["maxScale"] = parseFloat(scaleArray[1]) != NaN ? parseFloat(scaleArray[1]) : this.config["maxScale"];
        }
    }

    if (SB4InitAPI.isMobile.any()) {
        this.config["scale"]=this.config["scaleMobile"];
    }else{
        this.config["scale"]=this.config["scaleDesktop"];
    }

    if (this.profileList.length == 1) {
        this.fixProfile = this.profileList[0];
    } else {
        if (this.config["profile"]) {
            var fixProfileDescription = this.config["profile"];
            this.fixProfile = _.find(this.profileList, function (profile) {
                return profile.d == fixProfileDescription;
            });
        } else if (this.config["profile"] == "") {
            this.fixProfile = this.selectProfile();
        }
    }


    _.each(this.profileList, function (profile) {
        if (_.isObject(profile.hMap)) {
            profile.hMap = _.omit(profile.hMap, function (value, key, object) {
                return value == 0;
            });
        }
    });


    this.scrollBarWidth = this.getScrollBarWidth();

    //param
    var query = window.location.search.substring(1);
    this.queryMap = {};
    if (this.config["allowURLParams"] === true) {
        if (query) {
            var vars = query.split('&');
            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split('=');
                this.queryMap[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
            }
        }

        // current scene id
        if (window.location.hash) {
            // maybe this scene id is not the lesson page id.
            this.initSceneId = window.location.hash.substring(1);
        }
    }

    this.init();
}

SB4InitAPI.prototype.init = function () {
    var heads = SB4InitAPI.commonHeads;
    if(this.config.launchPath!=""){
        heads = '<base href="'+this.config.launchPath+'">' + heads;
    }
    if (this.config["scale"] >= 0) {
        this.SBContentWrapper.innerHTML = '<iframe id="SB4Content" frameborder="0"></iframe><div id="scaleOverlay" style="width:100%;height:100%;background:rgba(128,128,128,0.85);text-align:center;position:absolute;font-size:48pt;font-weight:bold;color:white;display: none;justify-content: center;align-items: center;flex-direction: column"></div>';
        this.iframe = document.getElementById('SB4Content');
        this.iframe.style['position'] = "absolute";
        var sourceHead = heads + '<script src="app/global.js?bust=1.0.0.202404300805_1729701269845"></script><script data-main="main.js?bust=1.0.0.202404300805_1729701269845" src="lib/require.js?bust=1.0.0.202404300805_1729701269845"></script>\n';
        this.iframe.contentWindow.document.open();


        //pass additional embedded functions 
        this.iframe.contentWindow.OnProfileChangeFunction=typeof OnProfileChangeFunction == 'function'? OnProfileChangeFunction:undefined;
        this.iframe.contentWindow.DebugFunction=typeof DebugFunction == 'function'? DebugFunction:undefined;
        this.iframe.contentWindow.OnJavaLoadLessonFunction=typeof OnJavaLoadLessonFunction == 'function'? OnJavaLoadLessonFunction:undefined;
        this.iframe.contentWindow.SB4WindowHandlerFunction=typeof SB4WindowHandlerFunction == 'function'? SB4WindowHandlerFunction:undefined;
        this.iframe.contentWindow.GetInitProfileIdFunction=typeof GetInitProfileIdFunction == 'function'? GetInitProfileIdFunction:undefined;
        this.iframe.contentWindow.StageLogFunction=typeof StageLogFunction == 'function'? StageLogFunction:undefined;
        if (typeof OnJavaLoadLessonFunction == 'function') {
            this.previewEmbed=true;
        }

         // init SB4API before loading global.js
        this.iframe.contentWindow.SB4API = this.getInitSB4API();

        this.iframe.contentWindow.document.write("<!DOCTYPE html><html><head>" + sourceHead + "</head><body></body></html>");
        this.iframe.contentWindow.document.close();

        this.sb4ResizeHandle();
        var self = this;
        var sb4ResizeHandleThrottle = _.throttle(function () {
            self.sb4ResizeHandle();
        }, 300, {leading: false});
        var supportOrientation = (typeof window.orientation == "number" && typeof window.onorientationchange == "object");
        if (supportOrientation) {
            window.addEventListener("orientationchange", sb4ResizeHandleThrottle, false);
        } else {
            new ResizeObserver(sb4ResizeHandleThrottle).observe(this.SBContentWrapper);
        }

        this.iframe.contentWindow.onSceneHeightChange = function () {
            self.sb4ResizeHandle();
        };


    } else {
        //remove wrapper overflow: hidden; style
        this.SBContentWrapper.style.removeProperty("overflow");

        window.SB4API = this.getInitSB4API();

        document.head.insertAdjacentHTML('beforeend', heads);
        var s1 = document.createElement('script');
        s1.setAttribute('src', 'app/global.js?bust=1.0.0.202404300805_1729701269845');
        var s2 = document.createElement('script');
        s2.setAttribute('data-main', 'main.js?bust=1.0.0.202404300805_1729701269845');
        s2.setAttribute('src', 'lib/require.js?bust=1.0.0.202404300805_1729701269845');
        document.head.appendChild(s1);
        document.head.appendChild(s2);
    }
};

SB4InitAPI.prototype.getInitSB4API = function () {
    var api = {};
    if (this.fixProfile) {
        api.fixProfile = this.fixProfile;
    }
    api.initSceneId = this.initSceneId;
    api.queryMap = this.queryMap;
    if (this.scromMode>=1&&this.scromMode<=3) {
        api.scormAPI = this.getScormAPI();
        if(api.scormAPI==null){
            alert("Unable to locate the LMS's API Implementation.");
        }
    }
    api.locationPath = window.location.pathname;
    api.closeLesson = this.closeLesson;
    api.openWindow = this.openWindow;
    api.launchWindow=window;
    api.previewEmbed=this.previewEmbed;
    return api;
};

SB4InitAPI.prototype.getAPI = function () {
    if (this.config["scale"] >= 0) {
        return this.iframe.contentWindow.SB4API;
    } else {
        return SB4API;
    }
};

SB4InitAPI.prototype.showProfieScaleInfo = function (scale,x,y,w,h) {

    let overlayEl=document.getElementById('scaleOverlay');
    if (overlayEl==null) return;
    if (this.showProfieScaleInfo_ref!=null) {
        clearInterval(this.showProfieScaleInfo_ref);
        this.showProfieScaleInfo_ref=null;
    }



    overlayEl.style.display='flex';
    overlayEl.style.width=w+ "px";
    overlayEl.style.height=h+ "px";
    //set up a timer to clear the overlay
    if (this.previewEmbed ) {
        var OVERLAY_SCALE=false;
        if (scale>1  && OVERLAY_SCALE) {
            //safari embedded mode does not work well if scaled beyond 100% (iframe mouse region issue)
            overlayEl.innerHTML="<p>Scale: "+Math.round(scale*100) + '%</p><p style="font-size:16pt;">Mouse interactions not supported when scale is greater than 100% in OSX preview mode</p>';
            return;
        }
    }
    overlayEl.innerHTML="<p>Scale: "+Math.round(scale*100) + '%</p>';
    this.showProfieScaleInfo_ref = setInterval(clearOverLay, 600);
    var thatobj=this;
    function clearOverLay() {
        overlayEl.style.display='none';
        clearInterval(thatobj.showProfieScaleInfo_ref);
        thatobj.showProfieScaleInfo_ref=null;
     }
};



/**
 *  recalculate scale when container size change or init or scene height
 */
SB4InitAPI.prototype.sb4ResizeHandle = function () {
    var profile;

    if (this.fixProfile) {
        profile = this.fixProfile;
    } else {
        profile = this.selectProfile();
    }
    // if (this.SBContentWrapper) {
    //     console.log("scaling ",profile,this.getAPI().currentViewport,this.getAPI().currentFrameSize,this.iframe.getAttribute('style'));
    // }
    var pageWidth = profile.w;
    var pageHeight = profile.h;
    //update pageHeight by current scene id
    var currentSceneId;
    if (this.iframe.contentWindow.SB4API.currentScene) {
        currentSceneId = this.iframe.contentWindow.SB4API.currentScene.id;
    } else if (this.initSceneId) {
        currentSceneId = this.initSceneId;
    } else {
        currentSceneId = this.firstSceneId;
    }

    if (_.has(profile.hMap, currentSceneId)) {
        pageHeight = profile.hMap[currentSceneId];
    }


    var scale = 1;
    var SBContentWrapperRect = this.SBContentWrapper.getBoundingClientRect();

    var iframeWidth;
    var iframeHeight;
    if (this.config["scale"] == 1) {
        //如果有滚动条需要去掉滚动条再计算scale
        scale = SBContentWrapperRect.width / pageWidth;
        var hasScrollbar = false;
        if (SBContentWrapperRect.height / pageHeight < scale) {
            hasScrollbar = true;
            scale = (SBContentWrapperRect.width) / (pageWidth + this.scrollBarWidth);
        }
        if (scale > this.config["maxScale"]) {
            scale = this.config["maxScale"];
        } else if (scale < this.config["minScale"]) {
            scale = this.config["minScale"];
        }

        if (hasScrollbar) {
            iframeWidth = (pageWidth + this.scrollBarWidth) + "px";
        } else {
            iframeWidth = pageWidth + "px";
        }

        iframeHeight = (SBContentWrapperRect.height / scale) + "px";

    } else if (this.config["scale"] == 2) {
        var sw = SBContentWrapperRect.width / pageWidth;
        var sh = SBContentWrapperRect.height / pageHeight;
        if (sw < sh) {
            scale = sw;
            if (scale > this.config["maxScale"]) {
                scale = this.config["maxScale"];
            } else if (scale < this.config["minScale"]) {
                scale = this.config["minScale"];
            }
            iframeWidth = pageWidth + "px";
            iframeHeight = (SBContentWrapperRect.height / scale) + "px";
        } else {
            scale = sh;
            if (scale > this.config["maxScale"]) {
                scale = this.config["maxScale"];
            } else if (scale < this.config["minScale"]) {
                scale = this.config["minScale"];
            }
            iframeWidth = (SBContentWrapperRect.width / scale) + "px";
            iframeHeight = pageHeight + "px";
        }
    } else {
        scale = 1;
        iframeWidth = SBContentWrapperRect.width+ "px";
        iframeHeight = SBContentWrapperRect.height+ "px";
        //remove wrapper overflow: hidden; style
        this.SBContentWrapper.style.removeProperty("overflow");
    }

    this.iframe.style.width = iframeWidth;
    this.iframe.style.height = iframeHeight;
    if (this.previewEmbed &&  this.config['scale']!=0) {
        this.showProfieScaleInfo(scale,0,0,SBContentWrapperRect.width,SBContentWrapperRect.height);
    }

    //this.iframe.style.border = 'solid';
    //this.iframe.style.borderColor = 'red';
    this.iframe.style['-moz-transform'] = 'scale(' + scale + ', ' + scale + ')';
    this.iframe.style['-ms-transform'] = 'scale(' + scale + ', ' + scale + ')';
    this.iframe.style['-webkit-transform'] = 'scale(' + scale + ', ' + scale + ')';
    this.iframe.style['-o-transform'] = 'scale(' + scale + ', ' + scale + ')';
    this.iframe.style['transform'] = 'scale(' + scale + ', ' + scale + ')';
    // this.iframe.style['-moz-transform-origin'] = '0 0';
    this.iframe.style['-ms-transform-origin'] = this.config['transform-origin'];
    this.iframe.style['-webkit-transform-origin'] = this.config['transform-origin'];
    this.iframe.style['transform-origin'] = this.config['transform-origin'];

    //update viewport
    this.iframe.contentWindow.SB4API.currentViewport = [SBContentWrapperRect.width, SBContentWrapperRect.height];

};

SB4InitAPI.prototype.selectProfile = function () {
    var profile;
    var SBContentWrapperRect = this.SBContentWrapper.getBoundingClientRect();
    var clientWidth = SBContentWrapperRect.width;
    var clientHeight = SBContentWrapperRect.height;
    if (SB4InitAPI.isMobile.any()) {
        // var clientWidth = document.documentElement.clientWidth;
        var phoneLandscapeProfileArray = [];
        var tabletLandscapeProfileArray = [];
        var phonePortraitProfileArray = [];
        var tabletPortraitProfileArray = [];
        var pcProfileArray = [];
        var baseProfileArray;
        _.each(this.profileList, function (profile, index) {
            if (profile.t == "PHONE") {
                if (profile.w > profile.h) {
                    phoneLandscapeProfileArray.push(profile);
                } else {
                    phonePortraitProfileArray.push(profile);
                }
            } else if (profile.t == "TABLET") {
                if (profile.w > profile.h) {
                    tabletLandscapeProfileArray.push(profile);
                } else {
                    tabletPortraitProfileArray.push(profile);
                }
            } else {
                pcProfileArray.push(profile);
            }
        })

        if (SB4InitAPI.getOrientation() == "landscape") {

            if (SB4InitAPI.isMobile.anyPhone()) {
                if (phoneLandscapeProfileArray.length > 0) {
                    baseProfileArray = phoneLandscapeProfileArray;
                } else if (tabletLandscapeProfileArray.length > 0) {
                    baseProfileArray = tabletLandscapeProfileArray;
                } else {
                    baseProfileArray = pcProfileArray;
                }
            } else {
                if (tabletLandscapeProfileArray.length > 0) {
                    baseProfileArray = tabletLandscapeProfileArray;
                } else {
                    baseProfileArray = pcProfileArray;
                }
            }
        } else {

            if (SB4InitAPI.isMobile.anyPhone()) {
                if (phonePortraitProfileArray.length > 0) {
                    baseProfileArray = phonePortraitProfileArray;
                } else if (tabletPortraitProfileArray.length > 0) {
                    baseProfileArray = tabletPortraitProfileArray;
                } else {
                    baseProfileArray = pcProfileArray;
                }

            } else {
                if (tabletPortraitProfileArray.length > 0) {
                    baseProfileArray = tabletPortraitProfileArray;
                } else {
                    baseProfileArray = pcProfileArray;
                }
            }
        }

        var profileArray = _.filter(baseProfileArray, function (profile) {
            return profile.w <= clientWidth;
        });
        var maxWidthInProfile = 0;
        _.each(profileArray, function (sub, index) {
            if (sub.w > maxWidthInProfile) {
                maxWidthInProfile = sub.w;
            }
        })
        profileArray = _.filter(profileArray, function (profile) {
            return profile.w == maxWidthInProfile;
        });
        if (profileArray.length == 0) {
            profile = baseProfileArray[0];
        } else if (profileArray.length == 1) {
            profile = profileArray[0]
        } else if (profileArray.length > 1) {
            profileArray = _.sortBy(profileArray, function (profile) {
                return profile.h;
            });
            profile = _.find(profileArray.reverse(), function (profile) {
                return profile.h < clientHeight;
            })
            if (profile == null) {
                profile = _.last(profileArray);
            }
        }
    } else {

        var pcProfileArray = [];
        var notPcProfileArray = [];
        _.each(this.profileList, function (profile, index) {
            if (profile.t == "PC") {
                pcProfileArray.push(profile);
            } else {
                notPcProfileArray.push(profile);
            }
        });
        var profileArray = _.filter(pcProfileArray, function (profile) {
            return profile.w <= clientWidth;
        });

        if (profileArray.length == 0) {
            profileArray = _.filter(notPcProfileArray, function (profile) {
                return profile.w <= clientWidth;
            });
        }
        var maxWidthInProfile = 0;
        _.each(profileArray, function (sub, index) {
            if (sub.w > maxWidthInProfile) {
                maxWidthInProfile = sub.w;
            }
        })
        profileArray = _.filter(profileArray, function (profile) {
            return profile.w == maxWidthInProfile;
        });
        if (profileArray.length == 0) {
            profile = this.profileList[0];
        } else if (profileArray.length == 1) {
            profile = profileArray[0]
        } else if (profileArray.length > 1) {
            profileArray = _.sortBy(profileArray, function (profile) {
                return profile.h;
            });
            profile = _.find(profileArray.reverse(), function (profile) {
                return profile.h < clientHeight;
            })
            if (profile == null) {
                profile = _.last(profileArray);
            }
        }
    }
    return profile;
};


SB4InitAPI.getOrientation = function () {
    var orientation = window.orientation;
    if (typeof orientation == "number" && typeof window.onorientationchange == "object") {
        switch (orientation) {
            case 90:
            case -90:
                orientation = 'landscape'; //这里是横屏
                break;
            default:
                orientation = 'portrait';  //这里是竖屏
                break;
        }
    } else {
        orientation = (window.innerWidth > window.innerHeight) ? "landscape" : "portrait";
    }
    return orientation;


};

SB4InitAPI.isNewIPAD = function () {
    if (SB4InitAPI.newIPAD == undefined) {
        var newIPAD = false;
        // https://stackoverflow.com/a/58017456
        if (navigator.userAgent.match(/Mac/) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2) {
            newIPAD = true;
        }
        SB4InitAPI.newIPAD = newIPAD;
    }
    return SB4InitAPI.newIPAD;
}

SB4InitAPI.isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    }, AndroidNonTablet: function () {
        return SB4InitAPI.isMobile.Android() && navigator.userAgent.match(/Mobile/i) && !navigator.userAgent.match(/Kindle/i);
    }, BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    }, iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i) || SB4InitAPI.isNewIPAD();
    }, iPhone: function () {
        return navigator.userAgent.match(/iPhone/i);
        // }, iPhoneX: function () {
        //     return SB4InitAPI.isMobile.iPhone() && getDisplayWindow().screen.height == 812;
    }, iOSNonTablet: function () {
        return navigator.userAgent.match(/iPhone|iPod/i);
    }, Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    }, Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    }, any: function () {
        return (SB4InitAPI.isMobile.Android() || SB4InitAPI.isMobile.BlackBerry() || SB4InitAPI.isMobile.iOS() || SB4InitAPI.isMobile.Opera() || SB4InitAPI.isMobile.Windows());
    }, anyPhone: function () {
        return (SB4InitAPI.isMobile.AndroidNonTablet() || SB4InitAPI.isMobile.BlackBerry() || SB4InitAPI.isMobile.iOSNonTablet() || SB4InitAPI.isMobile.Opera() || SB4InitAPI.isMobile.Windows());
    }
};

SB4InitAPI.commonHeads =
    '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\n' +
    '<meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1, minimum-scale=1 ,user-scalable=no">\n' +
    '<meta http-equiv="X-UA-Compatible" content="IE=Edge" />\n' +
    '<title>Aachen_V1</title>';


/**
 * get scroller bar width (https://stackoverflow.com/questions/986937/how-can-i-get-the-browsers-scrollbar-sizes)
 * @returns {number}
 */
SB4InitAPI.prototype.getScrollBarWidth = function () {
    var inner = document.createElement('p');
    inner.style.width = "100%";
    inner.style.height = "200px";

    var outer = document.createElement('div');
    outer.style.position = "absolute";
    outer.style.top = "0px";
    outer.style.left = "0px";
    outer.style.visibility = "hidden";
    outer.style.width = "200px";
    outer.style.height = "150px";
    outer.style.overflow = "hidden";
    outer.appendChild(inner);

    document.body.appendChild(outer);
    var w1 = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var w2 = inner.offsetWidth;
    if (w1 == w2) w2 = outer.clientWidth;

    document.body.removeChild(outer);

    return (w1 - w2);
};

/**
 * get scorm api
 * @returns {*}
 */
SB4InitAPI.prototype.getScormAPI = function () {
    if (this.scromMode == 3) {
        return this.getScorm12API();
    } else {
        return this.getScorm2004API();
    }
}

SB4InitAPI.prototype.getScorm2004API=function () {
    var findAPITries = 0;

    function findAPI(win) {
        while ((win.API_1484_11 == null) && (win.parent != null) && (win.parent != win)) {
            findAPITries++;

            if (findAPITries > 500) {
                return null;
            }
            win = win.parent;
        }

        return win.API_1484_11;
    }

    var theAPI = findAPI(window);
    if ((theAPI == null) && (window.opener != null) && (typeof(window.opener)
        != "undefined")) {
        theAPI = findAPI(window.opener);
    }
    return theAPI;
}

SB4InitAPI.prototype.getScorm12API=function () {
    function SCORM_ScanParentsForApi(win) {

        var MAX_PARENTS_TO_SEARCH = 500;
        var nParentsSearched = 0;

        while ((win.API == null || win.API === undefined) &&
            (win.parent != null) && (win.parent != win) &&
            (nParentsSearched <= MAX_PARENTS_TO_SEARCH)
            ) {

            nParentsSearched++;
            win = win.parent;
        }

        return win.API;
    }

    function SearchParentsForContentRoot() {

        var contentRoot = null;
        var wnd = window;
        var i = 0;	//safety guard to prevent infinite loop

        if (wnd.scormdriver_content) {
            contentRoot = wnd;
            return contentRoot;
        }

        while (contentRoot == null && wnd != window.top && (i++ < 100)) {
            if (wnd.scormdriver_content) {
                contentRoot = wnd;
                return contentRoot;
            }
            else {
                wnd = wnd.parent;
            }
        }
        return null;
    }

    var API=null;
     try {
        if ((window.parent != null) && (window.parent != window)) {
            API = SCORM_ScanParentsForApi(window.parent);
        }

        if ((API == null) && (window.top.opener != null)) {
            API = SCORM_ScanParentsForApi(window.top.opener);
        }
    } catch (err) {
        API = SearchParentsForContentRoot();
    }


	return API;
}
/**
 * close sb4 lesson
 * @param v
 * @param exitUrl
 */
SB4InitAPI.prototype.closeLesson=function (v, exitUrl) {
    if (v == "top") {
        top.close();
    } else if (v == "this") {
        window.close();
    } else if (v == "redirect") {
        if (exitUrl!=null && exitUrl!="") {
            window.location.href = exitUrl;
        }
    }
};

/**
 * open window
 */
SB4InitAPI.prototype.openWindow=function (uri,target,openParams) {
   if(openParams){
       window.open(uri, target,openParams);
   }else{
       window.open(uri, target);
   }
};

// get param
var sbWrapperId=document.currentScript.dataset.wrapperId;
var sbConfig=document.currentScript.dataset.config;
try {
    sbConfig = JSON.parse(sbConfig);
} catch (e) {
    sbConfig={}
}

//load underscore-min.js and init SB4InitAPI
if (typeof _ != 'function') {
    var underScoreScript = document.createElement("script");
    underScoreScript.onload=function(){
        new SB4InitAPI(sbWrapperId, sbConfig);
    };
    var launchPath = "";
    if(sbConfig["launchPath"]!=null && sbConfig["launchPath"]!=""){
         launchPath= sbConfig["launchPath"];
    }
    underScoreScript.src = launchPath + 'lib/underscore-min.js?bust=1.0.0.202404300805_1729701269845';
    document.body.appendChild(underScoreScript);
}else{
     new SB4InitAPI(sbWrapperId, sbConfig);
}




