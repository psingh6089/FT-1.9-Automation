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
    static SkipOverlay() {
        Home_1.Home.SkipOverlay.isPresent().then(function (result) {
            if (result) {
                Home_1.Home.SkipOverlay.click().then(function () { });
            }
            else { }
        });
    }
    static Navigate(menu, tab, button) {
        if (menu == "My Dogs") {
            webUtils.clickOn(Racing_1.Racing.MyDogs);
            protractor_1.browser.driver.sleep(2000).then(function () { });
            protractor_1.browser.wait(EC.elementToBeClickable(Home_1.Home.SkipOverlay), 5000).then(function () { });
            Home_1.Home.SkipOverlay.isPresent().then(function (result) {
                if (result) {
                    Home_1.Home.SkipOverlay.click().then(function () { });
                }
                else { }
            });
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
            protractor_1.browser.driver.sleep(1000).then(function () { });
            webUtils.SkipOverlay();
            if (tab == "Club Trials") {
                protractor_1.browser.wait(EC.elementToBeClickable(IWantTo_1.IWantTo.ClubTrials), 5000).then(function () { });
                webUtils.clickOn(IWantTo_1.IWantTo.ClubTrials);
            }
            else if (tab == "Retire Greyhound") {
                protractor_1.browser.executeScript('window.scrollTo(0,5000);').then(function () { });
                webUtils.clickOn(IWantTo_1.IWantTo.RetireGreyhound);
                if (button == "Retire as a Pet") {
                    webUtils.clickOn(IWantTo_1.IWantTo.RetireAsPet);
                    webUtils.clickOn(Racing_1.Racing.Dog1);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViVXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi91dGlscy93ZWJVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFJQSwyQ0FBd0M7QUFDeEMsK0NBQTRDO0FBQzVDLDJDQUFvRDtBQUNwRCxpREFBOEM7QUFDOUMsZ0ZBQWlEO0FBQ2pELHVEQUFtRDtBQUNuRCxpREFBOEM7QUFFOUMsZ0RBQW1EO0FBQ25ELHlDQUFzQztBQUV0Qyx1RUFBb0U7QUFDcEUsdURBQW9EO0FBRXBELElBQUksRUFBRSxHQUFHLGlCQUFVLENBQUMsa0JBQWtCLENBQUM7QUFFdkMsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLFNBQVMsZUFBZSxDQUFDLEdBQUcsRUFBRSxRQUFRO0lBQ2xDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNqQixDQUFDO0FBQ0QsTUFBYSxRQUFRO0lBQ2pCLE1BQU0sQ0FDRixLQUFLLENBQUMsSUFBWTtRQUNsQixJQUFJLElBQUksSUFBSSxpQkFBaUIsRUFBRTtZQUMzQixRQUFRLENBQUMsT0FBTyxDQUFDLFdBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QixXQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyx3QkFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNoRCxXQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyx3QkFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvQyxRQUFRLENBQUMsT0FBTyxDQUFDLFdBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUN4QzthQUNJLElBQUksSUFBSSxJQUFJLGlCQUFpQixFQUFFO1lBQ2hDLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCLFdBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLHdCQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ25ELFdBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLHdCQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9DLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3hDO2FBQ0ksSUFBSSxJQUFJLElBQUksWUFBWSxFQUFFO1lBQzNCLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCLFdBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLHdCQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2pELFdBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLHdCQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9DLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3hDO2FBQ0ksSUFBSSxJQUFJLElBQUksY0FBYyxFQUFFO1lBQzdCLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCLFdBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLHdCQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2xELFdBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLHdCQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9DLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3hDO2FBQ0ksSUFBSSxJQUFJLElBQUksZ0JBQWdCLEVBQUU7WUFDL0IsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0IsV0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsd0JBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDakQsV0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsd0JBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0MsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDeEM7YUFDSSxJQUFJLElBQUksSUFBSSxhQUFhLEVBQUU7WUFDNUIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0IsV0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsd0JBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDakQsV0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsd0JBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0MsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDeEM7YUFDSSxJQUFJLElBQUksSUFBSSxPQUFPLEVBQUU7WUFDdEIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0IsV0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsd0JBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUMsV0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsd0JBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0MsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDeEM7SUFDTCxDQUFDO0lBRUQsTUFBTSxDQUNGLGVBQWUsQ0FBQyxJQUFJO1FBQ3BCLGVBQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEIsZUFBTSxDQUFDLFNBQVMsQ0FBQyxL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