import { test, expect } from '@playwright/test';
import LoginPage from '../pageObjectModal/loginPage.js';
import DashboardPage from '../pageObjectModal/dashboardPage.js';
import data from '../testData/file.json';
const path = require('path');
const samplePdfPath = path.join( __dirname,'../testData/sample.pdf');

test.describe("Practice Test Automation Scenarios", () => {
    let loginPage;
    let dashboardPage;
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        dashboardPage = new DashboardPage(page);
    });
    test("Login and validate successful login", async () => {
        await loginPage.openUrl(data.url1);
        await loginPage.login('student', 'Password123');
        await expect(loginPage.$loggedInHeader).toBeVisible();
    });

});

test.describe("URL2 Tests in New Tab", () => {
    let newPage;
    let dashboardPage;
    test.beforeEach(async ({ browser }) => {
        const context = await browser.newContext();
        newPage = await context.newPage();
        await newPage.goto(data.url2);
        dashboardPage = new DashboardPage(newPage);
    });

    test("Navigate to QA Playground and validate practice card for inputfield", async () => {
        await dashboardPage.clickOnGetStartButton();
        await expect(dashboardPage.$practiceCards(data.inputField)).toBeVisible();
        await dashboardPage.clickOnButton(dashboardPage.$practiceCards(data.inputField));
        await dashboardPage.fillInputField(dashboardPage.$inputField(data.inputMovieField), "Die Hard");
        await dashboardPage.fillInputField(dashboardPage.$inputAppendField(data.inputAppendFiled), "girl");
        await dashboardPage.pressTab();
    });

     test("Navigate to QA Playground and validate practice card for alerts", async () => {
        await dashboardPage.clickOnGetStartButton();
        await expect(dashboardPage.$practiceCards(data.alertButton)).toBeVisible();
        await dashboardPage.clickOnButton(dashboardPage.$practiceCards(data.alertButton));
        newPage.on('dialog', async dialog => {console.log(dialog.message()); 
        await dialog.accept();
        });
        await dashboardPage.clickOnButton(dashboardPage.$button(data.simpleAlert));
    });

    test("Navigate to QA Playground and validate practice card for FileUpload", async () => {
        await dashboardPage.clickOnGetStartButton();
        await expect(dashboardPage.$practiceCards(data.fileUploadButton)).toBeVisible();
        await dashboardPage.clickOnButton(dashboardPage.$practiceCards(data.fileUploadButton));
        await dashboardPage.$button(data.fileUpload).setInputFiles(samplePdfPath);
    });

    test("Navigate to QA Playground and validate practice card for Radio Button", async () => {
        await dashboardPage.clickOnGetStartButton();
        await expect(dashboardPage.$practiceCards(data.radioButton)).toBeVisible();
        await dashboardPage.clickOnButton(dashboardPage.$practiceCards(data.radioButton));
        await dashboardPage.$button(data.yesRadioButton).check();
    });

    test.afterEach(async () => {
        await newPage.close();
    });

});