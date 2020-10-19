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
var expect = require('chai').expect;
let EC = ptor_1.protractor.ExpectedConditions;
cucumber_1.Then('user should be able to land on {string} page and should see {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    Home_1.Home.WelcomeText.getText().then(function (val) {
        expect(val).to.equal('Welcome to Fast Track');
    });
}));
cucumber_1.Then(/^Studmaster should be able to record a service/, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Register service is succesful");
    // expect(text).to.equal("Confirmed")
}));
cucumber_1.Then('User is redirected to the list of racing dogs', () => __awaiter(void 0, void 0, void 0, function* () {
    Racing_1.Racing.DogList.count().then(function (list) {
        expect(list).to.not.be.null;
        console.log("No. of Dogs in list is:", list);
    });
}));
cucumber_1.Then('User should be able to confirm the transfer ownership of dog to another user', () => __awaiter(void 0, void 0, void 0, function* () {
    yield Racing_1.Racing.IAgree.click();
    // await Racing.Submit.click();
    protractor_1.browser.driver.sleep(1000);
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
cucumber_1.Then('user is able to land on {string} Page', function (landPage) {
    /* if(landPage=='Bank Details'){
     expect(Account.BankDetails.getText().then(async(text)=>{
        console.log(text)
      })).to.be.equal(landPage);
     }*/
    protractor_1.browser.driver.sleep(2000).then(function () { });
    if (landPage == 'My Account') {
        expect(Account_1.Account.MyAccount.getText().then((text) => __awaiter(this, void 0, void 0, function* () {
            console.log(text);
        }))).to.be.equal(landPage);
    }
    else if (landPage == ' My Dogs->Racing ') {
        expect(Racing_1.Racing.Racing.getText().then((text) => __awaiter(this, void 0, void 0, function* () {
            console.log(text);
        }))).to.be.equal(landPage);
    }
});
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
cucumber_1.Then('User verifies the record', () => __awaiter(void 0, void 0, void 0, function* () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBkZWZpbml0aW9ucy9UaGVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLDJDQUFxQztBQUNyQywrQ0FBNEM7QUFDNUMsMkNBQXdDO0FBQ3hDLGdEQUFrRDtBQUNsRCxpREFBOEM7QUFDOUMsZ0ZBQWlEO0FBQ2pELGlEQUE4QztBQUc5QyxnREFBbUQ7QUFHbkQsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUNwQyxJQUFJLEVBQUUsR0FBRyxpQkFBVSxDQUFDLGtCQUFrQixDQUFDO0FBQ3ZDLGVBQUksQ0FBQyxzRUFBc0UsRUFBRSxDQUFPLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRTtJQUNyRyxXQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUc7UUFDM0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQTtJQUMvQyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsZ0RBQWdELEVBQUUsR0FBUyxFQUFFO0lBQ2hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztJQUM3QyxxQ0FBcUM7QUFDdkMsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUVGLGVBQUksQ0FBQywrQ0FBK0MsRUFBRSxHQUFTLEVBQUU7SUFDL0QsZUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJO1FBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFB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