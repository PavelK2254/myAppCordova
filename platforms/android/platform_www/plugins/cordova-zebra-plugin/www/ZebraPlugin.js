cordova.define("cordova-zebra-plugin.ZebraPlugin", function(require, exports, module) {
var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'ZebraPlugin', 'coolMethod', [arg0]);
};

exports.sendZplOverTcp = function (arg0,arg1, success, error) {
    exec(success, error, 'ZebraPlugin', 'sendZplOverTcp', [arg0,arg1]);
};

exports.sendCpclOverTcp = function (arg0,arg1, success, error) {
    exec(success, error, 'ZebraPlugin', 'sendCpclOverTcp', [arg0,arg1]);
};

exports.printConfigLabelUsingDnsName = function (arg0, success, error) {
    exec(success, error, 'ZebraPlugin', 'printConfigLabelUsingDnsName', [arg0]);
};

});
