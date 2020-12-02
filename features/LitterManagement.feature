    Feature: User verifies the Litter Management on the FT1.9 

    @test
    Scenario: FT2-581	Litter Management - A breeder can record the result of mating as 'Missed'
    Given A participant "Peter Walsh" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
    When  User selects the parent Dog and enters the details for 'Missed'
    And  User clicks on 'submit' button
    Then User verifies the confirmation for 'Missed'

   @test
    Scenario: Verify the field validations on 'Result of Mating' as 'No selection' Page
     Given A participant "William Mcmahon" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
    When  User selects the parent Dog and enters the details for 'validate'
    Then User verifies the 'Mandate' page for 'No' details

    @test
    Scenario: FT2-581	Litter Management - A breeder can record the result of mating as 'Missed' and clicks 'Cancel' button
    Given A participant "William Mcmahon" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
    When  User selects the parent Dog and enters the details for 'Missed'
    And  User clicks on 'cancel' button
    Then user is able to land on 'My Dogs ' Page

    @testp
    Scenario: FT2-581	Litter Management - A breeder can record the result of mating as 'No Live Pups'
    Given A participant "William Mcmahon" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
    When  User selects the parent Dog and enters the details for 'No Live Pups'
    And  User clicks on 's' button
    Then User verifies the confirmation for 'No Live Pups'

    @testp
    Scenario: FT2-581	Litter Management - A breeder can record the result of mating as 'No Live Pups' and clicks 'Cancel' button
    Given A participant "William Mcmahon" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
    When  User selects the parent Dog and enters the details for 'No Live Pups'
    And  User clicks on 'cancel' button
    Then user is able to land on 'My Dogs ' Page

     @testp
    Scenario: QA-500Verify that the participant can able to see MyLitters Page
    Given A participant "William Mcmahon" logged in to FastTrack application
    And user navigates to 'My Dogs' -> 'Litters' tab and clicks 'Nothing' tab
    When  user views the 'Litters' details
    Then User verifies the 'Litters' details

    @testp
    Scenario:Participant verifies the list of filterss on 'Litter' Page
    Given A participant "William Mcmahon" logged in to FastTrack application
    And user navigates to 'My Dogs' -> 'Litters' tab and clicks 'Nothing' tab
    When user views the 'Litter' page with 'filter'
    Then User verifies the list of filters on 'Litter' page and its detail

    
    @testp
    Scenario: QA-499Verify that the participant can able to see his litter registration when the status of the litter registration is 'Pending'
    Given A participant "William Mcmahon" logged in to FastTrack application
    And user navigates to 'My Dogs' -> 'Litters' tab and clicks 'Nothing' tab
    When user views the status for the 'service registered' with litter registration as 'pending'
    Then User verifies the status of the 'litter registration' is 'Pending'

    @testp
    Scenario: FT2-581	Litter Management - A breeder can record the result of mating as 'whelped' and returns back on confirmation page
    Given A participant "William Mcmahon" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
    When  User selects the parent Dog and enters the details for 'Whelped'
    And  User clicks on 'submit' button
     And  User clicks on 'confirm' button
    And user proceeds with the payment option
    And  User clicks on 'back' button
    Then User verifies the confirmation for 'Whelped'

    @testp
    Scenario: Verify the field validations on 'Result of Mating' as 'whelped' Page
    Given A participant "William Mcmahon" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
    When  User selects the parent Dog and enters the details for 'Whelped'
    Then User verifies the 'Mandate' page for 'Whelped' details

    @testp
    Scenario: FT2-581	Litter Management - A breeder can record the result of mating as 'whelped'
    Given A participant "William Mcmahon" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
    When  User selects the parent Dog and enters the details for 'Whelped'
    And  User clicks on 'submit' button
    And  User clicks on 'confirm' button
    Then User verifies the status of the 'litter registration' is 'completed'

    @Pending
    Scenario: QA-498Verify that the participant can able to see his litters when the status of the litter registration is 'Completed'
    Given A participant "William Mcmahon" logged in to FastTrack application
    And user navigates to 'My Dogs' -> 'Litters' tab and clicks 'Nothing' tab
    When user views the status for the 'service registered' with litter registration as 'completed'
    Then User verifies the status of the 'litter registration' is 'completed'

   
    @test
    Scenario: QA-497Verify that the participant can able to see his litters when the status of the 'Vaccination' is 'pending'
      Given A participant "William Mcmahon" logged in to FastTrack application
    And user navigates to 'My Dogs' -> 'Litters' tab and clicks 'Nothing' tab
    When user views the status for the 'Vaccination' with litter registration as 'pending'
    Then User verifies the status of the 'Vaccination' is 'Pending'.

    @test
    Scenario: QA-496Verify that the participant can able to see his litters when the status of the 'Earbrand' is 'pending'
    Given A participant "William Mcmahon" logged in to FastTrack application
    And user navigates to 'My Dogs' -> 'Litters' tab and clicks 'Nothing' tab
    When user views the status for the 'Earbrand' with litter registration as 'pending'
    Then User verifies the status of the 'Earbrand' is 'Pending'

    @test
    Scenario: QA-495Verify that the participant can able to see his litters when the status of the 'Microchip' is 'pending'
    Given A participant "William Mcmahon" logged in to FastTrack application
    And user navigates to 'My Dogs' -> 'Litters' tab and clicks 'Nothing' tab
    When user views the status for the 'Microchip' with litter registration as 'pending'
    Then User verifies the status of the 'Microchip' is 'Pending'
   















