/**
 * @license SmartBuilder HTML5 widget framework, Copyright (c) 2014
 *          SuddenlySmart;
 */

var SB4TabOrder={
	previousOrder:[],
	nextOrder:[],
	focusElement:"",
	current:"",
	//other tab way
	normalOrder:[],
}
var assetmap={};

function SB4WgtSvc(id) {
	this.uid = id;

	this.getWidgetAssetURI = function(s) {
		return SB4API.util.getWidgetAssetURI(s, this.uid);
	};

	this.getFullUIKey = function() {
		return "sb4." + this.getShortUIKey();
	};

	this.getShortUIKey = function() {
		return this.uid.replace(/\./g, "_");
	};

	this.addInitTask = function(t) {
		SB4WgtSvc._loadingTasks.push(t);		
	};

};
SB4WgtSvc._loadingTasks=[];



var sb4runtime = {
	version : "0.1.0",
	mode : "prod",
	requiresetting : {
		waitSeconds : 0,
urlArgs : "bust=1.0.0.202404300805_1729701269845",
//		deps : [ "css!style/axon.css",
//				"css!style/ui-lightness/jquery-ui-1.10.4.custom.min.css" ],
		deps : [],
		config : {
			"sb4core/logging" : {
				_debug_log : false,
			},
			"sb4core/sbobj" : {
				"widgetsvc" : new SB4WgtSvc("axon.sbobj"),
			},
		},
		paths : {
			"jquery" : "lib/jquery.min",
			"jqueryui" : "lib/jqueryui",
			"scrollbar": "lib/scrollbar",
			"mousewheel":"lib/jquery.mousewheel.min",
			"underscore" : "lib/underscore-min",
			"underscore_str": "lib/underscore.string.min",
			"modernizr":"lib/modernizr.custom.44495",
			"text" : "lib/text",
			"pako_inflate" : "lib/pako_inflate.min",
			"sb4core" : "app",
			"widgets" : "wgt",
			"util" : "lib/util",
			"sb4core/loloader": "app/loloader",
			"xapiwrapper" : "lib/xapiwrapper.min",
			"perload": "lib/preloadjs-0.6.0.min",
		// "selectBoxIt" : "lib/util/selectBoxIt/widget",
		},
		shim : {
			"util/selectBoxIt/widget" : ["jqueryui/widget",
					"css!util/selectBoxIt/style.css" ],
			"modernizr": [],
			'scrollbar':[],
			'underscore': {
	            exports: '_'
	        },
	        'underscore_str': {
	            deps: ['underscore'],
	        },
	        "xapiwrapper" : [],	
	        'preload':[],
		},
		map : {
			'*' : {
				'css' : 'lib/css',
				"image" : "lib/image",
				"json" : "lib/json",
			}
		}
	},
	"getWidgetInfo":function(s) {
			var wgtreg=undefined;
			var a=this.requiresetting.config["wgt/"+s+"/s"];
		  if (a!=undefined && a["widgetsvc"]!=undefined) {
		  	wgtreg=a;
		  }
			return wgtreg;
	},
	 "loggerSetting": {
	        "engine": 1,
	        "parse": 1,
	        "util": 1,
	        "player": 1,
	        "box": 1,
	        "task": 1,
	        "timeline": 1,
	        "default": 1
	    }
};


(function() {
	var wconfig = {
			"wgt/com.smartbuilder.axon.widget.frame/s": {
				"widgetsvc" : new SB4WgtSvc("com.smartbuilder.axon.widget.frame"),
			},	
			"wgt/com.smartbuilder.axon.widget.slide/s": {
				"widgetsvc" : new SB4WgtSvc("com.smartbuilder.axon.widget.slide"),
			},	
			"wgt/com.smartbuilder.axon.widget.slideset/s": {
				"widgetsvc" : new SB4WgtSvc("com.smartbuilder.axon.widget.slideset"),
			},	
			"wgt/com.smartbuilder.axon.widget.image/s": { "widgetsvc" : new SB4WgtSvc("com.smartbuilder.axon.widget.image"),},	
			"wgt/com.smartbuilder.axon.widget.text.richtext/s": { "widgetsvc" : new SB4WgtSvc("com.smartbuilder.axon.widget.text.richtext"),},	
			"wgt/com.smartbuilder.axon.widget.icon/s": { "widgetsvc" : new SB4WgtSvc("com.smartbuilder.axon.widget.icon"),},	
			"wgt/com.smartbuilder.axon.widget.shape/s": { "widgetsvc" : new SB4WgtSvc("com.smartbuilder.axon.widget.shape"),},	
			"wgt/com.smartbuilder.axon.widget.video/s": { "widgetsvc" : new SB4WgtSvc("com.smartbuilder.axon.widget.video"),},	
			"wgt/com.smartbuilder.axon.widget.text.text/s": { "widgetsvc" : new SB4WgtSvc("com.smartbuilder.axon.widget.text.text"),},	
			"wgt/com.smartbuilder.axon.widget.button/s": { "widgetsvc" : new SB4WgtSvc("com.smartbuilder.axon.widget.button"),},	
			"wgt/com.smartbuilder.axon.widget.hotspot/s": { "widgetsvc" : new SB4WgtSvc("com.smartbuilder.axon.widget.hotspot"),},	
	};
	var config = sb4runtime.requiresetting.config;
	for ( var a in wconfig) {
		config[a] = wconfig[a];
	}
}());

var SB4XAPI={};

function FlowContext () {
    this.listenerList=[];
    this.context={};
    FlowContext.prototype.addListener = function(listener) {
        this.listenerList.push(listener);
    };
    FlowContext.prototype.removeListener=function(listener) {
    	this.listenerList=_.without(this.listenerList, listener);
    };
    FlowContext.prototype.setContext=function(context) {
        this.context=context;
    };
    FlowContext.prototype.fireEvent=function() {
    	var self = this;
    	_.each(this.listenerList, function(listener, index){
    		listener(self.context);
    	});
    };
}


var SB4APITemp=SB4API;
var SB4API = {
	emptyMP3:'',
	emptyMP4:'data:video/mp4;base64,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',
	configCssList:[],
    configJsList:[],
    isLTR: true,
	functions:{},
	showErrorMessage:true,
urlArgs : "bust=1.0.0.202404300805_1729701269845",
    cacheSvgIdList:[],
	lms:{"type":0,"isCommitLMS":false},
	xapi:SB4XAPI==undefined?undefined:SB4XAPI,
	volume:undefined,	
	debug: null,
	tincan : null,
	txtLib : null,
	linkLib : null,
	flowcontext:new FlowContext(),
	LEGACY_KEYMAP:{
		'Spacebar':' ',
		'Esc':'Escape',
		'Up':'ArrowUp',
		'Down':'ArrowDown',
		'Left':'ArrowLeft',
		'Right':'ArrowRight',
	},

	util:{
		getWidgetAssetURI : function(s,type) {
			if (s==null || s=='') return '';
			if(s.indexOf("http")==0){
		         return SB4API.addBustParam(s);
		    }
			if (assetmap) {
				if (assetmap[s]!=undefined) return SB4API.addBustParam(assetmap[s]);
			}
			return SB4API.addBustParam("wgt/" + type + "/" + s);
		},
		getWidgetAssetProperties : function(s) {
			s = s+"_properties";
			var props;	
			if (assetmap) {
				props = assetmap[s];
				if (props==undefined){
					props={};
				}
			}
			return props;
		}
	},
	
	addBustParam: function(url){
		return url;
    	//return url+((-1===url.indexOf("?") ? "?":"&")+SB4API.urlArgs)
	}
};
if(SB4APITemp){
	for(var key in SB4APITemp){
		SB4API[key]=SB4APITemp[key];
	}
}
//SetDebugPublishTask will set DEBUG false
var DEBUG=false;
if (SB4API.queryMap["debug"]!=null && SB4API.queryMap["debug"]=='1') {
	DEBUG=false; //DEBUG may be false due to external program
}

SB4API._console=console;
SB4API.isConsoleEnable=DEBUG;
SB4API._consoleCtrLock=0;
SB4API.setConsoleEnable=function(b,m){
	const l=b==true;
	if (SB4API.isConsoleEnable==l) {
		return;
	}
	SB4API.isConsoleEnable= l;
	if (SB4API._consoleCtrLock>0) {
		clearTimeout(SB4API._consoleCtrLock);
		SB4API._consoleCtrLock=0;
	}
	if ( Number.isInteger(m) && m>0 ) {
		SB4API._consoleCtrLock=setTimeout(() => {SB4API.isConsoleEnable=!l;SB4API._consoleCtrLock=0}, m)
	}	
};
console = {};
console.log = function(){
	if(SB4API._EMBEDDED==true || SB4API.isConsoleEnable===true){
		var args = Array.prototype.slice.call(arguments);
		SB4API._console.log.apply(SB4API._console,args);
		if (typeof StageLogFunction=='function') {
			let cache = [];
			// Circular reference found, discard key
			let str = JSON.stringify(args, function(key, value) {
				if (typeof value === "object" && value !== null) {
				if (cache.indexOf(value) !== -1) {
					return;
				}
				cache.push(value);
				}
				return value;
			});
			cache = null; // reset the cache
			StageLogFunction("dev: "+str);
		}
	}
};

