export class BankPaymentPage {
    private btnConfirmOrder: string;

    constructor () {
        this.btnConfirmOrder = '#cart_navigation > button > span';
    }

    public goConfirmOrder() {
        cy.get(this.btnConfirmOrder).click();
    }
}