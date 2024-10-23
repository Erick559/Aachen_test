//smartly config. Do not edit outside of Smartly.
// https://github.com/umdjs/umd/blob/master/templates/amdWeb.js
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else {
        // Browser globals
        root.sb4actionconfig = factory(root.b);
    }
}(typeof self !== 'undefined' ? self : this, function (b) {
    // Use b in some fashion.

    // Just return a value to define the module export.
    // This example returns an object, but the module
    // can return a function as the exported value.
var sb4actionconfig=
    {
        "_OBJECT_KEY": {
            "MOVE_TIME": "_CONF_md",
            "LAYOUT_TIME": "_CONF_me",
            "EFFECT_TIME": "_CONF_ed",
            "EXIT_MSG": "_CONF_exit.msg",
            "EXIT_URL": "_CONF_exit.url",
            "XAPI_CONTEXT": "_CONF_xapi.context",
            "CSS_FILTER_BLUR": "_CONF_cssblur",
            "CSS_FILTER_GRAYSCALE": "_CONF_cssgrayscale",
            "CSS_FILTER_INVERT": "_CONF_cssinvert",
            "CSS_FILTER_OPACITY": "_CONF_cssopacity",
            "CSS_FILTER_BRIGHTNESS": "_CONF_cssbrightness",
            "CSS_FILTER_CONTRAST": "_CONF_csscontrast",
            "CSS_FILTER_SATURATE": "_CONF_csssaturate",
            "CSS_FILTER_SEPIA": "_CONF_csssepia",
            "DND_LAYOUT": "_CONF_dnd.layout",
            "Q_PATH":"_CONF_qpath"
        },
    "blk_conf": [
        [
            "move duration (ms)",
            "md",
            1000
        ],
        [
            "move easing",
            "me",
            'linear'
        ],
        [
            "effect duration (ms)",
            "ed",
            1000
        ],
        [
            "lesson exit message",
            "exit.msg",
            "You may close your browser"
        ],
        [
            "lesson exit url",
            "exit.url",
            "https://example.com"
        ],
        [
            "xapi context",
            "xapi.context",
            "{\"instructor\":{\"name\":\"John\",\"mbox\":\"mailto:a@example.com\"}}"
        ],
        [
            "filter blur",
            "cssblur",
            5
        ],
        [
            "filter grayscale",
            "cssgrayscale",
            100
        ],
        [
            "filter invert",
            "cssinvert",
            100
        ],
        [
            "filter opacity",
            "cssopacity",
            50
        ],
        [
            "filter brightness",
            "cssbrightness",
            150
        ],
        [
            "filter contrast",
            "csscontrast",
            150
        ],
        [
            "filter saturate",
            "csssaturate",
            150
        ],
        [
            "filter sepia",
            "csssepia",
            100
        ],
        [
            "ajax credential",
            "ajax.credential",
            true
        ],
        [
            "DnD layout duration (lesson)",
            "dnd.layout",
            100
        ],
        [
            "enforce qualified path",
            "qpath",
            false
        ]
    ]
};

        return sb4actionconfig;

}));



