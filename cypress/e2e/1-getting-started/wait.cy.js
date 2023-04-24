describe("implicit-explicit wait", () => {

    it('Implicit Wait', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get("input[placeholder='Username']").type("standard_user")
        cy.get("input[placeholder='Password']").type('secret_sauce')
        cy.get("input[type='submit']").click().wait(5000)
        cy.title().then(x=>{
            cy.log(x)
        })
    })

    it('explicit Wait', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get("input[placeholder='Username']").type("standard_user")
        cy.get("input[placeholder='Password']").type('secret_sauce')
        cy.get("input[type='submit']").click()
        cy.get("div[id='page_wrapper']").should('be.visible')
        cy.title().then(x=>{
            cy.log(x)
        })
    })


})