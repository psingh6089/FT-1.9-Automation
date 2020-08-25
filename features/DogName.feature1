Feature: FT2-672 Participants supplying names for the dog to be named

@test
Scenario: QA-190-Verify if the participant can supply names for the dog to be named.
    Given A participant "David Long" logged in to FastTrack application
    And user navigates to 'My Dogs' -> 'Non Racing' tab and clicks 'UnNamed Dog' tab
    When  user clicks Apply for a Dog name page with valid name
    And  user proceeds with the payment option
    Then  user should be navigated to the confirmation page

@test
Scenario: QA-190-Verify if the participant can cancel supply names for the dog to be named.
    Given A participant "David Long" logged in to FastTrack application
    And user navigates to 'My Dogs' -> 'Non Racing' tab and clicks 'UnNamed Dog' tab
    When  user clicks Apply for a Dog name page with valid name
    And   User clicks on 'cancel' button
    Then  User is redirected to the list of racing dogs



