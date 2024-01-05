import Automation_HomePage from'../../support/pageObjects/mojPom/Automation_HomePage'
import add_a_product_to_cart_and_verify_it from '../../support/pageObjects/mojPom/add_a_product_and_verify';
/// <reference types="Cypress"/>

describe("random testing", () => {
    beforeEach(() => {
        const homePage = new Automation_HomePage()
        homePage.visit_HomePage()

        cy.fixture('automationUserDetails').then(function (data) {
            //this.data = data;
            globalThis.data = data;
        })
    });
    it("should verify how many social icons are there on the page and if it redirects after clicking on one of them", () => {
        cy.get(".social_icons").should('have.length', 2)
        cy.get(".facebook").eq(0).trigger('mouseover').contains('Facebook')
        cy.get('.twitter').eq(0).invoke('removeAttr', 'target').click()
        cy.url().should('include', '')
    })

    it("should verify when hover over the element it changes its color", () => {
        cy.get("a[href*='product/category&path=']").contains("Apparel & accessories").trigger('mouseover').should('have.css', 'color', 'rgb(75, 91, 88)')

    })
    it("add a product to the cart and verify it", () => {
        const add_and_verify = new add_a_product_to_cart_and_verify_it()
        add_and_verify.add_a_product_and_verify_it()
    })
    it("calculate how many products are displayed on the page and verify it", () => {
        const productNumber = '.prdocutname'
        cy.get(productNumber).should('be.visible')
        cy.get(productNumber).its('length').then((productCount) => {
            cy.log("Number of products displayed on the page : " + productCount)
        })
    })

    it("should display another picture after clickng on the arrow", () => {

        let currentBannerText

        cy.get('.animate0').invoke('text').then((text) => {
            currentBannerText = text;
        });

        cy.get('.nextArrow').click({ force: true })
        cy.get('.animate0').should('not.have.text', currentBannerText);

    })
    it("Should show a new element after hovering over the link element", () => {
        cy.get("a[href*='product/category&path=']").contains("Books").trigger('mouseover')
        cy.get('.subcategories').invoke('show').contains('Paperback').should('be.visible')
    })

    it("Should write all the details about the user via custom command", () => {
        cy.get('.collapse a').contains('Login or register').click()
        cy.pokusavam_da_skontam_customCommand()
        cy.get('.alert-error').should('have.text', '\n×\nLogin name must be alphanumeric only and between 5 and 64 characters!City must be between 3 and 128 characters!Zip/postal code must be between 3 and 10 characters!Please select a region / state!Password must be between 4 and 20 characters!')
    })

    it("Should write all the details about the user via custom command and fixture's file", () => {
        cy.get('.collapse a').contains('Login or register').click()
        cy.pokusavam_da_skontam_customCommand_sa_fixtures(data.firstName, data.lastName, data.email, data.telephone, data.address, 'h1', 'Create Account')
    })
})
