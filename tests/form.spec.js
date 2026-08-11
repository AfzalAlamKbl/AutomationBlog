import { test, expect } from '@playwright/test';
import { FormEntry } from '../Page/FormEntryPage';
import { AssertionsPage } from '../Page/AssertionsPage';
import formData from '../test-data/formData.json';


test.describe('Testing fro Practice ', () => {
    test('Form Details Input @regression', async ({ page }) => {
        const data = formData.user1;
        const form = new FormEntry(page);

        await form.navigatePage();
        await form.personDetails(data.name, data.email, data.phone, data.address);
        await form.personGender();
        await form.personButtonCheck(data.country);

        await page.waitForTimeout(1000);
    });

    test('Assurtions @smoke', async ({ page }) => {
        const form = new FormEntry(page);
        const Assertion = new AssertionsPage(page);
        const data = formData.user1;
        await form.navigatePage(page);
        let result = await Assertion.readDataFromRow();
        expect.soft(result).toBe(data.rowData);
        console.log('Line executed after Soft assertion');

    })
})