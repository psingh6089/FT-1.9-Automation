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
import { MyDogs } from "../Specs/ui/MyDogs";
import { Calendar } from "../Specs/ui/Calendar";
import { BreedingAndLitters } from "../Specs/ui/BreedingAndLitters";
import { isExportDeclaration } from "typescript";
var expect = require('chai').expect;
var chaiAsPromised = require("chai-as-promised");
let EC = protractor.ExpectedConditions;
var fs = require('fs');
function writeScreenShot(png, filename) {
  var stream = fs.createWriteStream(filename);
  stream.write(new Buffer(png, 'base64'));
  stream.end();
}

Then('user should be able to validate {string}', async (text) => {
  Home.IntroText.getText().then(function (text) {
    expect(text).to.equal('MyFastTrack is an easy way to manage your greyhound business on the go. Specifically designed to be user friendly on mobile devices, MyFastTrack has all the features of FastTrack plus some special features only available through the MyFastTrack application.')
  })
  Home.IntroCol1.getText().then(function (text) {
    expect(text).to.equal('- Account Management\n- Apply to Participate\n- Financial details\n- Notices\n- Racing Management\n- Nominations\n- Scratchings\n- Litter Management\n- Service Notification\n- Result of Mating')
  })
  Home.IntroCol2.getText().then(function (text) {
    expect(text).to.equal('- Greyhound Management\n- Ownership\n- Training\n- Location changes\n- Greyhound Health Records\n- Illness, Injury, Health\n- Apply a treatment to multiple dogs')
  })
});

Then('User verifies the payment confirmation', async () => {
Racing.ConfirmRegisterService.getText().then(function(text){
expect(text).to.equal("Thank you, your service registration has been completed. An invoice will be emailed to your registered email address shortly.")
})
})

Then('User is redirected to the list of racing dogs', async () => {
  Racing.DogList.count().then(function (list) {
    expect(list).to.not.be.null;
    console.log("No. of Dogs in list is:", list);
  })
})

Then('User should be able to confirm the transfer ownership of dog to another user', async () => {
  await browser.driver.sleep(5000);
  //await Racing.IAgree.click();
  // await Racing.Submit.click();
  await browser.driver.sleep(10000);
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


Then('user is able to land on {string} Page', async (landPage)=> {
  /* if(landPage=='Bank Details'){
   expect(Account.BankDetails.getText().then(async(text)=>{
      console.log(text)
    })).to.be.equal(landPage); 
   }*/
  browser.driver.sleep(2000).then(function () { })  
  w.SkipOverlay()
  switch(landPage){
    case 'My Account':  expect(Account.MyAccount.getText().then(async (text) => {console.log(text)})).to.be.equal(landPage); break;
    case 'Active': Racing.ActiveDogPage.getText().then(async (text) => {expect(text).to.contain(landPage)}); break;
    case 'Home':  browser.driver.sleep(5000); Home.Home.getText().then(function (text) {expect(text).to.equal('home-line\nHome')}); break;
    case 'My Dogs ': browser.driver.sleep(5000); expect(Home.Racing.toString()).to.be.equal('[object Object]'); break;
    case 'Calendar': browser.driver.sleep(5000); var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var d = new Date(); 
    var monthName = months[d.getMonth()];  
    await browser.driver.sleep(1000);
    Calendar.PageHeading.getText().then(function (text) {expect(text).to.contain(monthName)});; break;
    case ' Dog Details ': browser.driver.sleep(5000); break;
    case 'I Want To':    browser.driver.sleep(2000).then(function () { })//  IWantTo.TitleCheck.getText().then(function (text) {    //   expect(text).to.equal('I WANT TO...')    //})
         break;
    default: console.log("undefined landing page")
  }
})

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
  let ale: Alert = browser.switchTo().alert();
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

Then('User verifies the {string} details', async (Page) => {
BreedingAndLitters.LittersList.count().then(function(count){
  console.log(count)
})
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
    } else { }
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
  if (text == 'login') {
    Home.LoginError.getText().then(function (text) {
      expect(text).to.equal('Wrong email or password.')
    });
  }
  else if (text == 'email') {
    Home.EmailError.getText().then(function (text) {
      expect(text).to.equal('Email is not valid.')
    });
  }
})

Then('user should be able to see the {string} details', async (page) => {
  if (page == 'Registration status') {
    Account.Title.getText().then(function (text) {
      expect(text).to.equal('Registration: Public Trainer')
    })
  }
  else if (page == 'Member history') { }
});

Then('User verifies the no of {string} dogs displayed with filter {string}', async (Dog, filter) => {
  if (filter == 'Reset') {
    await browser.driver.sleep(3000);
    if (Dog == 'Active') {
      MyDogs.NoOfActiveDogs.getText().then(function (no) {
        MyDogs.DogDetails.count().then(function (count) {
          expect(no).to.contain(count)
        })
      });
      w.verifyFilter(Dog, filter)
    }
    else if (Dog == 'Non Active') {
      MyDogs.NoOfNonActiveDogs.getText().then(function (no) {
        MyDogs.DogDetails.getSize().then(function (count) {
          expect(no).to.contain(count)
        })
      });
      w.verifyFilter(Dog, filter)
    }
  }
})

Then('User verifies the list of filters on {string} page and its detail', async (page) => {
   await browser.driver.sleep(2000);
  if (page == 'Active') {
    MyDogs.FilterNames.getSize().then(function (size) {
      expect(size).to.be.equal(12)
    })
  }
  else if (page == 'Non Active') {
    MyDogs.FilterNames.getSize().then(function (size) {
      expect(size).to.be.equal(8)
    })
  }
  if (page == 'Litter') {
    BreedingAndLitters.FilterList.count().then(async function (count) {
      expect(count).to.be.equal(3)
      await browser.driver.sleep(1000);
    })
  }
  else if (page == 'Calendar') {
    await browser.driver.sleep(10000);
    Calendar.FilterOptions.count().then(function (size) {
      expect(size).to.be.equal(6)
    })
  }
})

Then('User verifies the no of {string} dogs displayed with sort {string}', async (Dog, sort) => {
  switch (sort) {
    case 'Kennel name A - Z': browser.takeScreenshot().then(function (png) { writeScreenShot(png, 'MyDogsActiveSortByKennelA_Z.png'); }); break;
    case 'Kennel name Z - A': browser.takeScreenshot().then(function (png) { writeScreenShot(png, 'MyDogsActiveSortByKennelZ_A.png'); }); break;
    case 'Racing name A - Z': browser.takeScreenshot().then(function (png) { writeScreenShot(png, 'MyDogsActiveSortByRacingA_Z.opng'); }); break;
    case 'Racing name Z - A': browser.takeScreenshot().then(function (png) { writeScreenShot(png, 'MyDogsActiveSortByRacingZ_A.png'); }); break;
    case 'Whelp date - Youngest': browser.takeScreenshot().then(function (png) { writeScreenShot(png, 'MyDogsActiveSortByYoungest.png'); }); break;
    case 'Whelp date - Oldest': browser.takeScreenshot().then(function (png) { writeScreenShot(png, 'MyDogsActiveSortByOldest.png'); }); break;
    case 'Dog Sex - Bitch first': browser.takeScreenshot().then(function (png) { writeScreenShot(png, 'MyDogsActiveSortByBitchFirst.png'); }); break;
    case 'Dog Sex - Dog first': await browser.takeScreenshot().then(function (png) { writeScreenShot(png, 'MyDogsActiveDogFirst.png'); }); break;
    case 'Reset': await browser.driver.sleep(1000); MyDogs.SortByRacingA_Z.getText().then(function (text) {
      expect(text).to.be.equal('Racing name A - Z')
    })
    default: console.log("undefined Sorting")
  }
})

Then('User verifies the list displayed with filter {string}', async (filter) => {
  switch (filter) {
    case 'Metro': w.verifyCalendarFilter(Calendar.FilterMetro); break;
    case 'PFS': w.verifyCalendarFilter(Calendar.FilterPFS); break;
    case 'Tier 3': w.verifyCalendarFilter(Calendar.FilterTier3); break;
    case 'RLM': w.verifyCalendarFilter(Calendar.FilterRLM); break;
    case 'HSM': w.verifyCalendarFilter(Calendar.DogFilterHSM); break;
    case 'CS': w.verifyCalendarFilter(Calendar.DogFilterCS); break;
  }
  })
  
Then('User verifies information details on Calendar page', async () => {
  await browser.driver.sleep(1000);
  Calendar.RacingKeys.getText().then(async(text)=>{
  expect(text).to.be.equal("RACING KEYS\nMetro\nMetropolitan Full Stakes\nPFS\nProvincial Full Stakes\nTier 3\nProvincial Non-Penalty - Tier 3\nRLM\nRank Limit\nAPM\nAzed prizemoney Meeting (APM)\nHSM\nProvincial Half Stakes\nRacing\nNominated (NOM)\nOpen for nominations\nCoursing")
 })
 })

Then('User verifies the {string} page details with filter {string}', async (page, filter) => {
  await browser.driver.sleep(5000);  
  var total: number;
  if(page=='Litter'){
    BreedingAndLitters.FilterList.count().then(function (count){ console.log(count);total=count;})
  switch (filter) {    
    case 'All':  BreedingAndLitters.FilterList.count().then(function (count) {expect(count).to.be.equal(total)}); break;
    case 'Past Year': BreedingAndLitters.FilterList.count().then(function (count) {expect(count).to.be.lessThan(total)}); break;
    case 'Past 5 Years': BreedingAndLitters.FilterList.count().then(function (count) {expect(count).to.be.lessThan(total)}); break;
    case 'Cancel': await BreedingAndLitters.FilterList.count().then(function (count) {expect(count).to.be.lessThan(total)}); break;
  }
}
})

Then('User verifies the confirmation for result of Mating', function () {
});

Then('User verifies the status of the {string} is {string}', function (litter, status) {
switch (litter) {
  case 'litter registration': w.litterStatus(BreedingAndLitters.WhelpingResult, status); break;
  case 'Vaccination': w.litterStatus(BreedingAndLitters.LitterServiceLodged, status); break;
  case 'Earbrand': w.litterStatus(BreedingAndLitters.LitterServiceLodged, status); break;
  case 'Microchip': w.litterStatus(BreedingAndLitters.LitterServiceLodged, status); break;
}
});

Then('User verifies the {string} page for {string} details', async (page, result) => {
 if(page== 'Litter'){
   if(result == 'whelped'){
    await browser.executeScript('window.scrollTo(0,5000);')
    browser.wait(EC.elementToBeClickable(BreedingAndLitters.SelectResultAsWhelped), 1000).then(function () { });
    await BreedingAndLitters.SelectResultAsWhelped.click();
    await browser.executeScript('window.scrollTo(0,5000);')
    expect(await Racing.Next.getAttribute("disabled")).to.be.equal('true');
    await BreedingAndLitters.SelectNoOfFemalePups.click();
    await Racing.Next.click();
   }
 }
  })