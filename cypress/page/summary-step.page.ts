export class SummaryPage {
    private btnProceedCheckout: string;

    constructor () {
        this.btnProceedCheckout = '.cart_navigation span';
    }

    public goProceedCheckout() {
        cy.get(this.btnProceedCheckout).click();
    }
}
