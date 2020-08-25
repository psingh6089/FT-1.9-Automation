"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FT1 = void 0;
const protractor_1 = require("protractor");
exports.FT1 = {
    Advanced: protractor_1.element(protractor_1.by.id('details-button')),
    ProceedToFastTrack: protractor_1.element(protractor_1.by.id('proceed-link')),
    EnterUser: protractor_1.element(protractor_1.by.xpath("//input[@name='Username']")),
    EnterPassword: protractor_1.element(protractor_1.by.xpath("//input[@name='Password']")),
    Login: protractor_1.element(protractor_1.by.xpath("//button[contains(text(),'Log in')]"))
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRlQxLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vU3BlY3MvRlQxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF5QztBQUU1QixRQUFBLEdBQUcsR0FBRztJQUVmLFFBQVEsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMxQyxrQkFBa0IsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDbEQsU0FBUyxFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0lBQ3pELGFBQWEsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUM3RCxLQUFLLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7Q0FHL0QsQ0FBQSJ9