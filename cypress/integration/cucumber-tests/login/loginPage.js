const URL = 'https://www.meetup.com/tr-TR/login'
const USERNAME_INPUT = '#email'
const PASSWORD_INPUT = '#current-password'
const SUBMIT_BUTTON = 'button[type="submit"]'
const ERROR_MESSAGE = '#email-error'

class LoginPage {
  static visit() {
    cy.visit(URL)
  }

  static fillUsername(username) {
    cy.get(USERNAME_INPUT).type(username)
  }

  static fillPassword(password) {
    cy.get(PASSWORD_INPUT).type(password)
  }

  static submit() {
    cy.get(SUBMIT_BUTTON).click()
  }

  static error(message) {
    cy.get(ERROR_MESSAGE).contains(message)
  }
}

export default LoginPage
