export class SignInPage {
    private txtEmail: string;
    private txtPassword: string;    
    private btnSignIn: string;

    constructor () {
        this.txtEmail = '#email';
        this.txtPassword = '#passwd';
        this.btnSignIn = '#SubmitLogin > span';
    }

    public loginUser() {
        cy.get(this.txtEmail).type('aperdomobo@gmail.com');
        cy.get(this.txtPassword).type('WorkshopProtractor');
        cy.get(this.btnSignIn).click();        
    }
}
