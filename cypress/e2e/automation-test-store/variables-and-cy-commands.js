/// <reference types="Cypress"/>

describe("Verifying variables,cypress commands and jquery commands", () => {

    it("Navegating to specific product pages", () => {
        cy.visit("https://automationteststore.com/")
        //ovo navodno ne bi trebalo da radi ali meni iz nekog razloga radi
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains('Makeup')
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains('Skincare')
        // makeupLink.click()
        // skincareLink.click()

        //preporucen pristup
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()
        cy.get("a[href*='product/category&path=']").contains("Skincare").click()

    })

    it("Navegating to specific product pages", () => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()

        //Following code will fail
        // const header = cy.get("h1 .maintext")
        // cy.log(header.text())

        cy.get('h1 .maintext').then(($headerText) => {
            const headertext = $headerText.text()
            cy.log("Found header text: " + headertext)
            expect(headertext).is.eq('Makeup')
        })
    })
        it.only("Validate properties of the Contact Us Page", () => {
            cy.visit("https://automationteststore.com/index.php?rt=content/contact")

            //Uses cypress commands and chainig
            cy.contains('#ContactUsFrm','Contact Us Form').find('#field_11').should('contain','First name')

            //JQuery Approach
            cy.contains('#ContactUsFrm','Contact Us Form').then(text => {
                const firstNameText = text.find('#field_11').text()
                expect(firstNameText).to.contain('First name')
            })

            //Embedded commands (Closure)
       
    })
})
