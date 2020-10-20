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
const COP_1 = require("../Specs/ui/COP");
const DogLocation_1 = require("../Specs/ui/DogLocation");
let EC = protractor_1.protractor.ExpectedConditions;
cucumber_1.Given('User navigates to the Home page of FT1.9 application', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get('https://test-ft19.devgrv.org.au/');
}));
cucumber_1.Given('A participant {string} logged in to FastTrack application', (user) => __awaiter(void 0, void 0, void 0, function* () {
    webUtils_1.webUtils.logIn(user);
    yield protractor_1.browser.driver.sleep(2000);
    //_w.SkipOverlay
}));
/*
Given(/^user selects '(.*)'/, async (select) => {
  if (select == "Issue Breeding Authority") {
    browser.executeScript('window.scrollTo(0,5000)');
    await IWantTo.IssueBreedingAuthority.click();
    browser.wait(EC.elementToBeClickable(Racing.Dog1), 10000).then(function () { });
    await Racing.Dog1.click();
    await browser.driver.sleep(2000);
  }
  else if (select == "Accept Breeding Authority") {
    browser.executeScript('window.scrollTo(0,5000)');
    browser.wait(EC.elementToBeClickable(IWantTo.AcceptBreedingAuthority), 5000).then(function () { });
    await IWantTo.AcceptBreedingAuthority.click();
    await browser.driver.sleep(5000);
  }
})*/
cucumber_1.Given('user navigates to {string} -> {string} tab and clicks {string} tab', (menu, tab, button) => __awaiter(void 0, void 0, void 0, function* () {
    webUtils_1.webUtils.Navigate(menu, tab, button);
    yield protractor_1.browser.driver.sleep(1000);
}));
cucumber_1.Given('user navigates to {string} -> {string} tab and clicks {string} tab button', (menu, tab, button) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get('https://test-ft19.devgrv.org.au/health-record/114215504/injury');
    yield COP_1.COP.Injury.click();
    yield COP_1.COP.AddInjuryEvent.click();
}));
cucumber_1.Given('user selects the dog for the Dog activity', () => __awaiter(void 0, void 0, void 0, function* () {
    DogLocation_1.DogLocation.Doglist.getSize().then(function (size) {
        console.log(size);
        DogLocation_1.DogLocation.Doglist.click();
    });
}));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2l2ZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwZGVmaW5pdGlvbnMvR2l2ZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsMkNBQWdFO0FBR2hFLDJDQUF3QztBQUN4QyxnREFBNkQ7QUFJN0QsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUNwQyxnRkFBaUQ7QUFFakQseUNBQXNDO0FBQ3RDLHlEQUFzRDtBQUN0RCxJQUFJLEVBQUUsR0FBRyx1QkFBVSxDQUFDLGtCQUFrQixDQUFDO0FBRXZDLGdCQUFLLENBQUMsc0RBQXNELEVBQUUsR0FBUyxFQUFFO0lBQ3ZFLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUN4RCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZ0JBQUssQ0FBQywyREFBMkQsRUFBRSxDQUFPLElBQUksRUFBRSxFQUFFO0lBQ2hGLG1CQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2YsTUFBTSxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsZ0JBQWdCO0FBQ2xCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSDs7Ozs7Ozs7Ozs7Ozs7O0lBZUk7QUFFSixnQkFBSyxDQUFDLG9FQUFvRSxFQUFFLENBQU8sSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRTtJQUN0RyxtQkFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQzlCLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ25DLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFFRixnQkFBSyxDQUFDLDJFQUEyRSxFQUFFLENBQU8sSUFBSSxFQUFFLEdB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