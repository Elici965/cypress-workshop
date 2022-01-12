import { MenuContentPage,ProductListPage,ProductAddedModal, SummaryPage,SignInPage, AddressPage, ShippingPage, PaymentPage, BankPaymentPage, OrderSummary } from '../page';

describe('Buy a t-shirt', () => {
    const menuContentPage: MenuContentPage = new MenuContentPage();
    const productListPage: ProductListPage = new ProductListPage();
    const productAddedModal: ProductAddedModal = new ProductAddedModal();
    const summaryPage: SummaryPage = new SummaryPage();
    const signInPage: SignInPage = new SignInPage();
    const addressPage: AddressPage = new AddressPage();
    const shippingPage: ShippingPage = new ShippingPage();
    const paymentPage: PaymentPage = new PaymentPage();
    const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
    const orderSummary: OrderSummary = new OrderSummary();

    it('Then should be bought a t-shirt', () => {
        cy.visit('http://automationpractice.com/');
        menuContentPage.goToTShirtMenu();
        productListPage.addToCart();
        productAddedModal.goProceedCheckout();
        summaryPage.goProceedCheckout();
        signInPage.loginUser();
        addressPage.goProceedCheckout();
        shippingPage.agreeTerms();
        shippingPage.goProceedCheckout();
        paymentPage.goPayByBank();
        bankPaymentPage.goConfirmOrder();
        orderSummary.getConfirmOrder().should('have.text', 'Your order on My Store is complete.');
    });
});
