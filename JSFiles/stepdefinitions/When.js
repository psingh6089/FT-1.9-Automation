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
cucumber_1.When('User clicks on {string} button', function (button) {
    // w.confirmButton(button);
    if (button == "cancel") {
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
        protractor_1.browser.driver.sleep(5000).then(function () { });
        //  w.clickOn(Racing.Continue)
        //browser.wait(EC.elementToBeClickable(Racing.Continue), 5000).then(function () { })
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
cucumber_1.When('user enters the Name details of the new person to be transferred and {string}', (action) => __awaiter(void 0, void 0, void 0, function* () {
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
cucumber_1.When('user enters the Authority Key and Ear brand details of dog for {string} and {string}', (option, action) => __awaiter(void 0, void 0, void 0, function* () {
    if (action == 'proceeds') {
        Racing_1.Racing.AddAuthorityKey.sendKeys('6034309557');
        Racing_1.Racing.AddEarBrand.sendKeys('VIRHD');
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
        Racing_1.Racing.AddEarBrand.sendKeys('VIRHD');
        protractor_1.browser.wait(EC.elementToBeClickable(Racing_1.Racing.Validate), 5000).then(function () { });
        yield Racing_1.Racing.Validate.click();
        yield protractor_1.browser.driver.sleep(1000);
        expect(yield Racing_1.Racing.validateError.isDisplayed()).to.be.equal(true);
    }
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
    yield protractor_1.browser.driver.sleep(1000);
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
            break;
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
        yield protractor_1.browser.driver.sleep(2000);
        WebUtils_1.webUtils.SkipOverlay();
        protractor_1.browser.takeScreenshot().then(function (png) { writeScreenShot(png, 'Litter.png'); });
        yield WebUtils_1.webUtils.clickOn(MyDogs_1.MyDogs.FilterOnLitters);
        WebUtils_1.webUtils.SkipOverlay();
        yield protractor_1.browser.driver.sleep(1000);
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
    }
}));
cucumber_1.When('user views the {string} page with {string}', (page, option) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.driver.sleep(1000);
    if (option == 'filter')
        WebUtils_1.webUtils.filter(Calendar_1.Calendar.Filter, true);
    else if (option == 'i')
        yield WebUtils_1.webUtils.clickOn(Calendar_1.Calendar.i);
    protractor_1.browser.takeScreenshot().then(function (png) { writeScreenShot(png, 'Calendar.png'); });
}));
cucumber_1.When('user views the {string} page and filters by {string} option', (page, option) => __awaiter(void 0, void 0, void 0, function* () {
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
    }
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2hlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBkZWZpbml0aW9ucy9XaGVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLDJDQUFxQztBQUNyQywrQ0FBNEM7QUFDNUMsMkNBQXdDO0FBQ3hDLGdEQUE0RDtBQUM1RCxpREFBOEM7QUFDOUMsZ0ZBQWlEO0FBRWpELHVEQUFtRDtBQUNuRCxpREFBOEM7QUFDOUMsZ0RBQW1EO0FBQ25ELHNDQUFtQztBQUNuQyx5Q0FBc0M7QUFDdEMsdUVBQW9FO0FBQ3BFLHVEQUFvRDtBQUdwRCxpRUFBOEQ7QUFDOUQseURBQXNEO0FBQ3RELCtDQUE0QztBQUM1QyxtREFBZ0Q7QUFDaEQsSUFBSSxFQUFFLEdBQUcsaUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztBQUV2QyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQ3BDLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2QixTQUFTLGVBQWUsQ0FBQyxHQUFHLEVBQUUsUUFBUTtJQUNwQyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUN4QyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDZixDQUFDO0FBRUQsZUFBSSxDQUFDLCtDQUErQyxFQUFFLENBQU8sTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFO0lBQzlFLFdBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRztRQUMzQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMv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