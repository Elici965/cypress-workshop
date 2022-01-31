export class LoginPage {
  private txtUsername: string;
  private txtPassword: string;    
  private btnLogin: string;

  constructor () {
    this.txtUsername = '#user-name';
    this.txtPassword = '#password';
    this.btnLogin = '#login-button';
  }

  public loginUser() {
    cy.get(this.txtUsername).type('standard_user');
    cy.get(this.txtPassword).type('secret_sauce');
    cy.get(this.btnLogin).click();        
  }
}
