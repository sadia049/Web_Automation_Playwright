import { test,expect } from '@playwright/test';
import { CommonPage } from "../CommonPage/common.js";


export class Login{

    /**
     * @param {import('@playwright/test').Page} page 
     */

    constructor(page){
        this.page = page;
        this.username = page.locator('#user-name')
        this.password = page.locator('#password')
        this.login_button = page.locator('#login-button')
        this.error_message = page.locator('//h3[@data-test="error"]')
   }

   async verifyLogin(username, password){

      const common_page = new CommonPage(this.page);
      await this.page.goto(common_page.baseUrl);
      await this.username.fill(username);
      await this.password.fill(password);
      await this.login_button.click();
   }
}