cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-android-permissions/www/permissions-dummy.js",
        "id": "cordova-plugin-android-permissions.Permissions",
        "pluginId": "cordova-plugin-android-permissions",
        "clobbers": [
            "cordova.plugins.permissions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-mobile-ocr/www/rectext.js",
        "id": "cordova-plugin-mobile-ocr.rectext",
        "pluginId": "cordova-plugin-mobile-ocr",
        "clobbers": [
            "textocr"
        ]
    },
    {
        "file": "plugins/cordova-plugin-tesseract/www/tesseractPlugin.js",
        "id": "cordova-plugin-tesseract.TesseractPlugin",
        "pluginId": "cordova-plugin-tesseract",
        "clobbers": [
            "TesseractPlugin"
        ]
    },
    {
        "file": "plugins/cordova-plugin-texttospeech/www/tts.js",
        "id": "cordova-plugin-texttospeech.tts",
        "pluginId": "cordova-plugin-texttospeech",
        "clobbers": [
            "TTS"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-android-permissions": "1.0.2",
    "cordova-plugin-mobile-ocr": "3.1.1",
    "cordova-plugin-tesseract": "0.0.1",
    "cordova-plugin-texttospeech": "0.1.1",
    "cordova-plugin-whitelist": "1.3.4"
}
// BOTTOM OF METADATA
});