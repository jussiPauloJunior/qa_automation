
const urlFormHmlContactUs = Cypress.env('URL_HML_CONTACT_US')

class formContactUsPage {

    urlAcess() {
        cy.visit(urlFormHmlContactUs);
    }

    formFirstNameClick() {
        const field = cy.get('[id="FirstName"]');
        field.click();
        return this;
    }

    formFirstNameText(value) {
        const field = cy.get('[id="FirstName"]');
        field.type(value);
        return this;
    }

    formLastNameClick() {
        const field = cy.get('[id="LastName"]');
        field.click();
        return this;
    }

    formLastNameText(value) {
        const field = cy.get('[id="LastName"]');
        field.type(value);
        return this;
    }

    formEmailClick() {
        const field = cy.get('[id="Email"]');
        field.click();
        return this;
    }

    formEmailText(value) {
        const field = cy.get('[id="Email"]');
        field.type(value);
        return this;
    }

    formPostalCodeClick() {
        const field = cy.get('[id="PostalCode"]');
        field.click();
        return this;
    }

    formPostalCodeText(value) {
        const field = cy.get('[id="PostalCode"]');
        field.type(value);
        return this;
    }

    formSelectRoleOpt(value) {
        const select = cy.get('[id="LeadRole"]');
        select.select(value);
    }

    formBotton() {
        const button = cy.get('.mktoButton');
        button.dblclick();
    }

}

export default formContactUsPage;