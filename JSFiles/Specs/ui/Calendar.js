"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calendar = void 0;
const protractor_1 = require("protractor");
exports.Calendar = {
    PageHeading: protractor_1.element(protractor_1.by.css('div.page-main-heading')),
    Filter: protractor_1.element(protractor_1.by.cssContainingText('span.filter-text-padding', 'Filter')),
    i: protractor_1.element(protractor_1.by.id('Rectangle-path')),
    FilterOptions: protractor_1.element.all(protractor_1.by.css('mat-basic-chip')),
    DogDetails: protractor_1.element(protractor_1.by.css('section.header')),
    FilterMetro: protractor_1.element(protractor_1.by.cssContainingText('mat-basic-chip', 'Metro')),
    FilterPFS: protractor_1.element(protractor_1.by.cssContainingText('mat-basic-chip', 'PFS')),
    FilterTier3: protractor_1.element(protractor_1.by.cssContainingText('mat-basic-chip', 'Tier 3')),
    FilterRLM: protractor_1.element(protractor_1.by.cssContainingText('mat-basic-chip', 'RLM')),
    DogFilterHSM: protractor_1.element(protractor_1.by.cssContainingText('mat-basic-chip', 'HSM')),
    DogFilterCS: protractor_1.element(protractor_1.by.cssContainingText('mat-basic-chip', 'CS')),
    MetroColor: protractor_1.element(protractor_1.by.cssContainingText('span', 'MEA')),
    RacingKeys: protractor_1.element(protractor_1.by.xpath("//app-calender-info-dialog[1]/div[1]"))
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9TcGVjcy91aS9DYWxlbmRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBeUM7QUFFNUIsUUFBQSxRQUFRLEdBQUc7SUFDcEIsV0FBVyxFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ3JELE1BQU0sRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQywwQkFBMEIsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMzRSxDQUFDLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbkMsYUFBYSxFQUFFLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNwRCxVQUFVLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDN0MsV0FBVyxFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3JFLFNBQVMsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqRSxXQUFXLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdEUsU0FBUyxFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pFLFlBQVksRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNwRSxXQUFXLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEUsVUFBVSxFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN4RCxVQUFVLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7Q0FDeEUsQ0FBQSJ9