!function (factory) {
    if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
        // [1] CommonJS/Node.js
        // [1] 支持在module.exports.abc,或者直接exports.abc
        var target = module['exports'] || exports; // module.exports is for Node.js
        factory(target);
    } else if (typeof define === 'function' && define['amd']) {
        // [2] AMD anonymous module
        // [2] AMD 规范 
        //define(['exports'],function(exports){
        //    exports.abc = function(){}
        //});
        define(['exports'], factory);
    } else {
        // [3] No module loader (plain <script> tag) - put directly in global namespace
        factory(window['singleton'] = {});
    }
}(function (exports) {
    //exports = typeof exports !== 'undefined' ? exports : {};

    return (function () {
        var _a, _b;
        var Class = function () {

        };
        var that = {};
        that.getA = function () {
            return _a;
        };
        that.setA = function (a) {
            _a = a;
        }
        var _instance = null;
        var getInstance = function () {
            if (!_instance) {
                _instance = new Class();
            }
            return _instance;
        };
        Class.prototype = that;
        return {
            getInstance: getInstance
        };
    })();

});