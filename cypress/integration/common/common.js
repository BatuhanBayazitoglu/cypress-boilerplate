import { defineStep } from 'cypress-cucumber-preprocessor/steps'

defineStep('I want to wait {int} milliseconds', time => {
    cy.wait(time)
})

defineStep('I see url {string}', url => {
    cy.url().should('include',url)
})
