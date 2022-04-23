cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "org.apache.cordova.inappbrowser.inappbrowser",
      "file": "plugins/org.apache.cordova.inappbrowser/www/inappbrowser.js",
      "pluginId": "org.apache.cordova.inappbrowser",
      "clobbers": [
        "window.open"
      ]
    },
    {
      "id": "es6-promise-plugin.Promise",
      "file": "plugins/es6-promise-plugin/www/promise.js",
      "pluginId": "es6-promise-plugin",
      "runs": true
    },
    {
      "id": "cordova-plugin-x-socialsharing.SocialSharing",
      "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
      "pluginId": "cordova-plugin-x-socialsharing",
      "clobbers": [
        "window.plugins.socialsharing"
      ]
    },
    {
      "id": "cordova-plugin-google-analytics.UniversalAnalytics",
      "file": "plugins/cordova-plugin-google-analytics/www/analytics.js",
      "pluginId": "cordova-plugin-google-analytics",
      "clobbers": [
        "analytics",
        "ga"
      ]
    },
    {
      "id": "cordova-plugin-x-toast.Toast",
      "file": "plugins/cordova-plugin-x-toast/www/Toast.js",
      "pluginId": "cordova-plugin-x-toast",
      "clobbers": [
        "window.plugins.toast"
      ]
    },
    {
      "id": "cordova-plugin-globalization.GlobalizationError",
      "file": "plugins/cordova-plugin-globalization/www/GlobalizationError.js",
      "pluginId": "cordova-plugin-globalization",
      "clobbers": [
        "window.GlobalizationError"
      ]
    },
    {
      "id": "cordova-plugin-globalization.globalization",
      "file": "plugins/cordova-plugin-globalization/www/globalization.js",
      "pluginId": "cordova-plugin-globalization",
      "clobbers": [
        "navigator.globalization"
      ]
    },
    {
      "id": "cordova-plugin-googleplus.GooglePlus",
      "file": "plugins/cordova-plugin-googleplus/www/GooglePlus.js",
      "pluginId": "cordova-plugin-googleplus",
      "clobbers": [
        "window.plugins.googleplus"
      ]
    }
  ];
  module.exports.metadata = {
    "org.apache.cordova.inappbrowser": "0.6.0",
    "es6-promise-plugin": "4.2.2",
    "cordova-plugin-x-socialsharing": "5.6.3",
    "cordova-plugin-google-analytics": "1.8.6",
    "cordova-plugin-x-toast": "2.7.2",
    "cordova-plugin-globalization": "1.11.0",
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-googleplus": "8.2.1"
  };
});