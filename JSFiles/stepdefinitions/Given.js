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
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const Home_1 = require("../Specs/ui/Home");
const webUtils_1 = require("../utils/webUtils");
var expect = require('chai').expect;
const COP_1 = require("../Specs/ui/COP");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2l2ZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwZGVmaW5pdGlvbnMvR2l2ZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsMkNBQWdFO0FBR2hFLDJDQUF3QztBQUN4QyxnREFBbUQ7QUFJbkQsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUdwQyx5Q0FBc0M7QUFDdEMsSUFBSSxFQUFFLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztBQUV2QyxnQkFBSyxDQUFDLHNEQUFzRCxFQUFFLEdBQVMsRUFBRTtJQUN2RSxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7QUFDeEQsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGdCQUFLLENBQUMsMkRBQTJELEVBQUUsQ0FBTyxJQUFJLEVBQUUsRUFBRTtJQUNoRixtQkFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNmLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLFdBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsTUFBTTtRQUNoRCxJQUFJLE1BQU0sRUFBRTtZQUNWLFdBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7U0FDaEQ7YUFBTTtZQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUE7U0FBRTtJQUMxQixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSDs7Ozs7Ozs7Ozs7Ozs7O0lBZUk7QUFFSixnQkFBSyxDQUFDLG9FQUFvRSxFQUFFLENBQU8sSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRTtJQUN0RyxtQkFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQzlCLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ25DLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFFRixnQkFBSyxDQUFDLDJFQUEyRSxFQUFFLENBQU8sSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRTtJQUM3RyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGdFQUFnRSxDQUFDLENBQUM7SUFDcEYsTUFBTSxTQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLE1BQU0sU0FBRyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNuQyxDQUFDLENBQUEsQ0FBQyxDQUFBIn0=