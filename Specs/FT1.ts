import { by, element } from 'protractor';
import { spawn } from 'child_process';
export const FT1 = {

    Advanced: element(by.id('details-button')),
    ProceedToFastTrack: element(by.id('proceed-link')),
    EnterUser: element(by.xpath("//input[@name='Username']")),
    EnterPassword: element(by.xpath("//input[@name='Password']")),
    Login: element(by.xpath("//button[contains(text(),'Log in')]"))

    
   }
