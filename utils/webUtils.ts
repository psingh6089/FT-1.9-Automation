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

let EC = protractor.ExpectedConditions;

export class webUtils {


    static
        logIn(User) {
        if (User == "Paul Westerveld") {
            webUtils.clickOn(Home.Login);
            Home.UserName.sendKeys(testData.data.Paul_User);
            Home.Password.sendKeys(testData.data.Password);
            webUtils.clickOn(Home.LoginContinue);
        }
        else if (User == "William Mcmahon") {
            webUtils.clickOn(Home.Login);
            Home.UserName.sendKeys(testData.data.William_User);
            Home.Password.sendKeys(testData.data.Password);
            webUtils.clickOn(Home.LoginContinue);
        }
        else if (User == "David Long") {
            webUtils.clickOn(Home.Login);
            Home.UserName.sendKeys(testData.data.David_user);
            Home.Password.sendKeys(testData.data.Password);
            webUtils.clickOn(Home.LoginContinue);
        }
        else if (User == "Andrea Daily") {
            webUtils.clickOn(Home.Login);
            Home.UserName.sendKeys(testData.data.Andrea_user);
            Home.Password.sendKeys(testData.data.Password);
            webUtils.clickOn(Home.LoginContinue);
        }

        else if (User == "Glenn Campbell") {
            webUtils.clickOn(Home.Login);
            Home.UserName.sendKeys(testData.data.Glenn_user);
            Home.Password.sendKeys(testData.data.Password);
            webUtils.clickOn(Home.LoginContinue);
        }
        else if (User == "Peter Walsh") {
            webUtils.clickOn(Home.Login);
            Home.UserName.sendKeys(testData.data.Peter_user);
            Home.Password.sendKeys(testData.data.Password);
            webUtils.clickOn(Home.LoginContinue);
        }
    }


    static
        confirmButton(button: string) {
        if (button == 'cancel') {
            browser.driver.sleep(2000).then(function () { })
            Racing.Cancel.isPresent().then(function (result) {
                if (result) {
                    webUtils.clickOn(Racing.Cancel);                        
                } else {
                    browser.executeScript('window.scrollTo(0,5000)').then(async () => { });
                    webUtils.clickOn(Racing.Cancel);   
                }
            })
        }
        if (button == "submit") {
            webUtils.clickOn(Racing.Submit);        
        }
        if (button == "continue") {
            browser.wait(EC.elementToBeClickable(Racing.Continue), 5000).then(function () { })
            webUtils.clickOn(Racing.Continue);   
        }
    }
   
    static
        registerService(User) {
        Racing.MyDogs.click();
        Racing.DogAction.click();
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
        webUtils.waitForLoader();
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
        updateAddressDetails() {
        Account.ResAddressEdit.clear().then(function () {
            Account.ResAddressEdit.sendKeys(testData.data.ResAddress);
        });
        Account.ResTownEdit.clear().then(function () {
            Account.ResTownEdit.sendKeys(testData.data.ResTown);
        });
        Account.ResPostCodeEdit.clear().then(function () {
            Account.ResPostCodeEdit.sendKeys(testData.data.ResPostCode);
        });
        Account.PostalAddressEdit.clear().then(function () {
            Account.PostalAddressEdit.sendKeys(testData.data.PostalAddress);
        });
        Account.PostalTownEdit.clear().then(function () {
            Account.PostalTownEdit.sendKeys(testData.data.PostalTown);
        });
        Account.PostalPostCodeEdit.clear().then(function () {
            Account.PostalPostCodeEdit.sendKeys(testData.data.PostalPostCode);
        });
        browser.executeScript('window.scrollTo(0,5000);');
        webUtils.clickOn(Account.Save);
        webUtils.waitForLoader();
    }

    static
        applyDogName() {
        NonRacing.EnterName1.sendKeys(testData.data.Dog1);
        webUtils.clickOn(NonRacing.AddDog);
        NonRacing.EnterName2.sendKeys(testData.data.Dog2);
        webUtils.clickOn(NonRacing.AddDog);
        NonRacing.EnterName3.sendKeys(testData.data.Dog3);
        webUtils.clickOn(NonRacing.AddDog);
        NonRacing.EnterName4.sendKeys(testData.data.Dog4);
        browser.executeScript('window.scrollTo(0,5000);');
        webUtils.clickOn(NonRacing.AddDog);
        NonRacing.EnterName5.sendKeys(testData.data.Dog5);
        webUtils.clickOn(NonRacing.AddDog);
        NonRacing.EnterName6.sendKeys(testData.data.Dog6);
        webUtils.clickOn(NonRacing.AddDog);
        browser.executeScript('window.scrollTo(0,5000);');
        NonRacing.EnterName7.sendKeys(testData.data.Dog7);
        webUtils.clickOn(NonRacing.AddDog);
        NonRacing.EnterName8.sendKeys(testData.data.Dog8);
        webUtils.clickOn(NonRacing.AddDog);
        NonRacing.EnterName9.sendKeys(testData.data.Dog9);
        webUtils.clickOn(NonRacing.AddDog);
        browser.executeScript('window.scrollTo(0,5000);');
        NonRacing.EnterName10.sendKeys(testData.data.Dog10);
        webUtils.waitForLoader();
    }

    static
        AddInjuryEvent() {
        webUtils.clickOn(COP.TrackOrNonTrack);
        webUtils.clickOn(COP.SelectTrack);
        webUtils.clickOn(COP.TrackName);
        COP.GetAllTrackNames.getSize().then(function(size){
            console.log("List of Track Names: "+size);
        })
        webUtils.clickOn(COP.SelectTRackNameAsBendigo);
        webUtils.clickOn(COP.InjuryType);
        COP.GetAllInjuryTypes.getSize().then(function(size){
            console.log("List of Injury Types: "+size);
        })
        webUtils.clickOn(COP.SelectInjuryTypeAsBone);
        webUtils.clickOn(COP.InjuryLocation);
        COP.GetAllInjuryLocations.getSize().then(function(size){
            console.log("List of Injury Location: "+size);
        })
        webUtils.clickOn(COP.SelectInjuryLocationAsChest);
        webUtils.clickOn(COP.InjuryDetail);
        COP.GetAllInjuryDetails.getSize().then(function(size){
            console.log("List of All Injury Details: "+size);
        })
        webUtils.clickOn(COP.SelectInjuryDetailAsOther);
       COP.EnterOtherInjuryDetails.sendKeys("TestAutomation1")
        webUtils.clickOn(COP.InjuryDate);
        webUtils.clickOn(COP.SelectInjuryDate);
        webUtils.clickOn(COP.Treatment);        
        COP.GetAllTreatmentList.getSize().then(function(size){
            console.log("List of all treatments: " +size);
        })
        webUtils.clickOn(COP.SelectTreatmentAsUltraSound);
        webUtils.clickOn(COP.Frequency);
        COP.GetAllFrequencyList.getSize().then(function(size){
            console.log("List of Frequency: "+size);
        })
        webUtils.clickOn(COP.SelectFrequencyAs1X);
        webUtils.clickOn(COP.TreatmentDate);
        webUtils.clickOn(COP.SelectTreatmentDate);
        COP.AdministeredBy.sendKeys("AdministratedTestAutomation1")
        COP.AuthorisedBy.sendKeys("AuthorisedTestAutomation1")
        COP.Comment.sendKeys("CommentTestAutomation1")
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
        ResultOfBreeding(result: string) {
            if(result=="Whelped"){
            webUtils.clickOn(BreedingAndLitters.SelectParentDog);
            webUtils.clickOn(BreedingAndLitters.ResultOfMating);
            webUtils.clickOn(BreedingAndLitters.SelectResultAsWhelped);
            webUtils.clickOn(BreedingAndLitters.SelectNoOfFemalePups);
            webUtils.clickOn(BreedingAndLitters.SelectNoOfMalePups);
            webUtils.clickOn(Racing.Continue);
            webUtils.clickOn(BreedingAndLitters.WhelpedDate);
            webUtils.clickOn(BreedingAndLitters.ChooseWhelpedDate);
            BreedingAndLitters.EnterDog1Kennel.sendKeys("TestAutomation");
            webUtils.clickOn(BreedingAndLitters.Dog1Color);
            webUtils.clickOn(BreedingAndLitters.SelectDog1Color);
            BreedingAndLitters.EnterDog2Kennel.sendKeys("TestAutomation2");
            webUtils.clickOn(BreedingAndLitters.Dog2Color);
            BreedingAndLitters.GetAllDogColors.getText().then(function(colour){
                console.log("colors of the dogs are:" + colour)
              })
              webUtils.clickOn(BreedingAndLitters.SelectDog2Color);  
              webUtils.clickOn(BreedingAndLitters.SelectVetClinic);  
            }

            else if(result=='Missed'){
                 webUtils.clickOn(BreedingAndLitters.SelectParentDog);
                 webUtils.clickOn(BreedingAndLitters.ResultOfMating);
                 webUtils.clickOn(BreedingAndLitters.SelectResultAsMissed);
              //   webUtils.clickOn(Racing.Submit)
               //  webUtils.clickOn(Racing.Continue)
               }
               else {
                alert(
                    'Enter exactly three characters. ' +
                    'is not valid.');
                return false;
        }
    }


   
    static
        clickOn(obj) {
        webUtils.waitForObj(obj);
        return obj.isPresent().then(result => {
            result ? obj.isDisplayed().then(res => {
                obj.click().then(function () {
                    //   browser.driver.sleep(5000);
                })
            }) : logError(obj);
            function logError(obj) {
                obj.getAttribute('name').then(name => {
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
        return browser.wait(function () { },
            5000);
        //  return browser.wait(EC.invisibilityOf(element(by.css('div#mainContentArea>div#loader>div.loading-panel'))), 5000 );
    }

    static
        Navigate(menu: string, tab: string, button: string) {
        if (menu == "My Dogs") {
            webUtils.clickOn(Racing.MyDogs);
            if (tab == "Non Racing") {
                webUtils.clickOn(NonRacing.NonRacing);
                if (button == "UnNamed Dog") {
               //  browser.wait(EC.elementToBeClickable(Racing.Dog2), 5000).then(function () { });
                    webUtils.clickOn(Racing.Dog2);
                //    browser.driver.sleep(5000).then(function () { });
                    browser.executeScript('window.scrollTo(100,1200);').then(function () { });
                    browser.wait(EC.elementToBeClickable(NonRacing.ApplyDogName), 5000);
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
                if (button == "GreyHound Record") {
                    browser.executeScript('window.scrollTo(0,2000);').then(function () { });
                    webUtils.clickOn(Racing.GreyHoundRecord);
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
                webUtils.clickOn(Racing.DogCheckTransferKey).getText().then(function (text) {
                    console.log(text);
                })
                browser.driver.sleep(1000).then(function () { });
                if (button == "nothing") { }
            }
        }

        else if (menu == "I Want To") {
            browser.wait(EC.elementToBeClickable(IWantTo.IWantTo), 5000).then(function () { });
            webUtils.clickOn(IWantTo.IWantTo);
            if (tab == "Club Trials") {
                browser.wait(EC.elementToBeClickable(IWantTo.ClubTrials), 5000).then(function () { });
                webUtils.clickOn(IWantTo.ClubTrials);
            }
            if (tab == "Breed GreyHound") {             
                webUtils.clickOn(IWantTo.BreedGreyhound);             
                if (button == "Issue Breeding Authority") {              
                    webUtils.clickOn(IWantTo.TransferDogToBreeder);               
                 webUtils.clickOn(IWantTo.IssueBreedingAuthority);
                }
                else if(button == "Accept Breeding Authority") {                    
                          webUtils.clickOn(IWantTo.TransferDogToBreeder);                   
                       webUtils.clickOn(IWantTo.AcceptBreedingAuthority);
                      }                    
                else if(button=="Register A Service") {
                    browser.executeScript('window.scrollTo(400,1500);').then(function () { });
                    browser.wait(EC.elementToBeClickable(IWantTo.BreedingService), 5000).then(function () { });
                    webUtils.clickOn(IWantTo.BreedingService);
                    browser.wait(EC.elementToBeClickable(IWantTo.RegisterAService), 5000).then(function () { });
                    webUtils.clickOn(IWantTo.RegisterAService);
                    browser.wait(EC.elementToBeClickable(Racing.Dog1), 5000).then(function () { });
                    webUtils.clickOn(Racing.Dog1);
                }
                else if(button == "Whelping Results") {    
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
                //    browser.driver.sleep(1000).then(function () { });
                    browser.wait(EC.elementToBeClickable(Racing.Dog1), 5000).then(function () { });
                    webUtils.clickOn(Racing.Dog1);
                }
                else if (button == "Accept Transfer of Ownership") {
                    webUtils.clickOn(IWantTo.TransferManagement);
                    browser.executeScript('window.scrollTo(211,28);').then(function () { });
                    browser.wait(EC.elementToBeClickable(IWantTo.AcceptTransferOfOwnership), 5000).then(function () { });
                    webUtils.clickOn(IWantTo.AcceptTransferOfOwnership);
                 //   browser.driver.sleep(1000).then(function () { });
                }

                else if (button == "Notice of Intent Euthanase") {
                    browser.executeScript('window.scrollTo(600,600);').then(function () { });
                  //  browser.driver.sleep(1000).then(function () { });
                    webUtils.clickOn(IWantTo.NoticeOfIntent);
                   // browser.driver.sleep(1000).then(function () { });
                }
            }
        }
        else if (menu == "Account") {
            webUtils.clickOn(Account.Account);
            browser.driver.sleep(2000).then(function () { });

            if (tab == "MyAccount") {
            //    browser.driver.sleep(3000).then(function () { });
                if (button == "Update account details") {
                    browser.executeScript('window.scrollTo(200,900)');
                    webUtils.clickOn(Account.UpdateAccountDetails);
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
            else if (tab == "Member History") { }
        }
        else if (menu == "View Health Record") {
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
}









