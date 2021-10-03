Feature: Renting a car via qa-lab app

Background:
  Given I am on the car rental page
  And I set up future pick-up date
  And I set up future drop-off date

Scenario: User is able to rent a car

Scenario: Car list is filtered by model name
  When I select "Focus" car model
  And I perform a search on the car rental page
  Then I should see only "Focus" model in the search results

Scenario: Validation on summary page is working
  When I perform a search on the car rental page
  And I open summary page
  And I finalize rent
  Then I should see 'Name is required' validation message
  And I should see 'Last name is required' validation message
  And I should see 'Email is required' validation message
  And I should see 'Card number is required' validation message