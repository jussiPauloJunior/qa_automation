///<reference types= "cypress"/> 

describe('orçamento', () => {

    beforeEach('acesso a página', () => {
      cy.visit('https://project-passaport-qa.vercel.app/prosHub/breadtest2/breadcrumb-test')
    })

    const iconeHome = "#__next > div > nav > ol > li:nth-child(1) > a > img"
  
    it('validar direcionamento ao clicar no ícone de home', () => {
      
        cy.get(iconeHome).click();
        cy.url().should('eq', 'https://project-passaport-qa.vercel.app/');
    })
  })