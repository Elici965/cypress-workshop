export class OrderSummary {
    private txtOrderComplete: string;

    constructor () {
        this.txtOrderComplete = '#center_column > div > p > strong';
    }

    public getConfirmOrder() {
        var txt = cy.get(this.txtOrderComplete);
        debugger;
        return txt;
    }
}