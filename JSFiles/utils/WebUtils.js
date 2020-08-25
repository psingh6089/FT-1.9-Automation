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
const COP_1 = require("../Specs/ui/COP");
const BreedingAndLitters_1 = require("../Specs/ui/BreedingAndLitters");
let EC = ptor_1.protractor.ExpectedConditions;
class webUtils {
    static logIn(User) {
        if (User == "Paul Westerveld") {
            webUtils.clickOn(Home_1.Home.Login);
            Home_1.Home.UserName.sendKeys(DataInput_json_1.default.data.Paul_User);
            Home_1.Home.Password.sendKeys(DataInput_json_1.default.data.Password);
            webUtils.clickOn(Home_1.Home.LoginContinue);
        }
        else if (User == "William Mcmahon") {
            webUtils.clickOn(Home_1.Home.Login);
            Home_1.Home.UserName.sendKeys(DataInput_json_1.default.data.William_User);
            Home_1.Home.Password.sendKeys(DataInput_json_1.default.data.Password);
            webUtils.clickOn(Home_1.Home.LoginContinue);
        }
        else if (User == "David Long") {
            webUtils.clickOn(Home_1.Home.Login);
            Home_1.Home.UserName.sendKeys(DataInput_json_1.default.data.David_user);
            Home_1.Home.Password.sendKeys(DataInput_json_1.default.data.Password);
            webUtils.clickOn(Home_1.Home.LoginContinue);
        }
        else if (User == "Andrea Daily") {
            webUtils.clickOn(Home_1.Home.Login);
            Home_1.Home.UserName.sendKeys(DataInput_json_1.default.data.Andrea_user);
            Home_1.Home.Password.sendKeys(DataInput_json_1.default.data.Password);
            webUtils.clickOn(Home_1.Home.LoginContinue);
        }
        else if (User == "Glenn Campbell") {
            webUtils.clickOn(Home_1.Home.Login);
            Home_1.Home.UserName.sendKeys(DataInput_json_1.default.data.Glenn_user);
            Home_1.Home.Password.sendKeys(DataInput_json_1.default.data.Password);
            webUtils.clickOn(Home_1.Home.LoginContinue);
        }
        else if (User == "Peter Walsh") {
            webUtils.clickOn(Home_1.Home.Login);
            Home_1.Home.UserName.sendKeys(DataInput_json_1.default.data.Peter_user);
            Home_1.Home.Password.sendKeys(DataInput_json_1.default.data.Password);
            webUtils.clickOn(Home_1.Home.LoginContinue);
        }
    }
    static confirmButton(button) {
        if (button == 'cancel') {
            protractor_1.browser.driver.sleep(2000).then(function () { });
            Racing_1.Racing.Cancel.isPresent().then(function (result) {
                if (result) {
                    webUtils.clickOn(Racing_1.Racing.Cancel);
                }
                else {
                    protractor_1.browser.executeScript('window.scrollTo(0,5000)').then(() => __awaiter(this, void 0, void 0, function* () { }));
                    webUtils.clickOn(Racing_1.Racing.Cancel);
                }
            });
        }
        if (button == "submit") {
            webUtils.clickOn(Racing_1.Racing.Submit);
        }
        if (button == "continue") {
            protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.Continue), 5000).then(function () { });
            webUtils.clickOn(Racing_1.Racing.Continue);
        }
    }
    static registerService(User) {
        Racing_1.Racing.MyDogs.click();
        Racing_1.Racing.DogAction.click();
        Racing_1.Racing.RegisterService.getWebElement().then(function (elm) {
            return protractor_1.browser.executeScript("(arguments[0]).click();", elm);
        });
        protractor_1.browser.driver.sleep(5000);
        Racing_1.Racing.Earbrand.sendKeys("VGODE");
        Racing_1.Racing.DamName.sendKeys("DIM SIM");
        Racing_1.Racing.Search.click();
        protractor_1.browser.driver.sleep(5000);
    }
    static viewSyndicate() {
        webUtils.clickOn(Account_1.Account.Account);
        webUtils.waitForLoader();
        webUtils.clickOn(Account_1.Account.Syndicate);
        webUtils.waitForLoader();
    }
    static viewDetails() {
        webUtils.waitForLoader();
        Account_1.Account.ViewDetails.each(function (element, index) {
            element.getText().then((text) => __awaiter(this, void 0, void 0, function* () {
                console.log(text);
            }));
        });
        //  webUtils.clickOn(Account.selectViewDetail);
    }
    static updateAccountDetails() {
        webUtils.clickOn(Account_1.Account.Account);
        protractor_1.browser.executeScript('window.scrollTo(0,5000)').then(() => __awaiter(this, void 0, void 0, function* () {
        }));
        webUtils.clickOn(Account_1.Account.UpdateAccountDetails);
        webUtils.waitForLoader();
    }
    static clickApplyDogName() {
        webUtils.clickOn(Racing_1.Racing.MyDogs);
        webUtils.clickOn(Non_Racing_1.NonRacing.NonRacing);
        //   browser.wait(EC.elementToBeClickable(Racing.Dog2),5000);
        protractor_1.browser.driver.sleep(5000).then(function () { });
        webUtils.clickOn(Racing_1.Racing.Dog2);
        webUtils.clickOn(Non_Racing_1.NonRacing.ApplyDogName);
    }
    static issueBreedingAuthority() {
        webUtils.clickOn(IWantTo_1.IWantTo.IWantTo);
        webUtils.waitForLoader();
        webUtils.clickOn(IWantTo_1.IWantTo.BreedGreyhound);
        protractor_1.browser.executeScript('window.scrollTo(0,5000)');
        webUtils.clickOn(IWantTo_1.IWantTo.TransferDogToBreeder);
        webUtils.clickOn(IWantTo_1.IWantTo.IWantTo);
        webUtils.clickOn(IWantTo_1.IWantTo.IssueBreedingAuthority);
        webUtils.waitForLoader();
        Racing_1.Racing.Earbrand.getText().then((earbrand) => { var earbrand; return __awaiter(this, void 0, void 0, function* () {
            earbrand = earbrand.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
            console.log('Earbrand of dog is:' + earbrand);
        }); });
        webUtils.clickOn(IWantTo_1.IWantTo.SelectDog);
        webUtils.waitForLoader();
    }
    static clickTransferOwnership() {
        webUtils.clickOn(Racing_1.Racing.MyDogs);
        protractor_1.browser.executeScript('window.scrollTo(0,5000);');
        webUtils.clickOn(Racing_1.Racing.LoadMore);
        protractor_1.browser.executeScript('window.scrollTo(0,5000);');
        webUtils.clickOn(Racing_1.Racing.Dog16);
        webUtils.clickOn(Racing_1.Racing.Transfer);
    }
    static updateAddressDetails() {
        Account_1.Account.ResAddressEdit.clear().then(function () {
            Account_1.Account.ResAddressEdit.sendKeys(DataInput_json_1.default.data.ResAddress);
        });
        Account_1.Account.ResTownEdit.clear().then(function () {
            Account_1.Account.ResTownEdit.sendKeys(DataInput_json_1.default.data.ResTown);
        });
        Account_1.Account.ResPostCodeEdit.clear().then(function () {
            Account_1.Account.ResPostCodeEdit.sendKeys(DataInput_json_1.default.data.ResPostCode);
        });
        Account_1.Account.PostalAddressEdit.clear().then(function () {
            Account_1.Account.PostalAddressEdit.sendKeys(DataInput_json_1.default.data.PostalAddress);
        });
        Account_1.Account.PostalTownEdit.clear().then(function () {
            Account_1.Account.PostalTownEdit.sendKeys(DataInput_json_1.default.data.PostalTown);
        });
        Account_1.Account.PostalPostCodeEdit.clear().then(function () {
            Account_1.Account.PostalPostCodeEdit.sendKeys(DataInput_json_1.default.data.PostalPostCode);
        });
        protractor_1.browser.executeScript('window.scrollTo(0,5000);');
        webUtils.clickOn(Account_1.Account.Save);
        webUtils.waitForLoader();
    }
    static applyDogName() {
        Non_Racing_1.NonRacing.EnterName1.sendKeys(DataInput_json_1.default.data.Dog1);
        webUtils.clickOn(Non_Racing_1.NonRacing.AddDog);
        Non_Racing_1.NonRacing.EnterName2.sendKeys(DataInput_json_1.default.data.Dog2);
        webUtils.clickOn(Non_Racing_1.NonRacing.AddDog);
        Non_Racing_1.NonRacing.EnterName3.sendKeys(DataInput_json_1.default.data.Dog3);
        webUtils.clickOn(Non_Racing_1.NonRacing.AddDog);
        Non_Racing_1.NonRacing.EnterName4.sendKeys(DataInput_json_1.default.data.Dog4);
        protractor_1.browser.executeScript('window.scrollTo(0,5000);');
        webUtils.clickOn(Non_Racing_1.NonRacing.AddDog);
        Non_Racing_1.NonRacing.EnterName5.sendKeys(DataInput_json_1.default.data.Dog5);
        webUtils.clickOn(Non_Racing_1.NonRacing.AddDog);
        Non_Racing_1.NonRacing.EnterName6.sendKeys(DataInput_json_1.default.data.Dog6);
        webUtils.clickOn(Non_Racing_1.NonRacing.AddDog);
        protractor_1.browser.executeScript('window.scrollTo(0,5000);');
        Non_Racing_1.NonRacing.EnterName7.sendKeys(DataInput_json_1.default.data.Dog7);
        webUtils.clickOn(Non_Racing_1.NonRacing.AddDog);
        Non_Racing_1.NonRacing.EnterName8.sendKeys(DataInput_json_1.default.data.Dog8);
        webUtils.clickOn(Non_Racing_1.NonRacing.AddDog);
        Non_Racing_1.NonRacing.EnterName9.sendKeys(DataInput_json_1.default.data.Dog9);
        webUtils.clickOn(Non_Racing_1.NonRacing.AddDog);
        protractor_1.browser.executeScript('window.scrollTo(0,5000);');
        Non_Racing_1.NonRacing.EnterName10.sendKeys(DataInput_json_1.default.data.Dog10);
        webUtils.waitForLoader();
    }
    static AddInjuryEvent() {
        webUtils.clickOn(COP_1.COP.TrackOrNonTrack);
        webUtils.clickOn(COP_1.COP.SelectTrack);
        webUtils.clickOn(COP_1.COP.TrackName);
        COP_1.COP.GetAllTrackNames.getSize().then(function (size) {
            console.log("List of Track Names: " + size);
        });
        webUtils.clickOn(COP_1.COP.SelectTRackNameAsBendigo);
        webUtils.clickOn(COP_1.COP.InjuryType);
        COP_1.COP.GetAllInjuryTypes.getSize().then(function (size) {
            console.log("List of Injury Types: " + size);
        });
        webUtils.clickOn(COP_1.COP.SelectInjuryTypeAsBone);
        webUtils.clickOn(COP_1.COP.InjuryLocation);
        COP_1.COP.GetAllInjuryLocations.getSize().then(function (size) {
            console.log("List of Injury Location: " + size);
        });
        webUtils.clickOn(COP_1.COP.SelectInjuryLocationAsChest);
        webUtils.clickOn(COP_1.COP.InjuryDetail);
        COP_1.COP.GetAllInjuryDetails.getSize().then(function (size) {
            console.log("List of All Injury Details: " + size);
        });
        webUtils.clickOn(COP_1.COP.SelectInjuryDetailAsOther);
        COP_1.COP.EnterOtherInjuryDetails.sendKeys("TestAutomation1");
        webUtils.clickOn(COP_1.COP.InjuryDate);
        webUtils.clickOn(COP_1.COP.SelectInjuryDate);
        webUtils.clickOn(COP_1.COP.Treatment);
        COP_1.COP.GetAllTreatmentList.getSize().then(function (size) {
            console.log("List of all treatments: " + size);
        });
        webUtils.clickOn(COP_1.COP.SelectTreatmentAsUltraSound);
        webUtils.clickOn(COP_1.COP.Frequency);
        COP_1.COP.GetAllFrequencyList.getSize().then(function (size) {
            console.log("List of Frequency: " + size);
        });
        webUtils.clickOn(COP_1.COP.SelectFrequencyAs1X);
        webUtils.clickOn(COP_1.COP.TreatmentDate);
        webUtils.clickOn(COP_1.COP.SelectTreatmentDate);
        COP_1.COP.AdministeredBy.sendKeys("AdministratedTestAutomation1");
        COP_1.COP.AuthorisedBy.sendKeys("AuthorisedTestAutomation1");
        COP_1.COP.Comment.sendKeys("CommentTestAutomation1");
    }
    static fillInterstateAuthority() {
        webUtils.waitForLoader();
        webUtils.clickOn(Racing_1.Racing.Interstate);
        webUtils.clickOn(Racing_1.Racing.IAgree);
        Racing_1.Racing.InputFirstName.sendKeys('Paul');
        Racing_1.Racing.InputLastName.sendKeys('Westerveld');
        protractor_1.browser.executeScript('window.scrollTo(0,5000);');
        webUtils.waitForLoader();
        Racing_1.Racing.Inputstreet.sendKeys('Testing123');
        Racing_1.Racing.InputSuburb.sendKeys('Southbank');
        Racing_1.Racing.InputState.click().then(() => __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.executeScript('window.scrollTo(0,5000);');
            Racing_1.Racing.SelectVic.click().then(function () {
                protractor_1.browser.driver.sleep(5000);
            });
        }));
        Racing_1.Racing.InputPostCode.sendKeys('3006');
    }
    static ResultOfBreeding(result) {
        if (result == "Whelped") {
            webUtils.clickOn(BreedingAndLitters_1.BreedingAndLitters.SelectParentDog);
            webUtils.clickOn(BreedingAndLitters_1.BreedingAndLitters.ResultOfMating);
            webUtils.clickOn(BreedingAndLitters_1.BreedingAndLitters.SelectResultAsWhelped);
            webUtils.clickOn(BreedingAndLitters_1.BreedingAndLitters.SelectNoOfFemalePups);
            webUtils.clickOn(BreedingAndLitters_1.BreedingAndLitters.SelectNoOfMalePups);
            webUtils.clickOn(Racing_1.Racing.Continue);
            webUtils.clickOn(BreedingAndLitters_1.BreedingAndLitters.WhelpedDate);
            webUtils.clickOn(BreedingAndLitters_1.BreedingAndLitters.ChooseWhelpedDate);
            BreedingAndLitters_1.BreedingAndLitters.EnterDog1Kennel.sendKeys("TestAutomation");
            webUtils.clickOn(BreedingAndLitters_1.BreedingAndLitters.Dog1Color);
            webUtils.clickOn(BreedingAndLitters_1.BreedingAndLitters.SelectDog1Color);
            BreedingAndLitters_1.BreedingAndLitters.EnterDog2Kennel.sendKeys("TestAutomation2");
            webUtils.clickOn(BreedingAndLitters_1.BreedingAndLitters.Dog2Color);
            BreedingAndLitters_1.BreedingAndLitters.GetAllDogColors.getText().then(function (colour) {
                console.log("colors of the dogs are:" + colour);
            });
            webUtils.clickOn(BreedingAndLitters_1.BreedingAndLitters.SelectDog2Color);
            webUtils.clickOn(BreedingAndLitters_1.BreedingAndLitters.SelectVetClinic);
        }
        else if (result == 'Missed') {
            webUtils.clickOn(BreedingAndLitters_1.BreedingAndLitters.SelectParentDog);
            webUtils.clickOn(BreedingAndLitters_1.BreedingAndLitters.ResultOfMating);
            webUtils.clickOn(BreedingAndLitters_1.BreedingAndLitters.SelectResultAsMissed);
            //   webUtils.clickOn(Racing.Submit)
            //  webUtils.clickOn(Racing.Continue)
        }
        else {
            alert('Enter exactly three characters. ' +
                'is not valid.');
            return false;
        }
    }
    static clickOn(obj) {
        webUtils.waitForObj(obj);
        return obj.isPresent().then(result => {
            result ? obj.isDisplayed().then(res => {
                obj.click().then(function () {
                    //   browser.driver.sleep(5000);
                });
            }) : logError(obj);
            function logError(obj) {
                obj.getAttribute('name').then(name => {
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
    static Navigate(menu, tab, button) {
        if (menu == "My Dogs") {
            webUtils.clickOn(Racing_1.Racing.MyDogs);
            if (tab == "Non Racing") {
                webUtils.clickOn(Non_Racing_1.NonRacing.NonRacing);
                if (button == "UnNamed Dog") {
                    //  browser.wait(EC.elementToBeClickable(Racing.Dog2), 5000).then(function () { });
                    webUtils.clickOn(Racing_1.Racing.Dog2);
                    //    browser.driver.sleep(5000).then(function () { });
                    protractor_1.browser.executeScript('window.scrollTo(100,1200);').then(function () { });
                    protractor_1.browser.wait(EC.elementToBeClickable(Non_Racing_1.NonRacing.ApplyDogName), 5000);
                    webUtils.clickOn(Non_Racing_1.NonRacing.ApplyDogName);
                }
            }
            /*    if (tab == "Select Dog") {
                    webUtils.clickOn(Racing.Dog2);
                    if (button == "GreyHound Record") {
                        browser.executeScript('window.scrollTo(0,2000);').then(function () { });
                        webUtils.clickOn(Racing.GreyHoundRecord);
                    }
                } */
            else if (tab == "Dog Details") {
                webUtils.clickOn(Racing_1.Racing.DogDetails);
                if (button == "GreyHound Record") {
                    protractor_1.browser.executeScript('window.scrollTo(0,2000);').then(function () { });
                    webUtils.clickOn(Racing_1.Racing.GreyHoundRecord);
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
                webUtils.clickOn(Racing_1.Racing.DogCheckTransferKey).getText().then(function (text) {
                    console.log(text);
                });
                protractor_1.browser.driver.sleep(1000).then(function () { });
                if (button == "nothing") { }
            }
        }
        else if (menu == "I Want To") {
            protractor_1.browser.wait(EC.elementToBeClickable(IWantTo_1.IWantTo.IWantTo), 5000).then(function () { });
            webUtils.clickOn(IWantTo_1.IWantTo.IWantTo);
            if (tab == "Club Trials") {
                protractor_1.browser.wait(EC.elementToBeClickable(IWantTo_1.IWantTo.ClubTrials), 5000).then(function () { });
                webUtils.clickOn(IWantTo_1.IWantTo.ClubTrials);
            }
            if (tab == "Breed GreyHound") {
                webUtils.clickOn(IWantTo_1.IWantTo.BreedGreyhound);
                if (button == "Issue Breeding Authority") {
                    webUtils.clickOn(IWantTo_1.IWantTo.TransferDogToBreeder);
                    webUtils.clickOn(IWantTo_1.IWantTo.IssueBreedingAuthority);
                }
                else if (button == "Accept Breeding Authority") {
                    webUtils.clickOn(IWantTo_1.IWantTo.TransferDogToBreeder);
                    webUtils.clickOn(IWantTo_1.IWantTo.AcceptBreedingAuthority);
                }
                else if (button == "Register A Service") {
                    protractor_1.browser.executeScript('window.scrollTo(400,1500);').then(function () { });
                    protractor_1.browser.wait(EC.elementToBeClickable(IWantTo_1.IWantTo.BreedingService), 5000).then(function () { });
                    webUtils.clickOn(IWantTo_1.IWantTo.BreedingService);
                    protractor_1.browser.wait(EC.elementToBeClickable(IWantTo_1.IWantTo.RegisterAService), 5000).then(function () { });
                    webUtils.clickOn(IWantTo_1.IWantTo.RegisterAService);
                    protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.Dog1), 5000).then(function () { });
                    webUtils.clickOn(Racing_1.Racing.Dog1);
                }
                else if (button == "Whelping Results") {
                    protractor_1.browser.executeScript('window.scrollTo(120, 900);').then(function () { });
                    webUtils.clickOn(IWantTo_1.IWantTo.BreedingService);
                    protractor_1.browser.executeScript('window.scrollTo(120, 900);').then(function () { });
                    webUtils.clickOn(BreedingAndLitters_1.BreedingAndLitters.WhelpingResult);
                }
            }
            else if (tab == "Manage Greyhound") {
                protractor_1.browser.wait(EC.elementToBeClickable(IWantTo_1.IWantTo.ManageGreyhound), 5000).then(function () { });
                webUtils.clickOn(IWantTo_1.IWantTo.ManageGreyhound);
                protractor_1.browser.driver.sleep(1000).then(function () { });
                if (button == "Transfer Ownership") {
                    webUtils.clickOn(IWantTo_1.IWantTo.TransferManagement);
                    protractor_1.browser.executeScript('window.scrollTo(211,28);').then(function () { });
                    protractor_1.browser.wait(EC.elementToBeClickable(IWantTo_1.IWantTo.TransferOwnership), 5000).then(function () { });
                    webUtils.clickOn(IWantTo_1.IWantTo.TransferOwnership);
                    //    browser.driver.sleep(1000).then(function () { });
                    protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.Dog1), 5000).then(function () { });
                    webUtils.clickOn(Racing_1.Racing.Dog1);
                }
                else if (button == "Accept Transfer of Ownership") {
                    webUtils.clickOn(IWantTo_1.IWantTo.TransferManagement);
                    protractor_1.browser.executeScript('window.scrollTo(211,28);').then(function () { });
                    protractor_1.browser.wait(EC.elementToBeClickable(IWantTo_1.IWantTo.AcceptTransferOfOwnership), 5000).then(function () { });
                    webUtils.clickOn(IWantTo_1.IWantTo.AcceptTransferOfOwnership);
                    //   browser.driver.sleep(1000).then(function () { });
                }
                else if (button == "Notice of Intent Euthanase") {
                    protractor_1.browser.executeScript('window.scrollTo(600,600);').then(function () { });
                    //  browser.driver.sleep(1000).then(function () { });
                    webUtils.clickOn(IWantTo_1.IWantTo.NoticeOfIntent);
                    // browser.driver.sleep(1000).then(function () { });
                }
            }
        }
        else if (menu == "Account") {
            webUtils.clickOn(Account_1.Account.Account);
            protractor_1.browser.driver.sleep(2000).then(function () { });
            if (tab == "MyAccount") {
                //    browser.driver.sleep(3000).then(function () { });
                if (button == "Update account details") {
                    protractor_1.browser.executeScript('window.scrollTo(200,900)');
                    webUtils.clickOn(Account_1.Account.UpdateAccountDetails);
                }
            }
            else if (tab == "Finance") {
                //  browser.driver.sleep(5000);
                webUtils.clickOn(Account_1.Account.Finance);
                //   browser.driver.sleep(3000).then(function () { });
                if (button == "Bank details") {
                    webUtils.clickOn(Account_1.Account.BankDetails);
                }
                else if (button == "Statements") {
                    webUtils.clickOn(Account_1.Account.Statement);
                    protractor_1.browser.driver.sleep(3000).then(function () { });
                }
                else if (button == "Transaction") {
                    webUtils.clickOn(Account_1.Account.Transaction);
                    protractor_1.browser.driver.sleep(3000).then(function () { });
                }
                else if (button == "outstanding fees") {
                    webUtils.clickOn(Account_1.Account.ScrollRight);
                    protractor_1.browser.driver.sleep(3000).then(function () { });
                    webUtils.clickOn(Account_1.Account.OutstandingFines);
                }
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
            else if (tab == "Member History") { }
        }
        else if (menu == "View Health Record") {
            webUtils.clickOn(COP_1.COP.ViewHealthRecord);
            if (tab == "Injury") {
                protractor_1.browser.wait(EC.elementToBeClickable(COP_1.COP.Injury), 5000).then(function () { });
                webUtils.clickOn(COP_1.COP.Injury);
                if (button = 'Add Injury Event')
                    webUtils.clickOn(COP_1.COP.AddInjuryEvent);
            }
            else if (tab == "Illness") {
                protractor_1.browser.wait(EC.elementToBeClickable(COP_1.COP.Illness), 5000).then(function () { });
                webUtils.clickOn(COP_1.COP.Illness);
                if (button = 'Add Illness Mangement')
                    webUtils.clickOn(COP_1.COP.AddIllnessManagement);
            }
            else if (tab == "Health") {
                protractor_1.browser.wait(EC.elementToBeClickable(COP_1.COP.Health), 5000).then(function () { });
                webUtils.clickOn(COP_1.COP.Health);
                if (button = 'Add Health Management')
                    webUtils.clickOn(COP_1.COP.AddHealthManagement);
            }
        }
    }
}
exports.webUtils = webUtils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViVXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi91dGlscy93ZWJVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFJQSwyQ0FBd0M7QUFDeEMsK0NBQTRDO0FBQzVDLDJDQUFvRDtBQUNwRCxpREFBOEM7QUFDOUMsZ0ZBQWlEO0FBQ2pELHVEQUFtRDtBQUNuRCxpREFBOEM7QUFFOUMsZ0RBQW1EO0FBQ25ELHlDQUFzQztBQUV0Qyx1RUFBb0U7QUFFcEUsSUFBSSxFQUFFLEdBQUcsaUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztBQUV2QyxNQUFhLFFBQVE7SUFHakIsTUFBTSxDQUNGLEtBQUssQ0FBQyxJQUFJO1FBQ1YsSUFBSSxJQUFJLElBQUksaUJBQWlCLEVBQUU7WUFDM0IsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0IsV0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsd0JBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDaEQsV0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsd0JBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0MsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDeEM7YUFDSSxJQUFJLElBQUksSUFBSSxpQkFBaUIsRUFBRTtZQUNoQyxRQUFRLENBQUMsT0FBTyxDQUFDLFdBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QixXQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyx3QkFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNuRCxXQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyx3QkFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvQyxRQUFRLENBQUMsT0FBTyxDQUFDLFdBQUksQ0FBQyxhQUFhLENB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