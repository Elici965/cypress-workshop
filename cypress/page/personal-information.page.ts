export class PersonalInformation {

    private txtFullName: string;
    private txtEmail: string;
    private txtTelefono: string;
    private lstGender: string;
    private radioExperience: string;
    private CheckSkills: string;
    private selectTools: string;
    private btnSubmit: string;
  
    constructor () {
      this.txtFullName = '#username';
      this.txtEmail= '#email';
      this.txtTelefono = '#tel';
      this.lstGender= 'select[name="sgender"]';
      this.radioExperience= 'input[type="radio"]';
      this.CheckSkills= 'input[type="checkbox"]';
      this.selectTools = 'select[id="tools"]';
      this.btnSubmit = '#submit';
    }
  
    public fillForm() {
      cy.get(this.txtFullName).type("Elizabeth");
      cy.get(this.txtEmail).type("elizabeth.Correa@gmail.com");      
      cy.get(this.txtTelefono).type("2345432");   
      cy.get(this.lstGender).select('Female');
      cy.get(this.radioExperience).check('two');
      cy.get(this.CheckSkills).check('automationtesting');
      cy.get(this.selectTools).select('Cypress');
      cy.get(this.btnSubmit).click();
  }
}