var PlatformDetails = require("./platform-details");

exports.getPlatformDetails = function () {
    return new PlatformDetails();
};

exports.getAppId = function () {
    return new Promise(function (resolve, reject) {
        try {
            resolve(NSBundle.mainBundle().bundleIdentifier);
        } catch (ex) {
            console.log("Error in appversion.getAppId: " + ex);
            reject(ex);
        }
    });
};

var VERSION_KEY = "CFBundleShortVersionString";

exports.getVersionName = function () {
    return new Promise(function (resolve, reject) {
        try {
            resolve(NSBundle.mainBundle().infoDictionary.objectForKey(VERSION_KEY));
        } catch (ex) {
            console.log("Error in appversion.getVersionName: " + ex);
            reject(ex);
        }
    });
};

var BUILD_KEY = "CFBundleVersion";

exports.getBuildNumber = function () {
    return new Promise(function (resolve, reject) {
        try {
            resolve(NSBundle.mainBundle().infoDictionary.objectForKey(BUILD_KEY));
        } catch (ex) {
            console.log("Error in appversion.getBuildNumber: " + ex);
            reject(ex);
        }
    });
};
