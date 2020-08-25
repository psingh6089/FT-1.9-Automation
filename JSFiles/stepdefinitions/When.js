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
const WebUtils_1 = require("../utils/WebUtils");
const Account_1 = require("../Specs/ui/Account");
const DataInput_json_1 = __importDefault(require("../testData/DataInput.json"));
const Non_Racing_1 = require("../Specs/ui/Non-Racing");
const IWantTo_1 = require("../Specs/ui/IWantTo");
const ptor_1 = require("protractor/built/ptor");
const FT1_1 = require("../Specs/FT1");
const COP_1 = require("../Specs/ui/COP");
const BreedingAndLitters_1 = require("../Specs/ui/BreedingAndLitters");
let EC = ptor_1.protractor.ExpectedConditions;
var expect = require('chai').expect;
cucumber_1.When('User logs in as User', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.driver.sleep(2000);
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
        protractor_1.browser.executeScript('window.scrollTo(0,5000)').then(() => __awaiter(this, void 0, void 0, function* () { }));
        Racing_1.Racing.Submit.click().then(function () { });
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
    protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.Interstate), 5000).then(function () { });
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
            protractor_1.browser.driver.sleep(5000);
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
    try {
        yield protractor_1.browser.driver.sleep(3000);
        yield protractor_1.browser.switchTo().frame(Racing_1.Racing.switchframe.getWebElement());
        Racing_1.Racing.NameOnCard.sendKeys(DataInput_json_1.default.data.NameOnCard);
        Racing_1.Racing.CardNo.sendKeys(DataInput_json_1.default.data.CardNo);
        var elm = Racing_1.Racing.ExpMonth;
        protractor_1.browser.executeScript("arguments[0].scrollIntoView();", elm.getWebElement());
        elm.sendKeys('01');
        yield protractor_1.browser.executeScript('window.scrollTo(0,5000);');
        protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.ExpYr), 5000).then(function () { });
        Racing_1.Racing.ExpYr.sendKeys('30');
        protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.SecCode), 5000).then(function () { });
        Racing_1.Racing.SecCode.sendKeys(DataInput_json_1.default.data.SecCode);
        protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.PayNow), 5000).then(function () { });
        //await Racing.PayNow.click();
        yield Account_1.Account.Back.click();
        protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.Continue), 5000).then(function () { });
    }
    catch (error) {
        console.log("payment gateway is not present");
        return false;
    }
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
cucumber_1.When('user completed the documentation', () => __awaiter(void 0, void 0, void 0, function* () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2hlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBkZWZpbml0aW9ucy9XaGVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLDJDQUFxQztBQUNyQywrQ0FBNEM7QUFFNUMsZ0RBQTREO0FBQzVELGlEQUE4QztBQUM5QyxnRkFBaUQ7QUFFakQsdURBQW1EO0FBQ25ELGlEQUE4QztBQUM5QyxnREFBbUQ7QUFDbkQsc0NBQW1DO0FBQ25DLHlDQUFzQztBQUN0Qyx1RUFBb0U7QUFDcEUsSUFBSSxFQUFFLEdBQUcsaUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztBQUV2QyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDO0FBRXBDLGVBQUksQ0FBQyxzQkFBc0IsRUFBRSxHQUFTLEVBQUU7SUFDdEMsb0JBQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsZ0NBQWdDLEVBQUUsVUFBVSxNQUFNO0lBQ3RELDJCQUEyQjtJQUMxQixJQUFJLE1BQU0sSUFBSSxRQUFRLEVBQUU7UUFDdEIsb0JBQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFBO1FBQ2hELGVBQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsT0FBTztZQUM1QyxJQUFJLE9BQU8sRUFBRTtnQkFDVCxlQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFhLENBQUMsQ0FBQyxDQUFBO2FBQzdDO2lCQUFNO2dCQUNILG9CQUFPLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDLENBQUMsSUFBSSxDQUFDLEdBQVMsRUFBRSxnREFBRyxDQUFD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