
import { After, Before, Status, BeforeAll } from "cucumber";
import { browser, protractor } from "protractor";
import { Home } from "../Specs/ui/Home";
import { Alert } from 'selenium-webdriver';

/*BeforeAll(async function (){

 });*/
/*Before({tags: "@test"}, function () {
  // This hook will be executed before scenarios tagged with @foo
 // browser.manage().window().maximize();
});*/

After({ tags: "@test" }, async (scenario) => {
  await Home.Logout.click();
 /* var EC = protractor.ExpectedConditions;
browser.wait(EC.alertIsPresent(), 5000);
  let ale:Alert = browser.switchTo().alert();
ale.accept();*/
});

After(async function (scenario) {
  // This hook will be executed before scenarios tagged with @foo
  if (scenario.result.status === Status.FAILED) {
    //code to take screesnhot
    const screenshot = await browser.takeScreenshot();
    this.attach(screenshot, "image/png");
  }
});


