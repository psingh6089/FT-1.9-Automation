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
const Account_1 = require("../Specs/ui/Account");
const DataInput_json_1 = __importDefault(require("../testData/DataInput.json"));
const IWantTo_1 = require("../Specs/ui/IWantTo");
var expect = require('chai').expect;
cucumber_1.Then('user should be able to land on {string} page and should see {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    yield Home_1.Home.WelcomeText.getText().then(function (val) {
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
    if (landPage == 'My Account') {
        expect(Account_1.Account.MyAccount.getText().then((text) => __awaiter(this, void 0, void 0, function* () {
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
cucumber_1.Then('user should be able to validate the injury event added by him test', () => __awaiter(void 0, void 0, void 0, function* () {
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
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBkZWZpbml0aW9ucy9UaGVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLDJDQUFxQztBQUNyQywrQ0FBNEM7QUFDNUMsMkNBQXdDO0FBRXhDLGlEQUE4QztBQUM5QyxnRkFBaUQ7QUFDakQsaURBQThDO0FBSzlDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFFcEMsZUFBSSxDQUFDLHNFQUFzRSxFQUFFLENBQU8sTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFO0lBQ3JHLE1BQU0sV0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHO1FBQ2pELE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUE7SUFDL0MsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLGdEQUFnRCxFQUFFLEdBQVMsRUFBRTtJQUNoRSxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUM7SUFDN0MsMkNBQTJDO0FBRTdDLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFFRixlQUFJLENBQUMsK0NBQStDLEVBQUUsR0FBUyxFQUFFO0lBQy9ELGVBQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSTtRQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQyxDQUFDLENBQUE7QUFFSixDQUFDLENBQUEsQ0FBQyxDQUFBO0FB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