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
const Racing_1 = require("../Specs/ui/Racing");
const Home_1 = require("../Specs/ui/Home");
const webUtils_1 = require("../utils/webUtils");
const IWantTo_1 = require("../Specs/ui/IWantTo");
var expect = require('chai').expect;
const Menu_1 = require("../Specs/ui/Menu");
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
cucumber_1.Given(/^user selects '(.*)'/, (select) => __awaiter(void 0, void 0, void 0, function* () {
    if (select == "Issue Breeding Authority") {
        protractor_1.browser.executeScript('window.scrollTo(0,5000)');
        yield IWantTo_1.IWantTo.IssueBreedingAuthority.click();
        protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.Dog1), 10000).then(function () { });
        yield Racing_1.Racing.Dog1.click();
        yield protractor_1.browser.driver.sleep(2000);
    }
    else if (select == "Accept Breeding Authority") {
        protractor_1.browser.executeScript('window.scrollTo(0,5000)');
        protractor_1.browser.wait(EC.elementToBeClickable(IWantTo_1.IWantTo.AcceptBreedingAuthority), 5000).then(function () { });
        yield IWantTo_1.IWantTo.AcceptBreedingAuthority.click();
        yield protractor_1.browser.driver.sleep(5000);
    }
}));
cucumber_1.Given('user navigates to {string} -> {string} tab and clicks {string} tab', (menu, tab, button) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    webUtils_1.webUtils.Navigate(menu, tab, button);
    yield protractor_1.browser.driver.sleep(1000);
}));
cucumber_1.Given('user navigates to the Apply to Participate and selects owner', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(1000);
    yield Menu_1.Menu.Menu.click();
    yield protractor_1.browser.driver.sleep(1000);
    yield Menu_1.Menu.ApplyToParticipate.click();
    yield protractor_1.browser.driver.sleep(5000);
    /* var EC = protractor.ExpectedConditions;
    var isClickable = EC.elementToBeClickable(Menu.ClickPage);
    await browser.wait(isClickable, 5000);
    await Menu.ClickPage.click();
      await Menu.Owner.click();
      await browser.executeScript('window.scrollTo(68,823);');
      await Menu.Begin.click();
      await Menu.Checkbox1.click();
      await browser.executeScript('window.scrollTo(68,823);');
      await Menu.Checkbox2.click();
      await Menu.Continue.click();
      await browser.driver.sleep(2000);
      await browser.executeScript('window.scrollTo(68,823);');
      Menu.EnterPhone.sendKeys('1234567891');
      await browser.executeScript('window.scrollTo(0,5000);');
      await Menu.Continue.click();
      await browser.driver.sleep(8000);
      await Menu.Continue.click();*/
}));
cucumber_1.Given('user navigates to {string} -> {string} tab and clicks {string} tab button', (menu, tab, button) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get('https://test-ft19.devgrv.org.au/health-record/114215504/injury');
    yield COP_1.COP.Injury.click();
    yield COP_1.COP.AddInjuryEvent.click();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2l2ZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwZGVmaW5pdGlvbnMvR2l2ZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsMkNBQWdFO0FBQ2hFLCtDQUE0QztBQUU1QywyQ0FBd0M7QUFDeEMsZ0RBQW1EO0FBRW5ELGlEQUE4QztBQUU5QyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDO0FBRXBDLDJDQUF3QztBQUN4Qyx5Q0FBc0M7QUFDdEMsSUFBSSxFQUFFLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztBQUV2QyxnQkFBSyxDQUFDLHNEQUFzRCxFQUFFLEdBQVMsRUFBRTtJQUN2RSxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7QUFDeEQsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGdCQUFLLENBQUMsMkRBQTJELEVBQUUsQ0FBTyxJQUFJLEVBQUUsRUFBRTtJQUNoRixtQkFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNmLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLFdBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsTUFBTTtRQUNoRCxJQUFJLE1BQU0sRUFBRTtZQUNWLFdBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7U0FDaEQ7YUFBTTtZQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUE7U0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxnQkFBSyxDQUFDLHNCQUFzQixFQUFFLENBQU8sTUFBTSxFQUFFLEVBQUU7SUFDN0MsSUFBSSxNQUFNLElBQUksMEJBQTBCLEVBQUU7UUFDeEMsb0JBQU8sQ0FBQyxhQUFhLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUNqRCxNQUFNLGlCQUFPLENBQUMsc0JBQXNCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDN0Msb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLGVBQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUNoRixNQUFNLGVBQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDMUIsTUFBTSxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbEM7U0FDSSxJQUFJLE1BQU0sSUFBSSwyQkFBMkIsRUFBRTtRQUM5QyxvQkFBTyxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ2pELG9CQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBTyxDQUFDLHVCQUF1QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDbkcsTUFBTSxpQkFBTyxDQUFDLHVCQUF1QixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzlDLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2xDO0FBQ0gsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUVGLGdCQUFLLENBQUMsb0VBQW9FLEVBQUUsQ0FBTyxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFO0lBQ3RHLG9FQUFvRTtJQUNwRSxtQkFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQzlCLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ25DLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFFRixnQkFBSyxDQUFDLDhEQUE4RCxFQUFFLEdBQVMsRUFBRTtJQUMvRSxNQUFNLG9CQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxNQUFNLFdBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEIsTUFBTSxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsTUFBTSxXQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdEMsTUFBTSxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakM7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQWlCZ0M7QUFFbEMsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUdGLGdCQUFLLENBQUMsMkVBQTJFLEVBQUUsQ0FBTyxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFO0lBQzdHLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsZ0VBQWdFLENBQUMsQ0FBQztJQUNuRixNQUFNLFNBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsTUFBTSxTQUFHLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3BDLENBQUMsQ0FBQSxDQUFDLENBQUEifQ==