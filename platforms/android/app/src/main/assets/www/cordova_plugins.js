cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-zebra-plugin.ZebraPlugin",
      "file": "plugins/cordova-zebra-plugin/www/ZebraPlugin.js",
      "pluginId": "cordova-zebra-plugin",
      "clobbers": [
        "cordova.plugins.ZebraPlugin"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-zebra-plugin": "0.0.1"
  };
});