class add_a_product_to_cart_and_verify_it{
    add_a_product_and_verify_it(){
        cy.get('.thumbnail').eq(0).click()
        cy.get('.cart').click()
        cy.get('#cart_quantity50').should('have.value', '1')
    }
}
export default add_a_product_to_cart_and_verify_it;