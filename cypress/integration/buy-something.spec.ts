import {
  LoginPage, ProductListPage, ShoppingCart, Checkout, CheckoutOverview, OrderSummary
} from '../page';

describe('Buy a backpack', () => {
  describe('given a user is logged in Saucedemo', () => {
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

      describe('and the user types buy data', () => {
        before(() => {
          const shoppingCartPage: ShoppingCart = new ShoppingCart();
          const checkout: Checkout = new Checkout();
          const checkoutOverview: CheckoutOverview = new CheckoutOverview();
          shoppingCartPage.goProceedCheckout();
          checkout.EnterBuyerData();
          checkout.continueShopping();
          checkoutOverview.finishShopping();
        })

        describe('then the order should be finished and confirmed', () => {
          it('then the order is finished and confirmed', () => {
            const orderSummary: OrderSummary = new OrderSummary();
            orderSummary.getConfirmOrder().should('have.text', 'THANK YOU FOR YOUR ORDER');
          })
        })
      })
    })
  })
})
