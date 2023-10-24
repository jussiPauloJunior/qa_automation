/// <reference types="cypress" />
import {faker} from '@faker-js/faker';

describe('Preenche formulario com faker', () => {
  beforeEach(() => {

    cy.visit("https://project-passaport-pre-prod.vercel.app/request-for-information/")

  })

  it('Valida titulo', () => {

    // Title
    cy.get('h1')

    .should('have.css', 'font-size', '48px') // Provavel erro, deveria ser 72px

    .should('have.css', 'color', 'rgb(51, 51, 51)') // Ok, de acordo com o figma

    .should('have.css', 'font-family',
    '__helveticaPro_ac15a2, __helveticaPro_Fallback_ac15a2, Arial, sans-serif') // Provavel erro, deveria ser Helvetica Neue LT Pro

    .should('have.css', 'font-style', 'normal') // Ok, de acordo com o figma

    .should('have.css', 'font-weight', '700') // Ok, de acordo com o figma

    .should('have.css', 'line-height', '56px'); // Provavel erro, deveria ser 86px

  })

  it('Valida sub-titulo', () => {

    cy.get('h3') // Provavel erro, no figma deveria ser h2

    .should('have.css', 'font-size', '36px') 

    .should('have.css', 'color', 'rgb(51, 51, 51)') 

    .should('have.css', 'font-family',
    '__helveticaPro_ac15a2, __helveticaPro_Fallback_ac15a2, Arial, sans-serif') 

    .should('have.css', 'font-style', 'normal')

    .should('have.css', 'font-weight', '400') // Deveria ser 700

    .should('have.css', 'line-height', '40px'); // Deveria ser 46

  })

  it('Valida texto', () => {

    cy.get('h3') // Provavel erro, no figma deveria ser h2

    .should('have.css', 'font-size', '36px') 

    .should('have.css', 'color', 'rgb(51, 51, 51)') 

    .should('have.css', 'font-family',
    '__helveticaPro_ac15a2, __helveticaPro_Fallback_ac15a2, Arial, sans-serif') 

    .should('have.css', 'font-style', 'normal')

    .should('have.css', 'font-weight', '400') // Deveria ser 700

    .should('have.css', 'line-height', '40px'); // Deveria ser 46

  })

  it('Preenchimento do formulario', () => {

    // First Name
    cy.get('[id="FirstName"]').click().type(faker.person.firstName());

    // Last Name
    cy.get('[id="LastName"]').click().type(faker.person.lastName());

    // Email Address
    cy.get('[id="Email"]').click().type(faker.number.int()+"@ogilvy.com");

    // Role
    cy.get('[id="LeadRole"]').select("Homeowner");

    // Postal code
    cy.get('[id="PostalCode"]').type("15518266");

    //cy.get('select[id="PostalCode"]').select('Maçã')

  })

})
