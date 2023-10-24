///<reference types= "cypress"/> 

describe('orçamento', () => {

    beforeEach('', () => {
        cy.viewport(1280, 720)
        cy.visit('https://project-passaport-qa.vercel.app/')
    })

    it('validar exibiçao zip code default', () => {
        cy.contains('60601').should('be.visible')
    })

    it('validar exibiçao modal de zip code', () => {
        cy.contains('60601').should('be.visible').click()
    })
})