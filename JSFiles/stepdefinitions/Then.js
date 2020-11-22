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
const ptor_1 = require("protractor/built/ptor");
const MyDogs_1 = require("../Specs/ui/MyDogs");
const Calendar_1 = require("../Specs/ui/Calendar");
const BreedingAndLitters_1 = require("../Specs/ui/BreedingAndLitters");
var expect = require('chai').expect;
var chaiAsPromised = require("chai-as-promised");
let EC = ptor_1.protractor.ExpectedConditions;
var fs = require('fs');
function writeScreenShot(png, filename) {
    var stream = fs.createWriteStream(filename);
    stream.write(new Buffer(png, 'base64'));
    stream.end();
}
cucumber_1.Then('user should be able to validate {string}', (text) => __awaiter(void 0, void 0, void 0, function* () {
    Home_1.Home.IntroText.getText().then(function (text) {
        expect(text).to.equal('MyFastTrack is an easy way to manage your greyhound business on the go. Specifically designed to be user friendly on mobile devices, MyFastTrack has all the features of FastTrack plus some special features only available through the MyFastTrack application.');
    });
    Home_1.Home.IntroCol1.getText().then(function (text) {
        expect(text).to.equal('- Account Management\n- Apply to Participate\n- Financial details\n- Notices\n- Racing Management\n- Nominations\n- Scratchings\n- Litter Management\n- Service Notification\n- Result of Mating');
    });
    Home_1.Home.IntroCol2.getText().then(function (text) {
        expect(text).to.equal('- Greyhound Management\n- Ownership\n- Training\n- Location changes\n- Greyhound Health Records\n- Illness, Injury, Health\n- Apply a treatment to multiple dogs');
    });
}));
cucumber_1.Then('User verifies the payment confirmation', () => __awaiter(void 0, void 0, void 0, function* () {
    Racing_1.Racing.ConfirmRegisterService.getText().then(function (text) {
        expect(text).to.equal("Thank you, your service registration has been completed. An invoice will be emailed to your registered email address shortly.");
    });
}));
cucumber_1.Then('User is redirected to the list of racing dogs', () => __awaiter(void 0, void 0, void 0, function* () {
    Racing_1.Racing.DogList.count().then(function (list) {
        expect(list).to.not.be.null;
        console.log("No. of Dogs in list is:", list);
    });
}));
cucumber_1.Then('User should be able to confirm the transfer ownership of dog to another user', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5000);
    //await Racing.IAgree.click();
    // await Racing.Submit.click();
    yield protractor_1.browser.driver.sleep(10000);
}));
cucumber_1.Then('User should be able to complete the transfer ownership of dog', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
}));
cucumber_1.Then('user copies the Key and dog earbrand details', () => __awaiter(void 0, void 0, void 0, function* () {
    yield Racing_1.Racing.Confirmation.getText().then(function (confirm) {
        console.log(confirm);
        // expect(confirm).to.equal(' ');
        protractor_1.browser.driver.sleep(1000);
    });
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
    Account_1.Account.Members.getText().then((text) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("Member details of Syndicate:", text);
    }));
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
    /* if(landPage=='Bank Details'){
     expect(Account.BankDetails.getText().then(async(text)=>{
        console.log(text)
      })).to.be.equal(landPage);
     }*/
    protractor_1.browser.driver.sleep(2000).then(function () { });
    WebUtils_1.webUtils.SkipOverlay();
    switch (landPage) {
        case 'My Account':
            expect(Account_1.Account.MyAccount.getText().then((text) => __awaiter(void 0, void 0, void 0, function* () { console.log(text); }))).to.be.equal(landPage);
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
cucumber_1.Then('user should be able to see himself as owner', function (string) {
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
    BreedingAndLitters_1.BreedingAndLitters.LittersList.count().then(function (count) {
        console.log(count);
    });
}));
cucumber_1.Then('User navigates to {string}', (tab) => __awaiter(void 0, void 0, void 0, function* () {
    if (tab == 'Breeding And Litter') {
        expect(Racing_1.Racing.Breeding).to.equal('Breeding & Litters');
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
cucumber_1.Then('user should be able to land on Home page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(20000);
    //browser.wait(EC.elementToBeClickable(Home.SkipOverlay), 30000).then(function () { })
    WebUtils_1.webUtils.SkipOverlay();
    yield protractor_1.browser.driver.sleep(2000);
    Home_1.Home.Home.getText().then(function (text) {
        expect(text).to.equal('home-line\nHome');
    });
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
        }
    }
}));
cucumber_1.Then('User verifies the confirmation for result of Mating', function () {
});
cucumber_1.Then('User verifies the status of the {string} is {string}', function (litter, status) {
    switch (litter) {
        case 'litter registration':
            WebUtils_1.webUtils.litterStatus(BreedingAndLitters_1.BreedingAndLitters.WhelpingResult, status);
            break;
        case 'Vaccination':
            WebUtils_1.webUtils.litterStatus(BreedingAndLitters_1.BreedingAndLitters.LitterServiceLodged, status);
            break;
        case 'Earbrand':
            WebUtils_1.webUtils.litterStatus(BreedingAndLitters_1.BreedingAndLitters.LitterServiceLodged, status);
            break;
        case 'Microchip':
            WebUtils_1.webUtils.litterStatus(BreedingAndLitters_1.BreedingAndLitters.LitterServiceLodged, status);
            break;
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
    }
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBkZWZpbml0aW9ucy9UaGVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLDJDQUFxQztBQUNyQywrQ0FBNEM7QUFDNUMsMkNBQXdDO0FBQ3hDLGdEQUFrRDtBQUNsRCxpREFBOEM7QUFDOUMsZ0ZBQWlEO0FBQ2pELGlEQUE4QztBQUc5QyxnREFBbUQ7QUFHbkQsK0NBQTRDO0FBQzVDLG1EQUFnRDtBQUNoRCx1RUFBb0U7QUFFcEUsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUNwQyxJQUFJLGNBQWMsR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUNqRCxJQUFJLEVBQUUsR0FBRyxpQkFBVSxDQUFDLGtCQUFrQixDQUFDO0FBQ3ZDLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2QixTQUFTLGVBQWUsQ0FBQyxHQUFHLEVBQUUsUUFBUTtJQUNwQyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUN4QyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDZixDQUFDO0FBRUQsZUFBSSxDQUFDLDBDQUEwQyxFQUFFLENBQU8sSUFBSSxFQUFFLEVBQUU7SUFDOUQsV0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJO1FBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLG1RQUFtUSxDQUFDLENBQUE7SUFDNVIsQ0FBQyxDQUFDLENBQUE7SUFDRixXQUFJLENBQUMsU0FBUyxD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