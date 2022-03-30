export class Checkout {

  private txtFirstName: string;
  private txtLastName: string;
  private txtPostalCode: string;
  private btnContinue: string;

  constructor () {
    this.txtFirstName = '#first-name';
    this.txtLastName = '#last-name';
    this.txtPostalCode= '#postal-code';
    this.btnContinue = '#continue';
  }

  public EnterBuyerData(){
    cy.get(this.txtFirstName).type('Elizabeth');
    cy.get(this.txtLastName).type('Correa');
    cy.get(this.txtPostalCode).type('23');
  }
  
  public continueShopping() {
    cy.get(this.btnContinue).click();
  }
}
