import {
    PersonalInformation   
  } from '../page';
  
  describe('Fill Form', () => {
    const personalInformation: PersonalInformation = new PersonalInformation();
    describe('given a user enters the qavbox page', () => {
      before(() => {
        cy.visit('https://qavbox.github.io/demo/signup/');
      })
    
    describe('when the user fills the form', () => {
      it('when the user fills the form',() => {
        personalInformation.fillForm();
      }) 
  })    
}) 
}) 