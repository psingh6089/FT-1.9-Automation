"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetireGreyhound = void 0;
const protractor_1 = require("protractor");
exports.RetireGreyhound = {
    RetirementStatusDropdown: protractor_1.element(protractor_1.by.css('span.selected-value-button.ng-star-inserted')),
    RetirementStatusList: protractor_1.element(protractor_1.by.css('mat-button-toggle-group')),
    SelectPet: protractor_1.element(protractor_1.by.css('//mat-button-toggle-group/mat-button-toggle[1]')),
    SelectBreedingAnimal: protractor_1.element(protractor_1.by.css('//mat-button-toggle-group/mat-button-toggle[2]')),
    SelectEuthanised: protractor_1.element(protractor_1.by.css('//mat-button-toggle-group/mat-button-toggle[3]')),
    SelectExported: protractor_1.element(protractor_1.by.css('//mat-button-toggle-group/mat-button-toggle[4]')),
    SelectOther: protractor_1.element(protractor_1.by.css('//mat-button-toggle-group/mat-button-toggle[5]')),
    RetiredToOwner: protractor_1.element(protractor_1.by.cssContainingText('div.mat-radio-label-content', 'Owner')),
    RetiredToThirdParty: protractor_1.element(protractor_1.by.cssContainingText('div.mat-radio-label-content', 'A Third Party')),
    RetiredDate: protractor_1.element(protractor_1.by.css('button.mat-focus-indicator.mat-icon-button.mat-button-base')),
    SelectRetiredDate: protractor_1.element(protractor_1.by.css('td.mat-calendar-body-cell.mat-calendar-body-active.ng-star-inserted')),
    EnterFirstName: protractor_1.element(protractor_1.by.css('button.mat-focus-indicator.mat-icon-button.mat-button-base')),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmV0aXJlR3JleWhvdW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vU3BlY3MvdWkvUmV0aXJlR3JleWhvdW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF5QztBQUU1QixRQUFBLGVBQWUsR0FBRztJQUUvQix3QkFBd0IsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsNkNBQTZDLENBQUMsQ0FBQztJQUN4RixvQkFBb0IsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUNoRSxTQUFTLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7SUFDNUUsb0JBQW9CLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7SUFDdkYsZ0JBQWdCLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7SUFDbkYsY0FBYyxFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO0lBQ2pGLFdBQVcsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsZ0RBQWdELENBQUMsQ0FBQztJQUM5RSxjQUFjLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsNkJBQTZCLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckYsbUJBQW1CLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsNkJBQTZCLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDbEcsV0FBVyxFQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw0REFBNEQsQ0FBQyxDQUFDO0lBQzNGLGlCQUFpQixFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxxRUFBcUUsQ0FBQyxDQUFDO0lBQ3pHLGNBQWMsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsNERBQTRELENBQUMsQ0FBQztDQUM1RixDQUFBIn0=