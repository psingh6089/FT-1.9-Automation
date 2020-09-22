Feature: FT2-687 Owner retires a dog


@test
Scenario: QA-375 Verify the field validations on Retire a dog page
Given  A participant "Glenn Campbell" logged in to FastTrack application
And    user navigates to 'I Want To' -> 'Retire Greyhound' tab and clicks 'Retire as a Pet' tab
When   user selects retirement status as 'Pet' -> 'Owner' 
And   user enters the details for 'Pet as owner'
And     User clicks on 'cancel' button
Then    user is able to land on ' My->Racing ' Page

@test
Scenario: QA-360 Verify that the dog can retire as Pet to Owner
Given  A participant "Glenn Campbell" logged in to FastTrack application
And    user navigates to 'I Want To' -> 'Retire Greyhound' tab and clicks 'Retire as a Pet' tab
When   user is able to add or update the address details
Then   user is able to land on ' Bank Details ' Page

@test
Scenario: QA-361 Verify that the dog can retire as Pet to Third Party    
Given  A participant "Glenn Campbell" logged in to FastTrack application
And    user navigates to 'I Want To' -> 'Retire Greyhound' tab and clicks 'Retire as a Pet' tab
When   user is able to add or update the address details
Then   user is able to land on ' My->Racing ' Page

@test
Scenario: QA-362 Verify that the Member Services can Approve retirement as Pet to Third Party
Given  A participant "Glenn Campbell" logged in to FastTrack application
And    user navigates to 'I Want To' -> 'Retire Greyhound' tab and clicks 'Retire as a Pet' tab
When   user is able to add or update the address details
Then   user is able to land on ' Bank Details ' Page

@test
Scenario: QA-363 Verify that the Member Services can Decline retirement as Pet to Third Party
Given  A participant "Glenn Campbell" logged in to FastTrack application
And    user navigates to 'I Want To' -> 'Retire Greyhound' tab and clicks 'Retire as a Pet' tab
When   user is able to add or update the address details
Then   user is able to land on ' Bank Details ' Page

@test
Scenario:  QA-364 Verify that the dog can retire as Breeding Animal to Owner
Given  A participant "Glenn Campbell" logged in to FastTrack application
And    user navigates to 'I Want To' -> 'Retire Greyhound' tab and clicks 'Retire as a Pet' tab
When   user is able to add or update the address details
Then   user is able to land on ' Bank Details ' Page

@test
Scenario:  QA-365 Verify that the dog can retire as Breeding Animal to Third Party
Given  A participant "Glenn Campbell" logged in to FastTrack application
And    user navigates to 'I Want To' -> 'Retire Greyhound' tab and clicks 'Retire as a Pet' tab
When   user is able to add or update the address details
Then   user is able to land on ' Bank Details ' Page

@test
Scenario: QA-366 Verify that the dog can retire as Euthanised at Veterinary Clinic
Given  A participant "Glenn Campbell" logged in to FastTrack application
And    user navigates to 'I Want To' -> 'Retire Greyhound' tab and clicks 'Retire as a Pet' tab
When   user is able to add or update the address details
Then   user is able to land on ' Bank Details ' Page

@test
Scenario: QA-367 Verify that the dog can retire as Euthanised at Animal Cremation Service
Given  A participant "Glenn Campbell" logged in to FastTrack application
And    user navigates to 'I Want To' -> 'Retire Greyhound' tab and clicks 'Retire as a Pet' tab
When   user is able to add or update the address details
Then   user is able to land on ' Bank Details ' Page

@test
Scenario: QA-368 Verify that the dog can retire as Euthanised Other
Given  A participant "Glenn Campbell" logged in to FastTrack application
And    user navigates to 'I Want To' -> 'Retire Greyhound' tab and clicks 'Retire as a Pet' tab
When   user is able to add or update the address details
Then   user is able to land on ' Bank Details ' Page

@test
Scenario: QA-369 Verify that the dog can retire as Exported
Given  A participant "Glenn Campbell" logged in to FastTrack application
And    user navigates to 'I Want To' -> 'Retire Greyhound' tab and clicks 'Retire as a Pet' tab
When   user is able to add or update the address details
Then   user is able to land on ' Bank Details ' Page

@test
Scenario: QA-370 Verify that the dog can retire as Other
Given  A participant "Glenn Campbell" logged in to FastTrack application
And    user navigates to 'I Want To' -> 'Retire Greyhound' tab and clicks 'Retire as a Pet' tab
When   user is able to add or update the address details
Then   user is able to land on ' Bank Details ' Page

@test
Scenario: QA-371 Verify that only named dog can able to retire as Breeding Animal
Given  A participant "Glenn Campbell" logged in to FastTrack application
And    user navigates to 'I Want To' -> 'Retire Greyhound' tab and clicks 'Retire as a Pet' tab
When   user is able to add or update the address details
Then   user is able to land on ' Bank Details ' Page

@test
Scenario: A-372 Verify that the Member Services can Retire a dog via Impersonate
Given  A participant "Glenn Campbell" logged in to FastTrack application
And    user navigates to 'I Want To' -> 'Retire Greyhound' tab and clicks 'Retire as a Pet' tab
When   user is able to add or update the address details
Then   user is able to land on ' Bank Details ' Page
