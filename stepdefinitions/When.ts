import { Given, When, Then } from "cucumber";
import { browser } from "protractor";
import { Racing } from "../Specs/ui/Racing";
import { Home } from "../Specs/ui/Home";
import { webUtils as w, webUtils } from '../utils/WebUtils';
import { Account } from "../Specs/ui/Account";
import testData from "../testData/DataInput.json"
import { access } from "fs";
import { NonRacing } from "../Specs/ui/Non-Racing";
import { IWantTo } from "../Specs/ui/IWantTo";
import { protractor } from "protractor/built/ptor";
import { FT1 } from "../Specs/FT1";
import { COP } from "../Specs/ui/COP";
import { BreedingAndLitters } from "../Specs/ui/BreedingAndLitters";
import { DogDetails } from "../Specs/ui/DogDetails";
import { S_IFSOCK } from "constants";
import { Menu } from "../Specs/ui/Menu";
import { RetireGreyhound } from "../Specs/ui/RetireGreyhound";
import { DogLocation } from "../Specs/ui/DogLocation";
let EC = protractor.ExpectedConditions;

var expect = require('chai').expect;
var fs = require('fs');
function writeScreenShot(png, filename) {
  var stream = fs.createWriteStream(filename);
  stream.write(new Buffer(png, 'base64'));
  stream.end();
}

When('User logs in as User', async () => {
  browser.driver.sleep(1000);
});

When('User clicks on {string} button', function (button) {
  // w.confirmButton(button);
  if (button == 'cancel') {
    browser.driver.sleep(2000).then(function () { })
    Racing.Cancel.isPresent().then(function (boolean) {
      if (boolean) {
        Racing.Cancel.click().then(function () { })
      } else {
        browser.executeScript('window.scrollTo(0,5000)').then(async () => { });
        Racing.Cancel.click().then(function () { })
      }
    })
  }
  else if (button == "submit") {
    browser.driver.sleep(2000).then(function () { })
    Racing.Submit.isPresent().then(function (boolean) {
      if (boolean) {
        Racing.Submit.click().then(function () { })
      } else {
        browser.executeScript('window.scrollTo(0,5000)').then(async () => { });
       Racing.Submit.click().then(function () { })
      }
    })
  }
  else if (button == "continue") {
    browser.wait(EC.elementToBeClickable(Racing.Continue), 5000).then(function () { })
    Racing.Continue.click().then(function () { })
  }
  else if (button == "confirm") {
    browser.wait(EC.elementToBeClickable(Racing.Confirmation), 5000).then(function () { })
    Racing.Confirmation.click().then(function () { })
  }
  else if (button == "back") {
    browser.wait(EC.elementToBeClickable(Racing.Back), 5000).then(function () { })
    Racing.Back.click().then(function () { })
  }
  else if (button == "save") {
    browser.wait(EC.elementToBeClickable(Racing.Back), 5000).then(function () { })
    Racing.SaveChanges.click().then(function () { })
  }
  else if (button == "yes") {
    browser.driver.sleep(2000).then(function () { })
    Racing.Yes.click().then(function () { })
      }
});

When('Bitch details are entered and validated', async () => {
  browser.wait(EC.elementToBeClickable(Racing.Earbrand), 5000).then(function () { });
  Racing.Earbrand.sendKeys(testData.data.Earbrand);
  browser.wait(EC.elementToBeClickable(Racing.DamName), 5000).then(function () { });
  Racing.DamName.sendKeys(testData.data.Bitch);
  browser.driver.sleep(1000);
  browser.wait(EC.elementToBeClickable(Racing.Search), 5000).then(function () { });
  await Racing.Search.click();
  // browser.driver.sleep(2000);
});

When('Service details are entered and added', async () => {
  browser.wait(EC.elementToBeClickable(Racing.Artificial), 5000).then(function () { });
  await Racing.Artificial.click();
  browser.wait(EC.elementToBeClickable(Racing.ThirdPartyWitness), 5000).then(function () { });
  Racing.ThirdPartyWitness.sendKeys(testData.data.Witness);
  browser.executeScript('window.scrollTo(0,5000)');
  await Racing.DateArrivedCalender.click();
  browser.wait(EC.elementToBeClickable(Racing.PreviousMonth), 5000).then(function () { });
  await Racing.PreviousMonth.click();
  await Racing.DateArrivedSelection.click();
  await Racing.ServiceDateCalender.click();
  browser.wait(EC.elementToBeClickable(Racing.PreviousMonth), 5000).then(function () { });
  await Racing.PreviousMonth.click();
  await Racing.ServiceDateSelection.click();
  await Racing.DepartedDateCalender.click();
  browser.wait(EC.elementToBeClickable(Racing.PreviousMonth), 5000).then(function () { });
  await Racing.PreviousMonth.click();
  await Racing.DepartedDateSelection.click();
  await Racing.Search.click();
  browser.driver.sleep(5000);
});

When('Studmaster clicks X button to cancel the register service', async () => {
  await Racing.CancelDam.click();
  await Racing.Cancel.click();
})

When('user enters the Name details of the new person to be transferred', async () => {
  await browser.driver.sleep(2000);
  browser.executeScript('window.scrollTo(0,5000);');
  await Racing.TransferIAgree.click();
  Racing.FirstName.sendKeys(testData.data.TransferServiceToFirstName);
  Racing.LastName.sendKeys(testData.data.TransferServiceToLastName);
  Racing.PhoneNo.sendKeys(testData.data.PhoneNo);
});

When('user navigates view details link of a syndicate', async () => {
  w.viewDetails();
})

When('user is able to add or update the address details', async () => {
  // w.updateAddressDetails();
  browser.executeScript('window.scrollTo(0,200);');
  browser.wait(EC.elementToBeClickable(Account.ResAddressEdit), 5000).then(function () { });
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
  // await Account.Save.click(); 
  // await browser.driver.sleep(10000);
});

When('user clicks Apply for a Dog name page with valid name', async () => {
  //  w.applyDogName();
  browser.wait(EC.elementToBeClickable(NonRacing.EnterName1), 5000).then(function () { });
  NonRacing.EnterName1.sendKeys(testData.data.Dog1);
  NonRacing.AddDog.click();
  NonRacing.EnterName2.sendKeys(testData.data.Dog2);
  NonRacing.AddDog.click();
  NonRacing.EnterName3.sendKeys(testData.data.Dog3);
  NonRacing.AddDog.click();
  NonRacing.EnterName4.sendKeys(testData.data.Dog4);
  browser.executeScript('window.scrollTo(0,5000);');
  NonRacing.AddDog.click();
  NonRacing.EnterName5.sendKeys(testData.data.Dog5);
  NonRacing.AddDog.click();
  NonRacing.EnterName6.sendKeys(testData.data.Dog6);
  NonRacing.AddDog.click();
  browser.executeScript('window.scrollTo(0,5000);');
  NonRacing.EnterName7.sendKeys(testData.data.Dog7);
  NonRacing.AddDog.click();
  NonRacing.EnterName8.sendKeys(testData.data.Dog8);
  NonRacing.AddDog.click();
  NonRacing.EnterName9.sendKeys(testData.data.Dog9);
  NonRacing.AddDog.click();
  await browser.executeScript('window.scrollTo(0,5000);');
  NonRacing.EnterName10.sendKeys(testData.data.Dog10);
  await browser.driver.sleep(5000);
})

When('user completes payment option', async () => {
  await NonRacing.Save.click();
  await browser.driver.sleep(5000);
})

When('user clicks on Victoria Transfer tab and enter the Name details of the new person to be authorised', async () => {
  //  expect(Racing.SelectVictoria).to.be.true;
  await browser.executeScript('window.scrollTo(0,5000);');
  await Racing.IAgree.click();
  Racing.InputFirstName1.sendKeys('Paul');
  Racing.InputLastName1.sendKeys('Westerveld');
})

When('user fills and submits the Interstate Authority to Breed form', async () => {
  //  w.fillInterstateAuthority();
  browser.wait(EC.elementToBeClickable(Racing.Dog1), 8000).then(function () { });
  await Racing.Dog1.click();
  browser.wait(EC.elementToBeClickable(Racing.Interstate), 2000).then(function () { });
  w.SkipOverlay()
  browser.wait(EC.elementToBeClickable(Racing.Interstate), 2000).then(function () { });
  await Racing.Interstate.click();
  await Racing.IAgree.click();
  Racing.InputFirstName.sendKeys('Paul');
  Racing.InputLastName.sendKeys('Westerveld');
  await browser.executeScript('window.scrollTo(0,5000);');
  await browser.driver.sleep(2000);
  Racing.Inputstreet.sendKeys('Testing123');
  Racing.InputSuburb.sendKeys('Southbank');
  await Racing.InputState.click().then(async () => {
  await browser.executeScript('window.scrollTo(0,5000);');
  Racing.SelectVic.click().then(function () {
    })
  })
  Racing.InputPostCode.sendKeys('3006');
})

When('User is redirected to Breeding Authority Confirmation page with Send via Email or Continue buttons', async () => {
  //  await Racing.Submit.click();
  await browser.driver.sleep(2000);
})

When('user enters the Authority Key and Ear brand details of dog for {string}', async (option) => {
  Racing.AddAuthorityKey.sendKeys('5501751542');
  Racing.AddEarBrand.sendKeys('VHTLJ');
  browser.wait(EC.elementToBeClickable(Racing.Validate), 5000).then(function () { });
  await Racing.Validate.click();
  browser.wait(EC.elementToBeClickable(Racing.Continue), 5000).then(function () { });
  await browser.executeScript('window.scrollTo(0,5000);');
  // await Racing.Continue.click();
})

When('user proceeds with the payment option', async () => {
  await browser.driver.sleep(1000);
  await browser.switchTo().frame(Racing.switchframe.getWebElement());
  Racing.NameOnCard.sendKeys(testData.data.NameOnCard);
  Racing.CardNo.sendKeys(testData.data.CardNo);
  var elm = Racing.ExpMonth;
  browser.executeScript("arguments[0].scrollIntoView();", elm.getWebElement());
  elm.sendKeys(testData.data.ExpMonth);
  await browser.executeScript('window.scrollTo(0,5000);')
  browser.wait(EC.elementToBeClickable(Racing.ExpYr), 1000).then(function () { });
  Racing.ExpYr.sendKeys(testData.data.ExpYear);
  browser.wait(EC.elementToBeClickable(Racing.SecCode), 1000).then(function () { });
  Racing.SecCode.sendKeys(testData.data.SecCode);
  // browser.wait(EC.elementToBeClickable(Racing.PayNow), 5000).then(function () { });
  //await Racing.PayNow.click();  
  //  browser.wait(EC.elementToBeClickable(Racing.Continue), 5000).then(function () { }); 
  await Racing.Back.click();
})

When('Click on the track to select the track', async () => {
  browser.wait(EC.elementToBeClickable(IWantTo.SelectTrack), 5000).then(function () { });
  await IWantTo.SelectTrack.click();
  await browser.driver.sleep(5000);
})

When('clicks on the trials', async () => {
  browser.wait(EC.elementToBeClickable(IWantTo.TrialLeft), 5000).then(function () { });
  expect(IWantTo.TrialLeft.getText().then(async () => { })).to.not.be.null;
  await IWantTo.SelectTrack.click();
  await browser.driver.sleep(2000);
})

When('user clicks on BOOK TIME SLOT(S) FOR', async () => {
  return 'pending';
})

When('Click on the My booking tab', async () => {
  return 'pending';
})
When('clicks on the trials for which payment has to be selected and click checkbox', async () => {
  return 'pending';
})

When('user is able to view,add,update the bank details', async () => {
  browser.wait(EC.elementToBeClickable(Racing.IAgreeStatement), 5000).then(function () { });
  //await Racing.VerifyGST.click();
  //console.log(Racing.VerifyGST);
  //expect(Racing.VerifyGST.is.selected()).to.be.true();
  await Racing.IAgreeStatement.click();
  await browser.executeScript('window.scrollTo(0,5000);')
  await browser.driver.sleep(1000);
  var isClickable = protractor.ExpectedConditions.elementToBeClickable(Account.EnterBSB);
  await browser.wait(isClickable, 43);

  Account.EnterBSB.clear().then(function () {
    Account.EnterBSB.sendKeys(testData.data.BSB);
  })
  Account.EnterAccountNo.clear().then(function () {
    Account.EnterAccountNo.sendKeys(testData.data.Account);
  })
  Account.EnterAccountName.clear().then(function () {
    Account.EnterAccountName.sendKeys(testData.data["Account Name"]);
  })
  // await Racing.SaveChanges.click();
});

When('user selects the fine to pay', async () => {
  browser.wait(EC.elementToBeClickable(Account.FineDueDate), 5000).then(function () { });
  Account.FineDueDate.getText().then(async (text) => {
    console.log(text)
  })
  Account.FineNo.getText().then(async (text) => {
    console.log(text)
  })
  await Account.PayFine.click();
  await browser.driver.sleep(3000);
});

When('user selects filter for the transaction history', async () => {
  Account.TransactionDownArrow.getSize().then(function (text) {
    console.log(text)
  })
  await Account.TransactionDownArrow.click();
});

When('user clicks {string} button to login', async (action) => {
  if(action=="continue")
 await Home.LoginContinue.click()
 if(action=="forgot password")
 await Home.ForgotPassword.click()
 if(action=="Back to Fast Track")
 await Home.BackToFT.click()
});

When('user selects {string} and {string} for the statement', function (string, string2) {
});

When('user selects the dog and selects all the checkboxes with option {string}', async (string) => {
  browser.wait(EC.elementToBeClickable(Racing.Dog1), 5000).then(function () { });
  await Racing.Dog1.click();
});

When('user clicks {string}', async (string) => {
  await browser.driver.sleep(8000);
  if (string == 'Manage Syndicate') {
    await browser.executeScript('window.scrollTo(0,1000);')
    //  await browser.driver.sleep(2000);
    await Account.ManageSyndicate.click();
  }
  else if (string == 'Modify Finance Details') {
    await Account.ModifyFinancialDetails.click();
  }
  await browser.driver.sleep(5000);
});

When('user adds a new member using FT member no. and clicks Add member button', function () {
  Account.EnterNewMember.sendKeys(testData.data.Glenn_user);
  Account.AddNewMember.click().then(async () => {
    await browser.driver.sleep(5000);
  });
});

When('user click on the {string} corresponding to the member', async (remove) => {
  await Account.RemoveMember.click();
  await browser.driver.sleep(5000);
});

When('user clicks on the {string} and changes the action to {string} corresponding to the member', async (status, manager) => {
  await Account.ChangeStatus.click();
  await Account.ChangeStatusToAltManager.click();
  await browser.driver.sleep(5000);
});

When('enter the syndicate name', async () => {
  await browser.driver.sleep(1000);
  Account.EnterSyndicateName.sendKeys('TestSyndicate')
});

When('user selects the role as {string}', async (role) => {
  await browser.driver.sleep(2000);
  browser.wait(EC.elementToBeClickable(Account.RoleList), 5000).then(function () { });
  Account.RoleList.getText().then(function (text) {
  console.log(text)
  })
  if (role == 'owner') { }
  else if (role == 'Attendant') {
    Account.SelectAttendant.click();
    // await browser.driver.sleep(10000);
  }
  else if (role == 'Catcher') {
    Account.SelectCatcher.click();
    await browser.driver.sleep(1000);
  }
  else if (role == 'Owner Trainer') {
    Account.SelectOwnerTrainer.click();
  }
  else if (role == 'Public Trainer') {
    Account.SelectPublicTrainer.click();
  }
  else {
    console.error
  }
  await browser.executeScript('window.scrollTo(0,5000);')
  await Racing.Begin.click();
 /* browser.wait(EC.elementToBeClickable(Menu.ProgressStatus), 4000).then(function () { });
  Menu.ProgressStatus.getAttribute('div').then(function (text) {
    console.log('progress of the status:-   ' + text)
  })
  Menu.CurrentStatus.getAttribute('div').then(function (text) {
    console.log('Current status is at step:-   ' + text)
    expect(text).to.equal('Terms')
  })*/
});

When('work bench user confirms the request in FT 1.0', async () => {
  let url = 'https://fasttracktestd.cloudapp.net/';
  // browser.executeScript("return window.open(arguments[0], '_blank')", url);
  await browser.get(url);
  var Key = protractor.Key;
  await browser.actions().sendKeys(Key.chord(Key.F12)).perform();
  await FT1.Advanced.click();
  await FT1.ProceedToFastTrack.click();
  FT1.EnterUser.sendKeys('302737');
  FT1.EnterPassword.sendKeys('capeCaution');
  await browser.driver.sleep(1000);
  await FT1.Login.click();
  await browser.driver.sleep(1000);
})

When('user is able to add Injury Event', async () => {
  browser.wait(EC.elementToBeClickable(COP.TrackOrNonTrack), 5000).then(function () { });
  //await browser.driver.sleep(5000);
  await COP.TrackOrNonTrack.click();
  await COP.SelectTrack.click();
  await COP.TrackName.click();
  await browser.driver.sleep(1000);
  COP.GetAllTrackNames.getText().then(function (size) {
    console.log("List of Track Names: " + size);
  })
  await COP.SelectTRackNameAsBendigo.click();
  await COP.InjuryType.click();
  await browser.driver.sleep(1000);
  COP.GetAllInjuryTypes.getText().then(function (size) {
    console.log("List of Injury Types: " + size);
  })
  await COP.SelectInjuryTypeAsBone.click();
  await COP.InjuryLocation.click();
  await browser.driver.sleep(1000);
  COP.GetAllInjuryLocations.getText().then(function (size) {
    console.log("List of Injury Location: " + size);
  })
  await browser.executeScript('window.scrollTo(500,500);')
  await COP.SelectInjuryLocationAsChest.click();
  await COP.InjuryDetail.click();
  await browser.driver.sleep(1000);
  COP.GetAllInjuryDetails.getText().then(function (size) {
    console.log("List of All Injury Details: " + size);
  })
  await browser.executeScript('window.scrollTo(500,500);')
  await COP.SelectInjuryDetailAsOther.click();
  await browser.driver.sleep(1000);
  COP.EnterOtherInjuryDetails.sendKeys("TestAutomation1")
  await COP.InjuryDate.click();
  await COP.SelectInjuryDate.click();
  await browser.executeScript('window.scrollTo(0,1000);')
  await COP.Treatment.click();
  await browser.driver.sleep(1000);
  COP.GetAllTreatmentList.getText().then(function (size) {
    console.log("List of all treatments: " + size);
  })
  await COP.SelectTreatmentAsUltraSound.click();
  await COP.Frequency.click();
  await browser.driver.sleep(1000);
  COP.GetAllFrequencyList.getText().then(function (size) {
    console.log("List of Frequency: " + size);
  })
  await COP.SelectFrequencyAs1X.click();
  await COP.TreatmentDate.click();
  await COP.SelectTreatmentDate.click();
  await browser.driver.sleep(1000);
  COP.AdministeredBy.sendKeys("tesr")
  await browser.driver.sleep(1000);
  COP.AuthorisedBy.sendKeys("test")
  await browser.driver.sleep(1000);
  COP.Comment.sendKeys("test")
  await browser.driver.sleep(1000);
  browser.executeScript('window.scrollTo(0,5000)').then(async () => { });
  Racing.Cancel.click().then(function () { })
  await browser.driver.sleep(2000);
})


When('user is able to add Illness details', async () => {
  browser.wait(EC.elementToBeClickable(COP.IllnessType), 5000).then(function () { });
  //await browser.driver.sleep(5000);
  await COP.IllnessType.click();
  COP.GetAllIllnessType.getText().then(function (text) {
    console.log("List of Illness Types: " + text);
  })
  await COP.SelectIllnessType.click();
  await COP.IllnessTreatment.click();
  await browser.driver.sleep(1000);
  COP.GetAllIllnessTreatmentList.getText().then(function (size) {
    console.log("List of Treatment : " + size);
  })
  await COP.SelectTreatmentAsUltraSound.click();
  await COP.IllnessFrequency.click();
  await browser.driver.sleep(1000);
  await COP.SelectFrequencyAs1X.click();
  await COP.IllnessTreatmentDate.click();
  await COP.SelectTreatmentDate.click();
  await browser.driver.sleep(1000);
  COP.IllnessAdminiteredBy.sendKeys("tesr")
  await browser.driver.sleep(1000);
  COP.IllnessAuthorisedBy.sendKeys("test")
  await browser.driver.sleep(1000);
  COP.IllnessComment.sendKeys("test")
  await browser.driver.sleep(1000);
})


When('user is able to add Health Management details', async () => {
  browser.wait(EC.elementToBeClickable(COP.HealthType), 5000).then(function () { });
  //await browser.driver.sleep(5000);
  await COP.HealthType.click();
  COP.GetAllHealthTypeList.getText().then(function (text) {
    console.log("List of Health Types: " + text);
  })
  await COP.SelectHealthTypeAsSupplement.click();
  await COP.SupplementName.sendKeys('Testing');

  await COP.RouteOfAdmin.click();
  COP.GetAllRouteOfAdmin.getText().then(function (text) {
    console.log("List of Route of Admin Types: " + text);
  })
  await COP.SelectRouteOfAdmin.click();
  await browser.driver.sleep(1000);
  await COP.HealthTreatmentDate.click();
  await COP.SelectTreatmentDate.click();
  await browser.driver.sleep(1000);
  COP.HealthAdminsteredBy.sendKeys("tesT123")
  await browser.driver.sleep(1000);
  COP.HealthAuthorisedBy.sendKeys("test123")
  await browser.driver.sleep(1000);
  COP.HealthComment.sendKeys("test123")
})

When('User selects the parent Dog and enters the details for {string}', async (result) => {
  // w.ResultOfBreeding(result);
  browser.wait(EC.elementToBeClickable(BreedingAndLitters.SelectParentDog), 1000).then(function () { });
  //  await browser.driver.sleep(5000); 
  await BreedingAndLitters.SelectParentDog.click();
  browser.wait(EC.elementToBeClickable(BreedingAndLitters.ResultOfMating), 1000).then(function () { });
  await BreedingAndLitters.ResultOfMating.click();
  await browser.driver.sleep(1000);
  if (result == 'Whelped') {
    await browser.executeScript('window.scrollTo(0,5000);')
    browser.wait(EC.elementToBeClickable(BreedingAndLitters.SelectResultAsWhelped), 1000).then(function () { });
    await BreedingAndLitters.SelectResultAsWhelped.click();
    browser.wait(EC.elementToBeClickable(BreedingAndLitters.SelectNoOfFemalePups), 1000).then(function () { });
    await browser.executeScript('window.scrollTo(0,5000);')
    await BreedingAndLitters.SelectNoOfFemalePups.click();
    browser.wait(EC.elementToBeClickable(Racing.Next), 1000).then(function () { });
    await Racing.Next.click();
    await BreedingAndLitters.WhelpedDate.click();
    await BreedingAndLitters.ChooseWhelpedDate.click();
    await browser.executeScript('window.scrollTo(0,5000);')
    BreedingAndLitters.EnterDog1Kennel.sendKeys("TestAutomation");
    await BreedingAndLitters.Dog1Color.click();
    BreedingAndLitters.GetAllDogColors.getText().then(function (colour) {
      console.log("colors of the dogs are:" + colour)
    })
    await BreedingAndLitters.SelectDog1Color.click();
    await browser.driver.sleep(1000);
    await browser.executeScript('window.scrollTo(0,5000);')
    browser.wait(EC.elementToBeClickable(BreedingAndLitters.VetClinic), 1000).then(function () { });
    await BreedingAndLitters.VetClinic.click();
    browser.wait(EC.elementToBeClickable(BreedingAndLitters.SelectVetClinic), 1000).then(function () { });
    await BreedingAndLitters.SelectVetClinic.click();
    await browser.driver.sleep(1000);
    await browser.executeScript('window.scrollTo(0,5000);')
  }
  else if (result == 'Missed') {
    await browser.executeScript('window.scrollTo(0,5000);')
    browser.wait(EC.elementToBeClickable(BreedingAndLitters.SelectResultAsMissed), 1000).then(function () { });
    await BreedingAndLitters.SelectResultAsMissed.click();
  }
  else if (result == 'No Live Pups') {
    await browser.executeScript('window.scrollTo(0,5000);')
    browser.wait(EC.elementToBeClickable(BreedingAndLitters.SelectResultAsNoLivePUps), 1000).then(function () { });
    await BreedingAndLitters.SelectResultAsNoLivePUps.click();
    await browser.driver.sleep(1000);
  }
})

When('user navigates the Dog Content details', async () => {
  browser.wait(EC.elementToBeClickable(DogDetails.DogName), 2000).then(function () { });
  await browser.driver.sleep(5000);
  DogDetails.DogName.getText().then(function (abc) {
    console.log("Dog Details  " + abc)
    browser.takeScreenshot().then(function (png) {
      writeScreenShot(png, 'DogDetailsContent.png');
    });
  })
  await DogDetails.DogContentLitter.click();
  DogDetails.DogName.getText().then(function (text) {
    console.log("2nd page -> Litter  " + text)
    browser.takeScreenshot().then(function (png) {
      writeScreenShot(png, 'DogDetailsLitter.png');
    });
  })
  await DogDetails.DogContentRaces.click();
  browser.takeScreenshot().then(function (png) {
    writeScreenShot(png, 'DogDetailsRaces.png');
    DogDetails.DogName.getText().then(function (text) {
      console.log("3rd page -> Races  " + text)
    });
  })
})

When('user navigates to the {string} Page of Dog Details', async (tab) => {
  await browser.driver.sleep(2000);
  //w.DogDetails(tab);
  //browser.executeScript('window.scrollTo(0,800);').then(function (){});
  browser.driver.sleep(1000).then(function () { })
  DogDetails.FormPage.getText().then(function (text) {
    console.log("Form Page  " + text)
  });
})

When('user see the details of a dog with toggle to table view', async () => {
  await browser.driver.sleep(1000);
  await browser.executeScript('window.scrollTo(0, 600);')
  await browser.driver.sleep(1000);
  await DogDetails.Toggle.click();
  await browser.driver.sleep(1000);
  browser.takeScreenshot().then(function (png) {
    writeScreenShot(png, 'DogDetailsFormRunResulttable.png');
  });
  DogDetails.ResultTable.getText().then(function (text) {
    console.log("Form Page with toggle button on:  " + text)
  })
})


When('user accepts the declarations on the Term Page', async () => {
  browser.wait(EC.elementToBeClickable(Account.AcceptDeclaration), 1000).then(function () { });
  await browser.executeScript('window.scrollTo(188, 788);')
  await Account.AcceptDeclaration.click();
  await browser.executeScript('window.scrollTo(0, 5000);')
  await Account.AcceptDeclaration2.click();
})

When('user enters the Contact details on Contact Page', async () => {
  browser.wait(EC.elementToBeClickable(Account.ContactDetails), 5000).then(function () { });
Account.ContactDetails.getText().then(function (text) {
  console.log(text)
 });
  await browser.executeScript('window.scrollTo(188, 788);')
  Account.EnterPhoneNo.clear().then(function(){
    Account.EnterPhoneNo.sendKeys('9874563210')
  })
  await browser.executeScript('window.scrollTo(0, 5000);')
})

When('user enters the Questions for Criminal History, Racing, Spouse or Domestic partner and National Police Check on Question Page', async () => {
  browser.wait(EC.elementToBeClickable(Account.CriminalHistory), 5000).then(function () { });
  Account.CriminalHistory.getText().then(function (text) {
    console.log(text)
   });
   Account.RacingHistory.getText().then(function (text) {
    console.log(text)
   });
   Account.SpousePartner.getText().then(function (text) {
    console.log(text)
   });
     Account.Declaration.getText().then(function (text) {
    console.log(text)
   });
  
   Account.NationalPoliceCheck.getText().then(function (text) {
    console.log(text)
   });
   await browser.executeScript('window.scrollTo(188, 1000);')
   await Account.AcceptDeclaration3.click();
   await browser.driver.sleep(5000);
})

When('user selects retirement status as {string} -> {string} and clicks {string}', async (status, retiredTo, action) => {
  RetireGreyhound.DogEarbrand.getText().then(function(earbrand){
    w.DogEarbrand =earbrand
  })
  await browser.executeScript('window.scrollTo(0, 5000);')
//   webUtils.clickOn(RetireGreyhound.RetirementStatusDropdown)
  // expect(RetireGreyhound.RetirementStatusList.count()).to.be.equal(5);
  if(status=='Pet'){
    webUtils.clickOn(RetireGreyhound.RetirementStatusDropdown)
    await browser.driver.sleep(1000);
   webUtils.clickOn(RetireGreyhound.SelectPet)
   if(retiredTo=='Owner'){
    await RetireGreyhound.RetiredToOwner.click();
}
else if(retiredTo=='A Third Party'){
  browser.wait(EC.elementToBeClickable(RetireGreyhound.RetiredToThirdParty), 2000).then(function () { });
  await RetireGreyhound.RetiredToThirdParty.click();
  expect(await RetireGreyhound.EnterFirstName.getAttribute("required")).to.be.equal('true');
  await RetireGreyhound.EnterFirstName.sendKeys('Testingaaa');
  expect(await RetireGreyhound.EnterLastName.getAttribute("required")).to.be.equal('true');
  await RetireGreyhound.EnterLastName.sendKeys('Testingbbb')
  await browser.executeScript('window.scrollTo(0, 600);')
  expect(await RetireGreyhound.EnterContact.getAttribute("required")).to.be.equal('true');
  await RetireGreyhound.EnterContact.sendKeys(9874563210)  
  await browser.executeScript('window.scrollTo(0, 800);')
  expect(await RetireGreyhound.EnterEmail.getAttribute("required")).to.be.equal('true');
  await RetireGreyhound.EnterEmail.sendKeys('abc@gmail.conm');
  expect(await RetireGreyhound.EnterStreet.getAttribute("required")).to.be.equal('true');
  await RetireGreyhound.EnterStreet.sendKeys('15, abc street')
  expect(await RetireGreyhound.EnterSuburb.getAttribute("required")).to.be.equal('true');
  await RetireGreyhound.EnterSuburb.sendKeys('abctest')
  await browser.executeScript('window.scrollTo(0, 1200);')
  browser.wait(EC.elementToBeClickable(RetireGreyhound.SelectStateDropDown), 2000).then(function () { })
  await RetireGreyhound.SelectStateDropDown.click();
  await RetireGreyhound.EnterState.click();
  expect(await RetireGreyhound.EnterPostcode.getAttribute("required")).to.be.equal('true');
  await RetireGreyhound.EnterPostcode.sendKeys('1234')
  expect(await RetireGreyhound.EnterAlternateName.getAttribute("required")).to.be.equal('true');
  await RetireGreyhound.EnterAlternateName.sendKeys('Testing')
  expect(await RetireGreyhound.EnterAlternateNo.getAttribute("required")).to.be.equal('true');
  await RetireGreyhound.EnterAlternateNo.sendKeys(12336547891)
  await browser.executeScript('window.scrollTo(0, 1500);')
  await RetireGreyhound.SameAsPhysicalAdd.click();
  await browser.executeScript('window.scrollTo(0, 5000);')
}
await browser.driver.sleep(1000);
browser.wait(EC.elementToBeClickable(RetireGreyhound.RetiredDate), 2000).then(function () { })
await RetireGreyhound.RetiredDate.click()
await RetireGreyhound.SelectRetiredDate.click()
}  
else if(status=='Breeding Animal'){
  webUtils.clickOn(RetireGreyhound.RetirementStatusDropdown)
  await browser.driver.sleep(1000);
  webUtils.clickOn(RetireGreyhound.SelectBreedingAnimal)  
  if(retiredTo=='Owner'){
    await RetireGreyhound.RetiredToOwner.click()  
}
else if(retiredTo=='A Third Party'){
  await RetireGreyhound.RetiredToThirdParty.click()     
  await RetireGreyhound.RetiredDate.click()     
  await RetireGreyhound.SelectRetiredDate.click()     
}
await browser.driver.sleep(1000);
browser.wait(EC.elementToBeClickable(RetireGreyhound.RetiredDate), 2000).then(function () { })
await RetireGreyhound.RetiredDate.click()
await RetireGreyhound.SelectRetiredDate.click()
}
else if(status=='Euthanised'){
  webUtils.clickOn(RetireGreyhound.RetirementStatusDropdown)
  await browser.driver.sleep(1000);
  webUtils.clickOn(RetireGreyhound.SelectEuthanised)   
  await RetireGreyhound.DisposalMethod.click()     
  if(retiredTo=='Vet'){
    await browser.executeScript('window.scrollTo(187, 900);')
    await browser.driver.sleep(1000);
    webUtils.clickOn(RetireGreyhound.SelectDisposalMethodVet)   
    webUtils.clickOn(RetireGreyhound.ReasonOfEuthanasia) 
    await browser.driver.sleep(1000);  
    webUtils.clickOn(RetireGreyhound.SelectReasonOfEuthanasiaEmergency)
  RetireGreyhound.VetName.sendKeys("Testing")
  RetireGreyhound.DateContactedForVet.sendKeys("Testing")
  RetireGreyhound.TimeContactedForVet.sendKeys("01:01 AM")
  RetireGreyhound.EnterDetails.sendKeys("Testing")
  }
  else if(retiredTo=='Animal Cremation'){
    await browser.driver.sleep(1000);  
    await RetireGreyhound.SelectDisposalMethodAnimalCremation.click()     
    await RetireGreyhound.ReasonOfEuthanasia.click()    
    await browser.driver.sleep(1000);   
    await RetireGreyhound.SelectReasonOfEuthanasiaInjury.click()  
}
else if(retiredTo=='other'){
  await browser.driver.sleep(1000);  
  await RetireGreyhound.SelectMethodOther.click() 
  await browser.driver.sleep(1000);   
  await RetireGreyhound.EnterDisposalAsOther.sendKeys('Testing other details') 
  await browser.driver.sleep(1000);   
  await RetireGreyhound.ReasonOfEuthanasia.click() 
  await browser.driver.sleep(1000);   
  await RetireGreyhound.SelectReasonOfEuthanasiaInjury.click()  
}
await browser.driver.sleep(1000);
browser.wait(EC.elementToBeClickable(RetireGreyhound.RetiredDate), 2000).then(function () { })
await RetireGreyhound.RetiredDate.click()
await RetireGreyhound.SelectRetiredDate.click()
}
else if(status=='Exported'){
  webUtils.clickOn(RetireGreyhound.RetirementStatusDropdown)
  await browser.driver.sleep(1000);
  webUtils.clickOn(RetireGreyhound.SelectExported)  
  await browser.driver.sleep(1000);
  RetireGreyhound.PassportNo.sendKeys('ABCD1234X'),
  RetireGreyhound.DestinationCountry.sendKeys('Testing'),
  await browser.driver.sleep(1000);
  await browser.executeScript('window.scrollTo(0, 5000);')
  RetireGreyhound.Agree.click()
  await browser.driver.sleep(1000);
browser.wait(EC.elementToBeClickable(RetireGreyhound.RetiredDate), 2000).then(function () { })
await RetireGreyhound.RetiredDate.click()
await RetireGreyhound.SelectRetiredDate.click()
}
else if(status=='Other'){
  webUtils.clickOn(RetireGreyhound.RetirementStatusDropdown)
  await browser.driver.sleep(1000);
  webUtils.clickOn(RetireGreyhound.SelectOther)  
RetireGreyhound.EnterOtherOtherDetails.sendKeys('Testing othe details')
await browser.driver.sleep(1000);
browser.wait(EC.elementToBeClickable(RetireGreyhound.RetiredDate), 2000).then(function () { })
await RetireGreyhound.RetiredDate.click()
await RetireGreyhound.SelectRetiredDate.click()
}
await browser.driver.sleep(1000);
if(action=='submit'){
       //Racing.Submit.click().then(function () { })
   //Racing.Yes.click().then(function () { })
   }
   else if(action=='cancel'){
    Racing.Cancel.click().then(function () { })
   }   
})

When('user enters the {string} -> {string} and selects dog activity as {string}', async (dogAction, activity, location) => {
  if(dogAction== "Dog details"){
    browser.wait(EC.elementToBeClickable(DogLocation.DogName), 2000).then(function () { })
  DogLocation.DogName.sendKeys('FABRIOLA CITRUS')
  browser.wait(EC.elementToBeClickable(DogLocation.EarBrand), 2000).then(function () { })
  DogLocation.EarBrand.sendKeys('VHNWC')
  browser.wait(EC.elementToBeClickable(DogLocation.MicrochipNo), 2000).then(function () { })
  DogLocation.MicrochipNo.sendKeys('7382')
  w.clickOn(Racing.Validate)
 // else if(action == 'cancel')
 // w.clickOn(Racing.Cancel)
}
  w.clickOn(DogLocation.DogActivity)
  await browser.executeScript('window.scrollTo(187, 900);')
  await browser.driver.sleep(1000);
  if(activity == 'Breeding')
  w.clickOn(DogLocation.SelectActivityAsBreeding)
  else if(activity == 'Educating') 
  w.clickOn(DogLocation.SelectActivityAsEducating)
  else if(activity == 'Rearing')
  w.clickOn(DogLocation.SelectActivityAsRearing)
  else if(activity == 'Spelling')
  w.clickOn(DogLocation.SelectActivityAsSpelling)
  else if(activity == 'Training') 
  w.clickOn(DogLocation.SelectActivityAsTraining)
  else if(activity == 'Whelping') 
  w.clickOn(DogLocation.SelectActivityAsWhelping)
  await browser.driver.sleep(1000);
  w.clickOn(DogLocation.DogLocation)
  if(location == 'Same Location')
  w.clickOn(DogLocation.SelectDogLocation)
  else   if(location == 'Interstate Location'){
    await browser.driver.sleep(1000);
  w.clickOn(DogLocation.InterstateLocation)
  DogLocation.EnterName.sendKeys('Testing123')
  DogLocation.EnterStreet.sendKeys('15, Test')
  DogLocation.EnterSuburb.sendKeys('TestSubrb')
  DogLocation.EnterPostcode.sendKeys('3214')
  await browser.executeScript('window.scrollTo(0, 5000);')
  w.clickOn(DogLocation.SelectStateDropDown)
  w.clickOn(DogLocation.EnterState)
  await browser.driver.sleep(1000);
  DogLocation.EnterPhone.sendKeys('1236547891')
  }
  await browser.driver.sleep(5000);
})


When('user selects the dog and clicks agree to remove dog from kennel', async () => {
  browser.wait(EC.elementToBeClickable(Home.SkipOverlay), 10000).then(function () { })
   await Home.SkipOverlay.click()
 // await w.clickOn(DogLocation.SelectDog)
 await browser.driver.sleep(1000);
DogLocation.Search.sendKeys("FABRIOLA CITRUS")
await DogLocation.FindDogFabriolaCitrus.click()
await w.clickOn(Racing.IAgree)
})
  
When('user views the {string} details', async (page) => {
  await browser.driver.sleep(1000);
  if (page == 'Registration History'){
    browser.takeScreenshot().then(function (png) {
      writeScreenShot(png, 'MemHistoryRegistration.png');
    });
}
else if (page == 'Competencies held'){
  browser.takeScreenshot().then(function (png) {
    writeScreenShot(png, 'MemHisgtoryCompetencies.png');
  });
}
else if (page == 'Request New Card'){
  browser.takeScreenshot().then(function (png) {
    writeScreenShot(png, 'RequestNewCard.png');
  });
  var path = require('path');
  var fileToUpload = "C://Users//psingh//Desktop//Priti//Automation1.9//TestAutomationFramework-FT1.9//images.jpg";
  var absolutePath = path.resolve(__dirname, fileToUpload);
    await Account.UploadNewPhoto.click();
  //  element(by.css('input[type="file"]')).sendKeys(absolutePath);  --click->upload->select image->open- check the console and goto Event->Target->File
}
else if (page == 'Registration status'){
  browser.takeScreenshot().then(function (png) {
    writeScreenShot(png, 'RegistrationStatus.png');
  });
}
  else if (page == 'Activities'){
    browser.takeScreenshot().then(function (png) {
      writeScreenShot(png, 'Activities.png');
    });
  }
    else if (page == 'Calender & Meeting'){
      await browser.executeScript('window.scrollTo(187, 900);')
      browser.takeScreenshot().then(function (png) {
        writeScreenShot(png, 'CalenderMeeting.png');
      });
    }
      else if (page == 'Important Announcements'){
        await browser.executeScript('window.scrollTo(0, 5000);')
        browser.takeScreenshot().then(function (png) {
          writeScreenShot(png, 'ImportantAnnouncements.png');
        });
      }
      else
      {
           console.log(" no selection")
           DogLocation.Search.sendKeys("FABRIOLA CITRUS")
      }
})
