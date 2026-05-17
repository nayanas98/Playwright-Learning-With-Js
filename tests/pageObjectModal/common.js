class Common {

    constructor(page) {
    this.page = page;
    this.$practiceCards = (name) =>this.page.locator( `//div[@data-testid='${name}']//span[text()='Practice Now']/parent::div` );
    this.$inputField = (name) => this.page.getByPlaceholder(name);
    this.$inputAppendField = () =>this.page.getByTestId("input-append-text");
    this.$button=(name)=>this.page.getByTestId(name);
    }

    /**
     * Method to click
     * @param {Locator} locator
     */
    async clickOnButton(locator) {
        await locator.waitFor();
        await locator.click();
    }

    /**
     * Method to fill input field
     * @param {Locator} locator
     * @param {string} value
     */
    async fillInputField(locator, value) {
        await locator.fill(value);
    }

    /**
     * Method to press TAB
     */
    async pressTab() {
        await this.page.keyboard.press('Tab');
    }
}
export default Common;