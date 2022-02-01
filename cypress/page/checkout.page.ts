export class Checkout {
  private txtPrimerNombre: string;
  private txtPrimerApellido: string;
  private txtCodigoPostal: string;
  private btnContinue: string;

  constructor () {
    this.txtPrimerNombre = '#first-name';
    this.txtPrimerApellido = '#last-name';
    this.txtCodigoPostal = '#postal-code';
    this.btnContinue = '#continue';
  }

  public ingresarDatosComprador(){
    cy.get(this.txtPrimerNombre).type('Elizabeth');
    cy.get(this.txtPrimerApellido).type('Correa');
    cy.get(this.txtCodigoPostal).type('23');
  }
  
  public continueShopping() {
    cy.get(this.btnContinue).click();
  }
}
