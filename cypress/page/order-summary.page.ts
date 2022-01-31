export class OrderSummary {
  private txtOrderComplete: string;

  constructor () {
    this.txtOrderComplete = '.complete-header';
  }

  public getConfirmOrder() {
    var txt = cy.get(this.txtOrderComplete);
    return txt;
  }
}
