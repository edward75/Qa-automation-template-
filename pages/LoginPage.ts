import { Page, Locator } from '@playwright/test';

export class LoginPage {

    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;


    constructor(private page: Page){

        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#login');

    }


    async login(user:string,password:string){

        await this.username.fill(user);

        await this.password.fill(password);

        await this.loginButton.click();

    }

}
