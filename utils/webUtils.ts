/**
 * Created by Priti Singh 14/5/2020
*/
import { Given, When, Then } from "cucumber";
import { Home } from "../Specs/ui/Home";
import { Racing } from "../Specs/ui/Racing";
import { browser, ElementFinder } from "protractor";
import { Account } from "../Specs/ui/Account";
import testData from "../testData/DataInput.json"
import { NonRacing } from "../Specs/ui/Non-Racing";
import { IWantTo } from "../Specs/ui/IWantTo";
import { DriverProvider } from "protractor/built/driverProviders";
import { protractor } from "protractor/built/ptor";
import { COP } from "../Specs/ui/COP";
import { Alert } from 'selenium-webdriver';
import { BreedingAndLitters } from "../Specs/ui/BreedingAndLitters";
import { DogDetails } from "../Specs/ui/DogDetails";
import { RetireGreyhound } from "../Specs/ui/RetireGreyhound";
import { DogLocation } from "../Specs/ui/DogLocation";
var expect = require('chai').expect;
let EC = protractor.ExpectedConditions;
var DogEarbrand: string;
var fs = require('fs');
function writeScreenShot(png: string, filename: string) {
    var stream = fs.createWriteStream(filename);
    stream.write(new Buffer(png, 'base64'));
    stream.end();
}
export class webUtils {
    static DogEarbrand: string;
    static attach: any;
    static
        logIn(User: string) {
            webUtils.clickOn(Home.Login);
        if (User == "Paul Westerveld")             
            Home.UserName.sendKeys(testData.data.Paul_User); 
        else if (User == "William Mcmahon")
            Home.UserName.sendKeys(testData.data.William_User)
        else if (User == "David Long")
            Home.UserName.sendKeys(testData.data.David_user)
        else if (User == "Andrea Daily")
            Home.UserName.sendKeys(testData.data.Andrea_user)
        else if (User == "Glenn Campbell")
            Home.UserName.sendKeys(testData.data.Glenn_user)
        else if (User == "Peter Walsh")
            Home.UserName.sendKeys(testData.data.Peter_user)
        else if (User == "Janet")
            Home.UserName.sendKeys(testData.data.Janet)

           Home.Password.sendKeys(testData.data.Password);
            webUtils.clickOn(Home.LoginContinue);
       // browser.driver.sleep(5000).then(function(){})
     //   webUtils.SkipOverlay();
    }

    static
        registerService(User: any) {
        Racing.MyDogs.click();
        Racing.Dog.click();
        Racing.RegisterService.getWebElement().then(function (elm) {
            return browser.executeScript("(arguments[0]).click();", elm)
        });
        browser.driver.sleep(5000);
        Racing.Earbrand.sendKeys("VGODE");
        Racing.DamName.sendKeys("DIM SIM");
        Racing.Search.click();
        browser.driver.sleep(5000);
    }

    static
        viewSyndicate() {
        webUtils.clickOn(Account.Account);
        webUtils.waitForLoader();
        webUtils.clickOn(Account.Syndicate);
        webUtils.waitForLoader();
    }

    static
        viewDetails() {
        Account.ViewDetails.each(function (element, index) {
            element.getText().then(async (text) => {
                console.log(text);
            });
        })
        //  webUtils.clickOn(Account.selectViewDetail);
    }

    static
        updateAccountDetails() {
        webUtils.clickOn(Account.Account);
        browser.executeScript('window.scrollTo(0,5000)').then(async () => {
        });
        webUtils.clickOn(Account.UpdateAccountDetails);
        webUtils.waitForLoader();
    }

    static
        clickApplyDogName() {
        webUtils.clickOn(Racing.MyDogs);
        webUtils.clickOn(NonRacing.NonRacing);
        //   browser.wait(EC.elementToBeClickable(Racing.Dog2),5000);
        browser.driver.sleep(5000).then(function () { })
        webUtils.clickOn(Racing.Dog2);
        webUtils.clickOn(NonRacing.ApplyDogName);
    }

    static
        issueBreedingAuthority() {
        webUtils.clickOn(IWantTo.IWantTo);
        webUtils.waitForLoader();
        webUtils.clickOn(IWantTo.BreedGreyhound);
        browser.executeScript('window.scrollTo(0,5000)');
        webUtils.clickOn(IWantTo.TransferDogToBreeder);
        webUtils.clickOn(IWantTo.IWantTo);
        webUtils.clickOn(IWantTo.IssueBreedingAuthority);
        webUtils.waitForLoader();
        Racing.Earbrand.getText().then(async (earbrand) => {
            var earbrand = earbrand.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
            console.log('Earbrand of dog is:' + earbrand)
        })
        webUtils.clickOn(IWantTo.SelectDog);
        webUtils.waitForLoader();
    }

    static
        clickTransferOwnership() {
        webUtils.clickOn(Racing.MyDogs);
        browser.executeScript('window.scrollTo(0,5000);');
        webUtils.clickOn(Racing.LoadMore);
        browser.executeScript('window.scrollTo(0,5000);');
        webUtils.clickOn(Racing.Dog16);
        webUtils.clickOn(Racing.Transfer);
    }

        static
        fillInterstateAuthority() {
        webUtils.waitForLoader();
        webUtils.clickOn(Racing.Interstate);
        webUtils.clickOn(Racing.IAgree);
        Racing.InputFirstName.sendKeys('Paul');
        Racing.InputLastName.sendKeys('Westerveld');
        browser.executeScript('window.scrollTo(0,5000);');
        webUtils.waitForLoader();
        Racing.Inputstreet.sendKeys('Testing123');
        Racing.InputSuburb.sendKeys('Southbank');
        Racing.InputState.click().then(async () => {
            await browser.executeScript('window.scrollTo(0,5000);');
            Racing.SelectVic.click().then(function () {
                browser.driver.sleep(5000);
            })
        })
        Racing.InputPostCode.sendKeys('3006');
    }
    static
        clickOn(obj) {
        webUtils.waitForObj(obj);
        return obj.isPresent().then((result: any) => {
            result ? obj.isDisplayed().then((res: any) => {
                obj.click().then(function () {
                })
            }) : logError(obj);
            function logError(obj: { getAttribute: (arg0: string) => Promise<any>; }) {
                obj.getAttribute('name').then((name: string) => {
                    console.error(name + "clickOn: Object is currently not visible to click");
                });
            }
        });
    }

    static
        waitForObj(obj: ElementFinder) {
        return browser.wait(EC.elementToBeClickable(obj), 20000).then(function () { })
    }
    static
        waitForLoader() {
        return browser.wait(function (){},5000);
        //  return browser.wait(EC.invisibilityOf(element(by.css('div#mainContentArea>div#loader>div.loading-panel'))), 5000 );
    }

    static
    SkipOverlay(){
        Home.SkipOverlay.isPresent().then(function (result) {
            if (result) {
              webUtils.clickOn(Home.SkipOverlay)
            } else {  }
          });
}

static
ValidateDog(){
    webUtils.clickOn(Racing.MyDogs);
    webUtils.clickOn(Home.NonRacing);
    RetireGreyhound.DogEarbrand.getText().then(function(DogList) {
        expect(DogList).toContain(DogEarbrand);
        console.log(DogList)
    })
}
    static
        async Navigate(menu: string, tab: string, button: string) {           
        if (menu == "My Dogs") {                
           webUtils.clickOn(Racing.MyDogs);
           browser.driver.sleep(10000).then(function () { });
           webUtils.SkipOverlay();
           if (tab == "Non Racing") {
                webUtils.clickOn(NonRacing.NonRacing);
                browser.wait(EC.elementToBeClickable(Racing.Interstate), 2000).then(function () { });
                webUtils.SkipOverlay()
                if (button == "UnNamed Dog") {
                    //  browser.wait(EC.elementToBeClickable(Racing.Dog2), 5000).then(function () { });
                    webUtils.clickOn(Racing.Dog2);
                    //    browser.driver.sleep(5000).then(function () { });
                    browser.executeScript('window.scrollTo(100,1200);').then(function () { });
               //     browser.wait(EC.elementToBeClickable(NonRacing.ApplyDogName), 5000);
                    webUtils.clickOn(NonRacing.ApplyDogName);
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
                webUtils.clickOn(Racing.DogDetails);
                browser.wait(EC.elementToBeClickable(DogDetails.GreyHoundRecord), 2000).then(function () { });
                webUtils.SkipOverlay()
                if (button == "GreyHound Record") {
                    browser.executeScript('window.scrollTo(0,2000);').then(function () { });
                    webUtils.clickOn(DogDetails.GreyHoundRecord);
                    browser.driver.sleep(2000).then(function () { });
                    webUtils.SkipOverlay()
                }
                else if (button == "Form") {
                    webUtils.clickOn(DogDetails.Form);
                }
                else if (button == "Coursing Form") {
                    browser.executeScript('window.scrollTo(0,2000);').then(function () { });
                    webUtils.clickOn(DogDetails.CoursingForm);
                }
                else if (button == "Grades") {
                    browser.executeScript('window.scrollTo(0,2000);').then(function () { });
                    webUtils.clickOn(DogDetails.Grades);
                }
                else if (button == "Litters") {
                    webUtils.clickOn(DogDetails.Litters);
                }
                else if (button == "Pedigree") {
                    webUtils.clickOn(DogDetails.Pedigree);
                }
                else if (button == "History") {
                    webUtils.clickOn(DogDetails.History);
                }
                else if (button == "Trials") {
                    browser.executeScript('window.scrollTo(0,2000);').then(function () { });
                    webUtils.clickOn(DogDetails.Trials);
                }
                else if (button == "Racing Offences") {
                    browser.executeScript('window.scrollTo(600,600);').then(function () { });
                    webUtils.clickOn(DogDetails.RacingOffences);
                }
            }
            else if (tab == "Select Dog Action") {      
               webUtils.clickOn(Racing.Dog)   
                           
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
                    browser.executeScript('window.scrollTo(0,5000);').then(function () { });      
                    webUtils.clickOn(DogLocation.SelectActionAsChangeDogLocation)               
                }
            }
            else if (tab == "Dog to Accept Breeding") {
                //   browser.driver.sleep(5000).then(function () { });
                browser.executeScript('window.scrollTo(600,600);').then(function () { });
                webUtils.clickOn(Racing.DogAcceptBreeding);
                //     browser.driver.sleep(1000).then(function () { });
                if (button == "End Breeding Authority") {
                    //      browser.driver.sleep(1000).then(function () { });
                    webUtils.clickOn(Racing.EndBreedingAuthority);
                    //      browser.driver.sleep(1000).then(function () { });
                }
            }
            else if (tab == "Dog to check active authority key") {
                //    browser.driver.sleep(5000).then(function () { });
                (Racing.DogCheckTransferKey).getText().then(function (text: any) {
                    console.log(text);
                })
                browser.driver.sleep(1000).then(function () { });
                if (button == "nothing") { }
            }
        }
        else if (menu == "I Want To") {
            browser.wait(EC.elementToBeClickable(IWantTo.IWantTo), 5000).then(function () { });
            webUtils.clickOn(IWantTo.IWantTo);
            browser.driver.sleep(1000).then(function () { });
            webUtils.SkipOverlay()
            if (tab == "Club Trials") {
                browser.wait(EC.elementToBeClickable(IWantTo.ClubTrials), 5000).then(function () { });
                webUtils.clickOn(IWantTo.ClubTrials);
            }
            else  if (tab == "Kennel") {
                webUtils.clickOn(DogLocation.Kennel);
                if (button == "Add dog to Kennel") {
                    webUtils.clickOn(DogLocation.AddToKennel);
            }
            else if (button == "Remove from Kennel") {
                webUtils.clickOn(DogLocation.RemoveFromKennel);
                browser.driver.sleep(2000).then(function () { });  
                webUtils.SkipOverlay();
        }
    }
            else  if (tab == "Retire Greyhound") {
                browser.executeScript('window.scrollTo(0,5000);').then(function () { }) 
                webUtils.clickOn(IWantTo.RetireGreyhound);
                if (button == "Retire as a Pet") {
                    webUtils.clickOn(IWantTo.RetireAsPet);
                    webUtils.SkipOverlay();
                    webUtils.clickOn(Racing.Dog1);
                    browser.driver.sleep(2000).then(function () { });  
                    webUtils.SkipOverlay();
                }
            }
            if (tab == "Breed GreyHound") {
                webUtils.clickOn(IWantTo.BreedGreyhound);
                if (button == "Issue Breeding Authority") {
                    webUtils.clickOn(IWantTo.TransferDogToBreeder);
                    browser.executeScript('window.scrollTo(200,800);').then(function () { })
                    webUtils.clickOn(IWantTo.IssueBreedingAuthority);
                }
                else if (button == "Accept Breeding Authority") {
                    webUtils.clickOn(IWantTo.TransferDogToBreeder);
                    browser.executeScript('window.scrollTo(200,1000);').then(function () { })
                    webUtils.clickOn(IWantTo.AcceptBreedingAuthority);
                }
                else if (button == "Register A Service") {
                    browser.executeScript('window.scrollTo(400,1500);').then(function () { });
                    browser.wait(EC.elementToBeClickable(IWantTo.BreedingService), 5000).then(function () { });
                    webUtils.clickOn(IWantTo.BreedingService);
                    browser.wait(EC.elementToBeClickable(IWantTo.RegisterAService), 5000).then(function () { });
                    webUtils.clickOn(IWantTo.RegisterAService);
                    browser.wait(EC.elementToBeClickable(Racing.Dog1), 5000).then(function () { });
                    webUtils.clickOn(Racing.Dog1);
                }
                else if (button == "Whelping Results") {
                    browser.executeScript('window.scrollTo(120, 900);').then(function () { });
                    webUtils.clickOn(IWantTo.BreedingService);
                    browser.executeScript('window.scrollTo(120, 900);').then(function () { });
                    webUtils.clickOn(BreedingAndLitters.WhelpingResult);
                }
            }
            else if (tab == "Manage Greyhound") {
                browser.wait(EC.elementToBeClickable(IWantTo.ManageGreyhound), 5000).then(function () { });
                webUtils.clickOn(IWantTo.ManageGreyhound);
                browser.driver.sleep(1000).then(function () { });
                if (button == "Transfer Ownership") {
                    webUtils.clickOn(IWantTo.TransferManagement);
                    browser.executeScript('window.scrollTo(211,28);').then(function () { });
                    browser.wait(EC.elementToBeClickable(IWantTo.TransferOwnership), 5000).then(function () { });
                    webUtils.clickOn(IWantTo.TransferOwnership);
                    browser.wait(EC.elementToBeClickable(Racing.Dog1), 5000).then(function () { });
                    webUtils.clickOn(Racing.Dog1);
                }
                else if (button == "Accept Transfer of Ownership") {
                    webUtils.clickOn(IWantTo.TransferManagement);
                    browser.executeScript('window.scrollTo(211,28);').then(function () { });
                    browser.wait(EC.elementToBeClickable(IWantTo.AcceptTransferOfOwnership), 5000).then(function () { });
                    webUtils.clickOn(IWantTo.AcceptTransferOfOwnership);

                }

                else if (button == "Notice of Intent Euthanase") {
                    browser.executeScript('window.scrollTo(600,600);').then(function () { });
                    webUtils.clickOn(IWantTo.NoticeOfIntent);
                }
            }
        }
        else if (menu == "Account") {
            webUtils.clickOn(Account.Account);
            webUtils.SkipOverlay()
            if (tab == "MyAccount") {
                browser.wait(EC.elementToBeClickable(Account.MyAccount), 2000).then(function () { });
                webUtils.clickOn(Account.MyAccount);
                if (button == "Update account details") {
                    browser.wait(EC.elementToBeClickable(Account.UpdateAccountDetails), 2000).then(function () { });
                    browser.executeScript('window.scrollTo(0,5000)');
                    webUtils.clickOn(Account.UpdateAccountDetails);
                }
                else if (button == "Request a New Card") {
                  //  browser.wait(EC.elementToBeClickable(Account.RequestNewCard), 2000).then(function () { });
                    browser.executeScript('window.scrollTo(0,5000)');
                    webUtils.clickOn(Account.RequestNewCard);
                }
            }
            else if (tab == "Setting") {
                browser.wait(EC.elementToBeClickable(Account.ApplyToParticipate), 5000).then(function () { });
                if (button == "Apply To Participate") {
                    webUtils.clickOn(Account.ApplyToParticipate);
                    browser.driver.sleep(3000).then(function () { });
                }
                else if (button == "Registration Status") {
                    webUtils.clickOn(Account.RegistrationStatus);
                    browser.driver.sleep(3000).then(function () { });
                }
            }
            else if (tab == "Finance") {
                //  browser.driver.sleep(5000);
                webUtils.clickOn(Account.Finance);
                //   browser.driver.sleep(3000).then(function () { });
                if (button == "Bank details") {
                    webUtils.clickOn(Account.BankDetails);
                }
                else if (button == "Statements") {
                    webUtils.clickOn(Account.Statement);
                    browser.driver.sleep(3000).then(function () { });
                }
                else if (button == "Transaction") {
                    webUtils.clickOn(Account.Transaction);
                    browser.driver.sleep(3000).then(function () { });
                }
                else if (button == "outstanding fees") {
                    webUtils.clickOn(Account.ScrollRight);
                    browser.driver.sleep(3000).then(function () { });
                    webUtils.clickOn(Account.OutstandingFines);
                }
            }
            else if (tab == "Syndicates") {
                webUtils.clickOn(Account.Syndicate);
                //  browser.driver.sleep(20000).then(function () { });
                if (button = 'View Details') {
                    Account.ViewDetails.each(function (element, index) {
                        element.getText().then(async (text) => {
                            console.log(text);
                        })
                    })
                    webUtils.clickOn(Account.selectViewDetail);
                    browser.driver.sleep(10000).then(function () { });
                }
                else if (button = 'Create a new syndicate')
                    webUtils.clickOn(Account.CreateSyndicate);
            }
            
            else if (tab == "Member History") 
                webUtils.clickOn(Account.MemberHistory);    
        }            
        else if (menu == "View Health Record") {
            browser.driver.sleep(2000).then(function () { });
                    webUtils.SkipOverlay()
            webUtils.clickOn(COP.ViewHealthRecord);
            if (tab == "Injury") {
                browser.wait(EC.elementToBeClickable(COP.Injury), 5000).then(function () { });
                webUtils.clickOn(COP.Injury);
                if (button = 'Add Injury Event')
                    webUtils.clickOn(COP.AddInjuryEvent);
            }
            else if (tab == "Illness") {
                browser.wait(EC.elementToBeClickable(COP.Illness), 5000).then(function () { });
                webUtils.clickOn(COP.Illness);
                if (button = 'Add Illness Mangement')
                    webUtils.clickOn(COP.AddIllnessManagement);
            }
            else if (tab == "Health") {
                browser.wait(EC.elementToBeClickable(COP.Health), 5000).then(function () { });
                webUtils.clickOn(COP.Health);
                if (button = 'Add Health Management')
                    webUtils.clickOn(COP.AddHealthManagement);
            }
        }
    }
    static
        DogDetails(tab: string) {
        if (tab == 'Form') {
            browser.executeScript('window.scrollTo(0,800);').then(function () { });
            browser.driver.sleep(1000).then(function () { })
            DogDetails.FormPage.getText().then(function (text) {
                console.log("Form Page  " + text)
            });
            //      browser.takeScreenshot().then(function (png) {
            //       writeScreenShot(png, 'DogDetailsFormRunResult.png');       
            //})
        }
        else if (tab == 'Coursing Form') {
            DogDetails.CoursingForm.getText().then(function (text) {
                console.log("Coursing Form Page  " + text)
            });
        }
        else if (tab == 'Grades') {
            browser.driver.sleep(1000).then(function () { })
            DogDetails.GradesPage.getText().then(function (text) {
                console.log("Grades Page  " + text)
            });
            browser.takeScreenshot().then(function (png) {
                writeScreenShot(png, 'DogDetailsGrades.png');
            })
        }
        else if (tab == 'Litters') {
            browser.driver.sleep(2000).then(function () { })
            browser.takeScreenshot().then(function (png) {
                writeScreenShot(png, 'DogDetailsLitterPage.png');
            });
            DogDetails.LittersPage.getText().then(function (text) {
                console.log("Litters  " + text)
            })
        }
        else if (tab == 'Pedigree') {
            browser.driver.sleep(1000).then(function () { })
            browser.takeScreenshot().then(function (png) {
                writeScreenShot(png, 'DogDetailsPedigree.png');
            });
            DogDetails.PedigreeePage.getText().then(function (text) {
                console.log("Pedigree  " + text)
            })
        }
        else if (tab == 'History') {
            browser.driver.sleep(1000).then(function () { })
            browser.takeScreenshot().then(function (png) {
                writeScreenShot(png, 'DogDetailsHistory.png');
            });
            DogDetails.HistoryPage.getText().then(function (text) {
                console.log("History  " + text)
            })
        }
        else if (tab == 'Trials') {
            browser.driver.sleep(1000).then(function () { })
            browser.takeScreenshot().then(function (png) {
                writeScreenShot(png, 'DogDetailsTrials.png');
            });
            DogDetails.TrialsPage.getText().then(function (text) {
                console.log("Trials  " + text)
            })
        }
        else if (tab == 'Racing Offences') {
            browser.driver.sleep(5000).then(function () { })
            browser.takeScreenshot().then(function (png) {
                writeScreenShot(png, 'DogDetailsRacingOffence.png');
            });
            DogDetails.RacingOffencePage.getText().then(async (text) => {
                console.log("Racing Offences  " + text)
            })
        }
        else (console.log("nothing is selected"))
    }
    static
    DogLocation(status: string, retiredTo: string, action: string){
        browser.executeScript('window.scrollTo(0, 5000);').then(function () { })
        browser.driver.sleep(1000).then(function () { })      
        webUtils.clickOn(RetireGreyhound.RetirementStatusDropdown)
        expect(RetireGreyhound.RetirementStatusList.count()).to.be.equal(5);
         if(status='Pet'){
    //    webUtils.clickOn(RetireGreyhound.SelectPet)     
        if(retiredTo=='Owner'){
            webUtils.clickOn(RetireGreyhound.RetiredToOwner)
            webUtils.clickOn(RetireGreyhound.RetiredDate)
            webUtils.clickOn(RetireGreyhound.SelectRetiredDate)
     }
     else if(retiredTo=='A Third Party'){
        webUtils.clickOn(RetireGreyhound.RetiredToThirdParty)
       expect(RetireGreyhound.EnterFirstName.getAttribute("required").then(function(){})).to.be.equal('true');
       RetireGreyhound.EnterFirstName.sendKeys('Testingaaa');
       expect(RetireGreyhound.EnterLastName.getAttribute("required").then(function(){})).to.be.equal('true');
       RetireGreyhound.EnterLastName.sendKeys('Testingbbb')
       browser.executeScript('window.scrollTo(0, 600);').then(function () { })
       expect(RetireGreyhound.EnterContact.getAttribute("required").then(function(){})).to.be.equal('true');
       RetireGreyhound.EnterContact.sendKeys(9874563210)  
       browser.executeScript('window.scrollTo(0, 800);').then(function () { })
       expect(RetireGreyhound.EnterEmail.getAttribute("required").then(function(){})).to.be.equal('true');
       RetireGreyhound.EnterEmail.sendKeys('abc@gmail.conm');
       expect(RetireGreyhound.EnterStreet.getAttribute("required").then(function(){})).to.be.equal('true');
       RetireGreyhound.EnterStreet.sendKeys('15, abc street')
       expect(RetireGreyhound.EnterSuburb.getAttribute("required").then(function(){})).to.be.equal('true');
       RetireGreyhound.EnterSuburb.sendKeys('abctest')
       browser.executeScript('window.scrollTo(0, 1200);').then(function () { })
       webUtils.clickOn(RetireGreyhound.SelectStateDropDown)
       webUtils.clickOn(RetireGreyhound.EnterState)
       expect(RetireGreyhound.EnterPostcode.getAttribute("required").then(function(){})).to.be.equal('true');
       RetireGreyhound.EnterPostcode.sendKeys('1234')
       expect(RetireGreyhound.EnterAlternateName.getAttribute("required").then(function(){})).to.be.equal('true');
       RetireGreyhound.EnterAlternateName.sendKeys('Testing')
       expect(RetireGreyhound.EnterAlternateNo.getAttribute("required").then(function(){})).to.be.equal('true');
       RetireGreyhound.EnterAlternateNo.sendKeys(12336547891)
       browser.executeScript('window.scrollTo(0, 1500);').then(function () { })
       webUtils.clickOn(RetireGreyhound.SameAsPhysicalAdd)
       browser.executeScript('window.scrollTo(0, 5000);').then(function () { })
       webUtils.clickOn(RetireGreyhound.RetiredDate)
       webUtils.clickOn(RetireGreyhound.SelectRetiredDate)
     }  
        if(action=='submit'){
            //Racing.Submit.click().then(function () { })
        //Racing.Yes.click().then(function () { })
        }
        else if(action=='cancel'){
         Racing.Cancel.click().then(function () { })
        }   
    }
    if(status='Breeding Animal'){
        webUtils.clickOn(RetireGreyhound.SelectBreedingAnimal)     
        if(retiredTo=='Owner'){
            webUtils.clickOn(RetireGreyhound.RetiredToOwner)
            webUtils.clickOn(RetireGreyhound.RetiredDate)
            webUtils.clickOn(RetireGreyhound.SelectRetiredDate)
     }
     else if(retiredTo=='A Third Party'){
        webUtils.clickOn(RetireGreyhound.RetiredToThirdParty)
        webUtils.clickOn(RetireGreyhound.RetiredDate)
        webUtils.clickOn(RetireGreyhound.SelectRetiredDate)
}
    }
    if(status='Euthanised'){
        webUtils.clickOn(RetireGreyhound.SelectEuthanised)     
      //  expect(RetireGreyhound.DisposalMethod.getAttribute("required")).to.be.equal('true');
        webUtils.clickOn(RetireGreyhound.DisposalMethod) 
        expect(RetireGreyhound.SelectDisposalMethodVet.count()).to.be.equal(3); 
        webUtils.clickOn(RetireGreyhound.SelectDisposalMethodVet)  
        webUtils.clickOn(RetireGreyhound.ReasonOfEuthanasia)  
        expect(RetireGreyhound.SelectReasonOfEuthanasiaInjury.count()).to.be.equal(5); 
        webUtils.clickOn(RetireGreyhound.SelectReasonOfEuthanasiaEmergency)  

    }
}
}