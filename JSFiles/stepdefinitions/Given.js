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
    Home_1.Home.SkipOverlay.isPresent().then(function (result) {
        if (result) {
            Home_1.Home.SkipOverlay.click().then(function () { });
        }
        else {
            console.error;
        }
    });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2l2ZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwZGVmaW5pdGlvbnMvR2l2ZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsMkNBQWdFO0FBR2hFLDJDQUF3QztBQUN4QyxnREFBNkQ7QUFJN0QsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUNwQyxnRkFBaUQ7QUFFakQseUNBQXNDO0FBQ3RDLHlEQUFzRDtBQUN0RCxJQUFJLEVBQUUsR0FBRyx1QkFBVSxDQUFDLGtCQUFrQixDQUFDO0FBRXZDLGdCQUFLLENBQUMsc0RBQXNELEVBQUUsR0FBUyxFQUFFO0lBQ3ZFLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUN4RCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZ0JBQUssQ0FBQywyREFBMkQsRUFBRSxDQUFPLElBQUksRUFBRSxFQUFFO0lBQ2hGLG1CQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2YsTUFBTSxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsV0FBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxNQUFNO1FBQ2hELElBQUksTUFBTSxFQUFFO1lBQ1YsV0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztTQUNoRDthQUFNO1lBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQTtTQUFFO0lBQzFCLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVIOzs7Ozs7Ozs7Ozs7Ozs7SUFlSTtBQUVKLGdCQUFLLENBQUMsb0VBQW9FLEVBQUUsQ0FBTyxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0s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