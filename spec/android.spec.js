import './mocks/general.mock';
import {
    getPlatformDetails,
    getAppId,
    getBuildNumber,
    getVersionName
} from '../appinfo.android';

describe('Android', function () {
    it('getPlatformDetails', function () {
        expect(getPlatformDetails).toBeDefined();
    });
    it('getAppId', function () {
        expect(getAppId).toBeDefined();
    });
    it('getBuildNumber', function () {
        expect(getAppId).toBeDefined();
    });
    it('getVersionName', function () {
        expect(getVersionName).toBeDefined();
    });
});