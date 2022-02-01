import {
  LoginPage, ProductListPage, ShoppingCart, Checkout, CheckoutOverview, OrderSummary
} from '../page';

  describe('Buy a t-shirt', () => {
    const loginPage: LoginPage = new LoginPage();
    const productListPage: ProductListPage = new ProductListPage();
    const shoppingCartPage: ShoppingCart = new ShoppingCart();
    const checkout:Checkout = new Checkout();
    const checkoutOverview: CheckoutOverview = new CheckoutOverview();
    const orderSummary: OrderSummary = new OrderSummary();

  it('Then should be bought something', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.getCookies();
    cy.clearCookies();
    loginPage.loginUser();
    productListPage.addToCart();
    productListPage.goShoppingCart();
    shoppingCartPage.goProceedCheckout();
    checkout.ingresarDatosComprador();
    checkout.continueShopping();
    checkoutOverview.finishShopping();
    orderSummary.getConfirmOrder().should('have.text', 'THANK YOU FOR YOUR ORDER');
    });
});
