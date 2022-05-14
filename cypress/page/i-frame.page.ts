export class FramePage {

  private iframe1: string;
  private fileButton: string;

  constructor() {
    this.iframe1 = '#mce_0_ifr';
    this.fileButton = '.tox-mbtn__select-label'
  }

  public switchToFrame() {
    cy.get(this.iframe1).its('0.contentDocument').its('body').clear().type('This is a test description.')
  }

  public switchToMainPage() {
    cy.get(this.fileButton).first().click();
  }
}
