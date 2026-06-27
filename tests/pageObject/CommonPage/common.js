export class CommonPage{

    constructor(page)
    {
         /**
     * @param {import('@playwright/test').Page} page 
     */
        this.page = page;
        this.baseUrl = 'https://www.saucedemo.com/';
        this.cart_logo = page.locator('.shopping_cart_link');
        this.cart_button_badge = page.locator('.shopping_cart_badge')
   }

   async sortDropdownData(){

      const sorting_options = ['Name (A to Z)', 'Name (Z to A)', 'Price (low to high)', 'Price (high to low)'];
      return sorting_options;
   }

   

   
}