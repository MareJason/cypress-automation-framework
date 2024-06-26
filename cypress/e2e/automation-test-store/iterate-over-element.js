/// <reference types="cypress" />

describe("Iterate over elements", () => {

    beforeEach(() => {
        cy.visit(Cypress.env("automationStore") + "index.php?rt=account/login");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    });

    it("Log information of all hair care products", () => {
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
        cy.log("Index: " + index + " : " + $el.text())
        });
    });
    it.only("Add specific product to basket", () => {
        cy.selectProduct('Curls to straight Shampoo');
    });

    it("Add another specific product to basket", () => {
        cy.selectProduct('Seaweed Conditioner');
    });

    it("Add perfume product to basket", () => {
        cy.selectProduct('Eau Parfumee au The Vert Shampoo');
    });
});
