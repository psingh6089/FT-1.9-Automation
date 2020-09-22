"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DogDetails = void 0;
const protractor_1 = require("protractor");
exports.DogDetails = {
    Form: protractor_1.element(protractor_1.by.cssContainingText('button.mat-ripple.button', 'form')),
    History: protractor_1.element(protractor_1.by.cssContainingText('button.mat-ripple.button', 'history')),
    Grades: protractor_1.element(protractor_1.by.cssContainingText('button.mat-ripple.button', 'grades')),
    Litters: protractor_1.element(protractor_1.by.cssContainingText('button.mat-ripple.button', 'litter')),
    Pedigree: protractor_1.element(protractor_1.by.cssContainingText('button.mat-ripple.button', 'pedigree')),
    CoursingForm: protractor_1.element(protractor_1.by.cssContainingText('button.mat-ripple.button', 'coursing form')),
    Trials: protractor_1.element(protractor_1.by.cssContainingText('button.mat-ripple.button', 'trial history')),
    RacingOffences: protractor_1.element(protractor_1.by.cssContainingText('button.mat-ripple.button', 'racing offences')),
    GreyHoundRecord: protractor_1.element(protractor_1.by.cssContainingText('button.mat-ripple.button', 'greyhound record')),
    APM: protractor_1.element(protractor_1.by.xpath("//app-dog-card[1]/div[1]/div[1]/div[1]/app-dog-apm[1]/p[1]")),
    Rank: protractor_1.element(protractor_1.by.xpath("//i[@class='rank-icon']/h5")),
    Microchip: protractor_1.element(protractor_1.by.xpath("//app-dog-microchip[@class='dog-microchip']")),
    Earbrand: protractor_1.element(protractor_1.by.xpath("//app-dog-ear-brand[@class='dog-ear-brand']")),
    DogName: protractor_1.element(protractor_1.by.css('app-dog-details-header')),
    WhelpedDate: protractor_1.element(protractor_1.by.css('app-dog-details-header')),
    DogContentLitter: protractor_1.element(protractor_1.by.xpath("//div[@class='dog-card-content']")),
    DogContentRaces: protractor_1.element(protractor_1.by.xpath("//app-dog-details-litter-card[@class='card litter']//header")),
    FormPage: protractor_1.element(protractor_1.by.css('app-run-result')),
    Toggle: protractor_1.element(protractor_1.by.xpath("//div[@class='mat-slide-toggle-thumb']")),
    ResultTable: protractor_1.element(protractor_1.by.xpath("//body[@class='fast-track']//app-root//main//app-dog-details//main//app-form-page//table//thead//tr")),
    ResultTableData: protractor_1.element(protractor_1.by.xpath("//body[@class='fast-track']//app-root//main//app-dog-details//main//app-form-page//table//tbody")),
    CoursingPage: protractor_1.element(protractor_1.by.css('app-coursing-page')),
    GradesPage: protractor_1.element(protractor_1.by.css('app-grades-page')),
    TrialsPage: protractor_1.element(protractor_1.by.css('app-trial-page')),
    RacingOffencePage: protractor_1.element(protractor_1.by.xpath("//h3[contains(text(),'Victorian racing offences')]")),
    LittersPage: protractor_1.element(protractor_1.by.css('app-litters-page')),
    HistoryPage: protractor_1.element(protractor_1.by.css('app-history-page')),
    PedigreeePage: protractor_1.element(protractor_1.by.css('app-pedigree-page')),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9nRGV0YWlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1NwZWNzL3VpL0RvZ0RldGFpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQXlDO0FBRTVCLFFBQUEsVUFBVSxHQUFHO0lBRXRCLElBQUksRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQywwQkFBMEIsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN2RSxPQUFPLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsMEJBQTBCLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDN0UsTUFBTSxFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLDBCQUEwQixFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzNFLE9BQU8sRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQywwQkFBMEIsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM1RSxRQUFRLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsMEJBQTBCLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDL0UsWUFBWSxFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLDBCQUEwQixFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ3hGLE1BQU0sRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQywwQkFBMEIsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUNsRixjQUFjLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsMEJBQTBCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUM1RixlQUFlLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsMEJBQTBCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUM5RixHQUFHLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDREQUE0RCxDQUFDLENBQUM7SUFDcEYsSUFBSSxFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBQ3JELFNBQVMsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNkNBQTZDLENBQUMsQ0FBQztJQUMzRSxRQUFRLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7SUFDMUUsT0FBTyxFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ2xELFdBQVcsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUN0RCxnQkFBZ0IsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQztJQUN2RSxlQUFlLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDZEQUE2RCxDQUFDLENBQUM7SUFDakcsUUFBUSxFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzNDLE1BQU0sRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQztJQUNuRSxXQUFXLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHFHQUFxRyxDQUFDLENBQUM7SUFDckksZUFBZSxFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxpR0FBaUcsQ0FBQyxDQUFDO0lBQ3JJLFlBQVksRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNsRCxVQUFVLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDOUMsVUFBVSxFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzdDLGlCQUFpQixFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO0lBQzFGLFdBQVcsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNoRCxXQUFXLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDaEQsYUFBYSxFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0NBS3RELENBQUEifQ==