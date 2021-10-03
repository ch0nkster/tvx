import { When, Then, And } from "cypress-cucumber-preprocessor/steps";

When('I select {string} car model', (model) => {
  cy.get('#model').type(model)
})

Then('I should see only {string} model in the search results', (model) => {
  cy.get('tbody>tr').each(($el) => {
    cy.wrap($el)
      .children()
      .eq(2)
      .contains(model)
  })
})