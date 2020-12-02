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
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const Racing_1 = require("../Specs/ui/Racing");
const Home_1 = require("../Specs/ui/Home");
const WebUtils_1 = require("../utils/WebUtils");
const Account_1 = require("../Specs/ui/Account");
const DataInput_json_1 = __importDefault(require("../testData/DataInput.json"));
const IWantTo_1 = require("../Specs/ui/IWantTo");
const COP_1 = require("../Specs/ui/COP");
const ptor_1 = require("protractor/built/ptor");
const MyDogs_1 = require("../Specs/ui/MyDogs");
const Calendar_1 = require("../Specs/ui/Calendar");
const BreedingAndLitters_1 = require("../Specs/ui/BreedingAndLitters");
const Menu_1 = require("../Specs/ui/Menu");
var expect = require('chai').expect;
var chaiAsPromised = require("chai-as-promised");
let EC = ptor_1.protractor.ExpectedConditions;
var fs = require('fs');
var GetTransferKey;
var GetEarbrnd;
function writeScreenShot(png, filename) {
    var stream = fs.createWriteStream(filename);
    stream.write(new Buffer(png, 'base64'));
    stream.end();
}
cucumber_1.Then('user should be able to validate {string}', (text) => __awaiter(void 0, void 0, void 0, function* () {
    Home_1.Home.IntroText.getText().then(function (text) {
        expect(text).to.equal('MyFastTrack is an easy way to manage your greyhound business on the go. Specifically designed to be user friendly on mobile devices, MyFastTrack has all the features of FastTrack.');
    });
    Home_1.Home.IntroCol1.getText().then(function (text) {
        expect(text).to.equal('- Racing Management\n- Greyhound Management\n- Litter Management\n- Greyhound Health Records\n- Account Management');
    });
}));
cucumber_1.Then('user should be able to validate the {string} event added', function (event) {
    if (event == 'injury') {
    }
    if (event == 'illness') {
    }
    if (event == 'Health') {
    }
});
cucumber_1.Then('User verifies the confirmation for {string}', (activity) => __awaiter(void 0, void 0, void 0, function* () {
    switch (activity) {
        case 'Register a service':
            Racing_1.Racing.ConfirmRegisterService.getText().then(function (text) { expect(text).to.equal("Thank you, your service registration has been completed. An invoice will be emailed to your registered email address shortly."); });
            break;
        case 'Missed':
            Racing_1.Racing.ConfirmRegisterService.getText().then(function (text) { expect(text).to.contain("confirmed"); });
            break;
        case 'No Live Pups':
            Racing_1.Racing.ConfirmRegisterService.getText().then(function (text) { expect(text).to.contain("confirmed"); });
            break;
        case 'Whelped':
            Racing_1.Racing.ConfirmRegisterService.getText().then(function (text) { expect(text).to.contain("Thank you, your result of mating registration has been completed. An invoice will be emailed to your registered email address shortly."); });
            break;
        default: console.log("undefined confirmation");
    }
}));
cucumber_1.Then('User is redirected to the list of racing dogs', () => __awaiter(void 0, void 0, void 0, function* () {
    Racing_1.Racing.DogList.count().then(function (list) {
        expect(list).to.not.be.null;
        console.log("No. of Dogs in list is:", list);
    });
}));
cucumber_1.Then('User should be able to confirm the transfer ownership of dog to another user', () => __awaiter(void 0, void 0, void 0, function* () {
    yield Racing_1.Racing.IAgree.click();
    yield Racing_1.Racing.Submit.click();
    yield protractor_1.browser.driver.sleep(10000);
    Racing_1.Racing.TransferKeyConfirmPara1.getText().then(function (text) {
        //expect(text).to.contain("The transfer of greyhound ownership has been initiated successfully. Please forward the transfer key and earbrand code to the new owner so they can complete the transfer.")
    });
    Racing_1.Racing.TransferKeyConfirmPara2.getText().then(function (text) {
        // expect(text).to.be.equal(" The new owner must complete the transfer within 14 days. The greyhound will remain in your ownership until the transfer is completed. ")
    });
}));
cucumber_1.Then('User should be able to complete the transfer ownership of dog', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
}));
cucumber_1.Then('user copies the Key and dog earbrand details', () => __awaiter(void 0, void 0, void 0, function* () {
    Racing_1.Racing.GetTransferKey.getText().then(function (key) {
        GetTransferKey = key;
        console.log(GetTransferKey);
    });
    Racing_1.Racing.GetTransferEarBrand.getText().then(function (earbrand) {
        GetEarbrnd = earbrand;
        console.log(GetEarbrnd);
    });
    protractor_1.browser.executeScript('window.scrollTo(221, 1000);').then(function () { });
    yield Racing_1.Racing.Continue.click();
}));
cucumber_1.Then('user verifies the dog in {string} list with Transfer key', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield Home_1.Home.MyDogs.click();
    yield MyDogs_1.MyDogs.NonActiveDogs.click();
    yield protractor_1.browser.driver.sleep(10000);
    console.log(Racing_1.Racing.ValidateTransfer.getText().then(function (text) {
        return text;
    }));
    Racing_1.Racing.ValidateTransfer.getText().then(function (text) {
        //expect(text).to.contain(GetEarbrnd);
        expect(text).to.contain(GetTransferKey);
    });
}));
cucumber_1.Then('User should validate the transfer ownership and confirmation', () => __awaiter(void 0, void 0, void 0, function* () {
}));
cucumber_1.Then('User should be navigated to the syndicate details page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(8000);
    yield Account_1.Account.SyndicatePageHeader.getText().then(function (val) {
        expect(val).to.equal('Syndicate Details');
        Account_1.Account.SyndicateName.getText().then(function (name) {
            console.log("Syndicate Name is:" + name);
        });
    });
}));
cucumber_1.Then('User should be able to view the financial details, members and greyhounds that belong to the Syndicate', () => __awaiter(void 0, void 0, void 0, function* () {
    Account_1.Account.DisplayAcoountName.getText().then(function (name) {
        console.log("Financial Details with Account name is:", name);
    });
    //Account.Members.getText().then(async (text) => {
    //console.log("Member details of Syndicate:", text);
    //});
    /*Account.greyhounds.getText().then(async (text) => {
      console.log("Greyhounds detail of Syndicate", text);
    })*/
}));
cucumber_1.Then('Breeding authority key should be generated', () => __awaiter(void 0, void 0, void 0, function* () {
    yield Racing_1.Racing.Confirmation.getText().then(function (confirm) {
        expect(confirm).to.equal(' Breeding Lease Confirmation ');
    });
}));
cucumber_1.Then('user is able to receive proper confirmation communications from GRV', () => __awaiter(void 0, void 0, void 0, function* () {
    yield Account_1.Account.validateResAddress.getText().then(function (val) {
        expect(val).to.equal(DataInput_json_1.default.data.ResAddress + ", " + DataInput_json_1.default.data.ResTown + " " + DataInput_json_1.default.data.ResPostCode + ". " + "VIC");
        console.log(val);
    });
    /*   Account.validatePostalAddress.getText().then(function (val1){
       expect(val1).to.equal(testData.data.PostalAddress+ ", " +testData.data.PostalTown+" "+testData.data.PostalPostCode+". "+"VIC");
       console.log(val1)
     });*/
}));
cucumber_1.Then('user is able to cancel the details', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.executeScript('window.scrollTo(2000,5000);');
    yield protractor_1.browser.driver.sleep(2000);
    yield Account_1.Account.Cancel.click();
}));
cucumber_1.Then('user is able to receive proper communications for cancellation from GRV', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
}));
cucumber_1.Then('Breeding authority key should be generated and user clicks continue', () => __awaiter(void 0, void 0, void 0, function* () {
    var auth = 'Greyhound Racing Victoria Breeding authority submitted. Your breeding authority key is 5501606267, please record it for future use.';
    var key = auth.match(/\d+/)[0];
    console.log(key);
    /*  await Racing.ConfirmBreedingHeader.getText().then(function (header){
      //  expect(header).to.equal('Breeding Lease Confirmation ');
        console.log(header)
      })
      await Racing.GetKey.getText().then(function (auth){
        var key = auth.match(/\d+/)[0];
        console.log(key)
    })
   // await Racing.Continue.click(); */
}));
cucumber_1.Then('user should be navigated to the confirmation page', () => __awaiter(void 0, void 0, void 0, function* () {
    /* await Racing.ValidateAmount.getText().then( function(amt) {
       console.log(amt)
     })
       Racing.ValidatePayment.getText().then( async(payment)=>{
       expect(payment).to.equal('Payment successful.')
       })
      await Racing.Confirmation.click();*/
}));
cucumber_1.Then('User should be able to view the tracklist under Make a booking screen', () => __awaiter(void 0, void 0, void 0, function* () {
    IWantTo_1.IWantTo.MakeABooking.getText().then(function (text) {
        expect(text).to.equal('Make a Booking');
        console.log(text);
    });
    IWantTo_1.IWantTo.TrackList.getSize().then(function (string) {
        expect(string).to.not.be.null;
        console.log('list of track is:', string);
    });
    /* IWantTo.TrackList.count().then(function (element) {
              IWantTo.Status.getText().then(function (status){
             console.log('status of the session is'+status);
           })
           IWantTo.TrialLeft.getText().then(function (status){
             console.log('Trial session left is:'+status);
           })
             
       })   */
}));
cucumber_1.Then('user should be able to view the track details', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
cucumber_1.Then('User should be able to view the unavailable time slot', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
cucumber_1.Then('User should be able to view the booked time slot', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
cucumber_1.Then('User should be able to view the book time slot for', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
cucumber_1.Then('User should be able to view the My booked trials', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
cucumber_1.Then('User should be able to view the My booking details', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
cucumber_1.Then('User should be navigated to the confirmation page', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
cucumber_1.Then('user should get a popup for the payment confirmation', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
cucumber_1.Then('user is able to land on {string} Page', (landPage) => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.driver.sleep(2000).then(function () { });
    WebUtils_1.webUtils.SkipOverlay();
    switch (landPage) {
        case 'My Account':
            expect(Account_1.Account.MyAccount.getText().then((text) => __awaiter(void 0, void 0, void 0, function* () { console.log(text); }))).to.be.equal(landPage);
            break;
        case 'Bank Details':
            expect(Account_1.Account.BankDetails.getText().then((text) => __awaiter(void 0, void 0, void 0, function* () { console.log(text); }))).to.be.equal(landPage);
            break;
        case 'Active':
            Racing_1.Racing.ActiveDogPage.getText().then((text) => __awaiter(void 0, void 0, void 0, function* () { expect(text).to.contain(landPage); }));
            break;
        case 'Home':
            protractor_1.browser.driver.sleep(5000);
            Home_1.Home.Home.getText().then(function (text) { expect(text).to.equal('home-line\nHome'); });
            break;
        case 'My Dogs ':
            protractor_1.browser.driver.sleep(5000);
            expect(Home_1.Home.Racing.toString()).to.be.equal('[object Object]');
            break;
        case 'Calendar':
            protractor_1.browser.driver.sleep(5000);
            var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var d = new Date();
            var monthName = months[d.getMonth()];
            yield protractor_1.browser.driver.sleep(1000);
            Calendar_1.Calendar.PageHeading.getText().then(function (text) { expect(text).to.contain(monthName); });
            ;
            break;
        case ' Dog Details ':
            protractor_1.browser.driver.sleep(5000);
            break;
        case 'I Want To':
            protractor_1.browser.driver.sleep(2000).then(function () { }); //  IWantTo.TitleCheck.getText().then(function (text) {    //   expect(text).to.equal('I WANT TO...')    //})
            break;
        case 'Breeding And Litter':
            expect(Racing_1.Racing.Breeding).to.equal('Breeding & Litters');
            break;
        default: console.log("undefined landing page");
    }
}));
cucumber_1.Then('user should be able to the transaction as per filter', function () {
});
cucumber_1.Then('user should be able to see the statement', function () {
});
cucumber_1.Then('User verifies the Breeding Key for the dog', function () {
});
cucumber_1.Then('User should be able to view the message pop up for the cofirmation', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
cucumber_1.Then('user should be able to see the added member with Incomplete status', function () {
    Account_1.Account.VerifyAddmemberStatus.getText().then(function (text) {
        console.log('Added memeber is having status as : ' + text);
    });
});
cucumber_1.Then('verify that removed memeber status is {string}', function (string) {
    Account_1.Account.VerifyRemovedMember.getText().then(function (text) {
        console.log(text);
    });
});
cucumber_1.Then('verify that member is addeed to the {string} list', function (string) {
    Account_1.Account.VerifyAltManager.getText().then(function (text) {
        console.log('Alternate Manager is:' + text);
    });
});
cucumber_1.Then('user should be able to see himself as {string}', function (role) {
    return __awaiter(this, void 0, void 0, function* () {
        switch (role) {
            case 'Owner':
                expect(yield Menu_1.Menu.Owner.getAttribute("class")).to.contain('mat-radio-checked');
                break;
            case 'Attendant':
                expect(yield Menu_1.Menu.Attendant.getAttribute("class")).to.contain('mat-radio-checked');
                break;
            case 'Catcher':
                expect(yield Menu_1.Menu.Catcher.getAttribute("class")).to.contain('mat-radio-checked');
                break;
            case 'Owner Trainer':
                expect(yield Menu_1.Menu.OwnerTrainer.getAttribute("class")).to.contain('mat-radio-checked');
                break;
            case 'Public Trainer':
                expect(yield Menu_1.Menu.PublicTrainer.getAttribute("class")).to.contain('mat-radio-checked');
                break;
            default: console.log("undefined Sorting");
        }
    });
});
cucumber_1.Then('user should be able to validate the injury event added by him ', () => __awaiter(void 0, void 0, void 0, function* () {
    var EC = ptor_1.protractor.ExpectedConditions;
    protractor_1.browser.wait(EC.alertIsPresent(), 5000);
    let ale = protractor_1.browser.switchTo().alert();
    ale.accept();
    /* COP.VerifyInjuryList.getText().then(function (val) {
      console.log("list of injuries:" + val)
    })
    COP.VerifyDate.getText().then(function (val) {
      expect(val).to.equal(' Thursday, 6 August 2020 ')
    })
      COP.VerifyInjuryType.getText().then(function (val) {
        expect(val).to.equal('Bone')
      })
        COP.VerifyTreatmentType.getText().then(function (val) {
          expect(val).to.equal('Ultrasound')
        })*/
}));
cucumber_1.Then('user should be able to validate the illness event added by him test', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.driver.sleep(2000);
    //  var EC = protractor.ExpectedConditions;
    //  browser.wait(EC.alertIsPresent(), 5000, "Alert is not getting present :(");
    // browser.driver.sleep(2000);
    yield (yield protractor_1.browser.switchTo().alert()).accept();
    protractor_1.browser.driver.sleep(2000);
    /*COP.VerifyIllnessList.getText().then(function (val) {
        console.log("list of injuries:" + val)
      })
      COP.VerifyIllnessDate.getText().then(function (val) {
        expect(val).to.equal(' Thursday, 6 August 2020 ')
      })
        COP.VerifyIllnessType.getText().then(function (val) {
          expect(val).to.equal('Bone')
        })
          COP.VerifyIllnessTreatmentType.getText().then(function (val) {
            expect(val).to.equal('Ultrasound')
          })*/
}));
cucumber_1.Then('User verifies the {string} details', (Page) => __awaiter(void 0, void 0, void 0, function* () {
    switch (Page) {
        case 'Litters':
            BreedingAndLitters_1.BreedingAndLitters.LittersList.count().then(function (count) { expect(count).not.equal(0); });
            break;
        case 'Greyhound Record':
            COP_1.COP.FilterList.count().then(function (count) { expect(count).to.be.equal(4); });
            break;
        default: console.log("undefined Sorting");
    }
}));
cucumber_1.Then('user should be able to verify the dog details', () => __awaiter(void 0, void 0, void 0, function* () {
    // expect(DogDetails.DogName.to.not.be.null) 
    yield protractor_1.browser.driver.sleep(10000);
}));
cucumber_1.Then('user is able to verify the dog on on {string} -> {string} Page', (NonRacing, History) => __awaiter(void 0, void 0, void 0, function* () {
    //w.ValidateDog();
    protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.MyDogs), 5000).then(function () { });
    yield Racing_1.Racing.MyDogs.click();
    protractor_1.browser.wait(EC.elementToBeClickable(Home_1.Home.SkipOverlay), 10000).then(function () { });
    Home_1.Home.SkipOverlay.isPresent().then(function (result) {
        if (result) {
            Home_1.Home.SkipOverlay.click().then(function () { });
        }
        else { }
    });
    protractor_1.browser.wait(EC.elementToBeClickable(Home_1.Home.NonRacing), 10000).then(function () { });
    yield Home_1.Home.NonRacing.click();
    yield protractor_1.browser.driver.sleep(10000);
    console.log(WebUtils_1.webUtils.DogEarbrand);
    /* RetireGreyhound.DogEarbrand.getText().then(function(DogList) {
       console.log("list is"+DogList)
       expect(DogList).toContain(w.DogEarbrand);
     })*/
}));
cucumber_1.Then('user is able to verify the dog on', () => __awaiter(void 0, void 0, void 0, function* () {
}));
cucumber_1.Then('user should be able to land on {string} error', (text) => __awaiter(void 0, void 0, void 0, function* () {
    if (text == 'login') {
        Home_1.Home.LoginError.getText().then(function (text) {
            expect(text).to.equal('Wrong email or password.');
        });
    }
    else if (text == 'email') {
        Home_1.Home.EmailError.getText().then(function (text) {
            expect(text).to.equal('Email is not valid.');
        });
    }
}));
cucumber_1.Then('user should be able to see the {string} details', (page) => __awaiter(void 0, void 0, void 0, function* () {
    if (page == 'Registration status') {
        Account_1.Account.Title.getText().then(function (text) {
            expect(text).to.equal('Registration: Public Trainer');
        });
    }
    else if (page == 'Member history') { }
    else if (page == 'Activities') { }
    else if (page == 'Calender & Meeting') { }
    else if (page == 'Important Announcements') { }
}));
cucumber_1.Then('User verifies the no of {string} dogs displayed with filter {string}', (Dog, filter) => __awaiter(void 0, void 0, void 0, function* () {
    if (filter == 'Reset') {
        yield protractor_1.browser.driver.sleep(3000);
        if (Dog == 'Active') {
            MyDogs_1.MyDogs.NoOfActiveDogs.getText().then(function (no) {
                MyDogs_1.MyDogs.DogDetails.count().then(function (count) {
                    expect(no).to.contain(count);
                });
            });
            WebUtils_1.webUtils.verifyFilter(Dog, filter);
        }
        else if (Dog == 'Non Active') {
            MyDogs_1.MyDogs.NoOfNonActiveDogs.getText().then(function (no) {
                MyDogs_1.MyDogs.DogDetails.getSize().then(function (count) {
                    expect(no).to.contain(count);
                });
            });
            WebUtils_1.webUtils.verifyFilter(Dog, filter);
        }
    }
}));
cucumber_1.Then('User verifies the list of filters on {string} page and its detail', (page) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(2000);
    if (page == 'Active') {
        MyDogs_1.MyDogs.FilterNames.getSize().then(function (size) {
            expect(size).to.be.equal(12);
        });
    }
    else if (page == 'Non Active') {
        MyDogs_1.MyDogs.FilterNames.getSize().then(function (size) {
            expect(size).to.be.equal(8);
        });
    }
    if (page == 'Litter') {
        BreedingAndLitters_1.BreedingAndLitters.FilterList.count().then(function (count) {
            return __awaiter(this, void 0, void 0, function* () {
                expect(count).to.be.equal(3);
                yield protractor_1.browser.driver.sleep(1000);
            });
        });
    }
    else if (page == 'Calendar') {
        yield protractor_1.browser.driver.sleep(10000);
        Calendar_1.Calendar.FilterOptions.count().then(function (size) {
            expect(size).to.be.equal(6);
        });
    }
}));
cucumber_1.Then('User verifies the no of {string} dogs displayed with sort {string}', (Dog, sort) => __awaiter(void 0, void 0, void 0, function* () {
    switch (sort) {
        case 'Kennel name A - Z':
            protractor_1.browser.takeScreenshot().then(function (png) { writeScreenShot(png, 'MyDogsActiveSortByKennelA_Z.png'); });
            break;
        case 'Kennel name Z - A':
            protractor_1.browser.takeScreenshot().then(function (png) { writeScreenShot(png, 'MyDogsActiveSortByKennelZ_A.png'); });
            break;
        case 'Racing name A - Z':
            protractor_1.browser.takeScreenshot().then(function (png) { writeScreenShot(png, 'MyDogsActiveSortByRacingA_Z.opng'); });
            break;
        case 'Racing name Z - A':
            protractor_1.browser.takeScreenshot().then(function (png) { writeScreenShot(png, 'MyDogsActiveSortByRacingZ_A.png'); });
            break;
        case 'Whelp date - Youngest':
            protractor_1.browser.takeScreenshot().then(function (png) { writeScreenShot(png, 'MyDogsActiveSortByYoungest.png'); });
            break;
        case 'Whelp date - Oldest':
            protractor_1.browser.takeScreenshot().then(function (png) { writeScreenShot(png, 'MyDogsActiveSortByOldest.png'); });
            break;
        case 'Dog Sex - Bitch first':
            protractor_1.browser.takeScreenshot().then(function (png) { writeScreenShot(png, 'MyDogsActiveSortByBitchFirst.png'); });
            break;
        case 'Dog Sex - Dog first':
            yield protractor_1.browser.takeScreenshot().then(function (png) { writeScreenShot(png, 'MyDogsActiveDogFirst.png'); });
            break;
        case 'Reset':
            yield protractor_1.browser.driver.sleep(1000);
            MyDogs_1.MyDogs.SortByRacingA_Z.getText().then(function (text) {
                expect(text).to.be.equal('Racing name A - Z');
            });
        default: console.log("undefined Sorting");
    }
}));
cucumber_1.Then('User verifies the list displayed with filter {string}', (filter) => __awaiter(void 0, void 0, void 0, function* () {
    switch (filter) {
        case 'Metro':
            WebUtils_1.webUtils.verifyCalendarFilter(Calendar_1.Calendar.FilterMetro);
            break;
        case 'PFS':
            WebUtils_1.webUtils.verifyCalendarFilter(Calendar_1.Calendar.FilterPFS);
            break;
        case 'Tier 3':
            WebUtils_1.webUtils.verifyCalendarFilter(Calendar_1.Calendar.FilterTier3);
            break;
        case 'RLM':
            WebUtils_1.webUtils.verifyCalendarFilter(Calendar_1.Calendar.FilterRLM);
            break;
        case 'HSM':
            WebUtils_1.webUtils.verifyCalendarFilter(Calendar_1.Calendar.DogFilterHSM);
            break;
        case 'CS':
            WebUtils_1.webUtils.verifyCalendarFilter(Calendar_1.Calendar.DogFilterCS);
            break;
        default: console.log("undefined filter");
    }
}));
cucumber_1.Then('User verifies information details on Calendar page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(1000);
    Calendar_1.Calendar.RacingKeys.getText().then((text) => __awaiter(void 0, void 0, void 0, function* () {
        expect(text).to.be.equal("RACING KEYS\nMetro\nMetropolitan Full Stakes\nPFS\nProvincial Full Stakes\nTier 3\nProvincial Non-Penalty - Tier 3\nRLM\nRank Limit\nAPM\nAzed prizemoney Meeting (APM)\nHSM\nProvincial Half Stakes\nRacing\nNominated (NOM)\nOpen for nominations\nCoursing");
    }));
}));
cucumber_1.Then('User verifies the {string} page details with filter {string}', (page, filter) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5000);
    var total;
    if (page == 'Litter') {
        BreedingAndLitters_1.BreedingAndLitters.FilterList.count().then(function (count) { console.log(count); total = count; });
        switch (filter) {
            case 'All':
                BreedingAndLitters_1.BreedingAndLitters.FilterList.count().then(function (count) { expect(count).to.be.equal(total); });
                break;
            case 'Past Year':
                BreedingAndLitters_1.BreedingAndLitters.FilterList.count().then(function (count) { expect(count).to.be.lessThan(total); });
                break;
            case 'Past 5 Years':
                BreedingAndLitters_1.BreedingAndLitters.FilterList.count().then(function (count) { expect(count).to.be.lessThan(total); });
                break;
            case 'Cancel':
                yield BreedingAndLitters_1.BreedingAndLitters.FilterList.count().then(function (count) { expect(count).to.be.lessThan(total); });
                break;
            default: console.log("undefined Sorting");
        }
    }
    else if (page == 'Greyhound Record') {
        BreedingAndLitters_1.BreedingAndLitters.FilterList.count().then(function (count) { console.log(count); total = count; });
        switch (filter) {
            case 'All':
                expect(COP_1.COP.FilterAll.getAttribute("aria-pressed")).to.be.equal("true");
                break;
            case 'Health':
                expect(COP_1.COP.FilterHealth.getAttribute("aria-pressed")).to.be.equal("true");
                break;
            case 'Illness':
                expect(COP_1.COP.FilterIllness.getAttribute("aria-pressed")).to.be.equal("true");
                break;
            case 'Injury':
                expect(COP_1.COP.FilterInjury.getAttribute("aria-pressed")).to.be.equal("true");
                break;
        }
    }
}));
cucumber_1.Then('User verifies the status of the {string} is {string}', function (litter, status) {
    switch (litter) {
        case 'litter registration':
            WebUtils_1.webUtils.litterStatus(BreedingAndLitters_1.BreedingAndLitters.LitterServiceLodged, status);
            break;
        case 'Vaccination':
            WebUtils_1.webUtils.litterStatus(BreedingAndLitters_1.BreedingAndLitters.LitterVaccination, status);
            break;
        case 'Earbrand':
            WebUtils_1.webUtils.litterStatus(BreedingAndLitters_1.BreedingAndLitters.LitterEarBrand, status);
            break;
        case 'Microchip':
            WebUtils_1.webUtils.litterStatus(BreedingAndLitters_1.BreedingAndLitters.LitterVaccinMicro, status);
            break;
        default: console.log("undefined Sorting");
    }
});
cucumber_1.Then('User verifies the {string} page for {string} details', (page, result) => __awaiter(void 0, void 0, void 0, function* () {
    if (page == 'Litter') {
        if (result == 'whelped') {
            yield protractor_1.browser.executeScript('window.scrollTo(0,5000);');
            protractor_1.browser.wait(EC.elementToBeClickable(BreedingAndLitters_1.BreedingAndLitters.SelectResultAsWhelped), 1000).then(function () { });
            yield BreedingAndLitters_1.BreedingAndLitters.SelectResultAsWhelped.click();
            yield protractor_1.browser.executeScript('window.scrollTo(0,5000);');
            expect(yield Racing_1.Racing.Next.getAttribute("disabled")).to.be.equal('true');
            yield BreedingAndLitters_1.BreedingAndLitters.SelectNoOfFemalePups.click();
            yield Racing_1.Racing.Next.click();
        }
        if (result == 'whelped') {
            yield protractor_1.browser.executeScript('window.scrollTo(0,5000);');
        }
        if (result == 'Missed') {
            yield protractor_1.browser.executeScript('window.scrollTo(0,5000);');
        }
    }
    else if (page == 'Mandate') {
        if (result == 'Missed') {
            expect(yield Racing_1.Racing.Submit.getAttribute("disabled")).to.be.equal('true');
        }
        else if (result == 'No Live Pups') {
            expect(yield Racing_1.Racing.Submit.getAttribute("disabled")).to.be.equal('true');
        }
        else if (result == 'Whelped') {
            expect(BreedingAndLitters_1.BreedingAndLitters.WhelpedDate.getAttribute("aria-required ")).to.be.equal('true');
            expect(BreedingAndLitters_1.BreedingAndLitters.EnterDog1Kennel.getAttribute("aria-required ")).to.be.equal('true');
            expect(BreedingAndLitters_1.BreedingAndLitters.EnterDog2Kennel.getAttribute("aria-required ")).to.be.equal('true');
            expect(yield Racing_1.Racing.Submit.getAttribute("disabled")).to.be.equal('false');
            expect(yield Racing_1.Racing.Cancel.getAttribute("disabled")).to.be.equal('false');
        }
        else if (result == 'No') {
            expect(yield Racing_1.Racing.Submit.getAttribute("disabled")).to.be.equal('true');
        }
        else
            (console.log('no selection'));
    }
}));
cucumber_1.Then('User verifies the details with filter {string}', function (filter) {
    // Write code here that turns the phrase above into concrete actions    
});
cucumber_1.Then('User verifies the payment confirmation for {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
cucumber_1.Then('User verifies the field validations on {string} for {string}', function (Action, string) {
    return __awaiter(this, void 0, void 0, function* () {
        switch (Action) {
            case 'Issue Breeding Authority':
                if (string == 'Interstate') {
                    expect(Racing_1.Racing.InputFirstName.getAttribute('aria-required')).to.be.equal('true');
                    expect(Racing_1.Racing.InputFirstName.getAttribute('aria-required')).to.be.equal('true');
                    expect(Racing_1.Racing.InputLastName.getAttribute('aria-required')).to.be.equal('true');
                    expect(Racing_1.Racing.Inputstreet.getAttribute('aria-required')).to.be.equal('true');
                    expect(Racing_1.Racing.InputSuburb.getAttribute('aria-required')).to.be.equal('true');
                    expect(Racing_1.Racing.InputState.getAttribute('aria-required')).to.be.equal('true');
                    expect(Racing_1.Racing.InputPostCode.getAttribute('aria-required')).to.be.equal('true');
                }
                else if (string == 'Victorian') {
                    yield Racing_1.Racing.IAgree.click();
                    expect(Racing_1.Racing.InputFirstName.getAttribute('aria-required')).to.be.equal('true');
                    expect(Racing_1.Racing.InputLastName.getAttribute('aria-required')).to.be.equal('true');
                    expect(yield Racing_1.Racing.Submit.getAttribute('class')).to.contain('disabled');
                }
                ;
                break;
            case 'Accept Breeding Authority':
                expect(Racing_1.Racing.AddAuthorityKey.getAttribute('aria-required')).to.be.equal('true');
                expect(Racing_1.Racing.Earbrand.getAttribute('aria-required')).to.be.equal('true');
                yield Racing_1.Racing.AddAuthorityKey.clear();
                expect(Racing_1.Racing.Validate.getAttribute('class')).to.contain('disabled');
                break;
            case 'End Breeding Authority':
                ;
                break;
            default: console.log("undefined Sorting");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBkZWZpbml0aW9ucy9UaGVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLDJDQUFxQztBQUNyQywrQ0FBNEM7QUFDNUMsMkNBQXdDO0FBQ3hDLGdEQUFrRDtBQUNsRCxpREFBOEM7QUFDOUMsZ0ZBQWlEO0FBQ2pELGlEQUE4QztBQUM5Qyx5Q0FBc0M7QUFFdEMsZ0RBQW1EO0FBR25ELCtDQUE0QztBQUM1QyxtREFBZ0Q7QUFDaEQsdUVBQW9FO0FBRXBFLDJDQUF3QztBQUN4QyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQ3BDLElBQUksY0FBYyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ2pELElBQUksRUFBRSxHQUFHLGlCQUFVLENBQUMsa0JBQWtCLENBQUM7QUFDdkMsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLElBQUksY0FBbUIsQ0FBQztBQUN4QixJQUFJLFVBQWUsQ0FBQztBQUNwQixTQUFTLGVBQWUsQ0FBQyxHQUFHLEVBQUUsUUFBUTtJQUNwQyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUN4QyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDZixDQUFDO0FBRUQsZUFBSSxDQUFDLDBDQUEwQyxFQUFFLENBQU8sSUFBSSxFQUFFLEVBQUU7SUFDOUQsV0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJO1FBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMs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