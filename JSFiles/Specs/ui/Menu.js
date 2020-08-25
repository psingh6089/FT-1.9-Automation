"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const protractor_1 = require("protractor");
exports.Menu = {
    Menu: protractor_1.element(protractor_1.by.xpath("//i[contains(text(),'menu')]")),
    ApplyToParticipate: protractor_1.element(protractor_1.by.cssContainingText('a', 'Apply to Participate')),
    ClickPage: protractor_1.element(protractor_1.by.xpath("/html[1]/body[1]/app-root[1]/mat-sidenav-container[1]/div[1]")),
    Owner: protractor_1.element(protractor_1.by.cssContainingText('div.mat-radio-label-content', 'Owner')),
    Begin: protractor_1.element(protractor_1.by.cssContainingText('span.mat-button-wrapper', ' Begin ')),
    Checkbox1: protractor_1.element(protractor_1.by.cssContainingText('span.mat-checkbox-label', 'I am aware of and agree to be bound by the declaration above.')),
    Checkbox2: protractor_1.element(protractor_1.by.cssContainingText('span.mat-checkbox-label', 'I am aware of and agree to be bound by the conditions of ownership above.')),
    Continue: protractor_1.element(protractor_1.by.cssContainingText('span.mat-button-wrapper', ' Continue ')),
    EnterPhone: protractor_1.element(protractor_1.by.id('mat-input-5))')),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1NwZWNzL3VpL01lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQXlDO0FBRTVCLFFBQUEsSUFBSSxHQUFHO0lBRWhCLElBQUksRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUN2RCxrQkFBa0IsRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztJQUM5RSxTQUFTLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDhEQUE4RCxDQUFDLENBQUM7SUFDNUYsS0FBSyxFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLDZCQUE2QixFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVFLEtBQUssRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyx5QkFBeUIsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUMxRSxTQUFTLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMseUJBQXlCLEVBQUUsK0RBQStELENBQUMsQ0FBQztJQUNwSSxTQUFTLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMseUJBQXlCLEVBQUUsMkVBQTJFLENBQUMsQ0FBQztJQUNoSixRQUFRLEVBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMseUJBQXlCLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDakYsVUFBVSxFQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQztDQUszQyxDQUFBIn0=