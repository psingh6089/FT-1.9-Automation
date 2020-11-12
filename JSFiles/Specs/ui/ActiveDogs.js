"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActiveDogs = void 0;
const protractor_1 = require("protractor");
exports.ActiveDogs = {
    MyDogs: protractor_1.element(protractor_1.by.cssContainingText('div.nav-item', ' My Dogs')),
    DogDetails: protractor_1.element(protractor_1.by.css('section.header')),
    DogName: protractor_1.element(protractor_1.by.css('h3.racing-name')),
    NoOfDogs: protractor_1.element(protractor_1.by.xpath("//app-my-dogs/app-racing-page/section/header/h3[2]")),
    Filter: protractor_1.element(protractor_1.by.xpath("//app-my-dogs[1]/app-racing-page[1]/section[1]/div[1]/div[1]/button[1]/span[1]/mat-icon[1]")),
    AllFilters: protractor_1.element(protractor_1.by.css('mat-checkbox')),
    FilterNames: protractor_1.element.all(protractor_1.by.css('div.status-checkbox')),
    FilterRacing: protractor_1.element(protractor_1.by.cssContainingText('div.status-checkbox', 'racing')),
    FilterNominate: protractor_1.element(protractor_1.by.cssContainingText('div.status-checkbox', ' nominated ')),
    FilterWarning: protractor_1.element(protractor_1.by.cssContainingText('div.status-checkbox', ' warning ')),
    FilterIssue: protractor_1.element(protractor_1.by.cssContainingText('div.status-checkbox', ' issue ')),
    FilterOwned: protractor_1.element(protractor_1.by.cssContainingText('div.status-checkbox', ' owned ')),
    FilterTraining: protractor_1.element(protractor_1.by.cssContainingText('div.status-checkbox', 'training')),
    FilterSpelling: protractor_1.element(protractor_1.by.cssContainingText('div.status-checkbox', ' spelling ')),
    FilterEducating: protractor_1.element(protractor_1.by.cssContainingText('div.status-checkbox', ' educating ')),
    FilterBreeding: protractor_1.element(protractor_1.by.cssContainingText('div.status-checkbox', ' breeding ')),
    FilterWhelping: protractor_1.element(protractor_1.by.cssContainingText('div.status-checkbox', ' whelping ')),
    FilterRearing: protractor_1.element(protractor_1.by.cssContainingText('div.status-checkbox', 'rearing')),
    FilterDefault: protractor_1.element(protractor_1.by.cssContainingText('div.status-checkbox', ' default ')),
    Close: protractor_1.element(protractor_1.by.cssContainingText('span.mat-button-wrapper', ' Close ')),
    Reset: protractor_1.element(protractor_1.by.cssContainingText('div.heading', 'Reset'))
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWN0aXZlRG9ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1NwZWNzL3VpL0FjdGl2ZURvZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQXlDO0FBRTVCLFFBQUEsVUFBVSxHQUFHO0lBQ3RCLE1BQU0sRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDakUsVUFBVSxFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzdDLE9BQU8sRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMxQyxRQUFRLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG9EQUFvRCxDQUFDLENBQUM7SUFDakYsTUFBTSxFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw0RkFBNEYsQ0FBQyxDQUFDO0lBQ3ZILFVBQVUsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDM0MsV0FBVyxFQUFFLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN2RCxZQUFZLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDNUUsY0FBYyxFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ25GLGFBQWEsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNoRixXQUFXLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDNUUsV0FBVyxFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzVFLGNBQWMsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNoRixjQUFjLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDbEYsZUFBZSxFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ3BGLGNBQWMsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNsRixjQUFjLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDbEYsYUFBYSxFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzlFLGFBQWEsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNoRixLQUFLLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMseUJBQXlCLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDMUUsS0FBSyxFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztDQUMvRCxDQUFBIn0=