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
exports.webUtils = void 0;
const Home_1 = require("../Specs/ui/Home");
const Racing_1 = require("../Specs/ui/Racing");
const protractor_1 = require("protractor");
const Account_1 = require("../Specs/ui/Account");
const DataInput_json_1 = __importDefault(require("../testData/DataInput.json"));
const Non_Racing_1 = require("../Specs/ui/Non-Racing");
const IWantTo_1 = require("../Specs/ui/IWantTo");
class webUtils {
    static logIn(User) {
        if (User == "Paul Westerveld") {
            webUtils.clickOn(Home_1.Home.Login);
            Home_1.Home.UserName.sendKeys(DataInput_json_1.default.data.Paul_User);
            Home_1.Home.Password.sendKeys(DataInput_json_1.default.data.Password);
            webUtils.clickOn(Home_1.Home.LoginContinue);
        }
        else if (User == "William Mcmahon") {
            webUtils.clickOn(Home_1.Home.Login);
            Home_1.Home.UserName.sendKeys(DataInput_json_1.default.data.William_User);
            Home_1.Home.Password.sendKeys(DataInput_json_1.default.data.Password);
            webUtils.clickOn(Home_1.Home.LoginContinue);
        }
        else if (User == "David Long") {
            webUtils.clickOn(Home_1.Home.Login);
            Home_1.Home.UserName.sendKeys(DataInput_json_1.default.data.David_user);
            Home_1.Home.Password.sendKeys(DataInput_json_1.default.data.Password);
            webUtils.clickOn(Home_1.Home.LoginContinue);
        }
    }
    static dogList() {
        Racing_1.Racing.DogList.count().then((list) => __awaiter(this, void 0, void 0, function* () {
            for (var i = 0; i < list; i++) {
                //  let sampleElement: ElementFinder = Racing.DogList.Dog;
                // await sampleElement.click();
            }
        }));
    }
    static dogAction(action) {
        let obj;
        switch (action) {
            //    case "Nominate": obj = Racing.Nominate; break;
            //   case "Change Dog Activity": obj = Racing.ChangeDogActivity; break;
            case "Transfer ownership":
                obj = Racing_1.Racing.Transfer;
                break;
            case "Retire":
                obj = Racing_1.Racing.Retire;
                break;
            case "Issue breeding authority":
                obj = Racing_1.Racing.IssueBreedingAuthority;
                break;
            // case "Track the dog": obj = Racing.TrackDog; break;
            // case "Register a service": obj = Racing.registerService; break;
        }
        return obj;
    }
    static registerService(User) {
        Racing_1.Racing.MyDogs.click();
        Racing_1.Racing.DogAction.click();
        Racing_1.Racing.RegisterService.getWebElement().then(function (elm) {
            return protractor_1.browser.executeScript("(arguments[0]).click();", elm);
        });
        protractor_1.browser.driver.sleep(5000);
        Racing_1.Racing.Earbrand.sendKeys("VGODE");
        Racing_1.Racing.DamName.sendKeys("DIM SIM");
        Racing_1.Racing.Search.click();
        protractor_1.browser.driver.sleep(5000);
    }
    static viewSyndicate() {
        webUtils.clickOn(Account_1.Account.Account);
        webUtils.waitForLoader();
        webUtils.clickOn(Account_1.Account.Syndicate);
        webUtils.waitForLoader();
    }
    static viewDetails() {
        webUtils.waitForLoader();
        Account_1.Account.ViewDetails.each(function (element, index) {
            element.getText().then((text) => __awaiter(this, void 0, void 0, function* () {
                console.log(text);
            }));
        });
        webUtils.clickOn(Account_1.Account.selectViewDetail);
    }
    static updateAccountDetails(tab, menu) {
        webUtils.clickOn(Account_1.Account.Account);
        webUtils.waitForLoader();
        protractor_1.browser.executeScript('window.scrollTo(0,5000)');
        webUtils.clickOn(Account_1.Account.UpdateAccountDetails);
        webUtils.waitForLoader();
    }
    static clickApplyDogName() {
        webUtils.clickOn(Racing_1.Racing.MyDogs);
        webUtils.clickOn(Non_Racing_1.NonRacing.NonRacing);
        webUtils.waitForLoader();
        webUtils.clickOn(Racing_1.Racing.Dog2);
        webUtils.clickOn(Non_Racing_1.NonRacing.ApplyDogName);
    }
    static issueBreedingAuthority() {
        webUtils.clickOn(IWantTo_1.IWantTo.IWantTo);
        webUtils.waitForLoader();
        webUtils.clickOn(IWantTo_1.IWantTo.BreedGreyhound);
        protractor_1.browser.executeScript('window.scrollTo(0,5000)');
        webUtils.clickOn(IWantTo_1.IWantTo.TransferDogToBreeder);
        webUtils.clickOn(IWantTo_1.IWantTo.IWantTo);
        webUtils.clickOn(IWantTo_1.IWantTo.IssueBreedingAuthority);
        webUtils.waitForLoader();
        Racing_1.Racing.EarBrand.getText().then((earbrand) => { var earbrand; return __awaiter(this, void 0, void 0, function* () {
            earbrand = earbrand.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
            console.log('Earbrand of dog is:' + earbrand);
        }); });
        webUtils.clickOn(IWantTo_1.IWantTo.SelectDog);
        webUtils.waitForLoader();
    }
    static enterServiceDetails() {
        webUtils.waitForLoader();
        webUtils.clickOn(Racing_1.Racing.Artificial);
        Racing_1.Racing.Text.sendKeys(DataInput_json_1.default.data.Witness);
        protractor_1.browser.executeScript('window.scrollTo(0,5000)');
        webUtils.clickOn(Racing_1.Racing.DateArrivedCalender);
        protractor_1.browser.executeScript('window.scrollTo(0,5000);');
        webUtils.waitForLoader();
        webUtils.clickOn(Racing_1.Racing.PreviousMonth);
        webUtils.clickOn(Racing_1.Racing.DateArrivedSelection);
        webUtils.clickOn(Racing_1.Racing.ServiceDateCalender);
        webUtils.waitForLoader();
        webUtils.clickOn(Racing_1.Racing.PreviousMonth);
        webUtils.clickOn(Racing_1.Racing.ServiceDateSelection);
        webUtils.clickOn(Racing_1.Racing.DepartedDateCalender);
        webUtils.waitForLoader();
        webUtils.clickOn(Racing_1.Racing.PreviousMonth);
        webUtils.clickOn(Racing_1.Racing.DepartedDateSelection);
        webUtils.clickOn(Racing_1.Racing.Search);
        webUtils.waitForLoader();
    }
    static clickTransferOwnership() {
        webUtils.clickOn(Racing_1.Racing.MyDogs);
        protractor_1.browser.executeScript('window.scrollTo(0,5000);');
        webUtils.clickOn(Racing_1.Racing.LoadMore);
        protractor_1.browser.executeScript('window.scrollTo(0,5000);');
        webUtils.clickOn(Racing_1.Racing.Dog16);
        webUtils.clickOn(Racing_1.Racing.Transfer);
    }
    static updateAddressDetails() {
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
        webUtils.clickOn(Account_1.Account.Save);
        webUtils.waitForLoader();
    }
    static applyDogName() {
        Non_Racing_1.NonRacing.EnterName1.sendKeys(DataInput_json_1.default.data.Dog1);
        webUtils.clickOn(Non_Racing_1.NonRacing.AddDog);
        Non_Racing_1.NonRacing.EnterName2.sendKeys(DataInput_json_1.default.data.Dog2);
        webUtils.clickOn(Non_Racing_1.NonRacing.AddDog);
        Non_Racing_1.NonRacing.EnterName3.sendKeys(DataInput_json_1.default.data.Dog3);
        webUtils.clickOn(Non_Racing_1.NonRacing.AddDog);
        Non_Racing_1.NonRacing.EnterName4.sendKeys(DataInput_json_1.default.data.Dog4);
        protractor_1.browser.executeScript('window.scrollTo(0,5000);');
        webUtils.clickOn(Non_Racing_1.NonRacing.AddDog);
        Non_Racing_1.NonRacing.EnterName5.sendKeys(DataInput_json_1.default.data.Dog5);
        webUtils.clickOn(Non_Racing_1.NonRacing.AddDog);
        Non_Racing_1.NonRacing.EnterName6.sendKeys(DataInput_json_1.default.data.Dog6);
        webUtils.clickOn(Non_Racing_1.NonRacing.AddDog);
        protractor_1.browser.executeScript('window.scrollTo(0,5000);');
        Non_Racing_1.NonRacing.EnterName7.sendKeys(DataInput_json_1.default.data.Dog7);
        webUtils.clickOn(Non_Racing_1.NonRacing.AddDog);
        Non_Racing_1.NonRacing.EnterName8.sendKeys(DataInput_json_1.default.data.Dog8);
        webUtils.clickOn(Non_Racing_1.NonRacing.AddDog);
        Non_Racing_1.NonRacing.EnterName9.sendKeys(DataInput_json_1.default.data.Dog9);
        webUtils.clickOn(Non_Racing_1.NonRacing.AddDog);
        protractor_1.browser.executeScript('window.scrollTo(0,5000);');
        Non_Racing_1.NonRacing.EnterName10.sendKeys(DataInput_json_1.default.data.Dog10);
        webUtils.waitForLoader();
    }
    static fillInterstateAuthority() {
        webUtils.waitForLoader();
        webUtils.clickOn(Racing_1.Racing.Interstate);
        webUtils.clickOn(Racing_1.Racing.IAgreeIssueBreeding);
        Racing_1.Racing.InputFirstName.sendKeys('Paul');
        Racing_1.Racing.InputLastName.sendKeys('Westerveld');
        protractor_1.browser.executeScript('window.scrollTo(0,5000);');
        webUtils.waitForLoader();
        Racing_1.Racing.Inputstreet.sendKeys('Testing123');
        Racing_1.Racing.InputSuburb.sendKeys('Southbank');
        Racing_1.Racing.InputState.click().then(() => __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.executeScript('window.scrollTo(0,5000);');
            Racing_1.Racing.SelectVic.click().then(function () {
                protractor_1.browser.driver.sleep(5000);
            });
        }));
        Racing_1.Racing.InputPostCode.sendKeys('3006');
    }
    static moveTo(objName) {
        let obj;
        switch (objName) {
            case "My Dog":
                obj = Racing_1.Racing.MyDogs;
                break;
            case 'IWantTo':
                obj = IWantTo_1.IWantTo.IWantTo;
                break;
            case "Account":
                obj = Account_1.Account.Account;
                break;
            case "Clubs":
                obj = 'IWantTo.ClubTrials';
                break;
            case "Update account details":
                obj = Account_1.Account.UpdateAccountDetails;
                break;
            default: obj === undefined ? console.log("Object name '" + obj + "' doesn't match any existing object, please check the name or add it under moveTo function dictionary") : null;
        }
        //  obj = webUtils.getObjectForName(objName);
        console.log("Moving to section: " + objName);
        webUtils.waitForObj(obj);
        console.log(obj);
        return webUtils.clickOn(obj);
    }
    static getObjectForName(objName) {
        let obj;
        switch (objName) {
            case "My Dog":
                obj = Racing_1.Racing.MyDogs;
                break;
            case "I Want To":
                obj = IWantTo_1.IWantTo.IWantTo;
                break;
            case "Account":
                obj = Account_1.Account.Account;
                break;
            case "Trials":
                obj = IWantTo_1.IWantTo.ClubTrials;
                break;
            case "Update account details":
                obj = Account_1.Account.UpdateAccountDetails;
                break;
            default: obj === undefined ? console.log("Object name '" + obj + "' doesn't match any existing object, please check the name or add it under moveTo function dictionary") : null;
        }
        return obj;
    }
    static clickOn(obj) {
        return obj.isPresent().then(result => {
            result ? obj.isDisplayed().then(res => {
                obj.click().then(function () {
                    protractor_1.browser.driver.sleep(5000);
                    console.log("text");
                });
            }) : logError(obj);
            function logError(obj) {
                obj.getAttribute('name').then(name => {
                    console.error(name + "clickOn: Object is currently not visible to click");
                });
            }
        });
    }
    static waitForObj(obj) {
        return protractor_1.browser.wait(function () {
        }, 2000);
    }
    static waitForLoader() {
        return protractor_1.browser.wait(function () { }, 5000);
    }
}
exports.webUtils = webUtils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViVXRpbHMxMS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3V0aWxzL3dlYlV0aWxzMTEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsMkNBQXdDO0FBQ3hDLCtDQUE0QztBQUM1QywyQ0FBcUM7QUFDckMsaURBQThDO0FBQzlDLGdGQUFpRDtBQUNqRCx1REFBbUQ7QUFDbkQsaURBQThDO0FBRzlDLE1BQWEsUUFBUTtJQUVqQixNQUFNLENBQ0YsS0FBSyxDQUFDLElBQUk7UUFDVixJQUFJLElBQUksSUFBSSxpQkFBaUIsRUFBRTtZQUMzQixRQUFRLENBQUMsT0FBTyxDQUFDLFdBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QixXQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyx3QkFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNoRCxXQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyx3QkFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvQyxRQUFRLENBQUMsT0FBTyxDQUFDLFdBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUN4QzthQUNJLElBQUksSUFBSSxJQUFJLGlCQUFpQixFQUFFO1lBQ2hDLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCLFdBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLHdCQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ25ELFdBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLHdCQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9DLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3hDO2FBQ0ksSUFBSSxJQUFJLElBQUksWUFBWSxFQUFFO1lBQzNCLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBSSxDQUFD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