"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const protractor_1 = require("protractor");
exports.Menu = {
    Menu: protractor_1.element(protractor_1.by.xpath("//i[contains(text(),'menu')]")),
    ApplyToParticipate: protractor_1.element(protractor_1.by.cssContainingText('p', 'Apply to Participate')),
    RegistrationStatus: protractor_1.element(protractor_1.by.cssContainingText('p', 'Registration Status')),
    BreederRegistration: protractor_1.element(protractor_1.by.cssContainingText('p', 'Breeder Registration')),
    Notification: protractor_1.element(protractor_1.by.cssContainingText('p', 'Notifications')),
    Tutorial: protractor_1.element(protractor_1.by.cssContainingText('p', 'Tutorial')),
    Help: protractor_1.element(protractor_1.by.cssContainingText('p', 'Help')),
    Watchdog: protractor_1.element(protractor_1.by.cssContainingText('p', 'Watchdog')),
    Logout: protractor_1.element(protractor_1.by.cssContainingText('p', 'Logout')),
    ProgressStatus: protractor_1.element(protractor_1.by.xpath("//app-registration-apply[1]/app-new-progress")),
    CurrentStatus: protractor_1.element(protractor_1.by.css('div.step.first.current.past.ng-star-inserted')),
    ClickPage: protractor_1.element(protractor_1.by.xpath("/html[1]/body[1]/app-root[1]/mat-sidenav-container[1]/div[1]")),
    Owner: protractor_1.element(protractor_1.by.cssContainingText('div.mat-radio-label-content', 'Owner')),
    Catcher: protractor_1.element(protractor_1.by.cssContainingText('div.mat-radio-label-content', 'Catcher')),
    Attendant: protractor_1.element(protractor_1.by.cssContainingText('div.mat-radio-label-content', 'Attendant')),
    OwnerTrainer: protractor_1.element(protractor_1.by.cssContainingText('div.mat-radio-label-content', 'Owner Trainer')),
    PublicTrainer: protractor_1.element(protractor_1.by.cssContainingText('div.mat-radio-label-content', 'Public Trainer')),
    Checkbox1: protractor_1.element(protractor_1.by.cssContainingText('span.mat-checkbox-label', 'I am aware of and agree to be bound by the declaration above.')),
    Checkbox2: protractor_1.element(protractor_1.by.cssContainingText('span.mat-checkbox-label', 'I am aware of and agree to be bound by the conditions of ownership above.')),
    Continue: protractor_1.element(protractor_1.by.cssContainingText('span.mat-button-wrapper', ' Continue ')),
    EnterPhone: protractor_1.element(protractor_1.by.id('mat-input-5))')),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1NwZWNzL3VpL01lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQXlDO0FBRTVCLFFBQUEsSUFBSSxHQUFHO0lBRWhCLElBQUksRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUV2RCxrQkFBa0IsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztJQUM5RSxrQkFBa0IsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUscUJBQXFCLENBQUMsQ0FBQztJQUM3RSxtQkFBbUIsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztJQUMvRSxZQUFZLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ2pFLFFBQVEsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDeEQsSUFBSSxFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoRCxRQUFRLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3hELE1BQU0sRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFFcEQsY0FBYyxFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO0lBQ2pGLGFBQWEsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsOENBQThDLENBQUMsQ0FBQztJQUM5RSxTQUFTLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDhEQUE4RCxDQUFDLENBQUM7SUFDNUYsS0FBSyxFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLDZCQUE2QixFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVFLE9BQU8sRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyw2QkFBNkIsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNoRixTQUFTLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsNkJBQTZCLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDcEYsWUFBWSxFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLDZCQUE2QixFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQzNGLGFBQWEsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyw2QkFBNkIsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBRzdGLFNBQVMsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyx5QkFBeUIsRUFBRSwrREFBK0QsQ0FBQyxDQUFDO0lBQ3BJLFNBQVMsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyx5QkFBeUIsRUFBRSwyRUFBMkUsQ0FBQyxDQUFDO0lBQ2hKLFFBQVEsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyx5QkFBeUIsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNoRixVQUFVLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0NBQzlDLENBQUEifQ==