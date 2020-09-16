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
const DogDetails_1 = require("../Specs/ui/DogDetails");
let EC = ptor_1.protractor.ExpectedConditions;
var fs = require('fs');
function writeScreenShot(png, filename) {
    var stream = fs.createWriteStream(filename);
    stream.write(new Buffer(png, 'base64'));
    stream.end();
}
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
        else if (User == "Janet") {
            webUtils.clickOn(Home_1.Home.Login);
            Home_1.Home.UserName.sendKeys(DataInput_json_1.default.data.Janet);
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
                    webUtils.clickOn(DogDetails_1.DogDetails.GreyHoundRecord);
                }
                else if (button == "Form") {
                    webUtils.clickOn(DogDetails_1.DogDetails.Form);
                }
                else if (button == "Coursing Form") {
                    protractor_1.browser.executeScript('window.scrollTo(0,2000);').then(function () { });
                    webUtils.clickOn(DogDetails_1.DogDetails.CoursingForm);
                }
                else if (button == "Grades") {
                    protractor_1.browser.executeScript('window.scrollTo(0,2000);').then(function () { });
                    webUtils.clickOn(DogDetails_1.DogDetails.Grades);
                }
                else if (button == "Litters") {
                    webUtils.clickOn(DogDetails_1.DogDetails.Litters);
                }
                else if (button == "Pedigree") {
                    webUtils.clickOn(DogDetails_1.DogDetails.Pedigree);
                }
                else if (button == "History") {
                    webUtils.clickOn(DogDetails_1.DogDetails.History);
                }
                else if (button == "Trials") {
                    protractor_1.browser.executeScript('window.scrollTo(0,2000);').then(function () { });
                    webUtils.clickOn(DogDetails_1.DogDetails.Trials);
                }
                else if (button == "Racing Offences") {
                    protractor_1.browser.executeScript('window.scrollTo(600,600);').then(function () { });
                    webUtils.clickOn(DogDetails_1.DogDetails.RacingOffences);
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
                    protractor_1.browser.executeScript('window.scrollTo(200,800);').then(function () { });
                    webUtils.clickOn(IWantTo_1.IWantTo.IssueBreedingAuthority);
                }
                else if (button == "Accept Breeding Authority") {
                    webUtils.clickOn(IWantTo_1.IWantTo.TransferDogToBreeder);
                    protractor_1.browser.executeScript('window.scrollTo(200,1000);').then(function () { });
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
                    protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.Dog1), 5000).then(function () { });
                    webUtils.clickOn(Racing_1.Racing.Dog1);
                }
                else if (button == "Accept Transfer of Ownership") {
                    webUtils.clickOn(IWantTo_1.IWantTo.TransferManagement);
                    protractor_1.browser.executeScript('window.scrollTo(211,28);').then(function () { });
                    protractor_1.browser.wait(EC.elementToBeClickable(IWantTo_1.IWantTo.AcceptTransferOfOwnership), 5000).then(function () { });
                    webUtils.clickOn(IWantTo_1.IWantTo.AcceptTransferOfOwnership);
                }
                else if (button == "Notice of Intent Euthanase") {
                    protractor_1.browser.executeScript('window.scrollTo(600,600);').then(function () { });
                    webUtils.clickOn(IWantTo_1.IWantTo.NoticeOfIntent);
                }
            }
        }
        else if (menu == "Account") {
            webUtils.clickOn(Account_1.Account.Account);
            if (tab == "MyAccount") {
                protractor_1.browser.wait(EC.elementToBeClickable(Account_1.Account.MyAccount), 2000).then(function () { });
                webUtils.clickOn(Account_1.Account.MyAccount);
                if (button == "Update account details") {
                    protractor_1.browser.wait(EC.elementToBeClickable(Account_1.Account.UpdateAccountDetails), 2000).then(function () { });
                    protractor_1.browser.executeScript('window.scrollTo(0,5000)');
                    webUtils.clickOn(Account_1.Account.UpdateAccountDetails);
                }
            }
            else if (tab == "Setting") {
                protractor_1.browser.wait(EC.elementToBeClickable(Account_1.Account.ApplyToParticipate), 5000).then(function () { });
                if (button == "Apply To Participate") {
                    webUtils.clickOn(Account_1.Account.ApplyToParticipate);
                    protractor_1.browser.driver.sleep(3000).then(function () { });
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
    static DogDetails(tab) {
        if (tab == 'Form') {
            protractor_1.browser.executeScript('window.scrollTo(0,800);').then(function () { });
            protractor_1.browser.driver.sleep(1000).then(function () { });
            DogDetails_1.DogDetails.FormPage.getText().then(function (text) {
                console.log("Form Page  " + text);
            });
            //      browser.takeScreenshot().then(function (png) {
            //       writeScreenShot(png, 'DogDetailsFormRunResult.png');       
            //})
        }
        else if (tab == 'Coursing Form') {
            DogDetails_1.DogDetails.CoursingForm.getText().then(function (text) {
                console.log("Coursing Form Page  " + text);
            });
        }
        else if (tab == 'Grades') {
            protractor_1.browser.driver.sleep(1000).then(function () { });
            DogDetails_1.DogDetails.GradesPage.getText().then(function (text) {
                console.log("Grades Page  " + text);
            });
            protractor_1.browser.takeScreenshot().then(function (png) {
                writeScreenShot(png, 'DogDetailsGrades.png');
            });
        }
        else if (tab == 'Litters') {
            protractor_1.browser.driver.sleep(2000).then(function () { });
            protractor_1.browser.takeScreenshot().then(function (png) {
                writeScreenShot(png, 'DogDetailsLitterPage.png');
            });
            DogDetails_1.DogDetails.LittersPage.getText().then(function (text) {
                console.log("Litters  " + text);
            });
        }
        else if (tab == 'Pedigree') {
            protractor_1.browser.driver.sleep(1000).then(function () { });
            protractor_1.browser.takeScreenshot().then(function (png) {
                writeScreenShot(png, 'DogDetailsPedigree.png');
            });
            DogDetails_1.DogDetails.PedigreeePage.getText().then(function (text) {
                console.log("Pedigree  " + text);
            });
        }
        else if (tab == 'History') {
            protractor_1.browser.driver.sleep(1000).then(function () { });
            protractor_1.browser.takeScreenshot().then(function (png) {
                writeScreenShot(png, 'DogDetailsHistory.png');
            });
            DogDetails_1.DogDetails.HistoryPage.getText().then(function (text) {
                console.log("History  " + text);
            });
        }
        else if (tab == 'Trials') {
            protractor_1.browser.driver.sleep(1000).then(function () { });
            protractor_1.browser.takeScreenshot().then(function (png) {
                writeScreenShot(png, 'DogDetailsTrials.png');
            });
            DogDetails_1.DogDetails.TrialsPage.getText().then(function (text) {
                console.log("Trials  " + text);
            });
        }
        else if (tab == 'Racing Offences') {
            protractor_1.browser.driver.sleep(5000).then(function () { });
            protractor_1.browser.takeScreenshot().then(function (png) {
                writeScreenShot(png, 'DogDetailsRacingOffence.png');
            });
            DogDetails_1.DogDetails.RacingOffencePage.getText().then((text) => __awaiter(this, void 0, void 0, function* () {
                console.log("Racing Offences  " + text);
            }));
        }
        else
            (console.log("nothing is selected"));
    }
}
exports.webUtils = webUtils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViVXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi91dGlscy93ZWJVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFJQSwyQ0FBd0M7QUFDeEMsK0NBQTRDO0FBQzVDLDJDQUFvRDtBQUNwRCxpREFBOEM7QUFDOUMsZ0ZBQWlEO0FBQ2pELHVEQUFtRDtBQUNuRCxpREFBOEM7QUFFOUMsZ0RBQW1EO0FBQ25ELHlDQUFzQztBQUV0Qyx1RUFBb0U7QUFDcEUsdURBQW9EO0FBRXBELElBQUksRUFBRSxHQUFHLGlCQUFVLENBQUMsa0JBQWtCLENBQUM7QUFFdkMsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLFNBQVMsZUFBZSxDQUFDLEdBQUcsRUFBRSxRQUFRO0lBQ2xDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNmLENBQUM7QUFFSCxNQUFhLFFBQVE7SUFHakIsTUFBTSxDQUNGLEtBQUssQ0FBQyxJQUFZO1FBQ2xCLElBQUksSUFBSSxJQUFJLGlCQUFpQixFQUFFO1lBQzNCLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCLFdBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLHdCQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2hELFdBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLHdCQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9DLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3hDO2FBQ0ksSUFBSSxJQUFJLElBQUksaUJBQWlCLEVBQUU7WUFDaEMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0IsV0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsd0JBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDbkQsV0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsd0JBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0MsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDeEM7YUFDSSxJQUFJLElBQUksSUFBSSxZQUFZLEVBQUU7WUFDM0IsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0IsV0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsd0JBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDakQsV0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsd0JBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0MsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDeEM7YUFDSSxJQUFJLElBQUksSUFBSSxjQUFjLEVBQUU7WUFDN0IsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0IsV0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsd0JBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDbEQsV0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsd0JBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0MsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDeEM7YUFFSSxJQUFJLElBQUksSUFBSSxnQkFBZ0IsRUFBRTtZQUMvQixRQUFRLENBQUMsT0FBTyxDQUFD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