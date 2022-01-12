export class ShippingPage {
    private btnAgree: string;
    private btnProceedCheckout: string;

    constructor () {
        this.btnAgree = '#cgv';
        this.btnProceedCheckout = '#form > p > button > span';
    }

    public agreeTerms() {
        cy.get(this.btnAgree).click();
    }

    
    public goProceedCheckout() {
        cy.get(this.btnProceedCheckout).click();
    }
}