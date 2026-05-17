import Common from'./common'
class LoginPage extends Common{

    constructor(page) {
        super(page);
        this.page = page;
        this.$userNameInput = page.locator('id=username');
        this.$passwordInput = page.locator('id=password');
        this.$submitButton = page.locator('id=submit');
        this.$loggedInHeader = page.getByText('Logged In Successfully'); 
       }

    /**
     * Method to Open URL
     */
    async openUrl(url) {
        await this.page.goto(url);
    }

    /**
     * Method to perform login action
     * @param {string} username
     * @param {string} password
     */
    async login(username, password) {
        await this.$userNameInput.fill(username);
        await this.$passwordInput.fill(password);
        await this.$submitButton.click();
        await this.$loggedInHeader.waitFor({state: 'visible'});
        }
}

export default LoginPage;