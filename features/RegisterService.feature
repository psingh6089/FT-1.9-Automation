Feature: FT2-577 Litter Management - A studmaster can record a service

  
  @testp
  Scenario: QA-200-Verify the functionality of X button
    Given A participant "Paul Westerveld" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Register A Service' tab
    When Studmaster clicks X button to cancel the register service
    Then  user is able to land on 'Active' Page

  @testp
  Scenario: QA-201-Verify the functionality of Cancel button
    Given A participant "Paul Westerveld" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Register A Service' tab
    When  Bitch details are entered and validated
    And   Service details are entered and added
    And   User clicks on 'cancel' button
    Then  user is able to land on 'Active' Page

  @test
    Scenario: QA-199-Verify if a studmaster can record a service
    Given A participant "Paul Westerveld" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Register A Service' tab
    When Bitch details are entered and validated
    And  Service details are entered and added
    And User clicks on 'submit' button
    And User clicks on 'ok' button
    And User clicks on 'continue' button
    Then User verifies the confirmation for 'Register a service'
 

   @testp 
    Scenario: QA-199-Verify if a studmaster can record a service with late fee payment
    Given A participant "Paul Westerveld" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Register A Service' tab
    When Bitch details are entered and validated
    And  Service details are entered and added
    And User clicks on 'submit' button
    And User clicks on 'ok' button
    And User clicks on 'continue' button
    And  user proceeds with the payment option
    Then User verifies the confirmation for 'Register a service'
 

