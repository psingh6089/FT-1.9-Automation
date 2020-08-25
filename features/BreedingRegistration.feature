Feature: FT2-590 Breeding Registration - An owner can initiate breeding lease and FT2-590 Breeding Registration - An owner can accept breeding lease
    @p
    Scenario: QA-103 Verify if the owner can send a breeding authority key through email to a Interstate resident
        Given  A participant "William Mcmahon" logged in to FastTrack application
        And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Issue Breeding Authority' tab
        When user fills and submits the Interstate Authority to Breed form
        And User clicks on 'continue' button
        And User is redirected to Breeding Authority Confirmation page with Send via Email or Continue buttons
        Then Breeding authority key should be generated and user clicks continue
        And  User is redirected to the list of racing dogs


    @p
    Scenario: QA-104 Verify if the owner can initiate the breeding lease to a Victorian resident"
        Given  A participant "William Mcmahon" logged in to FastTrack application
        And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Issue Breeding Authority' tab
        When user clicks on 'Victoria' Transfer tab and enter the Name details of the new person to be authorised
        And User clicks on 'continue' button
        And User is redirected to Breeding Authority Confirmation page with Send via Email or Continue buttons
        Then Breeding authority key should be generated and user clicks continue
        And  User is redirected to the list of racing dogs


    @p
    Scenario: QA-73- Verify if the owner can accept breeding lease
        Given  A participant "Paul Westerveld" logged in to FastTrack application
        And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Accept Breeding Authority' tab
        When user enters the Authority Key and Ear brand details of dog for 'Breeding Authority'
        And user proceeds with the payment option
        Then user should be navigated to the confirmation page 
        
    @pending
    Scenario: QA-84-Verify functionality of Cancel button in Accept breeding authority page"
        Given  A participant "Paul Westerveld" logged in to FastTrack application
        And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Accept Breeding Authority' tab
        When user enters the Authority Key and Ear brand details of dog for 'Breeding Authority'
        And User clicks on 'cancel' button
        Then User is redirected to the list of racing dogs


    @p
    Scenario: QA-109 Verify the functionality of Cancel button in End Breeding Authority
        Given A participant "William Mcmahon" logged in to FastTrack application
         And user navigates to 'My Dogs' -> 'Dog to Accept Breeding' tab and clicks 'End Breeding Authority' tab
        When  User clicks on 'cancel' button
        Then User is redirected to the list of racing dogs


    @pending
    Scenario: QA-108 Verify if the owner/breeder can end a breeding lease
        Given A participant "William Mcmahon" logged in to FastTrack application
        And user navigates to 'My Dogs' -> 'Dog to Accept Breeding' tab and clicks 'End Breeding Authority' tab
        When User clicks on 'submit' button
        Then User is redirected to the list of racing dogs

    @pending
    Scenario: FT2-789	Participant can view an active breeding authority key or transfer key on their dogs
        Given A participant "William Mcmahon" logged in to FastTrack application
        And user navigates to 'My Dogs' -> 'Dog to check active authority key' tab and clicks 'nothing' tab
        Then User verifies the Breeding Key for the dog

    @p
    Scenario: FT2-581	Litter Management - A breeder can record the result of mating as 'whelped'
        Given A participant "Peter Walsh" logged in to FastTrack application
        And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
        When  User selects the parent Dog and enters the details for 'Whelped'
        And  User clicks on 'submit' button
        And user proceeds with the payment option
            And  User clicks on 'c' button
        Then User verifies the record

        
    @p
    Scenario: FT2-581	Litter Management - A breeder can record the result of mating as 'whelped' and returns back on confirmation page
        Given A participant "Peter Walsh" logged in to FastTrack application
        And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
        When  User selects the parent Dog and enters the details for 'Whelped'
        And  User clicks on 'submit' button
        And user proceeds with the payment option
        And  User clicks on 'back' button
         Then User verifies the record

    @p
    Scenario: FT2-581	Litter Management - A breeder can record the result of mating as 'Missed'
        Given A participant "Peter Walsh" logged in to FastTrack application
        And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
        When  User selects the parent Dog and enters the details for 'Missed'
        And  User clicks on 's' button
        Then User verifies the record

    @p
    Scenario: FT2-581	Litter Management - A breeder can record the result of mating as 'Missed' and clicks 'Cancel' button
        Given A participant "Peter Walsh" logged in to FastTrack application
        And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
        When  User selects the parent Dog and enters the details for 'Missed'
        And  User clicks on 'cancel' button
        Then User navigates to 'Breeding and Litter'

    @p
    Scenario: FT2-581	Litter Management - A breeder can record the result of mating as 'No Live Pups'
        Given A participant "Peter Walsh" logged in to FastTrack application
        And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
        When  User selects the parent Dog and enters the details for 'No Live Pups'
        And  User clicks on 's' button
        Then User verifies the record

          @p
  Scenario: FT2-581	Litter Management - A breeder can record the result of mating as 'No Live Pups' and clicks 'Cancel' button
        Given A participant "Peter Walsh" logged in to FastTrack application
        And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
        When  User selects the parent Dog and enters the details for 'No Live Pups'
        And  User clicks on 'cancel' button
        Then User navigates to 'Breeding And Litter'





