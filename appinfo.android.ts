import { PlatformDetails } from "./platform-details";
import * as application from "application";
import "./appinfo.common";

export function getAppId(): Promise<any> {
    return new Promise((resolve, reject) => {
        function _resolve() {
            var context = application.android.context;
            resolve(context.getPackageName());
        }

        try {
            if (application.android.context) {
                _resolve();
            } else {
                // if this is called before application.start() wait for the event to fire
                application.on(application.launchEvent, _resolve);
            }
        } catch (ex) {
            console.log("Error in appversion.getAppId: " + ex);
            reject(ex);
        }
    });
};

export function getVersionName(): Promise<any> {
    return new Promise((resolve, reject) => {
        function _resolve() {
            var context = application.android.context;
            var packageManager = context.getPackageManager();
            resolve(packageManager.getPackageInfo(context.getPackageName(), 0).versionName);
        }

        try {
            if (application.android.context) {
                _resolve();
            } else {
                // if this is called before application.start() wait for the event to fire
                application.on(application.launchEvent, _resolve);
            }
        } catch (ex) {
            console.log("Error in appversion.getVersionName: " + ex);
            reject(ex);
        }
    });
};

export function getBuildNumber(): Promise<any> {
    return new Promise((resolve, reject) => {
        function _resolve() {
            var context = application.android.context;
            var packageManager = context.getPackageManager();
            resolve(packageManager.getPackageInfo(context.getPackageName(), 0).versionCode);
        }

        try {
            if (application.android.context) {
                _resolve();
            } else {
                // if this is called before application.start() wait for the event to fire
                application.on(application.launchEvent, _resolve);
            }
        } catch (ex) {
            console.log("Error in appversion.getBuildNumber: " + ex);
            reject(ex);
        }
    });
};
