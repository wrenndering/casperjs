# CasperJS testing made easy

An easy way to test things on the frontend with CasperJS.

## Programs needed to run a CasperJS test: 

* CasperJS: http://casperjs.org/ - http://docs.casperjs.org/en/latest/installation.html
* NodeJS: http://nodejs.org/ - only needed because I am using RamdaJS: http://ramdajs.com/
* NPM: https://www.npmjs.com/ - is installed with NodeJS

Run npm install to load the dependencies in the package.json.

## What does the file structure of a test look like?

```
testName
├── config.js
├── log.xml
└── main.js
```

## What files do I need for the test?

* config.js
* main.js

## config.js

All configuration is done in the config.js file.

## main.js

Every test gets a main.js file. It is the entry point for each test. It does not need to be changed. It receives everything from config.js.

## log.xml

The log.xml file gets generated on error or once the tests have finished.

See CasperJS API for more info: http://docs.casperjs.org/en/latest/modules/tester.html

## How do I run the monitor?

From inside the client folder:

casperjs test --ssl-protocol=tlsv1 --xunit=log.xml main.js

See the CasperJS docs for extra options: http://docs.casperjs.org/en/latest/testing.html#options
