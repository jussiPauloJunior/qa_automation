import formContactUsPage from '../../support/pageObjects/formContactUsPage';
import {faker} from '@faker-js/faker';

describe('Preenche formulario com faker', () => {

    let form;

    beforeEach(() => {

        form = new formContactUsPage();
        form.urlAcess();

    });

    it('Valida o css do titulo', () => {

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
    
    it('Valida o css do sub-titulo', () => {
    
        cy.get('h3') // Provavel erro, no figma deveria ser h2
    
        .should('have.css', 'font-size', '36px') 
    
        .should('have.css', 'color', 'rgb(51, 51, 51)') 
    
        .should('have.css', 'font-family',
        '__helveticaPro_ac15a2, __helveticaPro_Fallback_ac15a2, Arial, sans-serif') 
    
        .should('have.css', 'font-style', 'normal')
    
        .should('have.css', 'font-weight', '400') // Deveria ser 700
    
        .should('have.css', 'line-height', '40px'); // Deveria ser 46
    
    })
    
    it('Valida o css do texto', () => {
    
        cy.get('h3') // Provavel erro, no figma deveria ser h2
    
        .should('have.css', 'font-size', '36px') 
    
        .should('have.css', 'color', 'rgb(51, 51, 51)') 
    
        .should('have.css', 'font-family',
        '__helveticaPro_ac15a2, __helveticaPro_Fallback_ac15a2, Arial, sans-serif') 
    
        .should('have.css', 'font-style', 'normal')
    
        .should('have.css', 'font-weight', '400') // Deveria ser 700
    
        .should('have.css', 'line-height', '40px'); // Deveria ser 46
    
    })

    it('Valida formulario preenchido com opção role "Homeowner" selecionada', () => {

        // Dado que o usuario esta na tela do form
        // Quando preenche todos os campos corretamente
        // E clica em Submit
        // Então os dados devem ser enviados com sucesso
  
        form.formFirstNameClick()
        form.formFirstNameText(faker.person.firstName())

        form.formLastNameClick()
        form.formLastNameText(faker.person.lastName())

        form.formEmailClick()
        form.formEmailText(faker.number.int()+"@ogilvy.com")

        form.formSelectRoleOpt("Homeowner")

        form.formPostalCodeClick()
        form.formPostalCodeText("123456")
        
        form.formBotton();

        cy.get('h1').should('exist').contains('Thank you, your form has been submitte')
  
    })

    it('Valida formulario preenchido com opção role "Architect" selecionada', () => {

        // Dado que o usuario esta na tela do form
        // Quando preenche todos os campos corretamente
        // E clica em Submit
        // Então os dados devem ser enviados com sucesso
  
        form.formFirstNameClick()
        form.formFirstNameText(faker.person.firstName())

        form.formLastNameClick()
        form.formLastNameText(faker.person.lastName())

        form.formEmailClick()
        form.formEmailText(faker.number.int()+"@ogilvy.com")

        form.formSelectRoleOpt("Architect")

        form.formPostalCodeClick()
        form.formPostalCodeText("123456")
        
        form.formBotton();

        cy.get('h1').should('exist').contains('Thank you, your form has been submitte')
  
    })

    it('Valida formulario preenchido com opção role "Builder" selecionada', () => {

        // Dado que o usuario esta na tela do form
        // Quando preenche todos os campos corretamente
        // E clica em Submit
        // Então os dados devem ser enviados com sucesso
  
        form.formFirstNameClick()
        form.formFirstNameText(faker.person.firstName())

        form.formLastNameClick()
        form.formLastNameText(faker.person.lastName())

        form.formEmailClick()
        form.formEmailText(faker.number.int()+"@ogilvy.com")

        form.formSelectRoleOpt("Builder")

        form.formPostalCodeClick()
        form.formPostalCodeText("123456")
        
        form.formBotton();

        cy.get('h1').should('exist').contains('Thank you, your form has been submitte')
  
    })

    it('Valida formulario preenchido com opção role "Contractor" selecionada', () => {

        // Dado que o usuario esta na tela do form
        // Quando preenche todos os campos corretamente
        // E clica em Submit
        // Então os dados devem ser enviados com sucesso
  
        form.formFirstNameClick()
        form.formFirstNameText(faker.person.firstName())

        form.formLastNameClick()
        form.formLastNameText(faker.person.lastName())

        form.formEmailClick()
        form.formEmailText(faker.number.int()+"@ogilvy.com")

        form.formSelectRoleOpt("Contractor")

        form.formPostalCodeClick()
        form.formPostalCodeText("123456")
        
        form.formBotton();

        cy.get('h1').should('exist').contains('Thank you, your form has been submitte')
  
    })

    it('Valida formulario preenchido com opção role "Dealer" selecionada', () => {

        // Dado que o usuario esta na tela do form
        // Quando preenche todos os campos corretamente
        // E clica em Submit
        // Então os dados devem ser enviados com sucesso
  
        form.formFirstNameClick()
        form.formFirstNameText(faker.person.firstName())

        form.formLastNameClick()
        form.formLastNameText(faker.person.lastName())

        form.formEmailClick()
        form.formEmailText(faker.number.int()+"@ogilvy.com")

        form.formSelectRoleOpt("Dealer")

        form.formPostalCodeClick()
        form.formPostalCodeText("123456")
        
        form.formBotton();

        cy.get('h1').should('exist').contains('Thank you, your form has been submitte')
  
    })

    it('Valida formulario preenchido com opção role "Developer" selecionada', () => {

        // Dado que o usuario esta na tela do form
        // Quando preenche todos os campos corretamente
        // E clica em Submit
        // Então os dados devem ser enviados com sucesso
  
        form.formFirstNameClick()
        form.formFirstNameText(faker.person.firstName())

        form.formLastNameClick()
        form.formLastNameText(faker.person.lastName())

        form.formEmailClick()
        form.formEmailText(faker.number.int()+"@ogilvy.com")

        form.formSelectRoleOpt("Developer")

        form.formPostalCodeClick()
        form.formPostalCodeText("123456")
        
        form.formBotton();

        cy.get('h1').should('exist').contains('Thank you, your form has been submitte')
  
    })

    it('Valida formulario preenchido com opção role "Distributor" selecionada', () => {

        // Dado que o usuario esta na tela do form
        // Quando preenche todos os campos corretamente
        // E clica em Submit
        // Então os dados devem ser enviados com sucesso
  
        form.formFirstNameClick()
        form.formFirstNameText(faker.person.firstName())

        form.formLastNameClick()
        form.formLastNameText(faker.person.lastName())

        form.formEmailClick()
        form.formEmailText(faker.number.int()+"@ogilvy.com")

        form.formSelectRoleOpt("Distributor")

        form.formPostalCodeClick()
        form.formPostalCodeText("123456")
        
        form.formBotton();

        cy.get('h1').should('exist').contains('Thank you, your form has been submitte')
  
    })

    it('Valida formulario preenchido com opção role "Installer" selecionada', () => {

        // Dado que o usuario esta na tela do form
        // Quando preenche todos os campos corretamente
        // E clica em Submit
        // Então os dados devem ser enviados com sucesso
  
        form.formFirstNameClick()
        form.formFirstNameText(faker.person.firstName())

        form.formLastNameClick()
        form.formLastNameText(faker.person.lastName())

        form.formEmailClick()
        form.formEmailText(faker.number.int()+"@ogilvy.com")

        form.formSelectRoleOpt("Installer")

        form.formPostalCodeClick()
        form.formPostalCodeText("123456")
        
        form.formBotton();

        cy.get('h1').should('exist').contains('Thank you, your form has been submitte')
  
    })

    it('Valida formulario preenchido com opção role "Interiors" selecionada', () => {

        // Dado que o usuario esta na tela do form
        // Quando preenche todos os campos corretamente
        // E clica em Submit
        // Então os dados devem ser enviados com sucesso
  
        form.formFirstNameClick()
        form.formFirstNameText(faker.person.firstName())

        form.formLastNameClick()
        form.formLastNameText(faker.person.lastName())

        form.formEmailClick()
        form.formEmailText(faker.number.int()+"@ogilvy.com")

        form.formSelectRoleOpt("Interiors")

        form.formPostalCodeClick()
        form.formPostalCodeText("123456")
        
        form.formBotton();

        cy.get('h1').should('exist').contains('Thank you, your form has been submitte')
  
    })

    it('Valida formulario preenchido com opção role "Internal" selecionada', () => {

        // Dado que o usuario esta na tela do form
        // Quando preenche todos os campos corretamente
        // E clica em Submit
        // Então os dados devem ser enviados com sucesso
  
        form.formFirstNameClick()
        form.formFirstNameText(faker.person.firstName())

        form.formLastNameClick()
        form.formLastNameText(faker.person.lastName())

        form.formEmailClick()
        form.formEmailText(faker.number.int()+"@ogilvy.com")

        form.formSelectRoleOpt("Internal")

        form.formPostalCodeClick()
        form.formPostalCodeText("123456")
        
        form.formBotton();

        cy.get('h1').should('exist').contains('Thank you, your form has been submitte')
  
    })

    it('Valida formulario preenchido com opção role "Retail" selecionada', () => {

        // Dado que o usuario esta na tela do form
        // Quando preenche todos os campos corretamente
        // E clica em Submit
        // Então os dados devem ser enviados com sucesso
  
        form.formFirstNameClick()
        form.formFirstNameText(faker.person.firstName())

        form.formLastNameClick()
        form.formLastNameText(faker.person.lastName())

        form.formEmailClick()
        form.formEmailText(faker.number.int()+"@ogilvy.com")

        form.formSelectRoleOpt("Retail")

        form.formPostalCodeClick()
        form.formPostalCodeText("123456")
        
        form.formBotton();

        cy.get('h1').should('exist').contains('Thank you, your form has been submitte')
  
    })

    it('Valida se o campo First Name é um campo obrigatorio', () => {

        // Dado que o usuario esta na tela do form
        // Quando preenche todos os campos corretamente
        // E clica em Submit
        // Então os dados devem ser enviados com sucesso

        form.formFirstNameClick()

        form.formLastNameClick()
        form.formLastNameText(faker.person.lastName())

        form.formEmailClick()
        form.formEmailText(faker.number.int()+"@ogilvy.com")

        form.formSelectRoleOpt("Homeowner")

        form.formPostalCodeClick()
        form.formPostalCodeText("123456")
        
        form.formBotton();

        cy.get('#ValidMsgFirstName').should('exist').contains('This field is required.')
  
    })

    it('Valida se o campo First Name aceita acima de 40 caracteres', () => {

        // Dado que o usuario esta na tela do form
        // Quando preenche todos os campos corretamente
        // E clica em Submit
        // Então os dados devem ser enviados com sucesso
  
        form.formFirstNameClick()
        form.formFirstNameText("Lorem Ipsum is simply dummy text of the printing and typesetting industry.")

        form.formLastNameClick()
        form.formLastNameText(faker.person.lastName())

        form.formEmailClick()
        form.formEmailText(faker.number.int()+"@ogilvy.com")

        form.formSelectRoleOpt("Homeowner")

        form.formPostalCodeClick()
        form.formPostalCodeText("123456")
        
        //form.formBotton();

        cy.get('#ValidMsgLeadRole').should('exist').contains('This field is required.')
  
    })

    it('Valida se o campo Last Name é um campo obrigatorio', () => {

        // Dado que o usuario esta na tela do form
        // Quando preenche todos os campos corretamente
        // E clica em Submit
        // Então os dados devem ser enviados com sucesso

        form.formFirstNameClick()
        form.formFirstNameText(faker.person.firstName())

        form.formLastNameClick()

        form.formEmailClick()
        form.formEmailText(faker.number.int()+"@ogilvy.com")

        form.formSelectRoleOpt("Homeowner")

        form.formPostalCodeClick()
        form.formPostalCodeText("123456")
        
        form.formBotton();

        cy.get('#ValidMsgLastName').should('exist').contains('This field is required.')
  
    })

    it('Valida se o campo Last Name aceita acima de 80 caracteres', () => {

        // Dado que o usuario esta na tela do form
        // Quando preenche todos os campos corretamente
        // E clica em Submit
        // Então os dados devem ser enviados com sucesso
  
        form.formFirstNameClick()
        form.formFirstNameText(faker.person.firstName())

        form.formLastNameClick()
        form.formLastNameText("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumm.")

        form.formEmailClick()
        form.formEmailText(faker.number.int()+"@ogilvy.com")

        form.formSelectRoleOpt("Homeowner")

        form.formPostalCodeClick()
        form.formPostalCodeText("123456")
        
        //form.formBotton();

        cy.get('#ValidMsgLeadRole').should('exist').contains('This field is required.')
  
    })

    it('Valida se o campo E-mail é um campo obrigatorio', () => {

        // Dado que o usuario esta na tela do form
        // Quando preenche todos os campos corretamente
        // E clica em Submit
        // Então os dados devem ser enviados com sucesso

        form.formFirstNameClick()
        form.formFirstNameText(faker.person.firstName())

        form.formLastNameClick()
        form.formLastNameText(faker.person.lastName())

        form.formEmailClick()

        form.formSelectRoleOpt("Homeowner")

        form.formPostalCodeClick()
        form.formPostalCodeText("123456")
        
        form.formBotton();

        cy.get('#ValidMsgEmail').should('exist').contains('Must be valid email. example@yourdomain.com')
  
    })

    it('Valida se o campo E-mail aceita acima de 255 caracteres', () => {

        // Dado que o usuario esta na tela do form
        // Quando preenche todos os campos corretamente
        // E clica em Submit
        // Então os dados devem ser enviados com sucesso
  
        form.formFirstNameClick()
        form.formFirstNameText(faker.person.firstName())

        form.formLastNameClick()
        form.formLastNameText(faker.person.lastName())

        form.formEmailClick()
        form.formEmailText("LoremIpsumissimplydummytextoftheprintingandtypesettingindustryLoremIpsumhasbeentheindustry'sstandarddummytexteversincethe1500swhenanunknownprintertookagalleyoftypeandscrambledittomakeatypespecimenbookIthassurvivednotonlyfivecenturiesbutalsotheleapintoelectronictypesettingremainingessentiallyunchangedItwaspopularisedinthe1960swiththereleaseofLetrasetsheetscontainingLoremIpsumpassagesandmorerecentlywithdesktoppublishingsoftwarelikeAldusPageMakerincludingversionsofLoremIpsum"+"@ogilvy.com")

        form.formSelectRoleOpt("Homeowner")

        form.formPostalCodeClick()
        form.formPostalCodeText("123456")
        
        form.formBotton();

        cy.get('#ValidMsgEmail').should('exist').contains('Must be valid email. example@yourdomain.com')
  
    })

    it('Valida se o select de role é um ação obrigatoria', () => {

        // Dado que o usuario esta na tela do form
        // Quando preenche todos os campos corretamente
        // E clica em Submit
        // Então os dados devem ser enviados com sucesso
  
        form.formFirstNameClick()
        form.formFirstNameText(faker.person.firstName())

        form.formLastNameClick()
        form.formLastNameText(faker.person.lastName())

        form.formEmailClick()
        form.formEmailText(faker.number.int()+"@ogilvy.com")

        form.formPostalCodeClick()
        form.formPostalCodeText("123456")
        
        form.formBotton();

        cy.get('#ValidMsgLeadRole').should('exist').contains('This field is required.')
  
    })

    it('Valida se o campo Postal Code é um campo obrigatoria', () => {

        // Dado que o usuario esta na tela do form
        // Quando preenche todos os campos corretamente
        // E clica em Submit
        // Então os dados devem ser enviados com sucesso
  
        form.formFirstNameClick()
        form.formFirstNameText(faker.person.firstName())

        form.formLastNameClick()
        form.formLastNameText(faker.person.lastName())

        form.formEmailClick()
        form.formEmailText(faker.number.int()+"@ogilvy.com")

        form.formSelectRoleOpt("Homeowner")

        form.formPostalCodeClick()

        cy.get('#ValidMsgLeadRole').should('exist').contains('This field is required.')
  
    })

    it('Valida se o campo Postal Code aceita acima de 5 caracteres', () => {

        // Dado que o usuario esta na tela do form
        // Quando preenche todos os campos corretamente
        // E clica em Submit
        // Então os dados devem ser enviados com sucesso
  
        form.formFirstNameClick()
        form.formFirstNameText(faker.person.firstName())

        form.formLastNameClick()
        form.formLastNameText(faker.person.lastName())

        form.formEmailClick()
        form.formEmailText(faker.number.int()+"@ogilvy.com")

        form.formSelectRoleOpt("Homeowner")

        form.formPostalCodeClick()
        form.formPostalCodeText("123456789")

        cy.get('#ValidMsgLeadRole').should('exist').contains('This field is required.')
  
    })

    it('Valida se o campo Postal Code aceita caracteres diferentes de 0-9', () => {

        // Dado que o usuario esta na tela do form
        // Quando preenche todos os campos corretamente
        // E clica em Submit
        // Então os dados devem ser enviados com sucesso
  
        form.formFirstNameClick()
        form.formFirstNameText(faker.person.firstName())

        form.formLastNameClick()
        form.formLastNameText(faker.person.lastName())

        form.formEmailClick()
        form.formEmailText(faker.number.int()+"@ogilvy.com")

        form.formSelectRoleOpt("Homeowner")

        form.formPostalCodeClick()
        form.formPostalCodeText("!@#$%¨&*(")

        cy.get('#ValidMsgLeadRole').should('exist').contains('This field is required.')
  
    })

    it('Valida formulario com os campos não preenchidos', () => {

        // Dado que o usuario esta na tela do form
        // Quando preenche todos os campos corretamente
        // E clica em Submit
        // Então os dados devem ser enviados com sucesso
  
        form.formFirstNameClick()

        form.formLastNameClick()

        form.formEmailClick()

        form.formPostalCodeClick()
        
        form.formBotton();

        cy.get('#ValidMsgFirstName').should('exist').contains('This field is required.')
  
    })
  
  })