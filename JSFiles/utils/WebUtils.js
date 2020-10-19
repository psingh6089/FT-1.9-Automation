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
const RetireGreyhound_1 = require("../Specs/ui/RetireGreyhound");
const DogLocation_1 = require("../Specs/ui/DogLocation");
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
        protractor_1.browser.driver.sleep(5000).then(function () { });
        webUtils.SkipOverlay();
    }
    static registerService(User) {
        Racing_1.Racing.MyDogs.click();
        Racing_1.Racing.Dog.click();
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
                webUtils.clickOn(Racing_1.Racing.MyDogs);
                protractor_1.browser.driver.sleep(10000).then(function () { });
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
                /*    if (tab == "Select Dog") {
                        webUtils.clickOn(Racing.Dog2);
                        if (button == "GreyHound Record") {
                            browser.executeScript('window.scrollTo(0,2000);').then(function () { });
                            webUtils.clickOn(Racing.GreyHoundRecord);
                        }
                    } */
                else if (tab == "Dog Details") {
                    webUtils.clickOn(Racing_1.Racing.DogDetails);
                    protractor_1.browser.wait(EC.elementToBeClickable(DogDetails_1.DogDetails.GreyHoundRecord), 2000).then(function () { });
                    webUtils.SkipOverlay();
                    if (button == "GreyHound Record") {
                        protractor_1.browser.executeScript('window.scrollTo(0,2000);').then(function () { });
                        webUtils.clickOn(DogDetails_1.DogDetails.GreyHoundRecord);
                        protractor_1.browser.driver.sleep(2000).then(function () { });
                        webUtils.SkipOverlay();
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
                else if (tab == "Select Dog Action") {
                    webUtils.clickOn(Racing_1.Racing.Dog);
                    /*     Racing.DogAction.count().then(function(size){
                             console.log(size)  Change Dog Activity
                             for (var i = 0; i <= size; i++) {
                                 Racing.DogAction.get(i).click();
                                 Racing.SelectActions.count().then(function(size2){
                                  //   console.log(size2)
                                 for (var j = 0; j < size2; j++) {
                                   Racing.SelectActions.get(j).getText().then(function (text) {
                             //          console.log(text)
                                     if(text == " Change Dog Activity ")  {
                                     Racing.SelectActions.get(j).click().then(function (){});}
                                     else{}
                                   })
                                              
                                 }
                                     })
                                 }
                              })*/
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
            else if (menu == "I Want To") {
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
                else if (tab == "Member History")
                    webUtils.clickOn(Account_1.Account.MemberHistory);
            }
            else if (menu == "View Health Record") {
                protractor_1.browser.driver.sleep(2000).then(function () { });
                webUtils.SkipOverlay();
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
        });
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
}
exports.webUtils = webUtils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViVXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi91dGlscy93ZWJVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFJQSwyQ0FBd0M7QUFDeEMsK0NBQTRDO0FBQzVDLDJDQUFvRDtBQUNwRCxpREFBOEM7QUFDOUMsZ0ZBQWlEO0FBQ2pELHVEQUFtRDtBQUNuRCxpREFBOEM7QUFFOUMsZ0RBQW1EO0FBQ25ELHlDQUFzQztBQUV0Qyx1RUFBb0U7QUFDcEUsdURBQW9EO0FBQ3BELGlFQUE4RDtBQUM5RCx5REFBc0Q7QUFDdEQsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUNwQyxJQUFJLEVBQUUsR0FBRyxpQkFBVSxDQUFDLGtCQUFrQixDQUFDO0FBQ3ZDLElBQUksV0FBbUIsQ0FBQztBQUN4QixJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkIsU0FBUyxlQUFlLENBQUMsR0FBVyxFQUFFLFFBQWdCO0lBQ2xELElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNqQixDQUFDO0FBQ0QsTUFBYSxRQUFRO0lBR2pCLE1BQU0sQ0FDRixLQUFLLENBQUMsSUFBWTtRQUNsQixJQUFJLElBQUksSUFBSSxpQkFBaUIsRUFBRTtZQUMzQixRQUFRLENBQUMsT0FBTyxDQUFDLFdBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QixXQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyx3QkFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNoRCxXQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyx3QkFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvQyxRQUFRLENBQUMsT0FBTyxDQUFDLFdBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUN4QzthQUNJLElBQUksSUFBSSxJQUFJLGlCQUFpQixFQUFFO1lBQ2hDLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCLFdBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLHdCQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ25ELFdBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLHdCQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9DLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3hDO2FBQ0ksSUFBSSxJQUFJLElBQUksWUFBWSxFQUFFO1lBQzNCLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCLFdBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLHdCQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2pELFdBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLHdCQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9DLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3hDO2FBQ0ksSUFBSSxJQUFJLElBQUksY0FBYyxFQUFFO1lBQzdCLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCLFdBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLHdCQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2xELFdBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLHdCQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9DLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3hDO2FBQ0ksSUFBSSxJQUFJLElBQUksZ0JBQWdCLEVBQUU7WUFDL0IsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0IsV0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsd0JBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDakQsV0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsd0JBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0MsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDeEM7YUFDSSxJQUFJLElBQUksSUFBSSxhQUFhLEVBQUU7WUFDNUIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0IsV0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsd0JBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDakQsV0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsd0JBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0MsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDeEM7YUFDSSxJQUFJLElBQUksSUFBSSxPQUFPLEVBQUU7WUFDdEIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0IsV0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsd0JBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUMsV0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsd0JBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0MsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDeEM7UUFD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