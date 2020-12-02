"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const protractor_1 = require("protractor");
const reporter = __importStar(require("cucumber-html-reporter"));
exports.config = {
    // framework: 'jasmine',
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    //baseUrl: 'https://test-ft19.devgrv.org.au/',
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    onPrepare: () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
    }),
    specs: ['../features/*.feature'],
    cucumberOpts: {
        tags: "@test",
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
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDJDQUFtQztBQUNuQyxpRUFBbUQ7QUFFeEMsUUFBQSxNQUFNLEdBQVc7SUFDekIsd0JBQXdCO0lBQ3hCLGtEQUFrRDtJQUNsRCw4Q0FBOEM7SUFFN0MsYUFBYSxFQUFFLElBQUk7SUFDbkIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFDL0QsU0FBUyxFQUFFLEdBQVMsRUFBRTtRQUNwQixNQUFNLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0MsQ0FBQyxDQUFBO0lBQ0UsS0FBSyxFQUFHLENBQUMsdUJBQXVCLENBQUM7SUFFbEMsWUFBWSxFQUFFO1FBQ1IsSUFBSSxFQUFDLE9BQU87UUFDWixNQUFNLEVBQUUsNEJBQTRCO1FBQ3RDLE9BQU8sRUFBRTtZQUNFLHdCQUF3QjtTQUN6QjtLQUNDO0lBQ2QsWUFBWSxFQUFFO1FBQ1gsYUFBYSxFQUFFLFFBQVE7UUFDdkIsZUFBZSxFQUFFO1lBQ2IsaUJBQWlCLEVBQUU7Z0JBQ2pCLFlBQVksRUFBRSxVQUFVO2FBQ3pCO1NBQ0o7S0FDRjtJQUNILFVBQVUsRUFBRSxHQUFHLEVBQUU7UUFDYixJQUFJLE9BQU8sR0FBRztZQUNWLEtBQUssRUFBRSxXQUFXO1lBQ2xCLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsTUFBTSxFQUFFLGdDQUFnQztZQUN4QyxzQkFBc0IsRUFBRSxJQUFJO1lBQzVCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFFBQVEsRUFBRTtnQkFDUCwwQkFBMEI7Z0JBQ3pCLGtCQUFrQixFQUFFLE1BQU07Z0JBQzFCLFNBQVMsRUFBRSx1QkFBdUI7Z0JBQ2xDLFVBQVUsRUFBRSxZQUFZO2dCQUN4QixVQUFVLEVBQUUsV0FBVztnQkFDdkIsVUFBVSxFQUFFLFFBQVE7YUFDdkI7U0FDSixDQUFDO1FBQ0YsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDO0NBQ0YsQ0FBQSJ9