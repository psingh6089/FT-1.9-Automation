"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreedingAndLitters = void 0;
const protractor_1 = require("protractor");
exports.BreedingAndLitters = {
    WhelpingResult: protractor_1.element(protractor_1.by.cssContainingText('div.level-three-title', 'Whelping Results')),
    SelectParentDog: protractor_1.element(protractor_1.by.css('div.dog-details')),
    ResultOfMating: protractor_1.element(protractor_1.by.css('button.mat-focus-indicator.mat-button.mat-button-base')),
    SelectResultAsWhelped: protractor_1.element(protractor_1.by.cssContainingText('div.mat-button-toggle-label-content', 'Whelped')),
    SelectResultAsMissed: protractor_1.element(protractor_1.by.cssContainingText('div.mat-button-toggle-label-content', 'Missed')),
    SelectResultAsNoLivePUps: protractor_1.element(protractor_1.by.cssContainingText('div.mat-button-toggle-label-content', 'No Live Pups')),
    SelectNoOfFemalePups: protractor_1.element(protractor_1.by.cssContainingText('div.mat-button-toggle-label-content', '1')),
    SelectNoOfMalePups: protractor_1.element(protractor_1.by.xpath("//button[@id='mat-button-toggle-343-button']//div[@class='mat-button-toggle-label-content'][contains(text(),'1')]")),
    WhelpedDate: protractor_1.element(protractor_1.by.id('mat-input-0')),
    ChooseWhelpedDate: protractor_1.element(protractor_1.by.css('.mat-calendar-body-cell.mat-calendar-body-active.ng-star-inserted')),
    EnterDog1Kennel: protractor_1.element(protractor_1.by.id('mat-input-1')),
    Dog1Color: protractor_1.element(protractor_1.by.xpath("//div[2]//div[1]//div[2]//button[1]//span[1]//mat-icon[1]")),
    SelectDog1Color: protractor_1.element(protractor_1.by.cssContainingText('span.name', 'Black')),
    EnterDog2Kennel: protractor_1.element(protractor_1.by.id('mat-input-2')),
    Dog2Color: protractor_1.element(protractor_1.by.xpath("//div[3]//div[1]//div[2]//button[1]//span[1]//mat-icon[1]")),
    GetAllDogColors: protractor_1.element.all(protractor_1.by.css('mat-button-toggle')),
    SelectDog2Color: protractor_1.element(protractor_1.by.cssContainingText('span.name', 'Dun')),
    VetClinic: protractor_1.element(protractor_1.by.cssContainingText('span.mat-button-wrapper', 'Select Vet Clinic')),
    SelectVetClinic: protractor_1.element(protractor_1.by.id('mat-button-toggle-80')),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJlZWRpbmdBbmRMaXR0ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vU3BlY3MvdWkvQnJlZWRpbmdBbmRMaXR0ZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF5QztBQUU1QixRQUFBLGtCQUFrQixHQUFHO0lBRTlCLGNBQWMsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyx1QkFBdUIsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQzFGLGVBQWUsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNuRCxjQUFjLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHVEQUF1RCxDQUFDLENBQUM7SUFDeEYscUJBQXFCLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMscUNBQXFDLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDdEcsb0JBQW9CLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMscUNBQXFDLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDcEcsd0JBQXdCLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMscUNBQXFDLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDOUcsb0JBQW9CLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMscUNBQXFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDL0Ysa0JBQWtCLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG1IQUFtSCxDQUFDLENBQUM7SUFDMUosV0FBVyxFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMxQyxpQkFBaUIsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsbUVBQW1FLENBQUMsQ0FBQztJQUN2RyxlQUFlLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzlDLFNBQVMsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMkRBQTJELENBQUMsQ0FBQztJQUN6RixlQUFlLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3BFLGVBQWUsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDOUMsU0FBUyxFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywyREFBMkQsQ0FBQyxDQUFDO0lBQ3pGLGVBQWUsRUFBRSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDekQsZUFBZSxFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNsRSxTQUFTLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMseUJBQXlCLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUN4RixlQUFlLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLHNCQUFzQixDQUFDLENBQUM7Q0FHMUQsQ0FBQSJ9