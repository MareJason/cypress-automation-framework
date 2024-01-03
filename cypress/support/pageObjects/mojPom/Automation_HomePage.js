class Automation_HomePage {
    visit_HomePage() {
        cy.visit(Cypress.env("automationStore"))
    }
}
export default Automation_HomePage;