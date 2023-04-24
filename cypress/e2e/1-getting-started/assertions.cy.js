// test suite
describe('Tutorialspoint', () => {
    it('Implicit Assertion', ()=> {
       cy.visit("https://www.tutorialspoint.com/videotutorials/index.php")
         cy.get('.toc chapters').find('li').should('have.length',5)
         .and('have.class', 'dropdown')
    });

    it('Explicit Assertion', () => {
        cy.visit("https://accounts.google.com")
        cy.get('h1#headingText').find('span').then((e)=>{
           const t = e.text()
           expect(t).to.contains('Sign')
        })
     })
 });