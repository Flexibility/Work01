cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.dialogs/www/notification.js",
        "id": "org.apache.cordova.dialogs.notification",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.dialogs/www/android/notification.js",
        "id": "org.apache.cordova.dialogs.notification_android",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/www/Coordinates.js",
        "id": "org.apache.cordova.geolocation.Coordinates",
        "clobbers": [
            "Coordinates"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/www/PositionError.js",
        "id": "org.apache.cordova.geolocation.PositionError",
        "clobbers": [
            "PositionError"
        ]
    },
	{
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/www/Position.js",
        "id": "org.apache.cordova.geolocation.Position",
        "clobbers": [
            "Position"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/www/geolocation.js",
        "id": "org.apache.cordova.geolocation.geolocation",
        "clobbers": [
            "navigator.geolocation"
        ]
    },	
	{  
        "file": "plugins/com.dlxx.mam.plugins.load/www/loadconfig.js",  
        "id": "org.apache.cordova.loadconfig",  
        "merges": [  
			"navigator.loadconfig" 
        ]  
    },
	{  
        "file": "plugins/com.dlxx.mam.plugins.phone/www/phone.js",  
        "id": "org.apache.cordova.phone.phone",  
        "clobbers": [  
			"navigator.phone" 
        ]  
    },
	{  
        "file": "plugins/com.dlxx.mam.plugins.phone/www/PhoneError.js",  
        "id": "org.apache.cordova.phone.PhoneError",  
 		"clobbers": [
            "PhoneError"
        ]
    }, 
	{
        "file": "plugins/com.dlxx.mam.plugins.eventupload/www/eventupload.js",  
        "id": "org.apache.cordova.eventupload",
        "merges": [
            "navigator.eventupload"
        ]
    },
	{
        "file": "plugins/com.dlxx.mam.plugins.requestheader/www/requestheader.js",  
        "id": "org.apache.cordova.requestheader",
        "merges": [
            "navigator.ajax"
        ]
    },
	{
        "file": "plugins/com.dlxx.mam.plugins.calander/www/calander.js",  
        "id": "org.apache.cordova.calander",
        "merges": [
            "navigator.calander"
        ]
    },
	{
		"file": "plugins/com.dlxx.mam.plugins.appmenu/www/appmenu.js",  
		"id": "org.apache.cordova.appmenu",
		"merges": [
			"navigator.appmenu"
		]
    },
	{  
        "file": "plugins/com.dlxx.mam.plugins.laboratory/www/forward.js",  
        "id": "org.apache.cordova.forward",  
 		"merges": [
            "navigator.forward"
        ]
    },
	{
        "file": "plugins/com.dlxx.mam.plugins.contracts/www/contracts.js",  
        "id": "org.apache.cordova.contracts",
        "merges": [
            "navigator.contracts"
        ]
    },
	{
        "file": "plugins/com.dlxx.mam.plugins.toappserverupload/www/fileupload.js",  
        "id": "org.apache.cordova.toappserverupload",
        "merges": [
            "navigator.appupload"
        ]
    },
	{
        "file": "plugins/com.dlxx.mam.plugins.chatpage/www/chatpage.js",  
        "id": "org.apache.cordova.chatpage",
        "merges": [
            "navigator.chatpage"
        ]
    },
	{
        "file": "plugins/org.apache.cordova.camera/www/CameraConstants.js",
        "id": "org.apache.cordova.camera.Camera",
        "clobbers": [
            "Camera"
        ]
    },
	{
        "file": "plugins/org.apache.cordova.camera/www/Camera.js",
        "id": "org.apache.cordova.camera.camera",
        "clobbers": [
            "navigator.camera"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.camera/www/CameraPopoverOptions.js",
        "id": "org.apache.cordova.camera.CameraPopoverOptions",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.camera/www/CameraPopoverHandle.js",
        "id": "org.apache.cordova.camera.CameraPopoverHandle",
        "clobbers": [
            "CameraPopoverHandle"
        ]
    },	
	{
        "file": "plugins/com.dlxx.mam.plugins.ContentCompression/www/ContentCompression.js",  
        "id": "org.apache.cordova.ContentCompression",
        "merges": [
            "navigator.ContentCompression"
        ]
    },
    {  
        "file": "plugins/com.dlxx.mam.plugins.laboratory/www/filelocalInstall.js",  
        "id": "org.apache.cordova.dlfileInstall",  
        "clobbers": ["navigator.dlfileInstall"]
	 },
	 {  
        "file": "plugins/com.dlxx.mam.plugins.laboratory/www/filetransfer.js",  
        "id": "org.apache.cordova.dlfiletransfer",  
        "clobbers": [  
			"navigator.dlfiletransfer" 
         ]
     },
	{
        "file": "plugins/com.dlxx.mam.plugins.laboratory/www/FileTransferError.js",  
        "id": "org.apache.cordova.DLFileTransferError",  
        "clobbers": [  
			"DLFileTransferError"
        ]  
    },
    {
        "file": "plugins/com.dlxx.mam.plugins.laboratory/www/FileInstallError.js",  
        "id": "org.apache.cordova.DLFileInstallError",  
        "clobbers": [  
			"DLFileInstallError"
        ]  
    },
    {  
        "file": "plugins/com.dlxx.mam.plugins.laboratory/www/filebreakpointtransfer.js",  
        "id": "org.apache.cordova.dlfilebreakpointtransfer",  
        "clobbers": [  
			"navigator.dlfilebreakpointtransfer"
         ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.camera": "0.2.8",
    "org.apache.cordova.console": "0.2.7",
    "org.apache.cordova.contacts": "0.2.9",
    "org.apache.cordova.device": "0.2.8",
    "org.apache.cordova.device-motion": "0.2.6",
    "org.apache.cordova.device-orientation": "0.3.5",
    "org.apache.cordova.dialogs": "0.2.6",
    "org.apache.cordova.file": "1.0.1",
    "org.apache.cordova.file-transfer": "0.4.2",
    "org.apache.cordova.geolocation": "0.3.6",
    "org.apache.cordova.globalization": "0.2.6",
    "org.apache.cordova.inappbrowser": "0.3.3",
    "org.apache.cordova.media": "0.2.9",
    "org.apache.cordova.media-capture": "0.2.8",
    "org.apache.cordova.network-information": "0.2.7",
    "org.apache.cordova.splashscreen": "0.2.7",
    "org.apache.cordova.vibration": "0.3.7"
}
// BOTTOM OF METADATA
});