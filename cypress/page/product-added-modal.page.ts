export class ProductAddedModal {
    private btnProceedCheckout: string;

    constructor () {
        this.btnProceedCheckout = '[style*="display: block;"] .button-container > a';
    }

    public goProceedCheckout() {
        cy.get(this.btnProceedCheckout).click();
    }
}
