"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DogLocation = void 0;
const protractor_1 = require("protractor");
exports.DogLocation = {
    Kennel: protractor_1.element(protractor_1.by.cssContainingText('div.level-one-title', 'KENNEL')),
    AddToKennel: protractor_1.element(protractor_1.by.cssContainingText('div.level-two-title', ' Add dog to Kennel ')),
    RemoveFromKennel: protractor_1.element(protractor_1.by.cssContainingText('div.level-two-title', ' Remove from Kennel ')),
    DogName: protractor_1.element(protractor_1.by.id('mat-input-0')),
    EarBrand: protractor_1.element(protractor_1.by.id('mat-input-1')),
    MicrochipNo: protractor_1.element(protractor_1.by.id('mat-input-2')),
    DogActivity: protractor_1.element(protractor_1.by.cssContainingText('strong', 'Dog Activity:')),
    SelectActivityAsBreeding: protractor_1.element(protractor_1.by.cssContainingText('div.mat-button-toggle-label-content', 'Breeding')),
    SelectActivityAsEducating: protractor_1.element(protractor_1.by.cssContainingText('div.mat-button-toggle-label-content', 'Educating')),
    SelectActivityAsRearing: protractor_1.element(protractor_1.by.cssContainingText('div.mat-button-toggle-label-content', 'Rearing')),
    SelectActivityAsSpelling: protractor_1.element(protractor_1.by.cssContainingText('div.mat-button-toggle-label-content', 'Spelling')),
    SelectActivityAsTraining: protractor_1.element(protractor_1.by.cssContainingText('div.mat-button-toggle-label-content', 'Training')),
    SelectActivityAsWhelping: protractor_1.element(protractor_1.by.cssContainingText('div.mat-button-toggle-label-content', 'Whelping')),
    DogLocation: protractor_1.element(protractor_1.by.cssContainingText('strong', 'Dog Location:')),
    SelectDogLocation: protractor_1.element(protractor_1.by.xpath("//mat-button-toggle-group[1]/mat-button-toggle[1]/button[1]/div[1]")),
    InterstateLocation: protractor_1.element(protractor_1.by.cssContainingText('div.mat-button-toggle-label-content', 'Interstate Location')),
    Doglist: protractor_1.element.all(protractor_1.by.css('button.mat-focus-indicator.dog-actions-button.mat-icon-button.mat-button-base.mat-primary')),
    SelectActionAsChangeDogLocation: protractor_1.element(protractor_1.by.cssContainingText('span.mat-button-wrapper', ' Remove from kennel ')),
    EnterName: protractor_1.element(protractor_1.by.id('mat-input-0')),
    EnterStreet: protractor_1.element(protractor_1.by.id('mat-input-1')),
    EnterSuburb: protractor_1.element(protractor_1.by.id('mat-input-2')),
    EnterPostcode: protractor_1.element(protractor_1.by.id('mat-input-3')),
    SelectStateDropDown: protractor_1.element(protractor_1.by.id('mat-select-0')),
    EnterState: protractor_1.element(protractor_1.by.cssContainingText('span.mat-option-text', ' NSW ')),
    EnterPhone: protractor_1.element(protractor_1.by.id('mat-input-5')),
    SelectDog: protractor_1.element(protractor_1.by.css('app-dog-card.tour-dog-selection-list.dog-card.ng-star-inserted')),
    FindDogFabriolaCitrus: protractor_1.element(protractor_1.by.cssContainingText('h3.dog', 'FABRIOLA CITRUS')),
    Search: protractor_1.element(protractor_1.by.id('mat-input-0'))
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9nTG9jYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9TcGVjcy91aS9Eb2dMb2NhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBeUM7QUFFNUIsUUFBQSxXQUFXLEdBQUc7SUFFM0IsTUFBTSxFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3RFLFdBQVcsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3hGLGdCQUFnQixFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixFQUFFLHNCQUFzQixDQUFDLENBQUM7SUFDOUYsT0FBTyxFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN0QyxRQUFRLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZDLFdBQVcsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDMUMsV0FBVyxFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUNyRSx3QkFBd0IsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxxQ0FBcUMsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUMxRyx5QkFBeUIsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxxQ0FBcUMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUM1Ryx1QkFBdUIsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxxQ0FBcUMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN4Ryx3QkFBd0IsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxxQ0FBcUMsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUMxRyx3QkFBd0IsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxxQ0FBcUMsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUMxRyx3QkFBd0IsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxxQ0FBcUMsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUMxRyxXQUFXLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ3JFLGlCQUFpQixFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxvRUFBb0UsQ0FBQyxDQUFDO0lBQzFHLGtCQUFrQixFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLHFDQUFxQyxFQUFFLHFCQUFxQixDQUFDLENBQUM7SUFDL0csT0FBTyxFQUFFLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsMkZBQTJGLENBQUMsQ0FBQztJQUN6SCwrQkFBK0IsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyx5QkFBeUIsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO0lBQ2pILFNBQVMsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDeEMsV0FBVyxFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMxQyxXQUFXLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzFDLGFBQWEsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDNUMsbUJBQW1CLEVBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3BELFVBQVUsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxzQkFBc0IsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxRSxVQUFVLEVBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzFDLFNBQVMsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsZ0VBQWdFLENBQUMsQ0FBQztJQUM1RixxQkFBcUIsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUNqRixNQUFNLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0NBRXBDLENBQUEifQ==