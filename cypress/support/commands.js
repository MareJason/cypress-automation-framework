// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
Cypress.Commands.add("navigateTo_WebdriverUni_Homepage",() => {
    cy.visit("/")
})

Cypress.Commands.add("navigateTo_WebdriverUni_Checkbox_Page",() => {
    cy.visit("/" + "/Dropdown-Checkboxes-RadioButtons/index.html")
})

Cypress.Commands.add("selectProduct",productName => {
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        if($el.text().includes(productName)) {
            cy.wrap($el).click()
        }
    })
})

Cypress.Commands.add("addProductToBasket", productName => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
        if($el.text() === productName) {
            cy.log($el.text())
            cy.get('.productcart').eq(index).click();
        }
    });
});

Cypress.Commands.add("webdriverUni_ContactForm_Submission", (firstName, lastName, email, comment, $selector, textToLocate) => {
    cy.get('[name="first_name"]').type(firstName);
    cy.get('[name="last_name"]').type(lastName);
    cy.get('[name="email"]').type(email)
    cy.get('textarea.feedback-input').type(comment)
    cy.get('[type="submit"]').click();
    cy.get($selector).contains(textToLocate)
})
Cypress.Commands.add("pokusavam_da_skontam_customCommand", () => {
    cy.get('button[type="submit"]').contains('Continue').click()
    cy.get('#AccountFrm_firstname').type('Marko')
    cy.get('#AccountFrm_lastname').type('Crnomarkovic')
    cy.get('#AccountFrm_email').type('mareljapk@gmail.com')
    cy.get('#AccountFrm_telephone').type('0637363836384')
    cy.get('#AccountFrm_address_1').type('Pariske Komune PK')
    cy.get('#AccountFrm_newsletter0').click()
    cy.get('#AccountFrm_agree').click()
    cy.get('.lock-on-click').click()
})

Cypress.Commands.add("pokusavam_da_skontam_customCommand_sa_fixtures",(firstName, lastName, email, phoneNumber, address, $selector, textToLocate ) => {
    cy.get('button[type="submit"]').contains('Continue').click()
    cy.get('#AccountFrm_firstname').type(firstName)
    cy.get('#AccountFrm_lastname').type(lastName)
    cy.get('#AccountFrm_email').type(email)
    cy.get('#AccountFrm_telephone').type(phoneNumber)
    cy.get('#AccountFrm_address_1').type(address)
    cy.get('#AccountFrm_newsletter0').click()
    cy.get('#AccountFrm_agree').click()
    cy.get('.lock-on-click').click()
    cy.get('body').contains('Login name must be alphanumeric only and between 5 and 64 characters!')
    cy.get($selector).contains(textToLocate)

    })
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
