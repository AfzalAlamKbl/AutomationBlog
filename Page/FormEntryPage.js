exports.FormEntry=class FormEntry {
    constructor(page) {
        this.page = page;
        this.name = page.locator("//input[@id='name']");
        this.email = page.locator("//input[@id='email']")
        this.phone = page.locator("//input[@id='phone']");
        this.address = page.locator("//textarea[@id='textarea']")
        this.sex = page.locator("//input[@id='male']")
        this.sunday = page.locator("//input[@id='sunday']")
        this.country = page.locator("//select[@id='country']")
    }

    async navigatePage(){
        await this.page.goto('https://testautomationpractice.blogspot.com/');
    }

    async personDetails(personName,personEmail,personPhone,personAddress) {
        await this.name.fill(personName);
        await this.email.fill(personEmail);
        await this.phone.fill(personPhone);
        await this.address.fill(personAddress);

    }

    async personGender() {
        await this.sex.check();
    }

    async personButtonCheck(personCountry) {
        await this.sunday.check();
        await this.country.selectOption(personCountry);
    }

}