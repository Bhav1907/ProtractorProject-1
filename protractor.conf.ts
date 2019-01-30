
import { browser, by, element } from 'protractor';
import { async } from "q";

var HtmlReporter = require('protractor-beautiful-reporter');
var jasmineReporters = require('jasmine-reporters');
let reportsPath: string = "./target/reports";

exports.config = {

    directConnect: true,
    //  seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: 'chrome',
        /*  chromeOptions:{
           args:['--auth-server-whitelist="_"']
         }, */
        shardTestFiles: true,
        maxInstances: 1
        // 'browserName': 'internet explorer',
        //     'platform': 'ANY',
        //     'version': '11'
    },

    SELENIUM_PROMISE_MANAGER: false,

    beforeLaunch: async () => {
        let fs = require('fs-extra');
        fs.emptyDir(reportsPath, function (err) {
            console.log(err);
        });

        console.log('Usage: npm run e2e:dev -- [options]');
        console.log('e.g: $ npm run e2e:dev (for testing on localhost)');
        console.log('e.g: $ npm run e2e:dev -dev/tst/prd (for testing on ui-dev/tst/prd)\n');
        console.log('Options:');
        console.log('-h: output usage information');
        console.log('-tst: to test on ui-tst');
        console.log('-dev: to test on ui-dev');
        console.log('-prd: to test on ui (production)');

    },

    framework: 'jasmine2',
    rootElement: 'body',
    specs:['./specs/verify-homepage.e2e-spec.js'],
    suites: {
        smoke: [
            './specs/verify-city-search-not-found.e2e-spec.ts',
            './specs/verify-city-search.e2e-spec.ts',
            './specs/verify-homepage.e2e-spec.ts'
        ],
    },

    jasmineNodeOpts: {
        defaultTimeoutInterval: 5000000
    },

    onPrepare: function () {

        browser.waitForAngularEnabled(false);
        browser.ignoreSynchronization = true;

        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: './target/reports/screenshots',
            takeScreenShotsOnlyForFailedSpecs: false,
            docTitle: 'WeatherMap'
        }).getJasmine2Reporter());

        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: false,
            savePath: './target/reports'
        }));

    }

};