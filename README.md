# CRM

A small Angular app using Webpack and module architecture Angular 1.5 (components).

This workflow serves as a starting point for building Angular 1.x applications using Webpack.

* Module architecture using components helper (Angular 1.5)
* Webpack configuration.
* ES6, and ES7 support with babel.
* Source maps included in all builds.
* Development server with live reload.
* Production builds with cache busting.
* Testing environment using karma to run tests and jasmine as the framework.
* Code coverage when tests are run.
* No gulp and no grunt, just npm scripts.

>Warning: Make sure you're using the latest version of Node.js and NPM

### Quick start

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


### Build files

* single run: `npm run build`
* build files and watch: `npm run watch`

## Unit Tests

* single run: `npm test`
* live mode (TDD style): `npm run test-watch`
