export class ProductListPage {

  private btnGoShoppingCart: string;
  private products: string;

  constructor () {
    this.btnGoShoppingCart = '.shopping_cart_link';
    this.products = '.inventory_item_name';
  }

  public selectProduct(product: string) {
    this.findByProduct(product).click();
  }

  public goShoppingCart() {
    cy.get(this.btnGoShoppingCart).click();
  }

  private findByProduct(product:string){
    return cy.get(this.products).contains(product).parent().parent().parent().find('.pricebar >button');
  }
}
