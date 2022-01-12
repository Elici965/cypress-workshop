export class PaymentPage {
    private btnPayByBank: string;

    constructor () {
        this.btnPayByBank = '#HOOK_PAYMENT > div:nth-child(1) > div > p > a';
    }

    public goPayByBank() {
        cy.get(this.btnPayByBank).click();
    }
}