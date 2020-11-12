    Feature: Login to the FT1.9 application as various user

    @testp
    Scenario: My Dogs - Verify that user can view the 'My Dog'-> Active page 
    Given A participant "William Mcmahon" logged in to FastTrack application
    And user navigates to 'My Dogs' -> 'Nothing' tab and clicks 'Nothing' tab
    When user views the 'My Dogs->Active' page and filters by 'Reset'
    Then User verifies the no of dogs displayed with filter 'Reset'

    @testp
    Scenario: My Dogs - Verify that user can do filter by 'Racing' on Active Dogs Page
    Given A participant "William Mcmahon" logged in to FastTrack application
    And user navigates to 'My Dogs' -> 'Nothing' tab and clicks 'Nothing' tab
    When user views the 'My Dogs->Active' page and filters by 'All'
    Then User verifies the list of filters and its detail

    @test
    Scenario: My Dogs - Verify that user can do filter by 'Racing' on Active Dogs Page
    Given A participant "William Mcmahon" logged in to FastTrack application
    And user navigates to 'My Dogs' -> 'Nothing' tab and clicks 'Nothing' tab
    When user views the 'My Dogs->Active' page and filters by 'Racing'
    Then User verifies the no of dogs displayed with filter 'Racing'
    @testp
    Scenario: My Dogs - Verify that user can do filter by 'Nominated' on Active Dogs Page
    Given A participant "Peter Walsh" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
    When  User selects the parent Dog and enters the details for 'Whelped'
    And  User clicks on 'submit' button
    And user proceeds with the payment option
    And  User clicks on 'c' button
    Then User verifies the record

    @testp
    Scenario: My Dogs - Verify that user can do filter by 'Warning' on Active Dogs Page
    Given A participant "Peter Walsh" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
    When  User selects the parent Dog and enters the details for 'Whelped'
    And  User clicks on 'submit' button
    And user proceeds with the payment option
    And  User clicks on 'c' button
    Then User verifies the record

    @testp
    Scenario: My Dogs - Verify that user can do filter by 'Issue' on Active Dogs Page
    Given A participant "Peter Walsh" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
    When  User selects the parent Dog and enters the details for 'Whelped'
    And  User clicks on 'submit' button
    And user proceeds with the payment option
    And  User clicks on 'c' button
    Then User verifies the record

    @testp
    Scenario: My Dogs - Verify that user can do filter by 'Owned' on Active Dogs Page
    Given A participant "Peter Walsh" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
    When  User selects the parent Dog and enters the details for 'Whelped'
    And  User clicks on 'submit' button
    And user proceeds with the payment option
    And  User clicks on 'c' button
    Then User verifies the record

    @testp
    Scenario: My Dogs - Verify that user can do filter by 'Training' on Active Dogs Page
    Given A participant "Peter Walsh" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
    When  User selects the parent Dog and enters the details for 'Whelped'
    And  User clicks on 'submit' button
    And user proceeds with the payment option
    And  User clicks on 'c' button
    Then User verifies the record
    @testp
    Scenario: My Dogs - Verify that user can do filter by 'Spelling' on Active Dogs Page
    Given A participant "Peter Walsh" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
    When  User selects the parent Dog and enters the details for 'Whelped'
    And  User clicks on 'submit' button
    And user proceeds with the payment option
    And  User clicks on 'c' button
    Then User verifies the record

    @testp
    Scenario: My Dogs - Verify that user can do filter by 'Educating' on Active Dogs Page
    Given A participant "Peter Walsh" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
    When  User selects the parent Dog and enters the details for 'Whelped'
    And  User clicks on 'submit' button
    And user proceeds with the payment option
    And  User clicks on 'c' button
    Then User verifies the record

    @testp
    Scenario: My Dogs - Verify that user can do filter by 'Breeding' on Active Dogs Page
    Given A participant "Peter Walsh" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
    When  User selects the parent Dog and enters the details for 'Whelped'
    And  User clicks on 'submit' button
    And user proceeds with the payment option
    And  User clicks on 'c' button
    Then User verifies the record

    @testp
    Scenario: My Dogs - Verify that user can do filter by 'Whelping' on Active Dogs Page
    Given A participant "Peter Walsh" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
    When  User selects the parent Dog and enters the details for 'Whelped'
    And  User clicks on 'submit' button
    And user proceeds with the payment option
    And  User clicks on 'c' button
    Then User verifies the record

    @testp
    Scenario: My Dogs - Verify that user can do filter by 'Rearing' on Active Dogs Page
    Given A participant "Peter Walsh" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
    When  User selects the parent Dog and enters the details for 'Whelped'
    And  User clicks on 'submit' button
    And user proceeds with the payment option
    And  User clicks on 'c' button
    Then User verifies the record

    @testp
    Scenario: My Dogs - Verify that user can do filter by 'Reset' on Active Dogs Page 
    Given A participant "Peter Walsh" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
    When  User selects the parent Dog and enters the details for 'Whelped'
    And  User clicks on 'submit' button
    And user proceeds with the payment option
    And  User clicks on 'c' button
    Then User verifies the record

    @testp
    Scenario: My Dogs - Verify that user can do Sort by 'Kennel name A - Z' on Active Dogs Page
    Given A participant "Peter Walsh" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
    When  User selects the parent Dog and enters the details for 'Whelped'
    And  User clicks on 'submit' button
    And user proceeds with the payment option
    And  User clicks on 'c' button
    Then User verifies the record
    @testp
    Scenario: My Dogs - Verify that user can do Sort by 'Kennel name Z - A' on Active Dogs Page
    Given A participant "Peter Walsh" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
    When  User selects the parent Dog and enters the details for 'Whelped'
    And  User clicks on 'submit' button
    And user proceeds with the payment option
    And  User clicks on 'c' button
    Then User verifies the record

    @testp
    Scenario: My Dogs - Verify that user can do Sort by 'Racing name A - Z' on Active Dogs Page
    Given A participant "Peter Walsh" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
    When  User selects the parent Dog and enters the details for 'Whelped'
    And  User clicks on 'submit' button
    And user proceeds with the payment option
    And  User clicks on 'c' button
    Then User verifies the record

    @testp
    Scenario: My Dogs - Verify that user can do Sort by 'Racing name Z - A' on Active Dogs Page
    Given A participant "Peter Walsh" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
    When  User selects the parent Dog and enters the details for 'Whelped'
    And  User clicks on 'submit' button
    And user proceeds with the payment option
    And  User clicks on 'c' button
    Then User verifies the record

    @testp
    Scenario: My Dogs - Verify that user can do Sort by 'Whelp date - Youngest' on Active Dogs Page
    Given A participant "Peter Walsh" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
    When  User selects the parent Dog and enters the details for 'Whelped'
    And  User clicks on 'submit' button
    And user proceeds with the payment option
    And  User clicks on 'c' button
    Then User verifies the record

    @testp
    Scenario: My Dogs - Verify that user can do Sort by 'Whelp date - Oldest' on Active Dogs Page 
    Given A participant "Peter Walsh" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
    When  User selects the parent Dog and enters the details for 'Whelped'
    And  User clicks on 'submit' button
    And user proceeds with the payment option
    And  User clicks on 'c' button
    Then User verifies the record

    @testp
    Scenario: My Dogs - Verify that user can do Sort by 'Dog Sex - Bitch first' on Active Dogs Page
    Given A participant "Peter Walsh" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
    When  User selects the parent Dog and enters the details for 'Whelped'
    And  User clicks on 'submit' button
    And user proceeds with the payment option
    And  User clicks on 'c' button
    Then User verifies the record

    @testp
    Scenario: My Dogs - Verify that user can do Sort by 'Dog Sex - Dog first' on Active Dogs Page
    Given A participant "Peter Walsh" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
    When  User selects the parent Dog and enters the details for 'Whelped'
    And  User clicks on 'submit' button
    And user proceeds with the payment option
    And  User clicks on 'c' button
    Then User verifies the record

    @testp
    Scenario: My Dogs - Verify that user can do Sort by 'Reset' on Active Dogs Page
    Given A participant "Peter Walsh" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
    When  User selects the parent Dog and enters the details for 'Whelped'
    And  User clicks on 'submit' button
    And user proceeds with the payment option
    And  User clicks on 'c' button
    Then User verifies the record

    @testp
    Scenario: My Dogs - Verify that user can view the 'My Dog'-> on Non Active page 
    Given A participant "Peter Walsh" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
    When  User selects the parent Dog and enters the details for 'Whelped'
    And  User clicks on 'submit' button
    And user proceeds with the payment option
    And  User clicks on 'c' button
    Then User verifies the record

    @testp
    Scenario: My Dogs - Verify that user can do filter by 'Pet' on Non Active Dogs Page
    Given A participant "Peter Walsh" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
    When  User selects the parent Dog and enters the details for 'Whelped'
    And  User clicks on 'submit' button
    And user proceeds with the payment option
    And  User clicks on 'c' button
    Then User verifies the record

    @testp
    Scenario: My Dogs - Verify that user can do filter by 'Breeding' on Non Active Dogs Page 
    Given A participant "Peter Walsh" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
    When  User selects the parent Dog and enters the details for 'Whelped'
    And  User clicks on 'submit' button
    And user proceeds with the payment option
    And  User clicks on 'c' button
    Then User verifies the record

    @testp
    Scenario: My Dogs - Verify that user can do filter by 'Gap' on Non Active Dogs Page
    Given A participant "Peter Walsh" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
    When  User selects the parent Dog and enters the details for 'Whelped'
    And  User clicks on 'submit' button
    And user proceeds with the payment option
    And  User clicks on 'c' button
    Then User verifies the record

    @testp
    Scenario: My Dogs - Verify that user can do filter by 'Euthanised' on Non Active Dogs Page
    Given A participant "Peter Walsh" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
    When  User selects the parent Dog and enters the details for 'Whelped'
    And  User clicks on 'submit' button
    And user proceeds with the payment option
    And  User clicks on 'c' button
    Then User verifies the record

    @testp
    Scenario: My Dogs - Verify that user can do filter by 'Exported' on Non Active Dogs Page
    Given A participant "Peter Walsh" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
    When  User selects the parent Dog and enters the details for 'Whelped'
    And  User clicks on 'submit' button
    And user proceeds with the payment option
    And  User clicks on 'c' button
    Then User verifies the record

    @testp
    Scenario: My Dogs - Verify that user can do filter by 'Deceased' on Non Active Dogs Page
    Given A participant "Peter Walsh" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
    When  User selects the parent Dog and enters the details for 'Whelped'
    And  User clicks on 'submit' button
    And user proceeds with the payment option
    And  User clicks on 'c' button
    Then User verifies the record

    @testp
    Scenario: My Dogs - Verify that user can do filter by 'Pet-Third-Party' on Non Active Dogs Page
    Given A participant "Peter Walsh" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
    When  User selects the parent Dog and enters the details for 'Whelped'
    And  User clicks on 'submit' button
    And user proceeds with the payment option
    And  User clicks on 'c' button
    Then User verifies the record

    @testp
    Scenario: My Dogs - Verify that user can do filter by 'Default' on Non Active Dogs Page
    Given A participant "Peter Walsh" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
    When  User selects the parent Dog and enters the details for 'Whelped'
    And  User clicks on 'submit' button
    And user proceeds with the payment option
    And  User clicks on 'c' button
    Then User verifies the record

    @testp
    Scenario: My Dogs - Verify that user can do filter by 'Reset' on Non Active Dogs Page
    Given A participant "Peter Walsh" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
    When  User selects the parent Dog and enters the details for 'Whelped'
    And  User clicks on 'submit' button
    And user proceeds with the payment option
    And  User clicks on 'c' button
    Then User verifies the record

    @testp
    Scenario: My Dogs - Verify that user can do Sort by 'Kennel name A - Z' on Non Active Dogs Page
    Given A participant "Peter Walsh" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
    When  User selects the parent Dog and enters the details for 'Whelped'
    And  User clicks on 'submit' button
    And user proceeds with the payment option
    And  User clicks on 'c' button
    Then User verifies the record

    @testp
    Scenario: My Dogs - Verify that user can do Sort by 'Kennel name Z - A' on Non Active Dogs Page
    Given A participant "Peter Walsh" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
    When  User selects the parent Dog and enters the details for 'Whelped'
    And  User clicks on 'submit' button
    And user proceeds with the payment option
    And  User clicks on 'c' button
    Then User verifies the record

    @testp
    Scenario: My Dogs - Verify that user can do Sort by 'Racing name A - Z' on Non Active Dogs Page
    Given A participant "Peter Walsh" logged in to FastTrack application
    And user navigates to 'I Want To' -> 'Breed GreyHound' tab and clicks 'Whelping Results' tab
    When  User selects the parent Dog and enters the details for 'Whelped'
    And  User clicks on 'submit' button
    And user proceeds with the payment option
    And  User clicks on 'c' button
    Then User verifies the record

