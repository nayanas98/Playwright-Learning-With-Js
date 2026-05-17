import Common from './common';

class DashboardPage extends Common {
    constructor(page) {
        super(page);
        this.upperTabLink = (name) =>
            this.page.locator(`//a[text()="${name}"]`);
        this.getStartedButton =
            this.page.locator(`//button[text()="Get Started"]`);

    }

    async clickOnGetStartButton() {
        await this.getStartedButton.click();
    }

}

export default DashboardPage;