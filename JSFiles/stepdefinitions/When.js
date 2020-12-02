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
const MyDogs_1 = require("../Specs/ui/MyDogs");
const Calendar_1 = require("../Specs/ui/Calendar");
let EC = ptor_1.protractor.ExpectedConditions;
var expect = require('chai').expect;
var fs = require('fs');
function writeScreenShot(png, filename) {
    var stream = fs.createWriteStream(filename);
    stream.write(new Buffer(png, 'base64'));
    stream.end();
}
cucumber_1.When('User navigates {string} and verifies {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    Home_1.Home.WelcomeText.getText().then(function (val) {
        expect(val).to.equal(string2);
    });
}));
cucumber_1.When('User clicks on {string} button', (button) => __awaiter(void 0, void 0, void 0, function* () {
    // w.confirmButton(button);
    protractor_1.browser.driver.sleep(2000).then(function () { });
    switch (button) {
        case 'cancel':
            yield WebUtils_1.webUtils.click(Racing_1.Racing.Cancel);
            break;
        case 'submit':
            yield WebUtils_1.webUtils.click(Racing_1.Racing.Submit);
            break;
        case 'continue':
            yield WebUtils_1.webUtils.click(Racing_1.Racing.Continue);
            break;
        case 'confirm':
            yield WebUtils_1.webUtils.click(Racing_1.Racing.Confirm);
            break;
        case 'back':
            yield WebUtils_1.webUtils.click(Racing_1.Racing.Back);
            break;
        case 'save':
            yield WebUtils_1.webUtils.click(Racing_1.Racing.Save);
            break;
        case 'yes':
            yield WebUtils_1.webUtils.click(Racing_1.Racing.Yes);
            break;
        case 'ok':
            yield WebUtils_1.webUtils.click(Racing_1.Racing.Ok);
            break;
        default: console.log("Wrong click");
    }
}));
cucumber_1.When('Bitch details are entered and validated', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.Earbrand), 10000).then(function () { });
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
cucumber_1.When('user enters the Name details of the new person to be transferred and {string}', (action) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(2000);
    if (action == 'proceeds') {
        protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.IAgree), 5000).then(function () { });
        yield Racing_1.Racing.IAgree.click();
        yield protractor_1.browser.driver.sleep(2000);
        yield protractor_1.browser.executeScript('window.scrollTo(0,5000);');
        Racing_1.Racing.FirstName.sendKeys(DataInput_json_1.default.data.TransferServiceToFirstName);
        Racing_1.Racing.LastName.sendKeys(DataInput_json_1.default.data.TransferServiceToLastName);
        yield protractor_1.browser.driver.sleep(1000);
        Racing_1.Racing.PhoneNo.sendKeys(DataInput_json_1.default.data.PhoneNo);
        yield protractor_1.browser.driver.sleep(1000);
    }
    if (action == 'validate') {
        yield protractor_1.browser.driver.sleep(2000);
        yield protractor_1.browser.executeScript('window.scrollTo(81, 745);');
        protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.IAgree), 5000).then(function () { });
        expect(yield Racing_1.Racing.FirstName.getAttribute("required")).to.be.equal('true');
        ;
        expect(yield Racing_1.Racing.LastName.getAttribute("required")).to.be.equal('true');
        expect(yield Racing_1.Racing.PhoneNo.getAttribute("required")).to.be.equal('true');
        WebUtils_1.webUtils.validatePhone(yield Racing_1.Racing.PhoneNo);
        expect(yield Racing_1.Racing.Continue.getAttribute("disabled")).to.be.equal(null);
    }
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
cucumber_1.When('user clicks Apply for a Dog name page with valid name and {string}', (action) => __awaiter(void 0, void 0, void 0, function* () {
    //  w.applyDogName();
    yield protractor_1.browser.driver.sleep(2000);
    WebUtils_1.webUtils.SkipOverlay();
    Racing_1.Racing.Dog;
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
    protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.Dog1), 20000).then(function () { });
    yield protractor_1.browser.driver.sleep(1000);
    WebUtils_1.webUtils.SkipOverlay();
    yield Racing_1.Racing.Dog1.click();
    yield protractor_1.browser.executeScript('window.scrollTo(0,5000);');
    yield protractor_1.browser.driver.sleep(1000);
    WebUtils_1.webUtils.clickOn(Racing_1.Racing.Submit);
    yield protractor_1.browser.driver.sleep(1000);
    protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.Interstate), 20000).then(function () { });
    yield protractor_1.browser.driver.sleep(2000);
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
cucumber_1.When('user enters the Authority Key and Ear brand details of dog for {string} and {string}', (option, action) => __awaiter(void 0, void 0, void 0, function* () {
    if (action == 'proceeds') {
        Racing_1.Racing.AddAuthorityKey.sendKeys('6144344217');
        Racing_1.Racing.AddEarBrand.sendKeys('VDHQN');
        protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.Validate), 5000).then(function () { });
        yield Racing_1.Racing.Validate.click();
        yield protractor_1.browser.driver.sleep(3000);
        yield protractor_1.browser.executeScript('window.scrollTo(0,5000);');
        protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.Continue), 5000).then(function () { });
        //  await Racing.Continue.click();
    }
    if (action == 'validates') {
        expect(yield Racing_1.Racing.AddAuthorityKey.getAttribute("required")).to.be.equal('true');
        Racing_1.Racing.AddAuthorityKey.sendKeys('test');
        expect(yield Racing_1.Racing.AddEarBrand.getAttribute("required")).to.be.equal('true');
        Racing_1.Racing.AddEarBrand.sendKeys('VDKST');
        protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.Validate), 5000).then(function () { });
        yield Racing_1.Racing.Validate.click();
        yield protractor_1.browser.driver.sleep(1000);
        expect(yield Racing_1.Racing.validateError.isDisplayed()).to.be.equal(true);
    }
}));
cucumber_1.When('user proceeds with the payment option', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(5000);
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
    protractor_1.browser.switchTo().defaultContent();
    protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.PayNow), 5000).then(function () { });
    yield Racing_1.Racing.PayNow.click();
    yield protractor_1.browser.driver.sleep(5000);
    protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.Continue), 10000).then(function () { });
    yield Racing_1.Racing.Continue.click();
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
    switch (action) {
        case 'continue':
            yield Home_1.Home.LoginContinue.click();
            break;
        case 'forgot password':
            yield Home_1.Home.ForgotPassword.click();
            break;
        case 'Back to Fast Track':
            yield Home_1.Home.BackToFT.click();
            break;
        default: console.log("undefined user");
    }
}));
cucumber_1.When('user selects {string} and {string} for the statement', function (string, string2) {
});
cucumber_1.When('user selects the dog and selects all the checkboxes with option {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.Dog1), 5000).then(function () { });
    yield Racing_1.Racing.Dog1.click();
}));
cucumber_1.When('user clicks {string}', (tab) => __awaiter(void 0, void 0, void 0, function* () {
    WebUtils_1.webUtils.SkipOverlay();
    yield protractor_1.browser.driver.sleep(5000);
    switch (tab) {
        case 'Manage Syndicate':
            yield protractor_1.browser.executeScript('window.scrollTo(0,1000);');
            yield Account_1.Account.ManageSyndicate.click();
            break;
        case 'Modify Finance Details':
            yield Account_1.Account.ModifyFinancialDetails.click();
            break;
        case 'Add Illness':
            yield WebUtils_1.webUtils.clickOn(COP_1.COP.AddIllness);
            break;
        case 'Add Injury':
            yield WebUtils_1.webUtils.clickOn(COP_1.COP.AddInjury);
            break;
        case 'Add Health':
            yield WebUtils_1.webUtils.clickOn(COP_1.COP.AddHealth);
            break;
        default: console.log("undefined Sorting");
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
    switch (role) {
        case 'owner': break;
        case 'Attendant':
            WebUtils_1.webUtils.clickOn(Account_1.Account.SelectAttendant);
            break;
        case 'Catcher':
            WebUtils_1.webUtils.clickOn(Account_1.Account.SelectCatcher);
            yield protractor_1.browser.driver.sleep(1000);
            break;
        case 'Owner Trainer':
            WebUtils_1.webUtils.clickOn(Account_1.Account.SelectOwnerTrainer);
            break;
        case 'Public Trainer':
            WebUtils_1.webUtils.clickOn(Account_1.Account.SelectPublicTrainer);
            break;
        default: console.log("undefined user");
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
cucumber_1.When('user is able to add {string} details', (string) => __awaiter(void 0, void 0, void 0, function* () {
    if (string == 'Health Management') {
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
    }
    else if (string == 'Illness') {
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
    }
    else if (string == 'Injury') {
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
    }
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
        BreedingAndLitters_1.BreedingAndLitters.Total.getText().then(function (total) {
            expect(total).to.contain('0');
        });
    }
    else if (result == 'No Live Pups') {
        yield protractor_1.browser.executeScript('window.scrollTo(0,5000);');
        protractor_1.browser.wait(EC.elementToBeClickable(BreedingAndLitters_1.BreedingAndLitters.SelectResultAsNoLivePUps), 1000).then(function () { });
        yield BreedingAndLitters_1.BreedingAndLitters.SelectResultAsNoLivePUps.click();
        yield protractor_1.browser.driver.sleep(1000);
        BreedingAndLitters_1.BreedingAndLitters.Total.getText().then(function (total) {
            expect(total).to.contain('0');
        });
    }
    else if (result == 'validate') {
        protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.done), 1000).then(function () { });
        yield WebUtils_1.webUtils.clickOn(Racing_1.Racing.done);
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
    switch (activity) {
        case 'Breeding':
            WebUtils_1.webUtils.clickOn(DogLocation_1.DogLocation.SelectActivityAsBreeding);
            break;
        case 'Educating':
            WebUtils_1.webUtils.clickOn(DogLocation_1.DogLocation.SelectActivityAsEducating);
            break;
        case 'Rearing':
            WebUtils_1.webUtils.clickOn(DogLocation_1.DogLocation.SelectActivityAsRearing);
            break;
        case 'Spelling':
            WebUtils_1.webUtils.clickOn(DogLocation_1.DogLocation.SelectActivityAsSpelling);
            break;
        case 'Training':
            WebUtils_1.webUtils.clickOn(DogLocation_1.DogLocation.SelectActivityAsTraining);
            break;
        case 'Whelping':
            WebUtils_1.webUtils.clickOn(DogLocation_1.DogLocation.SelectActivityAsWhelping);
            break;
        default: console.log("undefined user");
    }
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
    WebUtils_1.webUtils.SkipOverlay();
    // await w.clickOn(DogLocation.SelectDog)
    yield protractor_1.browser.driver.sleep(1000);
    DogLocation_1.DogLocation.Search.sendKeys("FABRIOLA CITRUS");
    yield DogLocation_1.DogLocation.FindDogFabriolaCitrus.click();
    //await w.clickOn(Racing.IAgree)
}));
cucumber_1.When('user views the {string} details', (page) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(2000);
    WebUtils_1.webUtils.SkipOverlay();
    switch (page) {
        case 'Calendar':
            protractor_1.browser.takeScreenshot().then(function (png) { writeScreenShot(png, 'Calendar.png'); });
            break;
        case 'Registration History':
            protractor_1.browser.takeScreenshot().then(function (png) { writeScreenShot(png, 'MemHistoryRegistration.png'); });
            break;
        case 'Competencies held':
            protractor_1.browser.takeScreenshot().then(function (png) { writeScreenShot(png, 'MemHisgtoryCompetencies.png'); });
            break;
        case 'Request New Card':
            protractor_1.browser.takeScreenshot().then(function (png) { writeScreenShot(png, 'RequestNewCard.png'); });
            var path = require('path');
            var fileToUpload = "C://Users//psingh//Desktop//Priti//Automation1.9//TestAutomationFramework-FT1.9//images.jpg";
            var absolutePath = path.resolve(__dirname, fileToUpload);
            yield Account_1.Account.UploadNewPhoto.click();
            //  element(by.css('input[type="file"]')).sendKeys(absolutePath);  --click->upload->select image->open- check the console and goto Event->Target->File
            break;
        case 'Registration status':
            protractor_1.browser.takeScreenshot().then(function (png) { writeScreenShot(png, 'RegistrationStatus.png'); });
            break;
        case 'Activities':
            protractor_1.browser.takeScreenshot().then(function (png) { writeScreenShot(png, 'Activities.png'); });
            break;
        case 'Calender & Meeting':
            protractor_1.browser.takeScreenshot().then(function (png) { writeScreenShot(png, 'CalenderMeeting.png'); });
            break;
        case 'Important Announcements':
            protractor_1.browser.takeScreenshot().then(function (png) { writeScreenShot(png, 'ImportantAnnouncements.png'); });
            break;
        case 'GreyHound Record':
            protractor_1.browser.takeScreenshot().then(function (png) { writeScreenShot(png, 'GreyHoundRecord.png'); });
            break;
        case 'Litters':
            protractor_1.browser.takeScreenshot().then(function (png) { writeScreenShot(png, 'Litters.png'); });
            break;
        default: console.log("wrong Page details");
    }
}));
cucumber_1.When('user views the overlay at {string} Page and clicks at {string}', (page, action) => __awaiter(void 0, void 0, void 0, function* () {
    if (page == 'Home') {
        protractor_1.browser.wait(EC.elementToBeClickable(Home_1.Home.GotIt), 10000).then(function () { });
        Home_1.Home.Home1Menu.getText().then(function (text) {
            expect(text).to.equal('Manage Greyhound Activities\n1/5');
        });
        Home_1.Home.Home1Description.getText().then(function (text) {
            expect(text).to.equal('Navigate here to do actions related to do greyhound racing, trials, health records, greyhound transfers, breeding and welfare.');
        });
        yield WebUtils_1.webUtils.clickOn(Home_1.Home.GotIt);
        protractor_1.browser.wait(EC.elementToBeClickable(Home_1.Home.Gotit2), 1000).then(function () { });
        Home_1.Home.Home2Menu.getText().then(function (text) {
            expect(text).to.equal('View Activity Logs\n2/5');
        });
        Home_1.Home.Home2Description.getText().then(function (text) {
            expect(text).to.equal('Alerts related to account activities such as greyhound notifications, registration updates, and invoices can be viewed here.');
        });
        protractor_1.browser.executeScript('window.scrollTo(321,40)').then(() => __awaiter(void 0, void 0, void 0, function* () { }));
        yield WebUtils_1.webUtils.clickOn(Home_1.Home.Gotit2);
        protractor_1.browser.wait(EC.elementToBeClickable(Home_1.Home.Gotit3), 1000).then(function () { });
        Home_1.Home.Home3Menu.getText().then(function (text) {
            expect(text).to.equal('Announcements\n3/5');
        });
        Home_1.Home.Home3Description.getText().then(function (text) {
            console.log(text);
            expect(text).to.equal('GRV announcements will be mentioned here. More can be search here by date range to view past announcements.');
        });
        protractor_1.browser.executeScript('window.scrollTo(320,100)').then(() => __awaiter(void 0, void 0, void 0, function* () { }));
        yield WebUtils_1.webUtils.clickOn(Home_1.Home.Gotit3);
        protractor_1.browser.wait(EC.elementToBeClickable(Home_1.Home.Gotit4), 1000).then(function () { });
        Home_1.Home.Home4Menu.getText().then(function (text) {
            expect(text).to.equal('Calendar and Meeting updates\n4/5');
        });
        Home_1.Home.Home4Description.getText().then(function (text) {
            expect(text).to.equal('Calendar and meeting updates can be checked here.');
        });
        protractor_1.browser.executeScript('window.scrollTo(321,40)').then(() => __awaiter(void 0, void 0, void 0, function* () { }));
        yield WebUtils_1.webUtils.clickOn(Home_1.Home.Gotit4);
        protractor_1.browser.wait(EC.elementToBeClickable(Home_1.Home.Gotit5), 1000).then(function () { });
        Home_1.Home.Home5Menu.getText().then(function (text) {
            expect(text).to.equal('Search\n5/5');
        });
        Home_1.Home.Home5Description.getText().then(function (text) {
            expect(text).to.equal('Type the keyword(s) that you want to search for such as greyhound name, trainer name, etc.');
        });
        protractor_1.browser.executeScript('window.scrollTo(321,40)').then(() => __awaiter(void 0, void 0, void 0, function* () { }));
        yield WebUtils_1.webUtils.clickOn(Home_1.Home.Gotit5);
    }
    else if (page == 'My Dogs') {
        protractor_1.browser.wait(EC.elementToBeClickable(Home_1.Home.MyDogs), 5000).then(function () { });
        yield WebUtils_1.webUtils.clickOn(Home_1.Home.MyDogs);
        protractor_1.browser.wait(EC.elementToBeClickable(Home_1.Home.MyDogs1Menu), 10000).then(function () { });
        Home_1.Home.MyDogs1Menu.getText().then(function (text) {
            expect(text).to.equal('Greyhounds classified\n1/5');
        });
        Home_1.Home.MyDogs1Description.getText().then(function (text) {
            expect(text).to.equal('Unnamed and racing statuses greyhounds will appear in Active tab. Retired status greyhounds will appear in Non Active tab. Litters whose litter registration is in progress will appear in Litters page.');
        });
        yield WebUtils_1.webUtils.clickOn(Home_1.Home.GotIt);
        protractor_1.browser.wait(EC.elementToBeClickable(Home_1.Home.MyDogs2Menu), 1000).then(function () { });
        Home_1.Home.MyDogs2Menu.getText().then(function (text) {
            expect(text).to.equal('Sort a list\n2/5');
        });
        Home_1.Home.MyDogs2Description.getText().then(function (text) {
            expect(text).to.equal('Below list can be sorted by:\nKennel name A - Z\nKennel name Z - A\nRacing name A - Z\nRacing name Z - A\nWhelp date - Youngest\nWhelp date - Oldest\nDog - Bitch\nBitch - Dog');
        });
        protractor_1.browser.executeScript('window.scrollTo(321,40)').then(() => __awaiter(void 0, void 0, void 0, function* () { }));
        yield WebUtils_1.webUtils.clickOn(Home_1.Home.Gotit2);
        protractor_1.browser.wait(EC.elementToBeClickable(Home_1.Home.Gotit3), 1000).then(function () { });
        Home_1.Home.MyDogs3Menu.getText().then(function (text) {
            expect(text).to.equal('Add or Remove filter\n3/5');
        });
        Home_1.Home.MyDogs3Description.getText().then(function (text) {
            console.log(text);
            expect(text).to.equal('Filter or reset the activities filter to display specific greyhounds.');
        });
        protractor_1.browser.executeScript('window.scrollTo(320,100)').then(() => __awaiter(void 0, void 0, void 0, function* () { }));
        yield WebUtils_1.webUtils.clickOn(Home_1.Home.Gotit3);
        protractor_1.browser.wait(EC.elementToBeClickable(Home_1.Home.Gotit4), 1000).then(function () { });
        Home_1.Home.MyDogs4Menu.getText().then(function (text) {
            expect(text).to.equal('Greyhound details\n4/5');
        });
        Home_1.Home.MyDogs4Description.getText().then(function (text) {
            expect(text).to.equal('Key details such as racing name, ear brand, activity, owner and actions can be checked here.');
        });
        protractor_1.browser.executeScript('window.scrollTo(321,40)').then(() => __awaiter(void 0, void 0, void 0, function* () { }));
        yield WebUtils_1.webUtils.clickOn(Home_1.Home.Gotit4);
        protractor_1.browser.wait(EC.elementToBeClickable(Home_1.Home.Gotit5), 1000).then(function () { });
        Home_1.Home.MyDogs5Menu.getText().then(function (text) {
            expect(text).to.equal('Actions on the greyhound\n5/5');
        });
        Home_1.Home.MyDogs5Description.getText().then(function (text) {
            expect(text).to.equal('Specific actions on the greyhound can be done here.');
        });
        protractor_1.browser.executeScript('window.scrollTo(321,40)').then(() => __awaiter(void 0, void 0, void 0, function* () { }));
        yield WebUtils_1.webUtils.clickOn(Home_1.Home.Gotit5);
    }
    else if (page == 'Dog Details') {
        WebUtils_1.webUtils.SkipOverlay();
        protractor_1.browser.wait(EC.elementToBeClickable(Home_1.Home.MyDogs), 5000).then(function () { });
        yield WebUtils_1.webUtils.clickOn(Home_1.Home.MyDogs);
        // browser.wait(EC.elementToBeClickable(Racing.DogDetailsClick), 40000).then(function () { })
        protractor_1.browser.driver.sleep(30000);
        yield WebUtils_1.webUtils.clickOn(Racing_1.Racing.DogDetailsClick);
        protractor_1.browser.wait(EC.elementToBeClickable(Home_1.Home.GotIt), 10000).then(function () { });
        Home_1.Home.DogDetails1Menu.getText().then(function (text) {
            expect(text).to.equal('Greyhound details\n1/2');
        });
        Home_1.Home.DogDetails1Description.getText().then(function (text) {
            expect(text).to.equal('Key details such as racing name, ear brand, activity, owner and actions can be checked here.');
        });
        yield WebUtils_1.webUtils.clickOn(Home_1.Home.GotIt);
        protractor_1.browser.wait(EC.elementToBeClickable(Home_1.Home.Gotit2), 1000).then(function () { });
        Home_1.Home.DogDetails2Menu.getText().then(function (text) {
            expect(text).to.equal('Greyhound data\n2/2');
        });
        Home_1.Home.DogDetails2Description.getText().then(function (text) {
            expect(text).to.equal('Greyhound details such as its stats about box wins/starts, form details, history and pedigree can be seen here.');
        });
        yield WebUtils_1.webUtils.clickOn(Home_1.Home.Gotit2);
    }
    else if (page == 'I Want To') {
        protractor_1.browser.driver.sleep(1000);
        WebUtils_1.webUtils.SkipOverlay();
        protractor_1.browser.wait(EC.elementToBeClickable(IWantTo_1.IWantTo.IWantTo), 5000).then(function () { });
        yield WebUtils_1.webUtils.clickOn(IWantTo_1.IWantTo.IWantTo);
        protractor_1.browser.wait(EC.elementToBeClickable(Home_1.Home.IWantTo1Menu), 10000).then(function () { });
        Home_1.Home.IWantTo1Menu.getText().then(function (text) {
            expect(text).to.equal('Actions on your greyhound\n1/1');
        });
        Home_1.Home.IWantTo1Description.getText().then(function (text) {
            expect(text).to.equal('Go here to do actions against your racing greyhound.');
        });
        yield WebUtils_1.webUtils.clickOn(Home_1.Home.GotIt);
    }
    else if (page == 'Calendar') {
        protractor_1.browser.driver.sleep(1000);
        // w.SkipOverlay()
        protractor_1.browser.wait(EC.elementToBeClickable(Home_1.Home.Calendar), 5000).then(function () { });
        yield WebUtils_1.webUtils.clickOn(Home_1.Home.Calendar);
        protractor_1.browser.wait(EC.elementToBeClickable(Home_1.Home.Calendar1Menu), 10000).then(function () { });
        Home_1.Home.Calendar1Menu.getText().then(function (text) {
            expect(text).to.equal('Race Meeting acronyms\n1/2');
        });
        Home_1.Home.Calendar1Description.getText().then(function (text) {
            expect(text).to.equal('Metro: Metropolitan Meeting\nPFS: Provincial Full Stakes\nTier3: Half Stakes\nRLM: Rank Limit Meeting - Half Stakes\nAPM: Aged Prizemoney Meeting\nHSM: Half Stakes Meeting');
        });
        yield WebUtils_1.webUtils.clickOn(Home_1.Home.GotIt);
        protractor_1.browser.wait(EC.elementToBeClickable(Home_1.Home.Calendar2Menu), 1000).then(function () { });
        Home_1.Home.Calendar2Menu.getText().then(function (text) {
            expect(text).to.equal('View Victorian Races\n2/2');
        });
        Home_1.Home.Calendar2Description.getText().then(function (text) {
            expect(text).to.equal('Navigate through weekly/monthly race meetings.');
        });
        yield WebUtils_1.webUtils.clickOn(Home_1.Home.Gotit2);
    }
}));
cucumber_1.When('user views the {string} page and filters by {string}', (page, filter) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(1000);
    WebUtils_1.webUtils.SkipOverlay();
    if (page == 'My Dogs->Active') {
        protractor_1.browser.takeScreenshot().then(function (png) { writeScreenShot(png, 'MyDogsActive.png'); });
        protractor_1.browser.wait(EC.elementToBeClickable(MyDogs_1.MyDogs.Filter), 10000).then(function () { });
        yield WebUtils_1.webUtils.clickOn(MyDogs_1.MyDogs.Filter);
        yield protractor_1.browser.driver.sleep(1000);
        WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterRacing, true);
        WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterNominate, true);
        WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterWarning, true);
        WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterIssue, true);
        WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterOwned, true);
        WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterTraining, true);
        WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterSpelling, true);
        WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterEducating, true);
        WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterBreeding, true);
        WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterWhelping, true);
        WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterRearing, true);
        WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterDefault, true);
        WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterPet, true);
        WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterGap, true);
        WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterEuthanised, true);
        WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterExported, true);
        WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterDeceased, true);
        WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterPetThirdParty, true);
        switch (filter) {
            case 'All': break;
            case 'Reset':
                yield WebUtils_1.webUtils.clickOn(MyDogs_1.MyDogs.Reset);
                break;
            case 'Racing':
                yield WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterRacing, true);
                break;
            case 'Nominated':
                yield WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterNominate, true);
                break;
            case 'Warning':
                yield WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterWarning, true);
                break;
            case 'Issue':
                yield WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterIssue, true);
                break;
            case 'Owned':
                yield WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterOwned, true);
                yield protractor_1.browser.driver.sleep(5000);
                break;
            case 'Training':
                yield WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterTraining, true);
                break;
            case 'Spelling':
                yield WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterSpelling, true);
                break;
            case 'Educating':
                yield WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterEducating, true);
                break;
            case 'Breeding':
                yield WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterBreeding, true);
                break;
            case 'Whelping':
                yield WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterRearing, true);
                break;
            case 'Rearing':
                yield WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterRearing, true);
                break;
            case 'Default':
                yield WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterDefault, true);
                break;
            default: console.log("Wrong Filter");
        }
    }
    else if (page == 'My Dogs->Non Active') {
        yield WebUtils_1.webUtils.clickOn(MyDogs_1.MyDogs.NonActiveDogs);
        protractor_1.browser.takeScreenshot().then(function (png) { writeScreenShot(png, 'MyDogsNonActive.png'); });
        yield WebUtils_1.webUtils.clickOn(MyDogs_1.MyDogs.Filter);
        yield protractor_1.browser.driver.sleep(1000);
        WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterPet, true);
        WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterGap, true);
        WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterBreeding, true);
        WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterEuthanised, true);
        WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterExported, true);
        WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterDeceased, true);
        WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterPetThirdParty, true);
        WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterDefault, true);
        switch (filter) {
            case 'All': break;
            case 'Reset':
                yield WebUtils_1.webUtils.clickOn(MyDogs_1.MyDogs.Reset);
                break;
            case 'Pet':
                yield WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterPet, true);
                break;
            case 'Gap':
                yield WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterGap, true);
                break;
            case 'Breeding':
                yield WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterBreeding, true);
                break;
            case 'Euthanised':
                yield WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterEuthanised, true);
                break;
            case 'Exported':
                yield WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterExported, true);
                break;
            case 'Deceased':
                yield WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterDeceased, true);
                break;
            case 'Pet-Third-Party':
                yield WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterPetThirdParty, true);
                break;
            case 'Default':
                yield WebUtils_1.webUtils.setCheckBox(MyDogs_1.MyDogs.FilterDefault, true);
                break;
            default: console.log("Wrong Filter");
        }
    }
    else if (page == 'My Dogs->Litters') {
        yield WebUtils_1.webUtils.clickOn(MyDogs_1.MyDogs.Litters);
        yield protractor_1.browser.driver.sleep(5000);
        WebUtils_1.webUtils.SkipOverlay();
        protractor_1.browser.takeScreenshot().then(function (png) { writeScreenShot(png, 'Litter.png'); });
        yield WebUtils_1.webUtils.clickOn(MyDogs_1.MyDogs.FilterOnLitters);
        WebUtils_1.webUtils.SkipOverlay();
        yield protractor_1.browser.driver.sleep(5000);
        protractor_1.browser.executeScript('window.scrollTo(0,5000)').then(() => __awaiter(void 0, void 0, void 0, function* () { }));
        switch (filter) {
            case 'All':
                yield WebUtils_1.webUtils.clickOn(MyDogs_1.MyDogs.FilterAll);
                break;
            case 'Past Year':
                yield WebUtils_1.webUtils.clickOn(MyDogs_1.MyDogs.FilterPastYear);
                break;
            case 'Past 5 Years':
                yield WebUtils_1.webUtils.clickOn(MyDogs_1.MyDogs.FilterPast5Years);
                break;
            case 'Cancel':
                yield WebUtils_1.webUtils.clickOn(MyDogs_1.MyDogs.Cancel);
                break;
            default: console.log("Wrong Filter");
        }
    }
    else if (page == 'Calendar') {
        yield protractor_1.browser.driver.sleep(2000);
        WebUtils_1.webUtils.SkipOverlay();
        yield protractor_1.browser.driver.sleep(1000);
        WebUtils_1.webUtils.filter(Calendar_1.Calendar.Filter, true);
        switch (filter) {
            case 'Metro':
                yield WebUtils_1.webUtils.filter(Calendar_1.Calendar.FilterMetro, true);
                break;
            case 'PFS':
                yield WebUtils_1.webUtils.filter(Calendar_1.Calendar.FilterPFS, true);
                break;
            case 'Tier 3':
                yield WebUtils_1.webUtils.filter(Calendar_1.Calendar.FilterTier3, true);
                break;
            case 'RLM':
                yield WebUtils_1.webUtils.filter(Calendar_1.Calendar.FilterRLM, true);
                break;
            case 'HSM':
                yield WebUtils_1.webUtils.filter(Calendar_1.Calendar.DogFilterHSM, true);
                break;
            case 'CS':
                yield WebUtils_1.webUtils.filter(Calendar_1.Calendar.DogFilterCS, true);
                break;
            default: console.log("Wrong filter");
        }
    }
    else if (page == 'Greyhound Record') {
        switch (filter) {
            case 'All':
                yield WebUtils_1.webUtils.clickOn(COP_1.COP.FilterAll);
                break;
            case 'Health':
                yield WebUtils_1.webUtils.clickOn(COP_1.COP.FilterHealth);
                break;
            case 'Illness':
                yield WebUtils_1.webUtils.clickOn(COP_1.COP.FilterIllness);
                break;
            case 'Injury':
                yield WebUtils_1.webUtils.clickOn(COP_1.COP.FilterInjury);
                break;
        }
    }
}));
cucumber_1.When('user views the {string} page and sorts by {string}', (page, sort) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(1000);
    WebUtils_1.webUtils.SkipOverlay();
    if (page == 'My Dogs->Active') {
        yield WebUtils_1.webUtils.clickOn(MyDogs_1.MyDogs.SortActive);
    }
    else if (page == 'My Dogs->Non Active') {
        yield WebUtils_1.webUtils.clickOn(MyDogs_1.MyDogs.NonActiveDogs);
        yield WebUtils_1.webUtils.clickOn(MyDogs_1.MyDogs.SortNonActive);
    }
    yield protractor_1.browser.driver.sleep(1000);
    switch (sort) {
        case 'Kennel name A - Z':
            yield WebUtils_1.webUtils.clickOn(MyDogs_1.MyDogs.SortByKennelA_Z);
            yield MyDogs_1.MyDogs.Close.click();
            break;
        case 'Kennel name Z - A':
            break;
            WebUtils_1.webUtils.clickOn(MyDogs_1.MyDogs.SortByKennelZ_A);
            yield MyDogs_1.MyDogs.Close.click();
            break;
        case 'Racing name A - Z':
            yield WebUtils_1.webUtils.clickOn(MyDogs_1.MyDogs.SortByRacingA_Z);
            yield MyDogs_1.MyDogs.Close.click();
            break;
        case 'Racing name Z - A':
            WebUtils_1.webUtils.clickOn(MyDogs_1.MyDogs.SortByRacingZ_A);
            yield MyDogs_1.MyDogs.Close.click();
            break;
        case 'help date - Youngest':
            yield WebUtils_1.webUtils.clickOn(MyDogs_1.MyDogs.SortByYoungest);
            yield MyDogs_1.MyDogs.Close.click();
            break;
        case 'Whelp date - Oldest':
            yield WebUtils_1.webUtils.clickOn(MyDogs_1.MyDogs.SortByOldest);
            yield MyDogs_1.MyDogs.Close.click();
            break;
        case 'Dog Sex - Bitch first':
            yield WebUtils_1.webUtils.clickOn(MyDogs_1.MyDogs.SortByBitchFirst);
            yield MyDogs_1.MyDogs.Close.click();
            break;
        case 'Dog Sex - Dog first':
            yield WebUtils_1.webUtils.clickOn(MyDogs_1.MyDogs.SortByDogFirst);
            yield MyDogs_1.MyDogs.Close.click();
            break;
        case 'Reset':
            yield WebUtils_1.webUtils.clickOn(MyDogs_1.MyDogs.Reset);
            yield protractor_1.browser.driver.sleep(2000);
            break;
        default: console.log("Wrong Sorting");
    }
}));
cucumber_1.When('user clicks the {string} on Calendar Page', (option) => __awaiter(void 0, void 0, void 0, function* () {
    switch (option) {
        case 'Filter':
            yield WebUtils_1.webUtils.clickOn(Calendar_1.Calendar.Filter);
            break;
        case 'i':
            yield WebUtils_1.webUtils.clickOn(Calendar_1.Calendar.i);
            break;
        case 'Next Month':
            yield WebUtils_1.webUtils.clickOn(Calendar_1.Calendar.Filter);
            break;
        case 'Previous Month':
            yield WebUtils_1.webUtils.clickOn(Calendar_1.Calendar.Filter);
            break;
        default: console.log("Wrong click");
    }
}));
cucumber_1.When('user views the {string} page with {string}', (page, option) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(1000);
    if (page == 'Calendar') {
        if (option == 'filter')
            WebUtils_1.webUtils.filter(Calendar_1.Calendar.Filter, true);
        else if (option == 'i')
            yield WebUtils_1.webUtils.clickOn(Calendar_1.Calendar.i);
        protractor_1.browser.takeScreenshot().then(function (png) { writeScreenShot(png, 'Calendar.png'); });
    }
    else if (page == 'Litter') {
        if (option == 'filter')
            WebUtils_1.webUtils.SkipOverlay();
        protractor_1.browser.wait(EC.elementToBeClickable(BreedingAndLitters_1.BreedingAndLitters.LitterFilter), 2000).then(function () { });
        yield WebUtils_1.webUtils.clickOn(BreedingAndLitters_1.BreedingAndLitters.LitterFilter);
    }
}));
cucumber_1.When('user views the {string} page and filters by {string} option', (page, option) => __awaiter(void 0, void 0, void 0, function* () {
    if (page == 'Calendar') {
        yield protractor_1.browser.driver.sleep(1000);
        WebUtils_1.webUtils.filter(Calendar_1.Calendar.Filter, true);
        yield WebUtils_1.webUtils.clickOn(Calendar_1.Calendar.FilterMetro);
        yield WebUtils_1.webUtils.clickOn(Calendar_1.Calendar.FilterPFS);
        yield WebUtils_1.webUtils.clickOn(Calendar_1.Calendar.FilterTier3);
        yield WebUtils_1.webUtils.clickOn(Calendar_1.Calendar.FilterRLM);
        yield WebUtils_1.webUtils.clickOn(Calendar_1.Calendar.DogFilterHSM);
        yield WebUtils_1.webUtils.clickOn(Calendar_1.Calendar.DogFilterCS);
        switch (option) {
            case 'Metro':
                yield WebUtils_1.webUtils.filter(Calendar_1.Calendar.FilterMetro, true);
                break;
            case 'PFS':
                yield WebUtils_1.webUtils.filter(Calendar_1.Calendar.FilterPFS, true);
                break;
            case 'Tier 3':
                yield WebUtils_1.webUtils.filter(Calendar_1.Calendar.FilterTier3, true);
                break;
            case 'RLM':
                yield WebUtils_1.webUtils.filter(Calendar_1.Calendar.FilterRLM, true);
                break;
            case 'HSM':
                yield WebUtils_1.webUtils.filter(Calendar_1.Calendar.DogFilterHSM, true);
                break;
            case 'CS':
                yield WebUtils_1.webUtils.filter(Calendar_1.Calendar.DogFilterCS, true);
                yield protractor_1.browser.driver.sleep(1000);
                break;
            default: console.log("Wrong click");
        }
    }
}));
cucumber_1.When('user views the status for the {string} with litter registration as {string}', (registration, status) => __awaiter(void 0, void 0, void 0, function* () {
    BreedingAndLitters_1.BreedingAndLitters.LitterServiceLodged.getText().then(function (text) {
        expect(text).to.be.equal('STUDMASTER\n9 weeks\nCompleted');
    });
    if (registration == 'Earbrand' || 'Microchip') {
        protractor_1.browser.executeScript('window.scrollTo(0,500)').then(() => __awaiter(void 0, void 0, void 0, function* () { }));
    }
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2hlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBkZWZpbml0aW9ucy9XaGVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLDJDQUFxQztBQUNyQywrQ0FBNEM7QUFDNUMsMkNBQXdDO0FBQ3hDLGdEQUE0RDtBQUM1RCxpREFBOEM7QUFDOUMsZ0ZBQWlEO0FBRWpELHVEQUFtRDtBQUNuRCxpREFBOEM7QUFDOUMsZ0RBQW1EO0FBQ25ELHNDQUFtQztBQUNuQyx5Q0FBc0M7QUFDdEMsdUVBQW9FO0FBQ3BFLHVEQUFvRDtBQUdwRCxpRUFBOEQ7QUFDOUQseURBQXNEO0FBQ3RELCtDQUE0QztBQUM1QyxtREFBZ0Q7QUFFaEQsSUFBSSxFQUFFLEdBQUcsaUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztBQUV2QyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQ3BDLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2QixTQUFTLGVBQWUsQ0FBQyxHQUFHLEVBQUUsUUFBUTtJQUNwQyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUN4QyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDZixDQUFDO0FBRUQsZUFBSSxDQUFDLCtDQUErQyxFQUFFLENBQU8sTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFO0lBQzlFLFdBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRztRQUMzQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMv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