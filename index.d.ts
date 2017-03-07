/**
 * ORDER is IMPORTANT, first the exports without dependencies, then all in descending order!!
 */
import PlatformDetails from "./platform-details";

declare module "nativescript-appinfo" {
    /**
     * Returns platform details
     */
    export function getPlatformDetails(): PlatformDetails;

    /**
     * Returns the version of your app.
     * - For iOS we read it from *.plist's CFBundleShortVersionString.
     * - For Android we read the versionName from AndroidManifest.xml.
     */
    export function getVersionName(): Promise<string>;

    /**
     * Returns the app's ID.
     * - For iOS we read it from *.plist's bundle identifier.
     * - For Android we read the package name.
     */
    export function getAppId(): Promise<string>;

    /**
     * Returns the app's build.
     * - For iOS we read it from *.plist's bundle identifier.
     * - For Android we read the versionName from AndroidManifest.xml.
     */
    export function getBuildNumber(): Promise<string>;

    export const PlatformDetails;
}
