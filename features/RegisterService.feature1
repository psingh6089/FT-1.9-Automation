Feature: FT2-577 Litter Management - A studmaster can record a service

  
    @test
  Scenario: QA-200-Verify the functionality of X button
    Given A participant "Paul Westerveld" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Register A Service' tab
    When Studmaster clicks X button to cancel the register service
    Then  User is redirected to the list of racing dogs

  @test
  Scenario: QA-201-Verify the functionality of Cancel button
    Given A participant "Paul Westerveld" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Register A Service' tab
    When  Bitch details are entered and validated
    And   Service details are entered and added
    And   User clicks on 'cancel' button
    Then  User is redirected to the list of racing dogs


  @test
  Scenario: QA-199-Verify if a studmaster can record a service
    Given A participant "Paul Westerveld" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Register A Service' tab
    When  Bitch details are entered and validated
    And   Service details are entered and added
    And User clicks on 'submit' button
    And  user proceeds with the payment option
    Then  Studmaster should be able to record a service succesfully
 

