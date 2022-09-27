import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage'

Given('I am in the login page', ()=> {
    LoginPage.visit()
})

When('I type my username', ()=> {
    LoginPage.fillUsername('invalid username')
})

And('I type my password', ()=> {
    LoginPage.fillPassword("invalid password")
})

And('I click on submit button', ()=> {
    LoginPage.submit()
})

Then('I should see error message', () => {
    LoginPage.error('E-postanın biçimi geçersiz')
})

When('I type my {string}', username => {
    LoginPage.fillUsername(username)
  })
  
  When('I type my {string}', password => {
    LoginPage.fillPassword(password)
  })

