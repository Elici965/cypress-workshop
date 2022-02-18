import {
  LoginPage, ProductListPage, ShoppingCart, Checkout, CheckoutOverview, OrderSummary
} from '../page';

describe('Buy something', () => {
  describe('given a user is login to Saucedemo', () => {
    before(() => {
      const loginPage: LoginPage = new LoginPage();
      cy.visit('https://www.saucedemo.com/');
      loginPage.loginUser();
    })

    describe('when the user adds a backpack to the cart', () => {
      before(() => {
        const productListPage: ProductListPage = new ProductListPage();
        productListPage.addToCart();
        productListPage.goShoppingCart();
      })

      describe('and continue with the purchase process, entering his information', () => {
        before(() => {
          const shoppingCartPage: ShoppingCart = new ShoppingCart();
          const checkout: Checkout = new Checkout();
          const checkoutOverview: CheckoutOverview = new CheckoutOverview();
          shoppingCartPage.goProceedCheckout();
          checkout.EnterBuyerData();
          checkout.continueShopping();
          checkoutOverview.finishShopping();
        })

        describe('then the order is finished and confirmed', () => {
          it('then the order is finished and confirmed', () => {
            const orderSummary: OrderSummary = new OrderSummary();
            orderSummary.getConfirmOrder().should('have.text', 'THANK YOU FOR YOUR ORDER');
          })
        })
      })
    })
  })
})