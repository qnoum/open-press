# Open Press [![Buy me a tree](https://img.shields.io/badge/Buy%20me%20a%20tree-%F0%9F%8C%B3-lightgreen)](https://offset.earth/adrian)

I created this addon to allow you to read articles from websites that implement easy paywalls to bypass.

Not everyone is able to afford multiple subscriptions on many different news websites, even less when they just want to read a single article without being enrolled in a montly/yearly membership.

> ⚠️ If you use this addon regularly on the same website, please consider paying a subscription for it. Don't forget that free press cannot be sunstainable without money.

## Current state

### Working within the extension

- [ladepeche.fr](https://www.ladepeche.fr) [💳](https://clubabonnes.ladepeche.fr/offres)
- [leparisien.fr](http://www.leparisien.fr) [💳](https://abonnement.leparisien.fr/)
- [journaldunet.com](http://www.journaldunet.com) [💳](https://www.journaldunet.com/account/signup/)
- [lemonde.fr](https://www.lemonde.fr) [💳](https://abo.lemonde.fr)
- [challenges.fr](https://www.challenges.fr) [💳](https://abo.challenges.fr)

### Partially working within the extension

- [lesechos.fr](https://www.lesechos.fr) [💳](https://abonnement.lesechos.fr) : refresh manually the page once and you should be good

### No bypass found yet

- [lefigaro.fr](https://www.lefigaro.fr) [💳](https://boutique.lefigaro.fr/abonnement)
- [mediapart.fr](https://www.mediapart.fr) [💳](https://www.mediapart.fr/abo/offres)
- [liberation.fr](https://www.liberation.fr) [💳](https://abo.liberation.fr)

## Where to install it

- Chrome : [https://chrome.google.com/webstore/detail/open-press/hkfbioghcnjpdlpnahoefbbmnoceadeb](https://chrome.google.com/webstore/detail/open-press/hkfbioghcnjpdlpnahoefbbmnoceadeb)
- Firefox : [https://addons.mozilla.org/addon/open-press/](https://addons.mozilla.org/addon/open-press/)

## How to contribute

- Install the packages with `yarn install`
- Modify the files in the `src` folder
- You can build the extension with `yarn build` to test your modifications in the browser
- When everything's done, you can send a PR \o/

## How to build the extension

### Requirements

- **Operating system:** OSX, Linux, Windows
- **Environment requirements:** [Node 12+](https://nodejs.org/en/)

### Steps

- Clone or download the repository from [Github](https://github.com/adriantombu/open-press)
- Install the packages with `yarn install` or `npm install`
- Run `yarn build` or `npm build` to compile the files
- The files inside the `src` folder will be builded to the `addon` folder with Weback (you can find the configuration used in the `webpack.config.js` and `tsconfig.json` files)
- The `addon` folder represents the files that are published to the store through the Continuous Deployment tool

## Credits

The icon was made by [Smashicons](https://www.flaticon.com/authors/smashicons) from [flaticon.com](https://www.flaticon.com)
