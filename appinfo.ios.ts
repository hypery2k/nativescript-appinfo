/// <reference path="node_modules/tns-platform-declarations/ios/ios.d.ts" />
import { PlatformDetails } from "./platform-details";
import * as utils from "utils/utils";
export { PlatformDetails } from "./platform-details";
export { getPlatformDetails } from "./appinfo.common";

const VERSION_KEY = "CFBundleShortVersionString";
const BUILD_KEY = "CFBundleVersion";

export function getAppId(): Promise<any> {
    return new Promise((resolve, reject) => {
        try {
            var mainBundle = utils.ios.getter(NSBundle, NSBundle.mainBundle);
            resolve(mainBundle.bundleIdentifier);
        } catch (ex) {
            console.log("Error in appversion.getAppId: " + ex);
            reject(ex);
        }
    });
};

export function getVersionName(): Promise<any> {
    return new Promise((resolve, reject) => {
        try {
            var mainBundle = utils.ios.getter(NSBundle, NSBundle.mainBundle);
            resolve(mainBundle.infoDictionary.objectForKey(VERSION_KEY));
        } catch (ex) {
            console.log("Error in appversion.getVersionName: " + ex);
            reject(ex);
        }
    });
};

export function getBuildNumber(): Promise<any> {
    return new Promise((resolve, reject) => {
        try {
            var mainBundle = utils.ios.getter(NSBundle, NSBundle.mainBundle);
            resolve(mainBundle.infoDictionary.objectForKey(BUILD_KEY));
        } catch (ex) {
            console.log("Error in appversion.getBuildNumber: " + ex);
            reject(ex);
        }
    });
};
