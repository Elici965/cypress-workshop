import {
    PersonalInformation   
  } from '../page';
  
  describe('Fill Form', () => 
  {
    const personalInformation: PersonalInformation = new PersonalInformation();
    describe('given a user enters the qavbox page', () => 
    {
      before(() => {
        cy.visit('https://qavbox.github.io/demo/signup/');
    })
    
    describe('when the user fills and submits the form', () => {
      before(() => 
    {
        personalInformation.fillForm();
    }) 

    describe('then the information is submited.', () => 
    {
      it('then the information is submited.',() => 
      {
        personalInformation.test();
      }) 
    })   
  }) 
}) 
}) 
