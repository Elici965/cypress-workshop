export class ProductListPage {
    private btnAdd: string;

    constructor () {
        this.btnAdd = '#center_column a.button.ajax_add_to_cart_button.btn.btn-default';
    }

    public addToCart() {
        cy.get(this.btnAdd).click();
    }
}
