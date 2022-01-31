export class CheckoutOverview {
  private btnFinish: string;

  constructor () {
    this.btnFinish= '#finish';
  }

  public finishShopping() {
    cy.get(this.btnFinish).click();
  }
}
