// findIndex polyfill
if (!Array.prototype.findIndex) {
    Object.defineProperty(Array.prototype, 'findIndex', {
        value: function (predicate) {
            'use strict';
            if (this === null) {
                throw new TypeError('Array.prototype.findIndex called on null or undefined');
            }
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }
            var list = Object(this);
            var length = list.length >>> 0;
            var thisArg = arguments[1];
            var value;

            for (var i = 0; i < length; i++) {
                value = list[i];
                if (predicate.call(thisArg, value, i, list)) {
                    return i;
                }
            }
            return -1;
        },
        enumerable: false,
        configurable: false,
        writable: false
    });
}

(function (factory, window) {
    // define an AMD module that relies on 'leaflet'
    if (typeof define === 'function' && define.amd) {
        define(['leaflet'], factory);

        // define a Common JS module that relies on 'leaflet'
    } else if (typeof exports === 'object') {
        module.exports = factory(require('leaflet'));
    }

    // attach your plugin to the global 'L' variable
    if (typeof window !== 'undefined' && window.L) {
        window.L.RedlinerNetworking = factory(L);
    }
}(function (L) {
    var RedlinerNetworking = {
        options: {
        },

        getMessage: function () {
            return 'Map Comment Tool Networking for SignalR';
        },

        addTo: function (map) {
            var self = this;
            self.ownMap = map;
            map.RedlinerNetworking = RedlinerNetworking;
	        var redlinerHub = $.connection.redlinerHub;
	        redlinerHub.client.hello = function () {
	            console.log('hello from signalr!');
	        };
	        $.connection.hub.start().done(function () {
	            var title = document.getElementsByTagName("title")[0].innerHTML;
	            redlinerHub.server.hello(title);
	        });

        },

    };

    // return your plugin when you are done
    return RedlinerNetworking;
}, window));
