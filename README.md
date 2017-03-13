# NativeScript App Info

> Read the app infos of your NativeScript app.

For iOS we read it from `*.plist`'s `CFBundleShortVersionString`.

For Android we read the `versionName` from `AndroidManifest.xml`.

[![Greenkeeper badge](https://badges.greenkeeper.io/hypery2k/nativescript-appinfo.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/hypery2k/nativescript-appinfo.svg?branch=master)](https://travis-ci.org/hypery2k/nativescript-appinfo)
[![Build Status](https://martinreinhardt-online.de/jenkins/buildStatus/icon?job=NPM/nativescript-appinfo/master)](https://martinreinhardt-online.de/jenkins/job/NPM/job/nativescript-appinfo/job/master/)

[![NPM](https://nodei.co/npm/nativescript-appinfo.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/nativescript-appinfo/)

> Feel free to **donate**
>
> <a href='http://www.pledgie.com/campaigns/25442'><img alt='Click here to lend your support to: Owncloud Apps and make a donation at www.pledgie.com !' src='http://www.pledgie.com/campaigns/23447.png?skin_name=chrome' border='0' /></a>
> <a target="_blank" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=AGPGLZYNV6Y5S">
> <img alt="" border="0" src="https://www.paypalobjects.com/de_DE/DE/i/btn/btn_donateCC_LG.gif"/>
> </img></a>
> Or donate [Bitcoins](bitcoin:3NKtxw1SRYgess5ev4Ri54GekoAgkR213D):
> [![Bitcoin](https://martinreinhardt-online.de/bitcoin.png)](bitcoin:3NKtxw1SRYgess5ev4Ri54GekoAgkR213D)
>
> Also via [greenaddress](https://greenaddress.it/pay/GA3ZPfh7As3Gc2oP6pQ1njxMij88u/)


## Installation
Run the following command from the root of your project:

```
tns plugin add nativescript-appinfo
```
Or if you want to use the development version (nightly build), which maybe not stable!:

```
tns plugin add nativescript-appinfo@next
```

## Usage

To use this plugin you must first require() it:

```js
var appinfo = require("nativescript-appinfo");
```

### getVersionName

```js
  appinfo.getVersionName().then(function(v) {
      console.log("Your app's version is: " + v);
  });
```
### getBuildNumber

```js
  appinfo.getBuildNumber().then(function(v) {
      console.log("Your app's build is: " + v);
  });
```

### getAppId

```js
  appinfo.getAppId().then(function(id) {
      console.log("Your app's id is: " + id);
  });
```
