cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-zebra-plugin/www/ZebraPlugin.js",
        "id": "cordova-zebra-plugin.ZebraPlugin",
        "pluginId": "cordova-zebra-plugin",
        "clobbers": [
            "cordova.plugins.ZebraPlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-zebra-plugin": "0.0.1"
}
// BOTTOM OF METADATA
});