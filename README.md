# Open Press [![Buy me a tree](https://img.shields.io/badge/Buy%20me%20a%20tree-%F0%9F%8C%B3-lightgreen)](https://offset.earth/adrian)

An addon to allow you to read articles from websites that implement easy paywalls to bypass.

## Current state

### Working within the extension

- [ladepeche.fr](https://www.ladepeche.fr)
- [leparisien.fr](http://www.leparisien.fr)

### Partially working within the extension

- [lesechos.fr](https://www.lesechos.fr) : refresh manually the page once and you should be good

### Working without the extension

- [lemonde.fr](https://www.lemonde.fr) : use the "Reader view" in Firefox and refresh, you should get the full article
- [challenges.fr](https://www.challenges.fr) : use the "Reader view" in Firefox and refresh, you should get the full article

### No bypass found yet

- [lefigaro.fr](https://www.lefigaro.fr)

## Where to install it

- Chrome :
- Firefox :

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
