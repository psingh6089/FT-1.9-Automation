import { Given, When, Then } from "cucumber";
import { browser } from "protractor";
import { Racing } from "../Specs/ui/Racing";
import { Home } from "../Specs/ui/Home";
import { webUtils as w } from '../utils/WebUtils';
import { Account } from "../Specs/ui/Account";
import testData from "../testData/DataInput.json"
import { IWantTo } from "../Specs/ui/IWantTo";
import { COP } from "../Specs/ui/COP";
import { Alert } from 'selenium-webdriver';
import { protractor } from "protractor/built/ptor";
import { DogDetails } from "../Specs/ui/DogDetails";
import { RetireGreyhound } from "../Specs/ui/RetireGreyhound";
var expect = require('chai').expect;
let EC = protractor.ExpectedConditions;
Then('user should be able to land on {string} page and should see {string}', async (string, string2) => {
  Home.WelcomeText.getText().then(function (val) {
    expect(val).to.equal('Welcome to Fast Track')
  });
});

Then(/^Studmaster should be able to record a service/, async () => {
  console.log("Register service is succesful");
  // expect(text).to.equal("Confirmed")
})

Then('User is redirected to the list of racing dogs', async () => {
  Racing.DogList.count().then(function (list) {
    expect(list).to.not.be.null;
    console.log("No. of Dogs in list is:", list);
  })
})

Then('User should be able to confirm the transfer ownership of dog to another user', async () => {
  await Racing.IAgree.click();
  // await Racing.Submit.click();
  browser.driver.sleep(1000);
})

Then('User should be able to complete the transfer ownership of dog', async () => {
  // Write code here that turns the phrase above into concrete actions

});

Then('user copies the Key and dog earbrand details', async () => {
  await Racing.Confirmation.getText().then(function (confirm) {
    console.log(confirm);
    // expect(confirm).to.equal(' ');
    browser.driver.sleep(1000);
  })
})

Then('User should be navigated to the syndicate details page', async () => {
  await browser.driver.sleep(8000);
  await Account.SyndicatePageHeader.getText().then(function (val) {
    expect(val).to.equal('Syndicate Details');
    Account.SyndicateName.getText().then(function (name) {
      console.log("Syndicate Name is:" + name);
    })
  })
})

Then('User should be able to view the financial details, members and greyhounds that belong to the Syndicate', async () => {
  Account.DisplayAcoountName.getText().then(function (name) {
    console.log("Financial Details with Account name is:", name);
  })
  Account.Members.getText().then(async (text) => {
    console.log("Member details of Syndicate:", text);
  });
  /*Account.greyhounds.getText().then(async (text) => {
    console.log("Greyhounds detail of Syndicate", text);
  })*/
})

Then('Breeding authority key should be generated', async () => {
  await Racing.Confirmation.getText().then(function (confirm) {
    expect(confirm).to.equal(' Breeding Lease Confirmation ');
  })
})

Then('user is able to receive proper confirmation communications from GRV', async () => {
  await Account.validateResAddress.getText().then(function (val) {
    expect(val).to.equal(testData.data.ResAddress + ", " + testData.data.ResTown + " " + testData.data.ResPostCode + ". " + "VIC");
    console.log(val)
  })
  /*   Account.validatePostalAddress.getText().then(function (val1){
     expect(val1).to.equal(testData.data.PostalAddress+ ", " +testData.data.PostalTown+" "+testData.data.PostalPostCode+". "+"VIC");
     console.log(val1)
   });*/

})

Then('user is able to cancel the details', async () => {
  await browser.executeScript('window.scrollTo(2000,5000);');
  await browser.driver.sleep(2000);
  await Account.Cancel.click();
})


Then('user is able to receive proper communications for cancellation from GRV', async () => {
  // Write code here that turns the phrase above into concrete actions
});

Then('Breeding authority key should be generated and user clicks continue', async () => {

  var auth = 'Greyhound Racing Victoria Breeding authority submitted. Your breeding authority key is 5501606267, please record it for future use.'
  var key = auth.match(/\d+/)[0];
  console.log(key)
  /*  await Racing.ConfirmBreedingHeader.getText().then(function (header){
    //  expect(header).to.equal('Breeding Lease Confirmation ');  
      console.log(header)
    })   
    await Racing.GetKey.getText().then(function (auth){
      var key = auth.match(/\d+/)[0];
      console.log(key)      
  })
 // await Racing.Continue.click(); */
})

Then('user should be navigated to the confirmation page', async () => {
  /* await Racing.ValidateAmount.getText().then( function(amt) {
     console.log(amt)
   })
     Racing.ValidatePayment.getText().then( async(payment)=>{
     expect(payment).to.equal('Payment successful.')
     })
    await Racing.Confirmation.click();*/
});

Then('User should be able to view the tracklist under Make a booking screen', async () => {
  IWantTo.MakeABooking.getText().then(function (text) {
    expect(text).to.equal('Make a Booking')
    console.log(text);
  })
  IWantTo.TrackList.getSize().then(function (string) {
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
});

Then('user should be able to view the track details', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('User should be able to view the unavailable time slot', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('User should be able to view the booked time slot', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('User should be able to view the book time slot for', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('User should be able to view the My booked trials', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('User should be able to view the My booking details', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('User should be navigated to the confirmation page', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('user should get a popup for the payment confirmation', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});


Then('user is able to land on {string} Page', function (landPage) {
  /* if(landPage=='Bank Details'){
   expect(Account.BankDetails.getText().then(async(text)=>{
      console.log(text)
    })).to.be.equal(landPage); 
   }*/
   browser.driver.sleep(2000).then(function () { })
  if (landPage == 'My Account') {
    expect(Account.MyAccount.getText().then(async (text) => {
      console.log(text)
    })).to.be.equal(landPage);
  }
  else if (landPage == ' My Dogs->Racing ') {
    expect(Racing.Racing.getText().then(async (text) => {
      console.log(text)
    })).to.be.equal(landPage);
  }
  else if (landPage == 'Home') {
    browser.driver.sleep(5000);
    expect(Home.HomeSelected.isSelected()).toBe(true);
  }
  else if (landPage == ' My Dogs ') {
    browser.driver.sleep(5000);
    expect(Home.MyDogsSelected.isSelected()).toBe(true);
  }
});


Then('user should be able to the transaction as per filter', function () {
});


Then('user should be able to see the statement', function () {

});

Then('User verifies the Breeding Key for the dog', function () {

});

Then('User should be able to view the message pop up for the cofirmation', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
})

Then('user should be able to see the added member with Incomplete status', function () {

  Account.VerifyAddmemberStatus.getText().then(function (text) {
    console.log('Added memeber is having status as : ' + text);
  })
})

Then('verify that removed memeber status is {string}', function (string) {
  Account.VerifyRemovedMember.getText().then(function (text) {
    console.log(text)
  })
})

Then('verify that member is addeed to the {string} list', function (string) {
  Account.VerifyAltManager.getText().then(function (text) {
    console.log('Alternate Manager is:' + text)
  })
})


Then('user should be able to see himself as owner', function (string) {
})

Then('user should be able to validate the injury event added by him ', async () => {
  var EC = protractor.ExpectedConditions;
  browser.wait(EC.alertIsPresent(), 5000);
  let ale:Alert = browser.switchTo().alert();
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

});

Then('user should be able to validate the illness event added by him test', async () => {
  browser.driver.sleep(2000);
  //  var EC = protractor.ExpectedConditions;
  //  browser.wait(EC.alertIsPresent(), 5000, "Alert is not getting present :(");
  // browser.driver.sleep(2000);
  await (await browser.switchTo().alert()).accept();
  browser.driver.sleep(2000);

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
})

Then('User verifies the record', async () => {
})

Then('User navigates to {string}', async (tab) => {
  if (tab == 'Breeding And Litter') {
    expect(Racing.Breeding).to.equal('Breeding & Litters')
  }
})

Then('user should be able to verify the dog details', async () => {
  // expect(DogDetails.DogName.to.not.be.null)   

  await browser.driver.sleep(10000);
})

Then('user is able to verify the dog on on {string} -> {string} Page', async (NonRacing, History) => {
  //w.ValidateDog();
  browser.wait(EC.elementToBeClickable(Racing.MyDogs), 5000).then(function () { })
await Racing.MyDogs.click();
browser.wait(EC.elementToBeClickable(Home.SkipOverlay), 10000).then(function () { })
Home.SkipOverlay.isPresent().then(function (result) {
  if (result) {
    Home.SkipOverlay.click().then(function () { });
  } else {  }
});
browser.wait(EC.elementToBeClickable(Home.NonRacing), 10000).then(function () { })
await Home.NonRacing.click();
await browser.driver.sleep(10000);
console.log(w.DogEarbrand)

 /* RetireGreyhound.DogEarbrand.getText().then(function(DogList) {
    console.log("list is"+DogList) 
    expect(DogList).toContain(w.DogEarbrand);    
  })*/
})

Then('user is able to verify the dog on', async () => {
})

Then('user should be able to land on Home page', async () => {
  await browser.driver.sleep(20000);
  //browser.wait(EC.elementToBeClickable(Home.SkipOverlay), 30000).then(function () { })
  w.SkipOverlay()
  await browser.driver.sleep(2000);
  Home.Home.getText().then(function (text) {
    expect(text).to.equal('home-line\nHome')
  });
})

Then('user should be able to land on {string} error', async (text) => {
  if(text == 'login'){
Home.LoginError.getText().then(function (text) {
  expect(text).to.equal('Wrong email or password.')
});
}
else  if(text == 'email'){
Home.EmailError.getText().then(function (text) {
  expect(text).to.equal('Email is not valid.')
});
}
})

Then('user should be able to see the {string} details', async (page) => {
if(page=='Registration status'){
  Account.Title.getText().then(function (text) {
    expect(text).to.equal('Registration: Public Trainer')
})
}
else if(page=='Member history'){}
});

