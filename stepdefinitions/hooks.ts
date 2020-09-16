
import { After, Before, Status, BeforeAll } from "cucumber";
import { browser } from "protractor";
import { Home } from "../Specs/ui/Home";

/*BeforeAll(async function (){

 });*/
/*Before({tags: "@test"}, function () {
  // This hook will be executed before scenarios tagged with @foo
 // browser.manage().window().maximize();
});*/

After({ tags: "@test" }, async (scenario) => {
  await Home.Logout.click();
});

After(async function (scenario) {
  // This hook will be executed before scenarios tagged with @foo
  if (scenario.result.status === Status.FAILED) {
    //code to take screesnhot
    const screenshot = await browser.takeScreenshot();
    this.attach(screenshot, "image/png");
  }
});


