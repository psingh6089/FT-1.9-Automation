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
const Home_1 = require("../Specs/ui/Home");
/*BeforeAll(async function (){

 });*/
/*Before({tags: "@test"}, function () {
  // This hook will be executed before scenarios tagged with @foo
 // browser.manage().window().maximize();
});*/
cucumber_1.After({ tags: "@test" }, (scenario) => __awaiter(void 0, void 0, void 0, function* () {
    yield Home_1.Home.Logout.click();
}));
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        // This hook will be executed before scenarios tagged with @foo
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            //code to take screesnhot
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, "image/png");
            //   Home.Logout.click();
        }
        // Home.Logout.click();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwZGVmaW5pdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSx1Q0FBNEQ7QUFDNUQsMkNBQXFDO0FBQ3JDLDJDQUF3QztBQUV4Qzs7TUFFTTtBQUVOOzs7S0FHSztBQUVMLGdCQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBTyxRQUFRLEVBQUUsRUFBRTtJQUUxQyxNQUFNLFdBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDNUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUdILGdCQUFLLENBQUMsVUFBZ0IsUUFBUTs7UUFDNUIsK0RBQStEO1FBQy9ELElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssaUJBQU0sQ0FBQyxNQUFNLEVBQUU7WUFDNUMseUJBQXlCO1lBQ3pCLE1BQU0sVUFBVSxHQUFHLE1BQU0sb0JBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUVsRCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUNyQyx5QkFBeUI7U0FDMUI7UUFDRCx1QkFBdUI7SUFFekIsQ0FBQztDQUFBLENBQUMsQ0FBQyJ9