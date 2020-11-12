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
const ActiveDogs_1 = require("../Specs/ui/ActiveDogs");
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
        yield WebUtils_1.webUtils.clickOn(ActiveDogs_1.ActiveDogs.Filter);
        yield protractor_1.browser.driver.sleep(1000);
        WebUtils_1.webUtils.setCheckBox(ActiveDogs_1.ActiveDogs.FilterRacing, true);
        WebUtils_1.webUtils.setCheckBox(ActiveDogs_1.ActiveDogs.FilterNominate, true);
        WebUtils_1.webUtils.setCheckBox(ActiveDogs_1.ActiveDogs.FilterWarning, true);
        WebUtils_1.webUtils.setCheckBox(ActiveDogs_1.ActiveDogs.FilterIssue, true);
        WebUtils_1.webUtils.setCheckBox(ActiveDogs_1.ActiveDogs.FilterOwned, true);
        WebUtils_1.webUtils.setCheckBox(ActiveDogs_1.ActiveDogs.FilterTraining, true);
        WebUtils_1.webUtils.setCheckBox(ActiveDogs_1.ActiveDogs.FilterSpelling, true);
        WebUtils_1.webUtils.setCheckBox(ActiveDogs_1.ActiveDogs.FilterEducating, true);
        WebUtils_1.webUtils.setCheckBox(ActiveDogs_1.ActiveDogs.FilterBreeding, true);
        WebUtils_1.webUtils.setCheckBox(ActiveDogs_1.ActiveDogs.FilterWhelping, true);
        WebUtils_1.webUtils.setCheckBox(ActiveDogs_1.ActiveDogs.FilterRearing, true);
        WebUtils_1.webUtils.setCheckBox(ActiveDogs_1.ActiveDogs.FilterDefault, true);
        switch (filter) {
            case 'All': break;
            case 'Reset': break;
            case 'Racing':
                yield WebUtils_1.webUtils.setCheckBox(ActiveDogs_1.ActiveDogs.FilterRacing, false);
                break;
            case 'My Dogs->Non Active':
                protractor_1.browser.takeScreenshot().then(function (png) { writeScreenShot(png, 'MyDogsNonActive.png'); });
                break;
            case 'My Dogs->Litter': protractor_1.browser.takeScreenshot().then(function (png) { writeScreenShot(png, 'MyDogsLitter.png'); });
        }
        yield ActiveDogs_1.ActiveDogs.Close.click();
    }
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2hlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBkZWZpbml0aW9ucy9XaGVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLDJDQUFxQztBQUNyQywrQ0FBNEM7QUFDNUMsMkNBQXdDO0FBQ3hDLGdEQUE0RDtBQUM1RCxpREFBOEM7QUFDOUMsZ0ZBQWlEO0FBRWpELHVEQUFtRDtBQUNuRCxpREFBOEM7QUFDOUMsZ0RBQW1EO0FBQ25ELHNDQUFtQztBQUNuQyx5Q0FBc0M7QUFDdEMsdUVBQW9FO0FBQ3BFLHVEQUFvRDtBQUdwRCxpRUFBOEQ7QUFDOUQseURBQXNEO0FBQ3RELHVEQUFvRDtBQUNwRCxJQUFJLEVBQUUsR0FBRyxpQkFBVSxDQUFDLGtCQUFrQixDQUFDO0FBRXZDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDcEMsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLFNBQVMsZUFBZSxDQUFDLEdBQUcsRUFBRSxRQUFRO0lBQ3BDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNmLENBQUM7QUFFRCxlQUFJLENBQUMsK0NBQStDLEVBQUUsQ0FBTyxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUU7SUFDOUUsV0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHO1FBQzNDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ2pDLENBQUMsQ0FBQyxD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