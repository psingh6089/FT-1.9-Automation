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
exports.webUtils = void 0;
const Home_1 = require("../Specs/ui/Home");
const Racing_1 = require("../Specs/ui/Racing");
const protractor_1 = require("protractor");
const Account_1 = require("../Specs/ui/Account");
const DataInput_json_1 = __importDefault(require("../testData/DataInput.json"));
const Non_Racing_1 = require("../Specs/ui/Non-Racing");
const IWantTo_1 = require("../Specs/ui/IWantTo");
const ptor_1 = require("protractor/built/ptor");
const BreedingAndLitters_1 = require("../Specs/ui/BreedingAndLitters");
const DogDetails_1 = require("../Specs/ui/DogDetails");
const RetireGreyhound_1 = require("../Specs/ui/RetireGreyhound");
const DogLocation_1 = require("../Specs/ui/DogLocation");
const MyDogs_1 = require("../Specs/ui/MyDogs");
const Calendar_1 = require("../Specs/ui/Calendar");
var expect = require('chai').expect;
let EC = ptor_1.protractor.ExpectedConditions;
var DogEarbrand;
var fs = require('fs');
function writeScreenShot(png, filename) {
    var stream = fs.createWriteStream(filename);
    stream.write(new Buffer(png, 'base64'));
    stream.end();
}
class webUtils {
    static logIn(User) {
        return __awaiter(this, void 0, void 0, function* () {
            webUtils.clickOn(Home_1.Home.Login);
            protractor_1.browser.driver.sleep(1000).then(function () { });
            switch (User) {
                case "Paul Westerveld":
                    Home_1.Home.UserName.sendKeys(DataInput_json_1.default.data.Paul_User);
                    break;
                case "William Mcmahon":
                    Home_1.Home.UserName.sendKeys(DataInput_json_1.default.data.William_User);
                    break;
                case "David Long":
                    Home_1.Home.UserName.sendKeys(DataInput_json_1.default.data.David_user);
                    break;
                case "Andrea Daily":
                    Home_1.Home.UserName.sendKeys(DataInput_json_1.default.data.Andrea_user);
                    break;
                case "Glenn Campbell":
                    Home_1.Home.UserName.sendKeys(DataInput_json_1.default.data.Glenn_user);
                    break;
                case "Peter Walsh":
                    Home_1.Home.UserName.sendKeys(DataInput_json_1.default.data.Peter_user);
                    break;
                case "Janet":
                    Home_1.Home.UserName.sendKeys(DataInput_json_1.default.data.Janet);
                    break;
                default: console.log("undefined user");
            }
            Home_1.Home.Password.sendKeys(DataInput_json_1.default.data.Password);
            webUtils.clickOn(Home_1.Home.LoginContinue);
            protractor_1.browser.driver.sleep(5000).then(function () { });
            //   webUtils.SkipOverlay();     
        });
    }
    static viewDetails() {
        Account_1.Account.ViewDetails.each(function (element, index) {
            element.getText().then((text) => __awaiter(this, void 0, void 0, function* () {
                console.log(text);
            }));
        });
        //  webUtils.clickOn(Account.selectViewDetail);
    }
    static clickOn(obj) {
        webUtils.waitForObj(obj);
        return obj.isPresent().then((result) => {
            result ? obj.isDisplayed().then((res) => {
                obj.click().then(function () {
                });
            }) : logError(obj);
            function logError(obj) {
                obj.getAttribute('name').then((name) => {
                    console.error(name + "clickOn: Object is currently not visible to click");
                });
            }
        });
    }
    static waitForObj(obj) {
        return protractor_1.browser.wait(EC.elementToBeClickable(obj), 20000).then(function () { });
    }
    static waitForLoader() {
        return protractor_1.browser.wait(function () { }, 5000);
        //  return browser.wait(EC.invisibilityOf(element(by.css('div#mainContentArea>div#loader>div.loading-panel'))), 5000 );
    }
    static SkipOverlay() {
        Home_1.Home.SkipOverlay.isPresent().then(function (result) {
            if (result) {
                webUtils.clickOn(Home_1.Home.SkipOverlay);
            }
            else { }
        });
    }
    static ValidateDog() {
        webUtils.clickOn(Racing_1.Racing.MyDogs);
        webUtils.clickOn(Home_1.Home.NonRacing);
        RetireGreyhound_1.RetireGreyhound.DogEarbrand.getText().then(function (DogList) {
            expect(DogList).toContain(DogEarbrand);
            console.log(DogList);
        });
    }
    static Navigate(menu, tab, button) {
        return __awaiter(this, void 0, void 0, function* () {
            if (menu == "My Dogs") {
                webUtils.SkipOverlay();
                webUtils.clickOn(Racing_1.Racing.MyDogs);
                protractor_1.browser.wait(EC.elementToBeClickable(MyDogs_1.MyDogs.DogList), 500000).then(function () { });
                webUtils.SkipOverlay();
                if (tab == "Non Racing") {
                    webUtils.clickOn(Non_Racing_1.NonRacing.NonRacing);
                    protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.Interstate), 2000).then(function () { });
                    webUtils.SkipOverlay();
                    if (button == "UnNamed Dog") {
                        //  browser.wait(EC.elementToBeClickable(Racing.Dog2), 5000).then(function () { });
                        webUtils.clickOn(Racing_1.Racing.Dog2);
                        //    browser.driver.sleep(5000).then(function () { });
                        protractor_1.browser.executeScript('window.scrollTo(100,1200);').then(function () { });
                        //     browser.wait(EC.elementToBeClickable(NonRacing.ApplyDogName), 5000);
                        webUtils.clickOn(Non_Racing_1.NonRacing.ApplyDogName);
                    }
                }
                if (tab == "Litters") {
                    webUtils.clickOn(BreedingAndLitters_1.BreedingAndLitters.Litters);
                    webUtils.SkipOverlay();
                    protractor_1.browser.driver.sleep(50000).then(function () { });
                    protractor_1.browser.wait(EC.elementToBeClickable(BreedingAndLitters_1.BreedingAndLitters.LitterView), 5000).then(function () { });
                }
                else if (tab == "Dog Details") {
                    webUtils.SkipOverlay();
                    webUtils.clickOn(Racing_1.Racing.DogDetails);
                    protractor_1.browser.wait(EC.elementToBeClickable(DogDetails_1.DogDetails.GreyHoundRecord), 5000).then(function () { });
                    webUtils.SkipOverlay();
                    switch (button) {
                        case 'GreyHound Record':
                            protractor_1.browser.executeScript('window.scrollTo(0,2000);').then(function () { });
                            webUtils.clickOn(DogDetails_1.DogDetails.GreyHoundRecord);
                            protractor_1.browser.driver.sleep(2000).then(function () { });
                            webUtils.SkipOverlay();
                            break;
                        case 'Form':
                            webUtils.clickOn(DogDetails_1.DogDetails.Form);
                            break;
                        case 'Coursing Form':
                            protractor_1.browser.executeScript('window.scrollTo(0,2000);').then(function () { });
                            webUtils.clickOn(DogDetails_1.DogDetails.CoursingForm);
                            break;
                        case 'Grades':
                            protractor_1.browser.executeScript('window.scrollTo(0,2000);').then(function () { });
                            webUtils.clickOn(DogDetails_1.DogDetails.Grades);
                            break;
                        case 'Litters':
                            webUtils.clickOn(DogDetails_1.DogDetails.Litters);
                            break;
                        case 'Pedigree':
                            webUtils.clickOn(DogDetails_1.DogDetails.Pedigree);
                            break;
                        case 'History':
                            webUtils.clickOn(DogDetails_1.DogDetails.History);
                            break;
                        case 'Trials':
                            protractor_1.browser.executeScript('window.scrollTo(0,2000);').then(function () { });
                            webUtils.clickOn(DogDetails_1.DogDetails.Trials);
                            break;
                        case 'Racing Offences':
                            protractor_1.browser.executeScript('window.scrollTo(600,600);').then(function () { });
                            webUtils.clickOn(DogDetails_1.DogDetails.RacingOffences);
                            break;
                        default: console.log("undefined button to click");
                    }
                }
                else if (tab == "Select Dog Action") {
                    webUtils.clickOn(Racing_1.Racing.Dog);
                    if (button == "Change Dog Activity") {
                        protractor_1.browser.executeScript('window.scrollTo(0,5000);').then(function () { });
                        webUtils.clickOn(DogLocation_1.DogLocation.SelectActionAsChangeDogLocation);
                    }
                }
                else if (tab == "Dog to Accept Breeding") {
                    //   browser.driver.sleep(5000).then(function () { });
                    protractor_1.browser.executeScript('window.scrollTo(600,600);').then(function () { });
                    webUtils.clickOn(Racing_1.Racing.DogAcceptBreeding);
                    //     browser.driver.sleep(1000).then(function () { });
                    if (button == "End Breeding Authority") {
                        //      browser.driver.sleep(1000).then(function () { });
                        webUtils.clickOn(Racing_1.Racing.EndBreedingAuthority);
                        //      browser.driver.sleep(1000).then(function () { });
                    }
                }
                else if (tab == "Dog to check active authority key") {
                    //    browser.driver.sleep(5000).then(function () { });
                    (Racing_1.Racing.DogCheckTransferKey).getText().then(function (text) {
                        console.log(text);
                    });
                    protractor_1.browser.driver.sleep(1000).then(function () { });
                    if (button == "nothing") { }
                }
            }
            else if (menu == "Calendar") {
                webUtils.SkipOverlay();
                protractor_1.browser.executeScript('window.scrollTo(257, 773);').then(function () { });
                webUtils.clickOn(Racing_1.Racing.Calendar);
                protractor_1.browser.driver.sleep(5000).then(function () { });
                webUtils.SkipOverlay();
                protractor_1.browser.wait(EC.elementToBeClickable(Calendar_1.Calendar.Filter), 5000).then(function () { });
                if (tab == "Filter") {
                    webUtils.clickOn(Calendar_1.Calendar.Filter);
                }
            }
            else if (menu == "I Want To") {
                protractor_1.browser.driver.sleep(1000).then(function () { });
                webUtils.SkipOverlay();
                protractor_1.browser.wait(EC.elementToBeClickable(IWantTo_1.IWantTo.IWantTo), 5000).then(function () { });
                webUtils.clickOn(IWantTo_1.IWantTo.IWantTo);
                protractor_1.browser.driver.sleep(1000).then(function () { });
                webUtils.SkipOverlay();
                if (tab == "Club Trials") {
                    protractor_1.browser.wait(EC.elementToBeClickable(IWantTo_1.IWantTo.ClubTrials), 5000).then(function () { });
                    webUtils.clickOn(IWantTo_1.IWantTo.ClubTrials);
                }
                else if (tab == "Kennel") {
                    webUtils.clickOn(DogLocation_1.DogLocation.Kennel);
                    if (button == "Add dog to Kennel") {
                        webUtils.clickOn(DogLocation_1.DogLocation.AddToKennel);
                    }
                    else if (button == "Remove from Kennel") {
                        webUtils.clickOn(DogLocation_1.DogLocation.RemoveFromKennel);
                        protractor_1.browser.driver.sleep(2000).then(function () { });
                        webUtils.SkipOverlay();
                    }
                }
                else if (tab == "Retire Greyhound") {
                    protractor_1.browser.executeScript('window.scrollTo(0,5000);').then(function () { });
                    webUtils.clickOn(IWantTo_1.IWantTo.RetireGreyhound);
                    if (button == "Retire as a Pet") {
                        webUtils.clickOn(IWantTo_1.IWantTo.RetireAsPet);
                        webUtils.SkipOverlay();
                        webUtils.clickOn(Racing_1.Racing.Dog1);
                        protractor_1.browser.driver.sleep(2000).then(function () { });
                        webUtils.SkipOverlay();
                    }
                }
                if (tab == "Breed GreyHound") {
                    webUtils.clickOn(IWantTo_1.IWantTo.BreedGreyhound);
                    protractor_1.browser.driver.sleep(2000).then(function () { });
                    switch (button) {
                        case 'Issue Breeding Authority':
                            webUtils.clickOn(IWantTo_1.IWantTo.TransferDogToBreeder);
                            protractor_1.browser.executeScript('window.scrollTo(200,800);').then(function () { });
                            webUtils.clickOn(IWantTo_1.IWantTo.IssueBreedingAuthority);
                            break;
                        case 'Accept Breeding Authority':
                            webUtils.clickOn(IWantTo_1.IWantTo.TransferDogToBreeder);
                            protractor_1.browser.executeScript('window.scrollTo(200,1000);').then(function () { });
                            webUtils.clickOn(IWantTo_1.IWantTo.AcceptBreedingAuthority);
                            break;
                        case 'Register A Service':
                            protractor_1.browser.executeScript('window.scrollTo(400,1500);').then(function () { });
                            protractor_1.browser.wait(EC.elementToBeClickable(IWantTo_1.IWantTo.BreedingService), 5000).then(function () { });
                            webUtils.clickOn(IWantTo_1.IWantTo.BreedingService);
                            protractor_1.browser.wait(EC.elementToBeClickable(IWantTo_1.IWantTo.RegisterAService), 5000).then(function () { });
                            webUtils.clickOn(IWantTo_1.IWantTo.RegisterAService);
                            protractor_1.browser.driver.sleep(5000).then(function () { });
                            webUtils.SkipOverlay();
                            protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.Dog1), 5000).then(function () { });
                            webUtils.clickOn(Racing_1.Racing.Dog1);
                            webUtils.clickOn(Racing_1.Racing.Submit);
                            break;
                        case 'Whelping Results':
                            protractor_1.browser.executeScript('window.scrollTo(120, 900);').then(function () { });
                            webUtils.clickOn(IWantTo_1.IWantTo.BreedingService);
                            protractor_1.browser.executeScript('window.scrollTo(120, 900);').then(function () { });
                            webUtils.clickOn(BreedingAndLitters_1.BreedingAndLitters.WhelpingResult);
                            break;
                        default: console.log("undefined button to click");
                    }
                }
                else if (tab == "Manage Greyhound") {
                    protractor_1.browser.wait(EC.elementToBeClickable(IWantTo_1.IWantTo.ManageGreyhound), 5000).then(function () { });
                    webUtils.clickOn(IWantTo_1.IWantTo.ManageGreyhound);
                    protractor_1.browser.driver.sleep(1000).then(function () { });
                    switch (button) {
                        case 'Transfer Ownership':
                            webUtils.clickOn(IWantTo_1.IWantTo.TransferManagement);
                            protractor_1.browser.executeScript('window.scrollTo(211,28);').then(function () { });
                            protractor_1.browser.wait(EC.elementToBeClickable(IWantTo_1.IWantTo.TransferOwnership), 5000).then(function () { });
                            webUtils.clickOn(IWantTo_1.IWantTo.TransferOwnership);
                            protractor_1.browser.driver.sleep(3000).then(function () { });
                            webUtils.clickOn(Home_1.Home.SkipOverlay);
                            protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.Dog1), 5000).then(function () { });
                            webUtils.clickOn(Racing_1.Racing.Dog1);
                            protractor_1.browser.executeScript('window.scrollTo(255,12948);').then(function () { });
                            webUtils.clickOn(Racing_1.Racing.Submit);
                            break;
                        case 'Accept Transfer of Ownership':
                            webUtils.clickOn(IWantTo_1.IWantTo.TransferManagement);
                            protractor_1.browser.executeScript('window.scrollTo(211,28);').then(function () { });
                            protractor_1.browser.wait(EC.elementToBeClickable(IWantTo_1.IWantTo.AcceptTransferOfOwnership), 5000).then(function () { });
                            protractor_1.browser.driver.sleep(1000).then(function () { });
                            webUtils.clickOn(IWantTo_1.IWantTo.AcceptTransferOfOwnership);
                            break;
                        case 'Notice of Intent Euthanase':
                            protractor_1.browser.executeScript('window.scrollTo(600,600);').then(function () { });
                            webUtils.clickOn(IWantTo_1.IWantTo.NoticeOfIntent);
                            break;
                        case 'Apply for Dog Names':
                            protractor_1.browser.executeScript('window.scrollTo(0,800);').then(function () { });
                            webUtils.clickOn(IWantTo_1.IWantTo.ApplyfroDogNAmes);
                        default: console.log("undefined button to click");
                    }
                }
            }
            else if (menu == "Account") {
                webUtils.SkipOverlay();
                webUtils.clickOn(Account_1.Account.Account);
                webUtils.SkipOverlay();
                if (tab == "MyAccount") {
                    protractor_1.browser.wait(EC.elementToBeClickable(Account_1.Account.MyAccount), 2000).then(function () { });
                    webUtils.clickOn(Account_1.Account.MyAccount);
                    if (button == "Update account details") {
                        protractor_1.browser.wait(EC.elementToBeClickable(Account_1.Account.UpdateAccountDetails), 2000).then(function () { });
                        protractor_1.browser.executeScript('window.scrollTo(0,5000)');
                        webUtils.clickOn(Account_1.Account.UpdateAccountDetails);
                    }
                    else if (button == "Request a New Card") {
                        //  browser.wait(EC.elementToBeClickable(Account.RequestNewCard), 2000).then(function () { });
                        protractor_1.browser.executeScript('window.scrollTo(0,5000)');
                        webUtils.clickOn(Account_1.Account.RequestNewCard);
                    }
                }
                else if (tab == "Setting") {
                    protractor_1.browser.wait(EC.elementToBeClickable(Account_1.Account.ApplyToParticipate), 5000).then(function () { });
                    if (button == "Apply To Participate") {
                        webUtils.clickOn(Account_1.Account.ApplyToParticipate);
                        protractor_1.browser.driver.sleep(3000).then(function () { });
                    }
                    else if (button == "Registration Status") {
                        webUtils.clickOn(Account_1.Account.RegistrationStatus);
                        protractor_1.browser.driver.sleep(3000).then(function () { });
                    }
                }
                else if (tab == "Finance") {
                    //  browser.driver.sleep(5000);
                    webUtils.clickOn(Account_1.Account.Finance);
                    //   browser.driver.sleep(3000).then(function () { });
                    switch (button) {
                        case 'Bank details':
                            webUtils.clickOn(Account_1.Account.BankDetails);
                            break;
                        case 'Statements':
                            webUtils.clickOn(Account_1.Account.Statement);
                            break;
                        case 'Transaction':
                            webUtils.clickOn(Account_1.Account.Transaction);
                            break;
                        case 'outstanding fees':
                            webUtils.clickOn(Account_1.Account.ScrollRight);
                            protractor_1.browser.driver.sleep(3000).then(function () { });
                            webUtils.clickOn(Account_1.Account.OutstandingFines);
                            break;
                        default: console.log("undefined button to click");
                    }
                    protractor_1.browser.driver.sleep(3000).then(function () { });
                }
                else if (tab == "Syndicates") {
                    webUtils.clickOn(Account_1.Account.Syndicate);
                    //  browser.driver.sleep(20000).then(function () { });
                    if (button = 'View Details') {
                        Account_1.Account.ViewDetails.each(function (element, index) {
                            element.getText().then((text) => __awaiter(this, void 0, void 0, function* () {
                                console.log(text);
                            }));
                        });
                        webUtils.clickOn(Account_1.Account.selectViewDetail);
                        protractor_1.browser.driver.sleep(10000).then(function () { });
                    }
                    else if (button = 'Create a new syndicate')
                        webUtils.clickOn(Account_1.Account.CreateSyndicate);
                }
                else if (tab == "Member History")
                    webUtils.clickOn(Account_1.Account.MemberHistory);
            }
        });
    }
    static DogLocation(status, retiredTo, action) {
        protractor_1.browser.executeScript('window.scrollTo(0, 5000);').then(function () { });
        protractor_1.browser.driver.sleep(1000).then(function () { });
        webUtils.clickOn(RetireGreyhound_1.RetireGreyhound.RetirementStatusDropdown);
        expect(RetireGreyhound_1.RetireGreyhound.RetirementStatusList.count()).to.be.equal(5);
        if (status = 'Pet') {
            //    webUtils.clickOn(RetireGreyhound.SelectPet)     
            if (retiredTo == 'Owner') {
                webUtils.clickOn(RetireGreyhound_1.RetireGreyhound.RetiredToOwner);
                webUtils.clickOn(RetireGreyhound_1.RetireGreyhound.RetiredDate);
                webUtils.clickOn(RetireGreyhound_1.RetireGreyhound.SelectRetiredDate);
            }
            else if (retiredTo == 'A Third Party') {
                webUtils.clickOn(RetireGreyhound_1.RetireGreyhound.RetiredToThirdParty);
                expect(RetireGreyhound_1.RetireGreyhound.EnterFirstName.getAttribute("required").then(function () { })).to.be.equal('true');
                RetireGreyhound_1.RetireGreyhound.EnterFirstName.sendKeys('Testingaaa');
                expect(RetireGreyhound_1.RetireGreyhound.EnterLastName.getAttribute("required").then(function () { })).to.be.equal('true');
                RetireGreyhound_1.RetireGreyhound.EnterLastName.sendKeys('Testingbbb');
                protractor_1.browser.executeScript('window.scrollTo(0, 600);').then(function () { });
                expect(RetireGreyhound_1.RetireGreyhound.EnterContact.getAttribute("required").then(function () { })).to.be.equal('true');
                RetireGreyhound_1.RetireGreyhound.EnterContact.sendKeys(9874563210);
                protractor_1.browser.executeScript('window.scrollTo(0, 800);').then(function () { });
                expect(RetireGreyhound_1.RetireGreyhound.EnterEmail.getAttribute("required").then(function () { })).to.be.equal('true');
                RetireGreyhound_1.RetireGreyhound.EnterEmail.sendKeys('abc@gmail.conm');
                expect(RetireGreyhound_1.RetireGreyhound.EnterStreet.getAttribute("required").then(function () { })).to.be.equal('true');
                RetireGreyhound_1.RetireGreyhound.EnterStreet.sendKeys('15, abc street');
                expect(RetireGreyhound_1.RetireGreyhound.EnterSuburb.getAttribute("required").then(function () { })).to.be.equal('true');
                RetireGreyhound_1.RetireGreyhound.EnterSuburb.sendKeys('abctest');
                protractor_1.browser.executeScript('window.scrollTo(0, 1200);').then(function () { });
                webUtils.clickOn(RetireGreyhound_1.RetireGreyhound.SelectStateDropDown);
                webUtils.clickOn(RetireGreyhound_1.RetireGreyhound.EnterState);
                expect(RetireGreyhound_1.RetireGreyhound.EnterPostcode.getAttribute("required").then(function () { })).to.be.equal('true');
                RetireGreyhound_1.RetireGreyhound.EnterPostcode.sendKeys('1234');
                expect(RetireGreyhound_1.RetireGreyhound.EnterAlternateName.getAttribute("required").then(function () { })).to.be.equal('true');
                RetireGreyhound_1.RetireGreyhound.EnterAlternateName.sendKeys('Testing');
                expect(RetireGreyhound_1.RetireGreyhound.EnterAlternateNo.getAttribute("required").then(function () { })).to.be.equal('true');
                RetireGreyhound_1.RetireGreyhound.EnterAlternateNo.sendKeys(12336547891);
                protractor_1.browser.executeScript('window.scrollTo(0, 1500);').then(function () { });
                webUtils.clickOn(RetireGreyhound_1.RetireGreyhound.SameAsPhysicalAdd);
                protractor_1.browser.executeScript('window.scrollTo(0, 5000);').then(function () { });
                webUtils.clickOn(RetireGreyhound_1.RetireGreyhound.RetiredDate);
                webUtils.clickOn(RetireGreyhound_1.RetireGreyhound.SelectRetiredDate);
            }
            if (action == 'submit') {
                //Racing.Submit.click().then(function () { })
                //Racing.Yes.click().then(function () { })
            }
            else if (action == 'cancel') {
                Racing_1.Racing.Cancel.click().then(function () { });
            }
        }
        if (status = 'Breeding Animal') {
            webUtils.clickOn(RetireGreyhound_1.RetireGreyhound.SelectBreedingAnimal);
            if (retiredTo == 'Owner') {
                webUtils.clickOn(RetireGreyhound_1.RetireGreyhound.RetiredToOwner);
                webUtils.clickOn(RetireGreyhound_1.RetireGreyhound.RetiredDate);
                webUtils.clickOn(RetireGreyhound_1.RetireGreyhound.SelectRetiredDate);
            }
            else if (retiredTo == 'A Third Party') {
                webUtils.clickOn(RetireGreyhound_1.RetireGreyhound.RetiredToThirdParty);
                webUtils.clickOn(RetireGreyhound_1.RetireGreyhound.RetiredDate);
                webUtils.clickOn(RetireGreyhound_1.RetireGreyhound.SelectRetiredDate);
            }
        }
        if (status = 'Euthanised') {
            webUtils.clickOn(RetireGreyhound_1.RetireGreyhound.SelectEuthanised);
            //  expect(RetireGreyhound.DisposalMethod.getAttribute("required")).to.be.equal('true');
            webUtils.clickOn(RetireGreyhound_1.RetireGreyhound.DisposalMethod);
            expect(RetireGreyhound_1.RetireGreyhound.SelectDisposalMethodVet.count()).to.be.equal(3);
            webUtils.clickOn(RetireGreyhound_1.RetireGreyhound.SelectDisposalMethodVet);
            webUtils.clickOn(RetireGreyhound_1.RetireGreyhound.ReasonOfEuthanasia);
            expect(RetireGreyhound_1.RetireGreyhound.SelectReasonOfEuthanasiaInjury.count()).to.be.equal(5);
            webUtils.clickOn(RetireGreyhound_1.RetireGreyhound.SelectReasonOfEuthanasiaEmergency);
        }
    }
    static validatePhone(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            obj.sendKeys("abc");
            protractor_1.browser.actions().sendKeys(ptor_1.protractor.Key.TAB).perform();
            expect(yield Racing_1.Racing.PhoneError.isDisplayed()).to.be.equal(true);
            obj.clear().then(function () {
                return __awaiter(this, void 0, void 0, function* () {
                    obj.sendKeys("1");
                    protractor_1.browser.actions().sendKeys(ptor_1.protractor.Key.TAB).perform();
                    expect(yield Racing_1.Racing.PhoneError.isDisplayed()).to.be.equal(true);
                });
            }),
                obj.clear().then(function () {
                    return __awaiter(this, void 0, void 0, function* () {
                        obj.sendKeys("11111111111");
                        protractor_1.browser.actions().sendKeys(ptor_1.protractor.Key.TAB).perform();
                        expect(yield Racing_1.Racing.PhoneError.isDisplayed()).to.be.equal(true);
                    });
                });
        });
    }
    static setCheckBox(chkBox, bool) {
        return chkBox.isSelected().then(status => {
            if (status !== bool) {
                chkBox.click();
            }
        });
    }
    static click(button) {
        return button.isPresent().then(function (boolean) {
            if (boolean) {
                webUtils.clickOn(button);
            }
            else {
                protractor_1.browser.executeScript('window.scrollTo(0,5000)').then(() => __awaiter(this, void 0, void 0, function* () { }));
                webUtils.clickOn(button);
            }
        });
    }
    static filter(filter, bool) {
        return filter.isEnabled().then((status) => __awaiter(this, void 0, void 0, function* () {
            if (status == bool) {
                yield filter.click();
            }
        }));
    }
    static litterStatus(text, status) {
        if (status == 'Pending') {
            expect(text).to.contain('Pending');
        }
        else if (status == 'Completed') {
            expect(text).to.contain('Completed');
        }
        else
            (console.log("No status provided"));
    }
    static verifyCalendarFilter(filter) {
        filter.getCssValue('background-color').then(function (bgColor) {
            expect(bgColor).to.be.equal("rgba(255, 255, 255, 1)");
        });
    }
    static verifyFilter(Dog, filter) {
        protractor_1.browser.driver.sleep(5000).then(function () { });
        if (Dog == 'Active') {
            MyDogs_1.MyDogs.NoOfActiveDogs.getText().then(function (no) {
                console.log((no).substr(0, 2));
                if (parseInt(no) == 0) {
                    MyDogs_1.MyDogs.NoDogText.getText().then(function (text) {
                        expect(text).to.be.equal("There are no dogs that match this filter.");
                    });
                }
                else {
                    MyDogs_1.MyDogs.SelectedFilter.getText().then(function (text) {
                        expect(text).to.contain(filter);
                    });
                }
            });
        }
        else if (Dog == 'Non Active') {
            MyDogs_1.MyDogs.NoOfActiveDogs.getText().then(function (no) {
                console.log((no).substr(0, 2));
                if (parseInt(no) == 0) {
                    MyDogs_1.MyDogs.NoDogText.getText().then(function (text) {
                        expect(text).to.be.equal("There are no dogs that match this filter.");
                    });
                }
                else {
                    MyDogs_1.MyDogs.SelectedFilter.getText().then(function (text) {
                        expect(text).to.contain(filter);
                    });
                }
            });
        }
    }
}
exports.webUtils = webUtils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViVXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi91dGlscy93ZWJVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFJQSwyQ0FBd0M7QUFDeEMsK0NBQTRDO0FBQzVDLDJDQUFvRDtBQUNwRCxpREFBOEM7QUFDOUMsZ0ZBQWlEO0FBQ2pELHVEQUFtRDtBQUNuRCxpREFBOEM7QUFFOUMsZ0RBQW1EO0FBR25ELHVFQUFvRTtBQUNwRSx1REFBb0Q7QUFDcEQsaUVBQThEO0FBQzlELHlEQUFzRDtBQUN0RCwrQ0FBNEM7QUFDNUMsbURBQWdEO0FBQ2hELElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDcEMsSUFBSSxFQUFFLEdBQUcsaUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztBQUN2QyxJQUFJLFdBQW1CLENBQUM7QUFDeEIsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLFNBQVMsZUFBZSxDQUFDLEdBQVcsRUFBRSxRQUFnQjtJQUNsRCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUN4QyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDakIsQ0FBQztBQUNELE1BQWEsUUFBUTtJQUdqQixNQUFNLENBQ0ksS0FBSyxDQUFDLElBQVk7O1lBQ3hCLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCLG9CQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQTtZQUNoRCxRQUFRLElBQUksRUFBRTtnQkFDVixLQUFLLGlCQUFp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