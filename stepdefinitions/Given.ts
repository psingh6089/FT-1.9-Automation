import { Given, When, Then } from "cucumber";
import { browser, ElementFinder, protractor } from "protractor";
import { Racing } from "../Specs/ui/Racing";
import { NonRacing } from "../Specs/ui/Non-Racing";
import { Home } from "../Specs/ui/Home";
import { webUtils as _w } from '../utils/webUtils';
import { Account } from "../Specs/ui/Account";
import { IWantTo } from "../Specs/ui/IWantTo";

var expect = require('chai').expect;
import testData from "../testData/DataInput.json"
import { Menu } from "../Specs/ui/Menu";
import { COP } from "../Specs/ui/COP";
let EC = protractor.ExpectedConditions;

Given('User navigates to the Home page of FT1.9 application', async () => {
  await browser.get('https://test-ft19.devgrv.org.au/');
});

Given('A participant {string} logged in to FastTrack application', async (user) => {
  _w.logIn(user);
  await browser.driver.sleep(2000);
  Home.GotIt.isPresent().then(function (result) {
    if (result) {
      Home.GotIt.click().then(function () { });
    } else { }
  });
});

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
})

Given('user navigates to {string} -> {string} tab and clicks {string} tab', async (menu, tab, button) => {
  // Write code here that turns the phrase above into concrete actions
  _w.Navigate(menu, tab, button)
  await browser.driver.sleep(1000);
})

Given('user navigates to the Apply to Participate and selects owner', async () => {
  await browser.driver.sleep(1000);
  await Menu.Menu.click();
  await browser.driver.sleep(1000);
  await Menu.ApplyToParticipate.click();
  await browser.driver.sleep(5000);
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

})


Given('user navigates to {string} -> {string} tab and clicks {string} tab button', async (menu, tab, button) => {
  await browser.get('https://test-ft19.devgrv.org.au/health-record/114215504/injury');
   await COP.Injury.click();
   await COP.AddInjuryEvent.click();
})







