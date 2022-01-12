export class AddressPage {
    private btnProceedCheckout: string;

    constructor () {
        this.btnProceedCheckout = '#center_column > form > p > button > span';
    }

    public goProceedCheckout() {
        cy.get(this.btnProceedCheckout).click();
    }
}