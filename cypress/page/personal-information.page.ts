export class PersonalInformation {

  private txtFullName: string;
  private txtEmail: string;
  private txtTelefono: string;
  private lstGender: string;
  private radioExperience: string;
  private CheckSkills: string;
  private btnSubmit: string;
  
  constructor () {
    this.txtFullName = '#username'
    this.txtEmail= '#email'
    this.txtTelefono = '#tel'
    this.lstGender= 'select[name="sgender"]'
    this.radioExperience= 'input[type="radio"]'
    this.CheckSkills= 'input[type="checkbox"]'
    this.btnSubmit = '#submit'
  }
  
  public fillForm() {
    cy.get(this.txtFullName).type("Elizabeth").should('have.value', 'Elizabeth')
    cy.get(this.txtEmail).type("elizabeth.Correa@gmail.com").should('have.value', 'elizabeth.Correa@gmail.com')   
    cy.get(this.txtTelefono).type("2345432").should('have.value', '2345432')
    cy.get(this.lstGender).select('Female').should('have.value', 'female')
    cy.get(this.radioExperience).check('two').should('be.checked').and('have.value','two')
    cy.get(this.CheckSkills).check('automationtesting').should('be.checked').and('have.value','automationtesting')
    cy.get(this.btnSubmit).click()
    cy.on('window:alert',(t)=>{expect(t).to.contains('Registration Done!')})
  }

  public checkIfFormIsSubmited() {
    cy.get(this.txtFullName).should('have.value', '')
    cy.get(this.txtEmail).should('have.value', '')
    cy.get(this.txtTelefono).should('have.value', '')
    cy.get(this.lstGender).should('have.value', 'select')
    cy.get(this.radioExperience).should('not.be.checked')
    cy.get(this.CheckSkills).should('not.be.checked')
  }
}
