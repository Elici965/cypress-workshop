export class ShoppingCart {
  private btnProceedCheckout: string;

  constructor () {
    this.btnProceedCheckout = '#checkout';
  }

  public goProceedCheckout() {
    cy.get(this.btnProceedCheckout).click();
  }
}
