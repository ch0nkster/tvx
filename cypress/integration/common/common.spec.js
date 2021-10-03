import { When, Then, Given, And } from 'cypress-cucumber-preprocessor/steps';
const dayjs = require('dayjs')

Given('I am on the car rental page', () => {
  cy.visit('')
})

And('I set up future pick-up date', () => {
  let future_pick_up = Cypress.dayjs().add(1, 'day').format('YYYY-MM-DD')

  cy.get('#pickup').type(future_pick_up)
})

And('I set up future drop-off date', () => {
  let future_drop_off = Cypress.dayjs().add(8, 'day').format('YYYY-MM-DD')
  
  cy.get('#dropoff').type(future_drop_off)
})

And('I perform a search on the car rental page', () => {
  cy.get('.btn').contains('Search').click()
})

And('I open summary page', () => {
  cy.get('.btn').contains('Rent').click()

  cy.get('.btn').contains('Rent!').click()
})

And('I finalize rent', () => {
  cy.get('.btn').contains('Rent').click()
})

Then('I should see {string} validation message', (message) => {
  cy.get('#rent_form').contains(message)
})