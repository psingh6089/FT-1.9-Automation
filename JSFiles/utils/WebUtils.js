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
        webUtils.clickOn(Home_1.Home.Login);
        if (User == "Paul Westerveld")
            Home_1.Home.UserName.sendKeys(DataInput_json_1.default.data.Paul_User);
        else if (User == "William Mcmahon")
            Home_1.Home.UserName.sendKeys(DataInput_json_1.default.data.William_User);
        else if (User == "David Long")
            Home_1.Home.UserName.sendKeys(DataInput_json_1.default.data.David_user);
        else if (User == "Andrea Daily")
            Home_1.Home.UserName.sendKeys(DataInput_json_1.default.data.Andrea_user);
        else if (User == "Glenn Campbell")
            Home_1.Home.UserName.sendKeys(DataInput_json_1.default.data.Glenn_user);
        else if (User == "Peter Walsh")
            Home_1.Home.UserName.sendKeys(DataInput_json_1.default.data.Peter_user);
        else if (User == "Janet")
            Home_1.Home.UserName.sendKeys(DataInput_json_1.default.data.Janet);
        Home_1.Home.Password.sendKeys(DataInput_json_1.default.data.Password);
        webUtils.clickOn(Home_1.Home.LoginContinue);
        // browser.driver.sleep(5000).then(function(){})
        //   webUtils.SkipOverlay();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViVXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi91dGlscy93ZWJVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFJQSwyQ0FBd0M7QUFDeEMsK0NBQTRDO0FBQzVDLDJDQUFvRDtBQUNwRCxpREFBOEM7QUFDOUMsZ0ZBQWlEO0FBQ2pELHVEQUFtRDtBQUNuRCxpREFBOEM7QUFFOUMsZ0RBQW1EO0FBQ25ELHlDQUFzQztBQUV0Qyx1RUFBb0U7QUFDcEUsdURBQW9EO0FBQ3BELGlFQUE4RDtBQUM5RCx5REFBc0Q7QUFDdEQsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUNwQyxJQUFJLEVBQUUsR0FBRyxpQkFBVSxDQUFDLGtCQUFrQixDQUFDO0FBQ3ZDLElBQUksV0FBbUIsQ0FBQztBQUN4QixJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkIsU0FBUyxlQUFlLENBQUMsR0FBVyxFQUFFLFFBQWdCO0lBQ2xELElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNqQixDQUFDO0FBQ0QsTUFBYSxRQUFRO0lBR2pCLE1BQU0sQ0FDRixLQUFLLENBQUMsSUFBWTtRQUNkLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLElBQUksSUFBSSxJQUFJLGlCQUFpQjtZQUN6QixXQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyx3QkFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMvQyxJQUFJLElBQUksSUFBSSxpQkFBaUI7WUFDOUIs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