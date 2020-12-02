import {Config} from "protractor";
import {browser} from "protractor";
import * as reporter from "cucumber-html-reporter";

export let config: Config = {
   // framework: 'jasmine',
   //seleniumAddress: 'http://localhost:4444/wd/hub',
   //baseUrl: 'https://test-ft19.devgrv.org.au/',
   
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),    
    onPrepare: async () => {
      await browser.waitForAngularEnabled(false); 
  },
     specs:  ['../features/*.feature'], 
     
    cucumberOpts: {   
          tags:"@test",
          format: 'json:./cucumberreport.json',
        require: [
                   './stepdefinitions/*.js',
                 ]    
                  },
     capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'mobileEmulation': {
              'deviceName': 'iPhone X'
            }
        }
      },
    onComplete: () => {
        var options = {
            theme: 'bootstrap',
            jsonFile: './cucumberreport.json',
            output: './Automation_Ft1.9_report.html',
            reportSuiteAsScenarios: true,
            launchReport: true,
            metadata: {
               // "App Version": "0.3.2",
                "Test Environment": "TEST",
                "Browser": "Chrome  81.0.4044.138",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };
        reporter.generate(options);
      }
    }