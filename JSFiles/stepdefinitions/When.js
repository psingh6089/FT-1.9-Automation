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
const Non_Racing_1 = require("../Specs/ui/Non-Racing");
const IWantTo_1 = require("../Specs/ui/IWantTo");
const ptor_1 = require("protractor/built/ptor");
const FT1_1 = require("../Specs/FT1");
const COP_1 = require("../Specs/ui/COP");
const BreedingAndLitters_1 = require("../Specs/ui/BreedingAndLitters");
const DogDetails_1 = require("../Specs/ui/DogDetails");
const RetireGreyhound_1 = require("../Specs/ui/RetireGreyhound");
const DogLocation_1 = require("../Specs/ui/DogLocation");
let EC = ptor_1.protractor.ExpectedConditions;
var expect = require('chai').expect;
var fs = require('fs');
function writeScreenShot(png, filename) {
    var stream = fs.createWriteStream(filename);
    stream.write(new Buffer(png, 'base64'));
    stream.end();
}
cucumber_1.When('User logs in as User', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.driver.sleep(1000);
}));
cucumber_1.When('User clicks on {string} button', function (button) {
    // w.confirmButton(button);
    if (button == 'cancel') {
        protractor_1.browser.driver.sleep(2000).then(function () { });
        Racing_1.Racing.Cancel.isPresent().then(function (boolean) {
            if (boolean) {
                Racing_1.Racing.Cancel.click().then(function () { });
            }
            else {
                protractor_1.browser.executeScript('window.scrollTo(0,5000)').then(() => __awaiter(this, void 0, void 0, function* () { }));
                Racing_1.Racing.Cancel.click().then(function () { });
            }
        });
    }
    else if (button == "submit") {
        protractor_1.browser.driver.sleep(2000).then(function () { });
        Racing_1.Racing.Submit.isPresent().then(function (boolean) {
            if (boolean) {
                Racing_1.Racing.Submit.click().then(function () { });
            }
            else {
                protractor_1.browser.executeScript('window.scrollTo(0,5000)').then(() => __awaiter(this, void 0, void 0, function* () { }));
                Racing_1.Racing.Submit.click().then(function () { });
            }
        });
    }
    else if (button == "continue") {
        protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.Continue), 5000).then(function () { });
        Racing_1.Racing.Continue.click().then(function () { });
    }
    else if (button == "confirm") {
        protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.Confirmation), 5000).then(function () { });
        Racing_1.Racing.Confirmation.click().then(function () { });
    }
    else if (button == "back") {
        protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.Back), 5000).then(function () { });
        Racing_1.Racing.Back.click().then(function () { });
    }
    else if (button == "save") {
        protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.Back), 5000).then(function () { });
        Racing_1.Racing.SaveChanges.click().then(function () { });
    }
    else if (button == "yes") {
        protractor_1.browser.driver.sleep(2000).then(function () { });
        Racing_1.Racing.Yes.click().then(function () { });
    }
});
cucumber_1.When('Bitch details are entered and validated', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.Earbrand), 5000).then(function () { });
    Racing_1.Racing.Earbrand.sendKeys(DataInput_json_1.default.data.Earbrand);
    protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.DamName), 5000).then(function () { });
    Racing_1.Racing.DamName.sendKeys(DataInput_json_1.default.data.Bitch);
    protractor_1.browser.driver.sleep(1000);
    protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.Search), 5000).then(function () { });
    yield Racing_1.Racing.Search.click();
    // browser.driver.sleep(2000);
}));
cucumber_1.When('Service details are entered and added', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.Artificial), 5000).then(function () { });
    yield Racing_1.Racing.Artificial.click();
    protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.ThirdPartyWitness), 5000).then(function () { });
    Racing_1.Racing.ThirdPartyWitness.sendKeys(DataInput_json_1.default.data.Witness);
    protractor_1.browser.executeScript('window.scrollTo(0,5000)');
    yield Racing_1.Racing.DateArrivedCalender.click();
    protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.PreviousMonth), 5000).then(function () { });
    yield Racing_1.Racing.PreviousMonth.click();
    yield Racing_1.Racing.DateArrivedSelection.click();
    yield Racing_1.Racing.ServiceDateCalender.click();
    protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.PreviousMonth), 5000).then(function () { });
    yield Racing_1.Racing.PreviousMonth.click();
    yield Racing_1.Racing.ServiceDateSelection.click();
    yield Racing_1.Racing.DepartedDateCalender.click();
    protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.PreviousMonth), 5000).then(function () { });
    yield Racing_1.Racing.PreviousMonth.click();
    yield Racing_1.Racing.DepartedDateSelection.click();
    yield Racing_1.Racing.Search.click();
    protractor_1.browser.driver.sleep(5000);
}));
cucumber_1.When('Studmaster clicks X button to cancel the register service', () => __awaiter(void 0, void 0, void 0, function* () {
    yield Racing_1.Racing.CancelDam.click();
    yield Racing_1.Racing.Cancel.click();
}));
cucumber_1.When('user enters the Name details of the new person to be transferred', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(2000);
    protractor_1.browser.executeScript('window.scrollTo(0,5000);');
    yield Racing_1.Racing.TransferIAgree.click();
    Racing_1.Racing.FirstName.sendKeys(DataInput_json_1.default.data.TransferServiceToFirstName);
    Racing_1.Racing.LastName.sendKeys(DataInput_json_1.default.data.TransferServiceToLastName);
    Racing_1.Racing.PhoneNo.sendKeys(DataInput_json_1.default.data.PhoneNo);
}));
cucumber_1.When('user navigates view details link of a syndicate', () => __awaiter(void 0, void 0, void 0, function* () {
    WebUtils_1.webUtils.viewDetails();
}));
cucumber_1.When('user is able to add or update the address details', () => __awaiter(void 0, void 0, void 0, function* () {
    // w.updateAddressDetails();
    protractor_1.browser.executeScript('window.scrollTo(0,200);');
    protractor_1.browser.wait(EC.elementToBeClickable(Account_1.Account.ResAddressEdit), 5000).then(function () { });
    Account_1.Account.ResAddressEdit.clear().then(function () {
        Account_1.Account.ResAddressEdit.sendKeys(DataInput_json_1.default.data.ResAddress);
    });
    Account_1.Account.ResTownEdit.clear().then(function () {
        Account_1.Account.ResTownEdit.sendKeys(DataInput_json_1.default.data.ResTown);
    });
    Account_1.Account.ResPostCodeEdit.clear().then(function () {
        Account_1.Account.ResPostCodeEdit.sendKeys(DataInput_json_1.default.data.ResPostCode);
    });
    Account_1.Account.PostalAddressEdit.clear().then(function () {
        Account_1.Account.PostalAddressEdit.sendKeys(DataInput_json_1.default.data.PostalAddress);
    });
    Account_1.Account.PostalTownEdit.clear().then(function () {
        Account_1.Account.PostalTownEdit.sendKeys(DataInput_json_1.default.data.PostalTown);
    });
    Account_1.Account.PostalPostCodeEdit.clear().then(function () {
        Account_1.Account.PostalPostCodeEdit.sendKeys(DataInput_json_1.default.data.PostalPostCode);
    });
    protractor_1.browser.executeScript('window.scrollTo(0,5000);');
    // await Account.Save.click(); 
    // await browser.driver.sleep(10000);
}));
cucumber_1.When('user clicks Apply for a Dog name page with valid name', () => __awaiter(void 0, void 0, void 0, function* () {
    //  w.applyDogName();
    protractor_1.browser.wait(EC.elementToBeClickable(Non_Racing_1.NonRacing.EnterName1), 5000).then(function () { });
    Non_Racing_1.NonRacing.EnterName1.sendKeys(DataInput_json_1.default.data.Dog1);
    Non_Racing_1.NonRacing.AddDog.click();
    Non_Racing_1.NonRacing.EnterName2.sendKeys(DataInput_json_1.default.data.Dog2);
    Non_Racing_1.NonRacing.AddDog.click();
    Non_Racing_1.NonRacing.EnterName3.sendKeys(DataInput_json_1.default.data.Dog3);
    Non_Racing_1.NonRacing.AddDog.click();
    Non_Racing_1.NonRacing.EnterName4.sendKeys(DataInput_json_1.default.data.Dog4);
    protractor_1.browser.executeScript('window.scrollTo(0,5000);');
    Non_Racing_1.NonRacing.AddDog.click();
    Non_Racing_1.NonRacing.EnterName5.sendKeys(DataInput_json_1.default.data.Dog5);
    Non_Racing_1.NonRacing.AddDog.click();
    Non_Racing_1.NonRacing.EnterName6.sendKeys(DataInput_json_1.default.data.Dog6);
    Non_Racing_1.NonRacing.AddDog.click();
    protractor_1.browser.executeScript('window.scrollTo(0,5000);');
    Non_Racing_1.NonRacing.EnterName7.sendKeys(DataInput_json_1.default.data.Dog7);
    Non_Racing_1.NonRacing.AddDog.click();
    Non_Racing_1.NonRacing.EnterName8.sendKeys(DataInput_json_1.default.data.Dog8);
    Non_Racing_1.NonRacing.AddDog.click();
    Non_Racing_1.NonRacing.EnterName9.sendKeys(DataInput_json_1.default.data.Dog9);
    Non_Racing_1.NonRacing.AddDog.click();
    yield protractor_1.browser.executeScript('window.scrollTo(0,5000);');
    Non_Racing_1.NonRacing.EnterName10.sendKeys(DataInput_json_1.default.data.Dog10);
    yield protractor_1.browser.driver.sleep(5000);
}));
cucumber_1.When('user completes payment option', () => __awaiter(void 0, void 0, void 0, function* () {
    yield Non_Racing_1.NonRacing.Save.click();
    yield protractor_1.browser.driver.sleep(5000);
}));
cucumber_1.When('user clicks on Victoria Transfer tab and enter the Name details of the new person to be authorised', () => __awaiter(void 0, void 0, void 0, function* () {
    //  expect(Racing.SelectVictoria).to.be.true;
    yield protractor_1.browser.executeScript('window.scrollTo(0,5000);');
    yield Racing_1.Racing.IAgree.click();
    Racing_1.Racing.InputFirstName1.sendKeys('Paul');
    Racing_1.Racing.InputLastName1.sendKeys('Westerveld');
}));
cucumber_1.When('user fills and submits the Interstate Authority to Breed form', () => __awaiter(void 0, void 0, void 0, function* () {
    //  w.fillInterstateAuthority();
    protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.Dog1), 8000).then(function () { });
    yield Racing_1.Racing.Dog1.click();
    protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.Interstate), 2000).then(function () { });
    WebUtils_1.webUtils.SkipOverlay();
    protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.Interstate), 2000).then(function () { });
    yield Racing_1.Racing.Interstate.click();
    yield Racing_1.Racing.IAgree.click();
    Racing_1.Racing.InputFirstName.sendKeys('Paul');
    Racing_1.Racing.InputLastName.sendKeys('Westerveld');
    yield protractor_1.browser.executeScript('window.scrollTo(0,5000);');
    yield protractor_1.browser.driver.sleep(2000);
    Racing_1.Racing.Inputstreet.sendKeys('Testing123');
    Racing_1.Racing.InputSuburb.sendKeys('Southbank');
    yield Racing_1.Racing.InputState.click().then(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.executeScript('window.scrollTo(0,5000);');
        Racing_1.Racing.SelectVic.click().then(function () {
        });
    }));
    Racing_1.Racing.InputPostCode.sendKeys('3006');
}));
cucumber_1.When('User is redirected to Breeding Authority Confirmation page with Send via Email or Continue buttons', () => __awaiter(void 0, void 0, void 0, function* () {
    //  await Racing.Submit.click();
    yield protractor_1.browser.driver.sleep(2000);
}));
cucumber_1.When('user enters the Authority Key and Ear brand details of dog for {string}', (option) => __awaiter(void 0, void 0, void 0, function* () {
    Racing_1.Racing.AddAuthorityKey.sendKeys('5501751542');
    Racing_1.Racing.AddEarBrand.sendKeys('VHTLJ');
    protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.Validate), 5000).then(function () { });
    yield Racing_1.Racing.Validate.click();
    protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.Continue), 5000).then(function () { });
    yield protractor_1.browser.executeScript('window.scrollTo(0,5000);');
    // await Racing.Continue.click();
}));
cucumber_1.When('user proceeds with the payment option', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(1000);
    yield protractor_1.browser.switchTo().frame(Racing_1.Racing.switchframe.getWebElement());
    Racing_1.Racing.NameOnCard.sendKeys(DataInput_json_1.default.data.NameOnCard);
    Racing_1.Racing.CardNo.sendKeys(DataInput_json_1.default.data.CardNo);
    var elm = Racing_1.Racing.ExpMonth;
    protractor_1.browser.executeScript("arguments[0].scrollIntoView();", elm.getWebElement());
    elm.sendKeys(DataInput_json_1.default.data.ExpMonth);
    yield protractor_1.browser.executeScript('window.scrollTo(0,5000);');
    protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.ExpYr), 1000).then(function () { });
    Racing_1.Racing.ExpYr.sendKeys(DataInput_json_1.default.data.ExpYear);
    protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.SecCode), 1000).then(function () { });
    Racing_1.Racing.SecCode.sendKeys(DataInput_json_1.default.data.SecCode);
    // browser.wait(EC.elementToBeClickable(Racing.PayNow), 5000).then(function () { });
    //await Racing.PayNow.click();  
    //  browser.wait(EC.elementToBeClickable(Racing.Continue), 5000).then(function () { }); 
    yield Racing_1.Racing.Back.click();
}));
cucumber_1.When('Click on the track to select the track', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.wait(EC.elementToBeClickable(IWantTo_1.IWantTo.SelectTrack), 5000).then(function () { });
    yield IWantTo_1.IWantTo.SelectTrack.click();
    yield protractor_1.browser.driver.sleep(5000);
}));
cucumber_1.When('clicks on the trials', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.wait(EC.elementToBeClickable(IWantTo_1.IWantTo.TrialLeft), 5000).then(function () { });
    expect(IWantTo_1.IWantTo.TrialLeft.getText().then(() => __awaiter(void 0, void 0, void 0, function* () { }))).to.not.be.null;
    yield IWantTo_1.IWantTo.SelectTrack.click();
    yield protractor_1.browser.driver.sleep(2000);
}));
cucumber_1.When('user clicks on BOOK TIME SLOT(S) FOR', () => __awaiter(void 0, void 0, void 0, function* () {
    return 'pending';
}));
cucumber_1.When('Click on the My booking tab', () => __awaiter(void 0, void 0, void 0, function* () {
    return 'pending';
}));
cucumber_1.When('clicks on the trials for which payment has to be selected and click checkbox', () => __awaiter(void 0, void 0, void 0, function* () {
    return 'pending';
}));
cucumber_1.When('user is able to view,add,update the bank details', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.IAgreeStatement), 5000).then(function () { });
    //await Racing.VerifyGST.click();
    //console.log(Racing.VerifyGST);
    //expect(Racing.VerifyGST.is.selected()).to.be.true();
    yield Racing_1.Racing.IAgreeStatement.click();
    yield protractor_1.browser.executeScript('window.scrollTo(0,5000);');
    yield protractor_1.browser.driver.sleep(1000);
    var isClickable = ptor_1.protractor.ExpectedConditions.elementToBeClickable(Account_1.Account.EnterBSB);
    yield protractor_1.browser.wait(isClickable, 43);
    Account_1.Account.EnterBSB.clear().then(function () {
        Account_1.Account.EnterBSB.sendKeys(DataInput_json_1.default.data.BSB);
    });
    Account_1.Account.EnterAccountNo.clear().then(function () {
        Account_1.Account.EnterAccountNo.sendKeys(DataInput_json_1.default.data.Account);
    });
    Account_1.Account.EnterAccountName.clear().then(function () {
        Account_1.Account.EnterAccountName.sendKeys(DataInput_json_1.default.data["Account Name"]);
    });
    // await Racing.SaveChanges.click();
}));
cucumber_1.When('user selects the fine to pay', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.wait(EC.elementToBeClickable(Account_1.Account.FineDueDate), 5000).then(function () { });
    Account_1.Account.FineDueDate.getText().then((text) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(text);
    }));
    Account_1.Account.FineNo.getText().then((text) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(text);
    }));
    yield Account_1.Account.PayFine.click();
    yield protractor_1.browser.driver.sleep(3000);
}));
cucumber_1.When('user selects filter for the transaction history', () => __awaiter(void 0, void 0, void 0, function* () {
    Account_1.Account.TransactionDownArrow.getSize().then(function (text) {
        console.log(text);
    });
    yield Account_1.Account.TransactionDownArrow.click();
}));
cucumber_1.When('user clicks {string} button to login', (action) => __awaiter(void 0, void 0, void 0, function* () {
    if (action == "continue")
        yield Home_1.Home.LoginContinue.click();
    if (action == "forgot password")
        yield Home_1.Home.ForgotPassword.click();
    if (action == "Back to Fast Track")
        yield Home_1.Home.BackToFT.click();
}));
cucumber_1.When('user selects {string} and {string} for the statement', function (string, string2) {
});
cucumber_1.When('user selects the dog and selects all the checkboxes with option {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.Dog1), 5000).then(function () { });
    yield Racing_1.Racing.Dog1.click();
}));
cucumber_1.When('user clicks {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(8000);
    if (string == 'Manage Syndicate') {
        yield protractor_1.browser.executeScript('window.scrollTo(0,1000);');
        //  await browser.driver.sleep(2000);
        yield Account_1.Account.ManageSyndicate.click();
    }
    else if (string == 'Modify Finance Details') {
        yield Account_1.Account.ModifyFinancialDetails.click();
    }
    yield protractor_1.browser.driver.sleep(5000);
}));
cucumber_1.When('user adds a new member using FT member no. and clicks Add member button', function () {
    Account_1.Account.EnterNewMember.sendKeys(DataInput_json_1.default.data.Glenn_user);
    Account_1.Account.AddNewMember.click().then(() => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.driver.sleep(5000);
    }));
});
cucumber_1.When('user click on the {string} corresponding to the member', (remove) => __awaiter(void 0, void 0, void 0, function* () {
    yield Account_1.Account.RemoveMember.click();
    yield protractor_1.browser.driver.sleep(5000);
}));
cucumber_1.When('user clicks on the {string} and changes the action to {string} corresponding to the member', (status, manager) => __awaiter(void 0, void 0, void 0, function* () {
    yield Account_1.Account.ChangeStatus.click();
    yield Account_1.Account.ChangeStatusToAltManager.click();
    yield protractor_1.browser.driver.sleep(5000);
}));
cucumber_1.When('enter the syndicate name', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(1000);
    Account_1.Account.EnterSyndicateName.sendKeys('TestSyndicate');
}));
cucumber_1.When('user selects the role as {string}', (role) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(2000);
    protractor_1.browser.wait(EC.elementToBeClickable(Account_1.Account.RoleList), 5000).then(function () { });
    Account_1.Account.RoleList.getText().then(function (text) {
        console.log(text);
    });
    if (role == 'owner') { }
    else if (role == 'Attendant') {
        Account_1.Account.SelectAttendant.click();
        // await browser.driver.sleep(10000);
    }
    else if (role == 'Catcher') {
        Account_1.Account.SelectCatcher.click();
        yield protractor_1.browser.driver.sleep(1000);
    }
    else if (role == 'Owner Trainer') {
        Account_1.Account.SelectOwnerTrainer.click();
    }
    else if (role == 'Public Trainer') {
        Account_1.Account.SelectPublicTrainer.click();
    }
    else {
        console.error;
    }
    yield protractor_1.browser.executeScript('window.scrollTo(0,5000);');
    yield Racing_1.Racing.Begin.click();
    /* browser.wait(EC.elementToBeClickable(Menu.ProgressStatus), 4000).then(function () { });
     Menu.ProgressStatus.getAttribute('div').then(function (text) {
       console.log('progress of the status:-   ' + text)
     })
     Menu.CurrentStatus.getAttribute('div').then(function (text) {
       console.log('Current status is at step:-   ' + text)
       expect(text).to.equal('Terms')
     })*/
}));
cucumber_1.When('work bench user confirms the request in FT 1.0', () => __awaiter(void 0, void 0, void 0, function* () {
    let url = 'https://fasttracktestd.cloudapp.net/';
    // browser.executeScript("return window.open(arguments[0], '_blank')", url);
    yield protractor_1.browser.get(url);
    var Key = ptor_1.protractor.Key;
    yield protractor_1.browser.actions().sendKeys(Key.chord(Key.F12)).perform();
    yield FT1_1.FT1.Advanced.click();
    yield FT1_1.FT1.ProceedToFastTrack.click();
    FT1_1.FT1.EnterUser.sendKeys('302737');
    FT1_1.FT1.EnterPassword.sendKeys('capeCaution');
    yield protractor_1.browser.driver.sleep(1000);
    yield FT1_1.FT1.Login.click();
    yield protractor_1.browser.driver.sleep(1000);
}));
cucumber_1.When('user is able to add Injury Event', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.wait(EC.elementToBeClickable(COP_1.COP.TrackOrNonTrack), 5000).then(function () { });
    //await browser.driver.sleep(5000);
    yield COP_1.COP.TrackOrNonTrack.click();
    yield COP_1.COP.SelectTrack.click();
    yield COP_1.COP.TrackName.click();
    yield protractor_1.browser.driver.sleep(1000);
    COP_1.COP.GetAllTrackNames.getText().then(function (size) {
        console.log("List of Track Names: " + size);
    });
    yield COP_1.COP.SelectTRackNameAsBendigo.click();
    yield COP_1.COP.InjuryType.click();
    yield protractor_1.browser.driver.sleep(1000);
    COP_1.COP.GetAllInjuryTypes.getText().then(function (size) {
        console.log("List of Injury Types: " + size);
    });
    yield COP_1.COP.SelectInjuryTypeAsBone.click();
    yield COP_1.COP.InjuryLocation.click();
    yield protractor_1.browser.driver.sleep(1000);
    COP_1.COP.GetAllInjuryLocations.getText().then(function (size) {
        console.log("List of Injury Location: " + size);
    });
    yield protractor_1.browser.executeScript('window.scrollTo(500,500);');
    yield COP_1.COP.SelectInjuryLocationAsChest.click();
    yield COP_1.COP.InjuryDetail.click();
    yield protractor_1.browser.driver.sleep(1000);
    COP_1.COP.GetAllInjuryDetails.getText().then(function (size) {
        console.log("List of All Injury Details: " + size);
    });
    yield protractor_1.browser.executeScript('window.scrollTo(500,500);');
    yield COP_1.COP.SelectInjuryDetailAsOther.click();
    yield protractor_1.browser.driver.sleep(1000);
    COP_1.COP.EnterOtherInjuryDetails.sendKeys("TestAutomation1");
    yield COP_1.COP.InjuryDate.click();
    yield COP_1.COP.SelectInjuryDate.click();
    yield protractor_1.browser.executeScript('window.scrollTo(0,1000);');
    yield COP_1.COP.Treatment.click();
    yield protractor_1.browser.driver.sleep(1000);
    COP_1.COP.GetAllTreatmentList.getText().then(function (size) {
        console.log("List of all treatments: " + size);
    });
    yield COP_1.COP.SelectTreatmentAsUltraSound.click();
    yield COP_1.COP.Frequency.click();
    yield protractor_1.browser.driver.sleep(1000);
    COP_1.COP.GetAllFrequencyList.getText().then(function (size) {
        console.log("List of Frequency: " + size);
    });
    yield COP_1.COP.SelectFrequencyAs1X.click();
    yield COP_1.COP.TreatmentDate.click();
    yield COP_1.COP.SelectTreatmentDate.click();
    yield protractor_1.browser.driver.sleep(1000);
    COP_1.COP.AdministeredBy.sendKeys("tesr");
    yield protractor_1.browser.driver.sleep(1000);
    COP_1.COP.AuthorisedBy.sendKeys("test");
    yield protractor_1.browser.driver.sleep(1000);
    COP_1.COP.Comment.sendKeys("test");
    yield protractor_1.browser.driver.sleep(1000);
    protractor_1.browser.executeScript('window.scrollTo(0,5000)').then(() => __awaiter(void 0, void 0, void 0, function* () { }));
    Racing_1.Racing.Cancel.click().then(function () { });
    yield protractor_1.browser.driver.sleep(2000);
}));
cucumber_1.When('user is able to add Illness details', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.wait(EC.elementToBeClickable(COP_1.COP.IllnessType), 5000).then(function () { });
    //await browser.driver.sleep(5000);
    yield COP_1.COP.IllnessType.click();
    COP_1.COP.GetAllIllnessType.getText().then(function (text) {
        console.log("List of Illness Types: " + text);
    });
    yield COP_1.COP.SelectIllnessType.click();
    yield COP_1.COP.IllnessTreatment.click();
    yield protractor_1.browser.driver.sleep(1000);
    COP_1.COP.GetAllIllnessTreatmentList.getText().then(function (size) {
        console.log("List of Treatment : " + size);
    });
    yield COP_1.COP.SelectTreatmentAsUltraSound.click();
    yield COP_1.COP.IllnessFrequency.click();
    yield protractor_1.browser.driver.sleep(1000);
    yield COP_1.COP.SelectFrequencyAs1X.click();
    yield COP_1.COP.IllnessTreatmentDate.click();
    yield COP_1.COP.SelectTreatmentDate.click();
    yield protractor_1.browser.driver.sleep(1000);
    COP_1.COP.IllnessAdminiteredBy.sendKeys("tesr");
    yield protractor_1.browser.driver.sleep(1000);
    COP_1.COP.IllnessAuthorisedBy.sendKeys("test");
    yield protractor_1.browser.driver.sleep(1000);
    COP_1.COP.IllnessComment.sendKeys("test");
    yield protractor_1.browser.driver.sleep(1000);
}));
cucumber_1.When('user is able to add Health Management details', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.wait(EC.elementToBeClickable(COP_1.COP.HealthType), 5000).then(function () { });
    //await browser.driver.sleep(5000);
    yield COP_1.COP.HealthType.click();
    COP_1.COP.GetAllHealthTypeList.getText().then(function (text) {
        console.log("List of Health Types: " + text);
    });
    yield COP_1.COP.SelectHealthTypeAsSupplement.click();
    yield COP_1.COP.SupplementName.sendKeys('Testing');
    yield COP_1.COP.RouteOfAdmin.click();
    COP_1.COP.GetAllRouteOfAdmin.getText().then(function (text) {
        console.log("List of Route of Admin Types: " + text);
    });
    yield COP_1.COP.SelectRouteOfAdmin.click();
    yield protractor_1.browser.driver.sleep(1000);
    yield COP_1.COP.HealthTreatmentDate.click();
    yield COP_1.COP.SelectTreatmentDate.click();
    yield protractor_1.browser.driver.sleep(1000);
    COP_1.COP.HealthAdminsteredBy.sendKeys("tesT123");
    yield protractor_1.browser.driver.sleep(1000);
    COP_1.COP.HealthAuthorisedBy.sendKeys("test123");
    yield protractor_1.browser.driver.sleep(1000);
    COP_1.COP.HealthComment.sendKeys("test123");
}));
cucumber_1.When('User selects the parent Dog and enters the details for {string}', (result) => __awaiter(void 0, void 0, void 0, function* () {
    // w.ResultOfBreeding(result);
    protractor_1.browser.wait(EC.elementToBeClickable(BreedingAndLitters_1.BreedingAndLitters.SelectParentDog), 1000).then(function () { });
    //  await browser.driver.sleep(5000); 
    yield BreedingAndLitters_1.BreedingAndLitters.SelectParentDog.click();
    protractor_1.browser.wait(EC.elementToBeClickable(BreedingAndLitters_1.BreedingAndLitters.ResultOfMating), 1000).then(function () { });
    yield BreedingAndLitters_1.BreedingAndLitters.ResultOfMating.click();
    yield protractor_1.browser.driver.sleep(1000);
    if (result == 'Whelped') {
        yield protractor_1.browser.executeScript('window.scrollTo(0,5000);');
        protractor_1.browser.wait(EC.elementToBeClickable(BreedingAndLitters_1.BreedingAndLitters.SelectResultAsWhelped), 1000).then(function () { });
        yield BreedingAndLitters_1.BreedingAndLitters.SelectResultAsWhelped.click();
        protractor_1.browser.wait(EC.elementToBeClickable(BreedingAndLitters_1.BreedingAndLitters.SelectNoOfFemalePups), 1000).then(function () { });
        yield protractor_1.browser.executeScript('window.scrollTo(0,5000);');
        yield BreedingAndLitters_1.BreedingAndLitters.SelectNoOfFemalePups.click();
        protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.Next), 1000).then(function () { });
        yield Racing_1.Racing.Next.click();
        yield BreedingAndLitters_1.BreedingAndLitters.WhelpedDate.click();
        yield BreedingAndLitters_1.BreedingAndLitters.ChooseWhelpedDate.click();
        yield protractor_1.browser.executeScript('window.scrollTo(0,5000);');
        BreedingAndLitters_1.BreedingAndLitters.EnterDog1Kennel.sendKeys("TestAutomation");
        yield BreedingAndLitters_1.BreedingAndLitters.Dog1Color.click();
        BreedingAndLitters_1.BreedingAndLitters.GetAllDogColors.getText().then(function (colour) {
            console.log("colors of the dogs are:" + colour);
        });
        yield BreedingAndLitters_1.BreedingAndLitters.SelectDog1Color.click();
        yield protractor_1.browser.driver.sleep(1000);
        yield protractor_1.browser.executeScript('window.scrollTo(0,5000);');
        protractor_1.browser.wait(EC.elementToBeClickable(BreedingAndLitters_1.BreedingAndLitters.VetClinic), 1000).then(function () { });
        yield BreedingAndLitters_1.BreedingAndLitters.VetClinic.click();
        protractor_1.browser.wait(EC.elementToBeClickable(BreedingAndLitters_1.BreedingAndLitters.SelectVetClinic), 1000).then(function () { });
        yield BreedingAndLitters_1.BreedingAndLitters.SelectVetClinic.click();
        yield protractor_1.browser.driver.sleep(1000);
        yield protractor_1.browser.executeScript('window.scrollTo(0,5000);');
    }
    else if (result == 'Missed') {
        yield protractor_1.browser.executeScript('window.scrollTo(0,5000);');
        protractor_1.browser.wait(EC.elementToBeClickable(BreedingAndLitters_1.BreedingAndLitters.SelectResultAsMissed), 1000).then(function () { });
        yield BreedingAndLitters_1.BreedingAndLitters.SelectResultAsMissed.click();
    }
    else if (result == 'No Live Pups') {
        yield protractor_1.browser.executeScript('window.scrollTo(0,5000);');
        protractor_1.browser.wait(EC.elementToBeClickable(BreedingAndLitters_1.BreedingAndLitters.SelectResultAsNoLivePUps), 1000).then(function () { });
        yield BreedingAndLitters_1.BreedingAndLitters.SelectResultAsNoLivePUps.click();
        yield protractor_1.browser.driver.sleep(1000);
    }
}));
cucumber_1.When('user navigates the Dog Content details', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.wait(EC.elementToBeClickable(DogDetails_1.DogDetails.DogName), 2000).then(function () { });
    yield protractor_1.browser.driver.sleep(5000);
    DogDetails_1.DogDetails.DogName.getText().then(function (abc) {
        console.log("Dog Details  " + abc);
        protractor_1.browser.takeScreenshot().then(function (png) {
            writeScreenShot(png, 'DogDetailsContent.png');
        });
    });
    yield DogDetails_1.DogDetails.DogContentLitter.click();
    DogDetails_1.DogDetails.DogName.getText().then(function (text) {
        console.log("2nd page -> Litter  " + text);
        protractor_1.browser.takeScreenshot().then(function (png) {
            writeScreenShot(png, 'DogDetailsLitter.png');
        });
    });
    yield DogDetails_1.DogDetails.DogContentRaces.click();
    protractor_1.browser.takeScreenshot().then(function (png) {
        writeScreenShot(png, 'DogDetailsRaces.png');
        DogDetails_1.DogDetails.DogName.getText().then(function (text) {
            console.log("3rd page -> Races  " + text);
        });
    });
}));
cucumber_1.When('user navigates to the {string} Page of Dog Details', (tab) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(2000);
    //w.DogDetails(tab);
    //browser.executeScript('window.scrollTo(0,800);').then(function (){});
    protractor_1.browser.driver.sleep(1000).then(function () { });
    DogDetails_1.DogDetails.FormPage.getText().then(function (text) {
        console.log("Form Page  " + text);
    });
}));
cucumber_1.When('user see the details of a dog with toggle to table view', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(1000);
    yield protractor_1.browser.executeScript('window.scrollTo(0, 600);');
    yield protractor_1.browser.driver.sleep(1000);
    yield DogDetails_1.DogDetails.Toggle.click();
    yield protractor_1.browser.driver.sleep(1000);
    protractor_1.browser.takeScreenshot().then(function (png) {
        writeScreenShot(png, 'DogDetailsFormRunResulttable.png');
    });
    DogDetails_1.DogDetails.ResultTable.getText().then(function (text) {
        console.log("Form Page with toggle button on:  " + text);
    });
}));
cucumber_1.When('user accepts the declarations on the Term Page', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.wait(EC.elementToBeClickable(Account_1.Account.AcceptDeclaration), 1000).then(function () { });
    yield protractor_1.browser.executeScript('window.scrollTo(188, 788);');
    yield Account_1.Account.AcceptDeclaration.click();
    yield protractor_1.browser.executeScript('window.scrollTo(0, 5000);');
    yield Account_1.Account.AcceptDeclaration2.click();
}));
cucumber_1.When('user enters the Contact details on Contact Page', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.wait(EC.elementToBeClickable(Account_1.Account.ContactDetails), 5000).then(function () { });
    Account_1.Account.ContactDetails.getText().then(function (text) {
        console.log(text);
    });
    yield protractor_1.browser.executeScript('window.scrollTo(188, 788);');
    Account_1.Account.EnterPhoneNo.clear().then(function () {
        Account_1.Account.EnterPhoneNo.sendKeys('9874563210');
    });
    yield protractor_1.browser.executeScript('window.scrollTo(0, 5000);');
}));
cucumber_1.When('user enters the Questions for Criminal History, Racing, Spouse or Domestic partner and National Police Check on Question Page', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.wait(EC.elementToBeClickable(Account_1.Account.CriminalHistory), 5000).then(function () { });
    Account_1.Account.CriminalHistory.getText().then(function (text) {
        console.log(text);
    });
    Account_1.Account.RacingHistory.getText().then(function (text) {
        console.log(text);
    });
    Account_1.Account.SpousePartner.getText().then(function (text) {
        console.log(text);
    });
    Account_1.Account.Declaration.getText().then(function (text) {
        console.log(text);
    });
    Account_1.Account.NationalPoliceCheck.getText().then(function (text) {
        console.log(text);
    });
    yield protractor_1.browser.executeScript('window.scrollTo(188, 1000);');
    yield Account_1.Account.AcceptDeclaration3.click();
    yield protractor_1.browser.driver.sleep(5000);
}));
cucumber_1.When('user selects retirement status as {string} -> {string} and clicks {string}', (status, retiredTo, action) => __awaiter(void 0, void 0, void 0, function* () {
    RetireGreyhound_1.RetireGreyhound.DogEarbrand.getText().then(function (earbrand) {
        WebUtils_1.webUtils.DogEarbrand = earbrand;
    });
    yield protractor_1.browser.executeScript('window.scrollTo(0, 5000);');
    //   webUtils.clickOn(RetireGreyhound.RetirementStatusDropdown)
    // expect(RetireGreyhound.RetirementStatusList.count()).to.be.equal(5);
    if (status == 'Pet') {
        WebUtils_1.webUtils.clickOn(RetireGreyhound_1.RetireGreyhound.RetirementStatusDropdown);
        yield protractor_1.browser.driver.sleep(1000);
        WebUtils_1.webUtils.clickOn(RetireGreyhound_1.RetireGreyhound.SelectPet);
        if (retiredTo == 'Owner') {
            yield RetireGreyhound_1.RetireGreyhound.RetiredToOwner.click();
        }
        else if (retiredTo == 'A Third Party') {
            protractor_1.browser.wait(EC.elementToBeClickable(RetireGreyhound_1.RetireGreyhound.RetiredToThirdParty), 2000).then(function () { });
            yield RetireGreyhound_1.RetireGreyhound.RetiredToThirdParty.click();
            expect(yield RetireGreyhound_1.RetireGreyhound.EnterFirstName.getAttribute("required")).to.be.equal('true');
            yield RetireGreyhound_1.RetireGreyhound.EnterFirstName.sendKeys('Testingaaa');
            expect(yield RetireGreyhound_1.RetireGreyhound.EnterLastName.getAttribute("required")).to.be.equal('true');
            yield RetireGreyhound_1.RetireGreyhound.EnterLastName.sendKeys('Testingbbb');
            yield protractor_1.browser.executeScript('window.scrollTo(0, 600);');
            expect(yield RetireGreyhound_1.RetireGreyhound.EnterContact.getAttribute("required")).to.be.equal('true');
            yield RetireGreyhound_1.RetireGreyhound.EnterContact.sendKeys(9874563210);
            yield protractor_1.browser.executeScript('window.scrollTo(0, 800);');
            expect(yield RetireGreyhound_1.RetireGreyhound.EnterEmail.getAttribute("required")).to.be.equal('true');
            yield RetireGreyhound_1.RetireGreyhound.EnterEmail.sendKeys('abc@gmail.conm');
            expect(yield RetireGreyhound_1.RetireGreyhound.EnterStreet.getAttribute("required")).to.be.equal('true');
            yield RetireGreyhound_1.RetireGreyhound.EnterStreet.sendKeys('15, abc street');
            expect(yield RetireGreyhound_1.RetireGreyhound.EnterSuburb.getAttribute("required")).to.be.equal('true');
            yield RetireGreyhound_1.RetireGreyhound.EnterSuburb.sendKeys('abctest');
            yield protractor_1.browser.executeScript('window.scrollTo(0, 1200);');
            protractor_1.browser.wait(EC.elementToBeClickable(RetireGreyhound_1.RetireGreyhound.SelectStateDropDown), 2000).then(function () { });
            yield RetireGreyhound_1.RetireGreyhound.SelectStateDropDown.click();
            yield RetireGreyhound_1.RetireGreyhound.EnterState.click();
            expect(yield RetireGreyhound_1.RetireGreyhound.EnterPostcode.getAttribute("required")).to.be.equal('true');
            yield RetireGreyhound_1.RetireGreyhound.EnterPostcode.sendKeys('1234');
            expect(yield RetireGreyhound_1.RetireGreyhound.EnterAlternateName.getAttribute("required")).to.be.equal('true');
            yield RetireGreyhound_1.RetireGreyhound.EnterAlternateName.sendKeys('Testing');
            expect(yield RetireGreyhound_1.RetireGreyhound.EnterAlternateNo.getAttribute("required")).to.be.equal('true');
            yield RetireGreyhound_1.RetireGreyhound.EnterAlternateNo.sendKeys(12336547891);
            yield protractor_1.browser.executeScript('window.scrollTo(0, 1500);');
            yield RetireGreyhound_1.RetireGreyhound.SameAsPhysicalAdd.click();
            yield protractor_1.browser.executeScript('window.scrollTo(0, 5000);');
        }
        yield protractor_1.browser.driver.sleep(1000);
        protractor_1.browser.wait(EC.elementToBeClickable(RetireGreyhound_1.RetireGreyhound.RetiredDate), 2000).then(function () { });
        yield RetireGreyhound_1.RetireGreyhound.RetiredDate.click();
        yield RetireGreyhound_1.RetireGreyhound.SelectRetiredDate.click();
    }
    else if (status == 'Breeding Animal') {
        WebUtils_1.webUtils.clickOn(RetireGreyhound_1.RetireGreyhound.RetirementStatusDropdown);
        yield protractor_1.browser.driver.sleep(1000);
        WebUtils_1.webUtils.clickOn(RetireGreyhound_1.RetireGreyhound.SelectBreedingAnimal);
        if (retiredTo == 'Owner') {
            yield RetireGreyhound_1.RetireGreyhound.RetiredToOwner.click();
        }
        else if (retiredTo == 'A Third Party') {
            yield RetireGreyhound_1.RetireGreyhound.RetiredToThirdParty.click();
            yield RetireGreyhound_1.RetireGreyhound.RetiredDate.click();
            yield RetireGreyhound_1.RetireGreyhound.SelectRetiredDate.click();
        }
        yield protractor_1.browser.driver.sleep(1000);
        protractor_1.browser.wait(EC.elementToBeClickable(RetireGreyhound_1.RetireGreyhound.RetiredDate), 2000).then(function () { });
        yield RetireGreyhound_1.RetireGreyhound.RetiredDate.click();
        yield RetireGreyhound_1.RetireGreyhound.SelectRetiredDate.click();
    }
    else if (status == 'Euthanised') {
        WebUtils_1.webUtils.clickOn(RetireGreyhound_1.RetireGreyhound.RetirementStatusDropdown);
        yield protractor_1.browser.driver.sleep(1000);
        WebUtils_1.webUtils.clickOn(RetireGreyhound_1.RetireGreyhound.SelectEuthanised);
        yield RetireGreyhound_1.RetireGreyhound.DisposalMethod.click();
        if (retiredTo == 'Vet') {
            yield protractor_1.browser.executeScript('window.scrollTo(187, 900);');
            yield protractor_1.browser.driver.sleep(1000);
            WebUtils_1.webUtils.clickOn(RetireGreyhound_1.RetireGreyhound.SelectDisposalMethodVet);
            WebUtils_1.webUtils.clickOn(RetireGreyhound_1.RetireGreyhound.ReasonOfEuthanasia);
            yield protractor_1.browser.driver.sleep(1000);
            WebUtils_1.webUtils.clickOn(RetireGreyhound_1.RetireGreyhound.SelectReasonOfEuthanasiaEmergency);
            RetireGreyhound_1.RetireGreyhound.VetName.sendKeys("Testing");
            RetireGreyhound_1.RetireGreyhound.DateContactedForVet.sendKeys("Testing");
            RetireGreyhound_1.RetireGreyhound.TimeContactedForVet.sendKeys("01:01 AM");
            RetireGreyhound_1.RetireGreyhound.EnterDetails.sendKeys("Testing");
        }
        else if (retiredTo == 'Animal Cremation') {
            yield protractor_1.browser.driver.sleep(1000);
            yield RetireGreyhound_1.RetireGreyhound.SelectDisposalMethodAnimalCremation.click();
            yield RetireGreyhound_1.RetireGreyhound.ReasonOfEuthanasia.click();
            yield protractor_1.browser.driver.sleep(1000);
            yield RetireGreyhound_1.RetireGreyhound.SelectReasonOfEuthanasiaInjury.click();
        }
        else if (retiredTo == 'other') {
            yield protractor_1.browser.driver.sleep(1000);
            yield RetireGreyhound_1.RetireGreyhound.SelectMethodOther.click();
            yield protractor_1.browser.driver.sleep(1000);
            yield RetireGreyhound_1.RetireGreyhound.EnterDisposalAsOther.sendKeys('Testing other details');
            yield protractor_1.browser.driver.sleep(1000);
            yield RetireGreyhound_1.RetireGreyhound.ReasonOfEuthanasia.click();
            yield protractor_1.browser.driver.sleep(1000);
            yield RetireGreyhound_1.RetireGreyhound.SelectReasonOfEuthanasiaInjury.click();
        }
        yield protractor_1.browser.driver.sleep(1000);
        protractor_1.browser.wait(EC.elementToBeClickable(RetireGreyhound_1.RetireGreyhound.RetiredDate), 2000).then(function () { });
        yield RetireGreyhound_1.RetireGreyhound.RetiredDate.click();
        yield RetireGreyhound_1.RetireGreyhound.SelectRetiredDate.click();
    }
    else if (status == 'Exported') {
        WebUtils_1.webUtils.clickOn(RetireGreyhound_1.RetireGreyhound.RetirementStatusDropdown);
        yield protractor_1.browser.driver.sleep(1000);
        WebUtils_1.webUtils.clickOn(RetireGreyhound_1.RetireGreyhound.SelectExported);
        yield protractor_1.browser.driver.sleep(1000);
        RetireGreyhound_1.RetireGreyhound.PassportNo.sendKeys('ABCD1234X'),
            RetireGreyhound_1.RetireGreyhound.DestinationCountry.sendKeys('Testing'),
            yield protractor_1.browser.driver.sleep(1000);
        yield protractor_1.browser.executeScript('window.scrollTo(0, 5000);');
        RetireGreyhound_1.RetireGreyhound.Agree.click();
        yield protractor_1.browser.driver.sleep(1000);
        protractor_1.browser.wait(EC.elementToBeClickable(RetireGreyhound_1.RetireGreyhound.RetiredDate), 2000).then(function () { });
        yield RetireGreyhound_1.RetireGreyhound.RetiredDate.click();
        yield RetireGreyhound_1.RetireGreyhound.SelectRetiredDate.click();
    }
    else if (status == 'Other') {
        WebUtils_1.webUtils.clickOn(RetireGreyhound_1.RetireGreyhound.RetirementStatusDropdown);
        yield protractor_1.browser.driver.sleep(1000);
        WebUtils_1.webUtils.clickOn(RetireGreyhound_1.RetireGreyhound.SelectOther);
        RetireGreyhound_1.RetireGreyhound.EnterOtherOtherDetails.sendKeys('Testing othe details');
        yield protractor_1.browser.driver.sleep(1000);
        protractor_1.browser.wait(EC.elementToBeClickable(RetireGreyhound_1.RetireGreyhound.RetiredDate), 2000).then(function () { });
        yield RetireGreyhound_1.RetireGreyhound.RetiredDate.click();
        yield RetireGreyhound_1.RetireGreyhound.SelectRetiredDate.click();
    }
    yield protractor_1.browser.driver.sleep(1000);
    if (action == 'submit') {
        //Racing.Submit.click().then(function () { })
        //Racing.Yes.click().then(function () { })
    }
    else if (action == 'cancel') {
        Racing_1.Racing.Cancel.click().then(function () { });
    }
}));
cucumber_1.When('user enters the {string} -> {string} and selects dog activity as {string}', (dogAction, activity, location) => __awaiter(void 0, void 0, void 0, function* () {
    if (dogAction == "Dog details") {
        protractor_1.browser.wait(EC.elementToBeClickable(DogLocation_1.DogLocation.DogName), 2000).then(function () { });
        DogLocation_1.DogLocation.DogName.sendKeys('FABRIOLA CITRUS');
        protractor_1.browser.wait(EC.elementToBeClickable(DogLocation_1.DogLocation.EarBrand), 2000).then(function () { });
        DogLocation_1.DogLocation.EarBrand.sendKeys('VHNWC');
        protractor_1.browser.wait(EC.elementToBeClickable(DogLocation_1.DogLocation.MicrochipNo), 2000).then(function () { });
        DogLocation_1.DogLocation.MicrochipNo.sendKeys('7382');
        WebUtils_1.webUtils.clickOn(Racing_1.Racing.Validate);
        // else if(action == 'cancel')
        // w.clickOn(Racing.Cancel)
    }
    WebUtils_1.webUtils.clickOn(DogLocation_1.DogLocation.DogActivity);
    yield protractor_1.browser.executeScript('window.scrollTo(187, 900);');
    yield protractor_1.browser.driver.sleep(1000);
    if (activity == 'Breeding')
        WebUtils_1.webUtils.clickOn(DogLocation_1.DogLocation.SelectActivityAsBreeding);
    else if (activity == 'Educating')
        WebUtils_1.webUtils.clickOn(DogLocation_1.DogLocation.SelectActivityAsEducating);
    else if (activity == 'Rearing')
        WebUtils_1.webUtils.clickOn(DogLocation_1.DogLocation.SelectActivityAsRearing);
    else if (activity == 'Spelling')
        WebUtils_1.webUtils.clickOn(DogLocation_1.DogLocation.SelectActivityAsSpelling);
    else if (activity == 'Training')
        WebUtils_1.webUtils.clickOn(DogLocation_1.DogLocation.SelectActivityAsTraining);
    else if (activity == 'Whelping')
        WebUtils_1.webUtils.clickOn(DogLocation_1.DogLocation.SelectActivityAsWhelping);
    yield protractor_1.browser.driver.sleep(1000);
    WebUtils_1.webUtils.clickOn(DogLocation_1.DogLocation.DogLocation);
    if (location == 'Same Location')
        WebUtils_1.webUtils.clickOn(DogLocation_1.DogLocation.SelectDogLocation);
    else if (location == 'Interstate Location') {
        yield protractor_1.browser.driver.sleep(1000);
        WebUtils_1.webUtils.clickOn(DogLocation_1.DogLocation.InterstateLocation);
        DogLocation_1.DogLocation.EnterName.sendKeys('Testing123');
        DogLocation_1.DogLocation.EnterStreet.sendKeys('15, Test');
        DogLocation_1.DogLocation.EnterSuburb.sendKeys('TestSubrb');
        DogLocation_1.DogLocation.EnterPostcode.sendKeys('3214');
        yield protractor_1.browser.executeScript('window.scrollTo(0, 5000);');
        WebUtils_1.webUtils.clickOn(DogLocation_1.DogLocation.SelectStateDropDown);
        WebUtils_1.webUtils.clickOn(DogLocation_1.DogLocation.EnterState);
        yield protractor_1.browser.driver.sleep(1000);
        DogLocation_1.DogLocation.EnterPhone.sendKeys('1236547891');
    }
    yield protractor_1.browser.driver.sleep(5000);
}));
cucumber_1.When('user selects the dog and clicks agree to remove dog from kennel', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.wait(EC.elementToBeClickable(Home_1.Home.SkipOverlay), 10000).then(function () { });
    yield Home_1.Home.SkipOverlay.click();
    // await w.clickOn(DogLocation.SelectDog)
    yield protractor_1.browser.driver.sleep(1000);
    DogLocation_1.DogLocation.Search.sendKeys("FABRIOLA CITRUS");
    yield DogLocation_1.DogLocation.FindDogFabriolaCitrus.click();
    yield WebUtils_1.webUtils.clickOn(Racing_1.Racing.IAgree);
}));
cucumber_1.When('user views the {string} details', (page) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(1000);
    if (page == 'Registration History') {
        protractor_1.browser.takeScreenshot().then(function (png) {
            writeScreenShot(png, 'MemHistoryRegistration.png');
        });
    }
    else if (page == 'Competencies held') {
        protractor_1.browser.takeScreenshot().then(function (png) {
            writeScreenShot(png, 'MemHisgtoryCompetencies.png');
        });
    }
    else if (page == 'Request New Card') {
        protractor_1.browser.takeScreenshot().then(function (png) {
            writeScreenShot(png, 'RequestNewCard.png');
        });
        var path = require('path');
        var fileToUpload = "C://Users//psingh//Desktop//Priti//Automation1.9//TestAutomationFramework-FT1.9//images.jpg";
        var absolutePath = path.resolve(__dirname, fileToUpload);
        yield Account_1.Account.UploadNewPhoto.click();
        //  element(by.css('input[type="file"]')).sendKeys(absolutePath);  --click->upload->select image->open- check the console and goto Event->Target->File
    }
    else if (page == 'Registration status') {
        protractor_1.browser.takeScreenshot().then(function (png) {
            writeScreenShot(png, 'RegistrationStatus.png');
        });
    }
    else if (page == 'Activities') {
        protractor_1.browser.takeScreenshot().then(function (png) {
            writeScreenShot(png, 'Activities.png');
        });
    }
    else if (page == 'Calender & Meeting') {
        yield protractor_1.browser.executeScript('window.scrollTo(187, 900);');
        protractor_1.browser.takeScreenshot().then(function (png) {
            writeScreenShot(png, 'CalenderMeeting.png');
        });
    }
    else if (page == 'Important Announcements') {
        yield protractor_1.browser.executeScript('window.scrollTo(0, 5000);');
        protractor_1.browser.takeScreenshot().then(function (png) {
            writeScreenShot(png, 'ImportantAnnouncements.png');
        });
    }
    else {
        console.log(" no selection");
        DogLocation_1.DogLocation.Search.sendKeys("FABRIOLA CITRUS");
    }
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2hlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBkZWZpbml0aW9ucy9XaGVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLDJDQUFxQztBQUNyQywrQ0FBNEM7QUFDNUMsMkNBQXdDO0FBQ3hDLGdEQUE0RDtBQUM1RCxpREFBOEM7QUFDOUMsZ0ZBQWlEO0FBRWpELHVEQUFtRDtBQUNuRCxpREFBOEM7QUFDOUMsZ0RBQW1EO0FBQ25ELHNDQUFtQztBQUNuQyx5Q0FBc0M7QUFDdEMsdUVBQW9FO0FBQ3BFLHVEQUFvRDtBQUdwRCxpRUFBOEQ7QUFDOUQseURBQXNEO0FBQ3RELElBQUksRUFBRSxHQUFHLGlCQUFVLENBQUMsa0JBQWtCLENBQUM7QUFFdkMsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUNwQyxJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkIsU0FBUyxlQUFlLENBQUMsR0FBRyxFQUFFLFFBQVE7SUFDcEMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDeEMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ2YsQ0FBQztBQUVELGVBQUksQ0FBQyxzQkFBc0IsRUFBRSxHQUFTLEVBQUU7SUFDdEMsb0JBQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsZ0NBQWdDLEVBQUUsVUFBVSxNQUFNO0lBQ3JELDJCQUEyQjtJQUMzQixJQUFJLE1BQU0sSUFBSSxRQUFRLEVBQUU7UUFDdEIsb0JBQU8sQ0FBQyxN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