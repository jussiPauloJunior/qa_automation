///<reference types= "cypress"/> 

describe('footer', () => {

    beforeEach('acesso a página', () => {
      cy.visit('https://project-passaport-qa.vercel.app/')
    })
  
    it('validar direcionamento ao clicar no ícone youtube', () => {
        cy.get('a[href="https://www.youtube.com/@JamesHardieBP"]').click()
        cy.wait(8000)
       cy.url().should('eq', 'https://www.youtube.com/@JamesHardieBP')
    })
  })