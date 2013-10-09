/**
 * helloworld.js - basic code example.
 */
(function (global) {
    "use strict";
    // Export as App
    function show(css_id) {
        var elem = document.getElementById(css_id);
        elem.textContent += "Hello world!";
    }

    // Export functions e.g. 
    //     global.HelloWorld = {};
    //     HelloWorld.show = show;
    if (global.HelloWorld === undefined) {
        global.HelloWorld = {};
    }
    global.HelloWorld.show = show;
}(this));
