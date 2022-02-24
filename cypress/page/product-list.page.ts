export class ProductListPage {

  private btnAdd: string;
  private btnGoShoppingCart: string;

  constructor () {
    this.btnAdd = '#add-to-cart-sauce-labs-backpack';
    this.btnGoShoppingCart = '.shopping_cart_link';
  }

  public addToCart() {
    cy.get(this.btnAdd).click();
  }

  public goShoppingCart() {
    cy.get(this.btnGoShoppingCart).click();
  }
}
