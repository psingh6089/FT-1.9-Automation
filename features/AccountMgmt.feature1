Feature: FT2-599-Account Management - A participant can update their address details

@testp
Scenario: QA-70- Verify if the participant is able to update his address details
Given  A participant "William Mcmahon" logged in to FastTrack application
And    user navigates to 'Account' -> 'MyAccount' tab and clicks 'Update account details' tab
When   user is able to add or update the address details

Then   user is able to land on ' Bank Details ' Page

@testp
Scenario: QA-82-Verify if the updates in the address details are not saved when the participant clicks on the Cancel button.
Given  A participant "William Mcmahon" logged in to FastTrack application
And   user navigates to 'Account' -> 'MyAccount' tab and clicks 'Update account details' tab
When   user is able to add or update the address details
And   User clicks on 'cancel' button
Then  user is able to land on ' My Account ' Page

@test
Scenario: QA-69 Verify if the participant is able to update his bank details 
Given  A participant "William Mcmahon" logged in to FastTrack application
And    user navigates to 'Account' -> 'Finance' tab and clicks 'Bank details' tab
When   user is able to view,add,update the bank details
And    user is able to land on ' Bank Details ' Page

@p- This scenario is pending for the cancel button on bank details page. else edit it for the back navigation
Scenario: QA-81 Verify if the updates in the bank details are not saved when the participant clicks on the Cancel button."
Given  A participant "William Mcmahon" logged in to FastTrack application
And   user navigates to 'Account' -> 'Finance' tab and clicks 'Bank details' tab
When   user is able to view,add,update the bank details
And   User clicks on 'cancel' button
Then   user is able to land on ' Bank Details ' Page

@test
Scenario: FT2-690	Participant can pay a fine
Given  A participant "Andrea Daily" logged in to FastTrack application
And   user navigates to 'Account' -> 'Finance' tab and clicks 'outstanding fees' tab
When   user selects the fine to pay
And  user proceeds with the payment option
Then  user should be navigated to the confirmation page

@test
Scenario: FT2-614	A participant can view a financial transaction
Given  A participant "William Mcmahon" logged in to FastTrack application
And   user navigates to 'Account' -> 'Finance' tab and clicks 'Transaction' tab
When   user selects filter for the transaction history
Then  user should be able to the transaction as per filter

@test
Scenario: FT2-616	A participant can view a financial statement
Given  A participant "William Mcmahon" logged in to FastTrack application
And   user navigates to 'Account' -> 'Finance' tab and clicks 'Statements' tab
When   user selects 'From Date' and 'To date' for the statement
Then  user should be able to see the statement 



