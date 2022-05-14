import {
  FramePage
} from '../page';

describe('E2E - Fill Form', () => {
  const framePage: FramePage = new FramePage();
  describe('given a user enters the herokuapp page', () => {
    before(() => {
      cy.visit('http://the-internet.herokuapp.com/iframe');
    })

    describe('when the user writes a text in the iframe and go back to the main page.', () => {
      it("when the user writes a text in the iframe and go back to the main page", () => {
        framePage.switchToFrame()
        framePage.switchToMainPage()
      })
    })
  })
})
