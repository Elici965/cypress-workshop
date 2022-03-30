import {
  PersonalInformation
} from '../page';

describe('E2E - Fill Form', () => {
  const personalInformation: PersonalInformation = new PersonalInformation();

  describe('given a user enters the qavbox page', () => {
    before(() => {
      cy.visit('https://qavbox.github.io/demo/signup/');
    })

    describe('when the user fills and submits the form', () => {
      before(() => {
        personalInformation.fillForm();
      })

      it('then the information should be submited cleaning all form fields.', () => {
        personalInformation.checkIfFormIsSubmited();
      })
    })
  })
})
