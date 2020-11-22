"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const Home_1 = require("../Specs/ui/Home");
const webUtils_1 = require("../utils/webUtils");
var expect = require('chai').expect;
const DataInput_json_1 = __importDefault(require("../testData/DataInput.json"));
let EC = protractor_1.protractor.ExpectedConditions;
cucumber_1.Given('User navigates to the Home page of FT1.9 application', () => __awaiter(void 0, void 0, void 0, function* () {
    //await browser.waitForAngularEnabled(false)
    //browser.ignoreSynchronization = true
    yield protractor_1.browser.get('https://test-ft19.devgrv.org.au/');
}));
cucumber_1.Given('A participant {string} logged in to FastTrack application', (user) => __awaiter(void 0, void 0, void 0, function* () {
    webUtils_1.webUtils.logIn(user);
    yield protractor_1.browser.driver.sleep(2000);
    //_w.SkipOverlay
}));
cucumber_1.Given('user navigates to {string} -> {string} tab and clicks {string} tab', (menu, tab, button) => __awaiter(void 0, void 0, void 0, function* () {
    webUtils_1.webUtils.Navigate(menu, tab, button);
    //await browser.waitForAngularEnabled(true)
    yield protractor_1.browser.driver.sleep(1000);
}));
/*Given('user selects the dog for the Dog activity', async () => {
  DogLocation.Doglist.getSize().then(function(size: any){
  console.log(size)
  DogLocation.Doglist.click()
  })
  })*/
cucumber_1.Given('A participant logs in with {string} and {string}', (user, pwd) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(1000);
    Home_1.Home.Login.isPresent().then((result) => __awaiter(void 0, void 0, void 0, function* () {
        if (result) {
            yield Home_1.Home.Login.click();
        }
        else { }
    }));
    //webUtils.clickOn(Home.Login);
    yield protractor_1.browser.driver.sleep(1000);
    switch (user) {
        case "correct email":
            Home_1.Home.UserName.clear().then(function () { Home_1.Home.UserName.sendKeys(DataInput_json_1.default.data.correct_email); });
            break;
        case "wrong email":
            Home_1.Home.UserName.clear().then(function () { Home_1.Home.UserName.sendKeys(DataInput_json_1.default.data.wrong_email); });
            break;
        case "correct memberid":
            Home_1.Home.UserName.clear().then(function () { Home_1.Home.UserName.sendKeys(DataInput_json_1.default.data.correct_memberid); });
            break;
        case "wrong memberid":
            Home_1.Home.UserName.clear().then(function () { Home_1.Home.UserName.sendKeys(DataInput_json_1.default.data.wrong_memberid); });
            break;
        default: user === undefined ? console.log("user '" + user + "' doesn't match ") : null;
    }
    yield protractor_1.browser.driver.sleep(2000);
    switch (pwd) {
        case "correct password":
            Home_1.Home.Password.clear().then(function () { Home_1.Home.Password.sendKeys(DataInput_json_1.default.data.Password); });
            break;
        case "wrong password":
            Home_1.Home.Password.clear().then(function () { Home_1.Home.Password.sendKeys(DataInput_json_1.default.data.wrong_pwd); });
            break;
        default: user === undefined ? console.log("user '" + user + "' doesn't match ") : null;
    }
    yield protractor_1.browser.driver.sleep(2000);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2l2ZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwZGVmaW5pdGlvbnMvR2l2ZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsMkNBQWdFO0FBR2hFLDJDQUF3QztBQUN4QyxnREFBNkQ7QUFJN0QsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUNwQyxnRkFBaUQ7QUFJakQsSUFBSSxFQUFFLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztBQUV2QyxnQkFBSyxDQUFDLHNEQUFzRCxFQUFFLEdBQVMsRUFBRTtJQUN2RSw0Q0FBNEM7SUFDNUMsc0NBQXNDO0lBQ3RDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUN4RCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZ0JBQUssQ0FBQywyREFBMkQsRUFBRSxDQUFPLElBQUksRUFBRSxFQUFFO0lBQ2hGLG1CQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2YsTUFBTSxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsZ0JBQWdCO0FBQ2xCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxnQkFBSyxDQUFDLG9FQUFvRSxFQUFFLENBQU8sSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRTtJQUN0RyxtQkFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQzlCLDJDQUEyQztJQUMzQyxNQUFNLG9CQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNuQyxDQUFDLENBQUEsQ0FBQyxDQUFBO0FBRUY7Ozs7O01BS007QUFFTixnQkFBSyxDQUFDLGtEQUFrRCxFQUFFLENBQU8sSUFBSSxFQUFF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