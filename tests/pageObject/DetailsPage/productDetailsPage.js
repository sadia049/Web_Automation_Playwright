import { CommonPage } from '../CommonPage/common.js';
import { Homepage } from '../HomePage/homepage.js';

export class productDetails{
    /**
     * @param {import('@playwright/test').Page} page 
     */
    constructor(page){
        this.page = page;
        this.backbutton = page.locator('#back-to-products');
        this.add_to_cart = page.locator('#add-to-cart');
        this.remove_cart = page.locator('.btn_secondary')

    }

    async addToCartFirstThreeProducts(){
        const home_page_object = new Homepage(this.page);
        const all_products = home_page_object.product_item;
        const all_products_name = home_page_object.product_item_name;

         for(let i =0; i<3; i++){
            
            await all_products_name.nth(i).click();
            await this.add_to_cart.click();
            await this.backbutton.click();
         }

    }

    async removeCartFirstThreeProducts(){

        for(let i =0; i<2; i++){
             await this.remove_cart.nth(i).click();
        }

        const common_page_object = new CommonPage(this.page);
        const cart_button_badge = await common_page_object.cart_button_badge.innerText();
        console.log("Cart Button", cart_button_badge)
        return cart_button_badge;


     }
x  

}