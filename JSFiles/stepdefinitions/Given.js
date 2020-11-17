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
    protractor_1.browser.ignoreSynchronization = true;
    yield protractor_1.browser.get('https://test-ft19.devgrv.org.au/');
}));
cucumber_1.Given('A participant {string} logged in to FastTrack application', (user) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(2000);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2l2ZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwZGVmaW5pdGlvbnMvR2l2ZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsMkNBQWdFO0FBR2hFLDJDQUF3QztBQUN4QyxnREFBNkQ7QUFJN0QsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUNwQyxnRkFBaUQ7QUFJakQsSUFBSSxFQUFFLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztBQUV2QyxnQkFBSyxDQUFDLHNEQUFzRCxFQUFFLEdBQVMsRUFBRTtJQUN2RSw0Q0FBNEM7SUFDNUMsb0JBQU8sQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUE7SUFDcEMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0FBQ3hELENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxnQkFBSyxDQUFDLDJEQUEyRCxFQUFFLENBQU8sSUFBSSxFQUFFLEVBQUU7SUFDaEYsTUFBTSxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsbUJBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDZixNQUFNLG9CQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxnQkFBZ0I7QUFDbEIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGdCQUFLLENBQUMsb0VBQW9FLEVBQUUsQ0FBTyxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFO0lBQ3RHLG1CQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDOUIsMkNBQTJDO0lBQzNDLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFD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