import { Then, Given, And } from 'cypress-cucumber-preprocessor/steps';

Given('I am on the car rental page', () => {
  cy.visit('')
})

And('I set up future pick-up date', () => {
  let future_pick_up = cy.dayjs().add(1, 'day').format('YYYY-MM-DD')

  cy.get('#pickup').type(future_pick_up)
})

And('I set up future drop-off date', () => {
  let future_drop_off = cy.dayjs().add(8, 'day').format('YYYY-MM-DD')
  
  cy.get('#dropoff').type(future_drop_off)
})

And('I perform a search on the car rental page', () => {
  cy.get('.btn').contains('Search').click()
})

And('I open summary page', () => {
  cy.rent() 

  cy.rent()
})

And('I finalize rent', () => {
  cy.rent()
})
