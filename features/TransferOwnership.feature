Feature: FT2-689 Existing owner initiates ownership transfer
  @test
  Scenario: Verify Existing owner initiates ownership transfer
    Given  A participant "William Mcmahon" logged in to FastTrack application
    And   user navigates to 'I Want To' -> 'Manage Greyhound' tab and clicks 'Transfer Ownership' tab
    When user enters the Name details of the new person to be transferred
    And User clicks on 'continue' button
    Then  User should be able to confirm the transfer ownership of dog to another user
    And user copies the Key and dog earbrand details


  @test
  Scenario: Verify Existing owner initiates ownership transfer and cancels the request
    Given  A participant "William Mcmahon" logged in to FastTrack application
    And   user navigates to 'I Want To' -> 'Manage Greyhound' tab and clicks 'Transfer Ownership' tab
    When user enters the Name details of the new person to be transferred
    And User clicks on 'cancel' button
    Then User is redirected to the list of racing dogs


  @test
  Scenario: FT 669 Verify New owner accepts ownership transfer
    Given  A participant "Paul Westerveld" logged in to FastTrack application
    And   user navigates to 'I Want To' -> 'Manage Greyhound' tab and clicks 'Accept Transfer of Ownership' tab
      When user enters the Authority Key and Ear brand details of dog for 'Transfer Ownership'
    And  user proceeds with the payment option
    Then user should be navigated to the confirmation page

  @pending
  Scenario: FT2-789	Participant can view an active transfer key on their dogs
    Given  A participant "Paul Westerveld" logged in to FastTrack application
    And user navigates to 'MyDog' menu
    When  user selects the 'dog' for which 'Issue transfer ownership' is completed
    Then User verifies the transfer Key for the dog


