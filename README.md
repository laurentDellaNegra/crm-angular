# CRM

A small Angular app using Webpack, PouchDB and module architecture Angular 1.5 (components).

This workflow serves as a starting point for building Angular 1.x applications using Webpack.

* Module architecture using components helper (Angular 1.5)
* Webpack configuration.
* PouchDB database.
* ES6, and ES7 support with babel.
* Source maps included in all builds.
* Development server with live reload.
* Production builds with cache busting.
* Testing environment using karma to run tests and jasmine as the framework.
* Code coverage when tests are run.
* No gulp and no grunt, just npm scripts.

>Warning: Make sure you're using the latest version of Node.js and NPM

## Version 1.0.0

This first version is very simple, it contains the modular architecture and the prospect view.
You can click on "Prospect", import an xlxs/xls file with a specific format in "src/data/91-PLOMBIERS.xls" or just import the local file (json format). Once the file imported, it is store in the browser database with PouchDB. You can refresh the page and data are still displayed.

## Quick start

> Clone/Download the repo

```bash
# clone our repo
$ git clone https://github.com/laurentDellaNegra/crm-angular.git my-app

# change directory to your app
$ cd my-app

# install the dependencies with npm
$ npm install

# start the server
$ npm start
```

go to [http://localhost:8080](http://localhost:8080) in your browser.


## Build files

* single run: `npm run build`
* build files and watch: `npm run watch`

## Unit Tests

* single run: `npm test`
* live mode (TDD style): `npm run test-watch`
