import { Given, When, Then } from "cucumber";
import { browser, ElementFinder, protractor } from "protractor";
import { Racing } from "../Specs/ui/Racing";
import { NonRacing } from "../Specs/ui/Non-Racing";
import { Home } from "../Specs/ui/Home";
import { webUtils as _w, webUtils } from '../utils/webUtils';
import { Account } from "../Specs/ui/Account";
import { IWantTo } from "../Specs/ui/IWantTo";

var expect = require('chai').expect;
import testData from "../testData/DataInput.json"
import { Menu } from "../Specs/ui/Menu";
import { COP } from "../Specs/ui/COP";
import { DogLocation } from "../Specs/ui/DogLocation";
let EC = protractor.ExpectedConditions;

Given('User navigates to the Home page of FT1.9 application', async () => {
  await browser.get('https://test-ft19.devgrv.org.au/');
});

Given('A participant {string} logged in to FastTrack application', async (user) => {
  _w.logIn(user);
  await browser.driver.sleep(2000);
  Home.SkipOverlay.isPresent().then(function (result) {
    if (result) {
      Home.SkipOverlay.click().then(function () { });
    } else { console.error }
  });
});

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

Given('user navigates to {string} -> {string} tab and clicks {string} tab', async (menu, tab, button) => {
  _w.Navigate(menu, tab, button)
  await browser.driver.sleep(1000);
})

Given('user navigates to {string} -> {string} tab and clicks {string} tab button', async (menu, tab, button) => {
  await browser.get('https://test-ft19.devgrv.org.au/health-record/114215504/injury');
  await COP.Injury.click();
  await COP.AddInjuryEvent.click();
})

Given('user selects the dog for the Dog activity', async () => {
  DogLocation.Doglist.getSize().then(function(size: any){
  console.log(size)
  DogLocation.Doglist.click()
  })
  })

  Given('A participant logs in with {string} and {string}', async (user, pwd) => {
    await browser.driver.sleep(1000);
    Home.Login.isPresent().then(async (result)=> {
      if (result) {
        await Home.Login.click()
      }
      else {  }
    });
    //webUtils.clickOn(Home.Login);
  await browser.driver.sleep(1000);
  switch(user) {
    case "correct email":  Home.UserName.clear().then(function (){ Home.UserName.sendKeys(testData.data.correct_email)}); break;
    case "wrong email": Home.UserName.clear().then(function (){ Home.UserName.sendKeys(testData.data.wrong_email)}); break;
    case "correct memberid":  Home.UserName.clear().then(function (){ Home.UserName.sendKeys(testData.data.correct_memberid)}); break;
    case "wrong memberid": Home.UserName.clear().then(function (){ Home.UserName.sendKeys(testData.data.wrong_memberid)}); break;
    default: user === undefined? console.log("user '" + user + "' doesn't match "): null;
    }
    await browser.driver.sleep(2000);
    switch(pwd) {
    case "correct password":  Home.Password.clear().then(function(){ Home.Password.sendKeys(testData.data.Password)}); break;
    case "wrong password":  Home.Password.clear().then(function(){ Home.Password.sendKeys(testData.data.wrong_pwd)}); break;
    default: user === undefined? console.log("user '" + user + "' doesn't match "): null;
  }
  await browser.driver.sleep(2000);
  })







