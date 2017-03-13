import * as platformModule from "platform";

/**
 * Helper class to ease the gathering of platform information
 * @author Martin Reinhardt (contact@martinreinhardt-online.de)
 */
export class PlatformDetails {

    private ios: boolean;
    private android: boolean;
    private osVersionDetails: string;
    private osMajorVersion: number;

    constructor() {
        this.osVersionDetails = platformModule.device.osVersion;
        this.osMajorVersion = +this.osVersionDetails.charAt(0);
        this.ios = platformModule.device.os !== 'Android';
        this.android = !this.ios;
    }

    isAndroid(): boolean {
        return this.android;
    }

    isIOS(): boolean {
        return this.ios;
    }

    /**
     * Checks if the supplied permission is supported on the current platform.
     * @param permission to check
     * @returns {boolean} If the permssion is supported return true, otherwise false
     */
    isPermissionSupportByPlatform(permission: any): boolean {
        if (this.isAndroid()) {
            var androidRef = global.android;
            if (permission !== androidRef.Manifest.permission.READ_CONTACTS && this.getOSMajorVersion() >= 6) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }

    getOSVersionDetails(): string {
        return this.osVersionDetails;
    }

    getOSMajorVersion(): number {
        return this.osMajorVersion;
    }

    toString(): string {
        return `${platformModule.device.os} (Version: ${this.osVersionDetails}, Major ${this.osMajorVersion})`;
    }
}
