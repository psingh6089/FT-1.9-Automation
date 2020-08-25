"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NonRacing = void 0;
const protractor_1 = require("protractor");
exports.NonRacing = {
    NonRacing: protractor_1.element(protractor_1.by.xpath('.//*[.=" Non Racing Dogs "]')),
    ApplyDogName: protractor_1.element(protractor_1.by.cssContainingText('span.mat-button-wrapper', ' Apply for a dog name ')),
    AddDog: protractor_1.element(protractor_1.by.cssContainingText('span.mat-button-wrapper', ' Add Another Name ')),
    EnterName1: protractor_1.element(protractor_1.by.id('mat-input-0')),
    EnterName2: protractor_1.element(protractor_1.by.id('mat-input-1')),
    EnterName3: protractor_1.element(protractor_1.by.id('mat-input-2')),
    EnterName4: protractor_1.element(protractor_1.by.id('mat-input-3')),
    EnterName5: protractor_1.element(protractor_1.by.id('mat-input-4')),
    EnterName6: protractor_1.element(protractor_1.by.id('mat-input-5')),
    EnterName7: protractor_1.element(protractor_1.by.id('mat-input-6')),
    EnterName8: protractor_1.element(protractor_1.by.id('mat-input-7')),
    EnterName9: protractor_1.element(protractor_1.by.id('mat-input-8')),
    EnterName10: protractor_1.element(protractor_1.by.id('mat-input-9')),
    Save: protractor_1.element(protractor_1.by.cssContainingText('span.mat-button-wrapper', ' Continue ')),
    Cancel: protractor_1.element(protractor_1.by.cssContainingText('span.mat-button-wrapper', ' Cancel '))
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm9uLVJhY2luZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1NwZWNzL3VpL05vbi1SYWNpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUksMkNBQXVDO0FBRTFCLFFBQUEsU0FBUyxHQUFHO0lBRXpCLFNBQVMsRUFBUSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztJQUNqRSxZQUFZLEVBQUssb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMseUJBQXlCLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztJQUNuRyxNQUFNLEVBQVcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMseUJBQXlCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUMvRixVQUFVLEVBQU8sb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzlDLFVBQVUsRUFBTyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDOUMsVUFBVSxFQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM5QyxVQUFVLEVBQU8sb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzlDLFVBQVUsRUFBTyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDOUMsVUFBVSxFQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM5QyxVQUFVLEVBQU8sb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzlDLFVBQVUsRUFBTyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDOUMsVUFBVSxFQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM5QyxXQUFXLEVBQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzlDLElBQUksRUFBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyx5QkFBeUIsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM1RSxNQUFNLEVBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMseUJBQXlCLEVBQUUsVUFBVSxDQUFDLENBQUM7Q0FDM0UsQ0FBQSJ9