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
const protractor_1 = require("protractor");
const protractor_2 = require("protractor");
// spec.js
describe('Protractor Demo App', () => {
    //var firstNumber = element(by.model('first'));
    beforeEach(function () {
        protractor_1.browser.get('http://test.ft19.grv.local/mydogs/racing');
    });
    it('click racing', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.getTitle().then(function (text) {
            console.log(text);
        });
        //click on notification:
        yield protractor_2.element(protractor_2.by.css('[routerlink="/notifications')).click();
        //click on William and save:
        yield protractor_2.element(protractor_2.by.cssContainingText('.mat-button-wrapper', 'William Mcmahon (44472)')).click();
        {
            protractor_1.browser.driver.sleep(3000);
            console.log("William Mcmahon clicked");
        }
        //Click on MyDogs
        yield protractor_2.element(protractor_2.by.css('[routerlink="/mydogs')).click();
        yield protractor_2.element(protractor_2.by.cssContainingText('a.mat-tab-label-active', ' Non Racing Dogs ')).click();
        //browser.driver.sleep(1000);
        yield protractor_2.element(protractor_2.by.cssContainingText('a.mat-tab-label-active', ' Breeding & Litters ')).click();
        //  browser.driver.sleep(1000);
        yield protractor_2.element(protractor_2.by.cssContainingText('a.mat-tab-label-active', ' Blackbook ')).click();
        // browser.driver.sleep(1000);
        //click on racing dog 
        yield protractor_2.element(protractor_2.by.cssContainingText('a.mat-tab-label-active', ' Racing Dogs ')).click();
        //select the 1st dog from the list:
        yield protractor_2.element(protractor_2.by.xpath('//app-dog-card[1]//app-dog-card-header[1]//div[1]//button[1]//span[1]//mat-icon[1]')).click();
        //Transfer to ownership:   
        yield protractor_2.element(protractor_2.by.css('div.actions')).element(protractor_2.by.css('button:nth-child(2)')).element(protractor_2.by.xpath('//span[contains(text(), " Transfer ownership ")]')).click();
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBbUM7QUFDbkMsMkNBQXVDO0FBRXZDLFVBQVU7QUFDVixRQUFRLENBQUMscUJBQXFCLEVBQUUsR0FBRSxFQUFFO0lBQ2hDLCtDQUErQztJQUMvQyxVQUFVLENBQUM7UUFDUCxvQkFBTyxDQUFDLEdBQUcsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO0lBQzVELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGNBQWMsRUFBRSxHQUFPLEVBQUU7UUFDeEIsTUFBTSxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUk7WUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQTtRQUNGLHdCQUF3QjtRQUN4QixNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEQsNEJBQTRCO1FBQ25DLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLEVBQUUseUJBQXlCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzlGO1lBQ0ksb0JBQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQTtTQUN6QztRQUVELGlCQUFpQjtRQUNqQixNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEQsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0IsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDM0YsNkJBQTZCO1FBQzdCLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsd0JBQXdCLEVBQUUsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2hHLCtCQUErQjtRQUM1QixNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkYsOEJBQThCO1FBRTlCLHNCQUFzQjtRQUN0QixNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFdkYsbUNBQW1DO1FBRW5DLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG9GQUFvRixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNySCwyQkFBMkI7UUFDM0IsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBRWpLLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFDRixDQUFDLENBQUMsQ0FBQSJ9