import {browser} from "protractor";
import {element, by} from "protractor";

// spec.js
describe('Protractor Demo App', ()=> {
    //var firstNumber = element(by.model('first'));
    beforeEach(function () {
        browser.get('http://test.ft19.grv.local/mydogs/racing');
    });

    it('click racing', async()=> {
        await browser.getTitle().then(function (text) {
            console.log(text);
        })
        //click on notification:
        await element(by.css('[routerlink="/notifications')).click();
               //click on William and save:
        await element(by.cssContainingText('.mat-button-wrapper', 'William Mcmahon (44472)')).click();
        {
            browser.driver.sleep(3000)
            console.log("William Mcmahon clicked")
        }
        
        //Click on MyDogs
        await element(by.css('[routerlink="/mydogs')).click();
        await element(by.cssContainingText('a.mat-tab-label-active', ' Non Racing Dogs ')).click();
        //browser.driver.sleep(1000);
        await element(by.cssContainingText('a.mat-tab-label-active', ' Breeding & Litters ')).click();
      //  browser.driver.sleep(1000);
         await element(by.cssContainingText('a.mat-tab-label-active', ' Blackbook ')).click();
       // browser.driver.sleep(1000);

       //click on racing dog 
       await element(by.cssContainingText('a.mat-tab-label-active', ' Racing Dogs ')).click();
       
       //select the 1st dog from the list:

       await element(by.xpath('//app-dog-card[1]//app-dog-card-header[1]//div[1]//button[1]//span[1]//mat-icon[1]')).click();
        //Transfer to ownership:   
        await element(by.css('div.actions')).element(by.css('button:nth-child(2)')).element(by.xpath('//span[contains(text(), " Transfer ownership ")]')).click()     
      
})
})
