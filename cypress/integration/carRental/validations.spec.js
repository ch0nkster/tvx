import { When, Then, Given, And } from "cypress-cucumber-preprocessor/steps";

Then('I should see {string} validation message on the summary page', (message) => {
  cy.get('#rent_form').contains(message)
})
