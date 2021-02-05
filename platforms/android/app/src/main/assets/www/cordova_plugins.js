cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-android-permissions.Permissions",
      "file": "plugins/cordova-plugin-android-permissions/www/permissions.js",
      "pluginId": "cordova-plugin-android-permissions",
      "clobbers": [
        "cordova.plugins.permissions"
      ]
    },
    {
      "id": "cordova-plugin-camera.Camera",
      "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "Camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverOptions",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverOptions"
      ]
    },
    {
      "id": "cordova-plugin-camera.camera",
      "file": "plugins/cordova-plugin-camera/www/Camera.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "navigator.camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverHandle",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverHandle"
      ]
    },
    {
      "id": "cordova-plugin-mobile-ocr.rectext",
      "file": "plugins/cordova-plugin-mobile-ocr/www/rectext.js",
      "pluginId": "cordova-plugin-mobile-ocr",
      "clobbers": [
        "textocr"
      ]
    },
    {
      "id": "cordova-plugin-tesseract.TesseractPlugin",
      "file": "plugins/cordova-plugin-tesseract/www/tesseractPlugin.js",
      "pluginId": "cordova-plugin-tesseract",
      "clobbers": [
        "TesseractPlugin"
      ]
    },
    {
      "id": "cordova-plugin-texttospeech.tts",
      "file": "plugins/cordova-plugin-texttospeech/www/tts.js",
      "pluginId": "cordova-plugin-texttospeech",
      "clobbers": [
        "TTS"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-android-permissions": "1.0.2",
    "cordova-plugin-camera": "4.1.0",
    "cordova-plugin-mobile-ocr": "3.1.1",
    "cordova-plugin-tesseract": "0.0.1",
    "cordova-plugin-texttospeech": "0.1.1",
    "cordova-plugin-whitelist": "1.3.4"
  };
});