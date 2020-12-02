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
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const Account_1 = require("../Specs/ui/Account");
const Menu_1 = require("../Specs/ui/Menu");
/*BeforeAll(async function (){

 });*/
/*Before({tags: "@test"}, function () {
  // This hook will be executed before scenarios tagged with @foo
 // browser.manage().window().maximize();
});*/
cucumber_1.After({ tags: "@test" }, (scenario) => __awaiter(void 0, void 0, void 0, function* () {
    yield Account_1.Account.Account.click();
    yield protractor_1.browser.driver.sleep(2000);
    yield protractor_1.browser.executeScript('window.scrollTo(0,5000);');
    yield Menu_1.Menu.Logout.click();
    /* var EC = protractor.ExpectedConditions;
   browser.wait(EC.alertIsPresent(), 5000);
     let ale:Alert = browser.switchTo().alert();
   ale.accept();*/
}));
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        // This hook will be executed before scenarios tagged with @foo
        // if (scenario.result.status === Status.FAILED) {
        //code to take screesnhot
        const screenshot = yield protractor_1.browser.takeScreenshot();
        this.attach(screenshot, "image/png");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwZGVmaW5pdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSx1Q0FBNEQ7QUFDNUQsMkNBQWlEO0FBSWpELGlEQUE4QztBQUM5QywyQ0FBd0M7QUFFeEM7O01BRU07QUFDTjs7O0tBR0s7QUFFTCxnQkFBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQU8sUUFBUSxFQUFFLEVBQUU7SUFDMUMsTUFBTSxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM5QixNQUFNLG9CQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxNQUFNLG9CQUFPLENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDeEQsTUFBTSxXQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNCOzs7a0JBR2M7QUFDZixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZ0JBQUssQ0FBQyxVQUFnQixRQUFROztRQUM1QiwrREFBK0Q7UUFDaEUsa0RBQWtEO1FBQy9DLHlCQUF5QjtRQUN6QixNQUFNLFVBQVUsR0FBRyxNQUFNLG9CQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUFBLENBQUMsQ0FBQyJ9