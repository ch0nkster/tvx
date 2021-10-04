import { When, Then, Given, And } from "cypress-cucumber-preprocessor/steps";

And('I fill all required data on the summary page', () => {
  let name = cy.faker.name.firstName()
  let lastName = cy.faker.name.lastName()
  let cardNumber = cy.faker.finance.routingNumber()
  let email = cy.faker.internet.email()

  cy.get('#name').type(name)
  cy.get('#last_name').type(lastName)
  cy.get('#card_number').type(cardNumber)
  cy.get('#email').type(email)
})

Then('I should see success message', () => {
  cy.get('#rent_form').contains('You have succesfully rented a car!')
})
