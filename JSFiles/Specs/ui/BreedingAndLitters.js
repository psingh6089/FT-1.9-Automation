"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreedingAndLitters = void 0;
const protractor_1 = require("protractor");
exports.BreedingAndLitters = {
    WhelpingResult: protractor_1.element(protractor_1.by.cssContainingText('div.level-three-title', 'Whelping Results')),
    SelectParentDog: protractor_1.element(protractor_1.by.xpath("//app-iwantto-litter-selection/div/div[2]")),
    ResultOfMating: protractor_1.element(protractor_1.by.css('button.mat-focus-indicator.mat-button.mat-button-base')),
    SelectResultAsWhelped: protractor_1.element(protractor_1.by.cssContainingText('div.mat-button-toggle-label-content', 'Whelped')),
    SelectResultAsMissed: protractor_1.element(protractor_1.by.cssContainingText('div.mat-button-toggle-label-content', 'Missed')),
    Total: protractor_1.element(protractor_1.by.xpath("//app-result-of-mating-form/div[2]")),
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
    SelectVetClinic: protractor_1.element(protractor_1.by.css('div.mat-button-toggle-label-content')),
    Litters: protractor_1.element(protractor_1.by.cssContainingText('a', ' Litters ')),
    LitterView: protractor_1.element(protractor_1.by.css('app-litters-page')),
    LittersList: protractor_1.element.all(protractor_1.by.css('div.litter.ng-star-inserted')),
    LitterFilter: protractor_1.element(protractor_1.by.cssContainingText('span.selected-value-button', 'Filter:')),
    FilterList: protractor_1.element.all(protractor_1.by.css('mat-button-toggle')),
    DrAbbie: protractor_1.element(protractor_1.by.cssContainingText('h6.dog-name', 'DR. ABBIE')),
    LitterServiceLodged: protractor_1.element(protractor_1.by.xpath("//app-litters-page/div[5]/app-litter-progress/div[1]/div[1]")),
    LitterWhelpingResult: protractor_1.element(protractor_1.by.xpath("//app-litters-page/div[1]/app-litter-progress/div[2]/div[1]")),
    LitterVaccination: protractor_1.element(protractor_1.by.xpath("//app-litters-page/div[1]/app-litter-progress/div[3]/div[1]")),
    LitterVaccinMicro: protractor_1.element(protractor_1.by.xpath("//app-litters-page/div[1]/app-litter-progress/div[4]/div[1]")),
    LitterEarBrand: protractor_1.element(protractor_1.by.xpath("//app-litters-page/div[1]/app-litter-progress/div[4]/div[1]")),
    LitterComplete: protractor_1.element(protractor_1.by.xpath("//app-litters-page/div[1]/app-litter-progress/div[4]/div[1]")),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJlZWRpbmdBbmRMaXR0ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vU3BlY3MvdWkvQnJlZWRpbmdBbmRMaXR0ZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF5QztBQUU1QixRQUFBLGtCQUFrQixHQUFHO0lBQzlCLGNBQWMsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyx1QkFBdUIsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQzFGLGVBQWUsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMkNBQTJDLENBQUMsQ0FBQztJQUMvRSxjQUFjLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHVEQUF1RCxDQUFDLENBQUM7SUFDeEYscUJBQXFCLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMscUNBQXFDLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDdEcsb0JBQW9CLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMscUNBQXFDLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDcEcsS0FBSyxFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO0lBQzlELHdCQUF3QixFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLHFDQUFxQyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQzlHLG9CQUFvQixFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLHFDQUFxQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQy9GLGtCQUFrQixFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxtSEFBbUgsQ0FBQyxDQUFDO0lBQzFKLFdBQVcsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDMUMsaUJBQWlCLEVB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