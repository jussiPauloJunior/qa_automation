///<reference types= "cypress"/> 

describe('orçamento', () => {

  beforeEach('acesso a página', () => {
    cy.visit('https://project-passaport-qa.vercel.app/')
  })

  it('validar direcionamento ao clicar no ícone de orçamento', () => {
     cy.contains('Get a teste').should('be.visible').click()
     cy.url().should('be.equal', 'https://project-passaport-qa.vercel.app/prosHub/')
  })
})