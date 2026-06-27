import { CommonPage } from '../CommonPage/common.js';
export class Homepage{

    
    /**
     * @param {import('@playwright/test').Page} page 
     */

    constructor(page){
        this.page = page;
        this.product_item = page.locator('.inventory_item');
        this.product_item_name = page.locator('.inventory_item_name');
        this.inventory_details_name = page.locator('.inventory_details_name');
        this.back_button = page.locator('#back-to-products');
        //this.add_to_cart_button = page.locator('.inventory_item');
       // this.cart_button_badge = page.locator('.shopping_cart_badge')
        this.dropdown = page.getByTestId('product-sort-container');
        this.dropdown_options= page.locator('.product_sort_container option')
    }

    async countAllProducts(){

        const number_of_product = this.product_item.count();
        console.log("Number of products ", number_of_product);
        return number_of_product;
    }

    async clickOnEachItem(){

        const all_product_names = await this.product_item_name.all();
       
        for(const item_name of all_product_names){
               
         const item_title = await item_name.textContent();
        //  console.log(item_title)
         await item_name.click();
         const inventory_item_name = await this.inventory_details_name.textContent();
         await this.back_button.click();
            if( item_title.trim()!== inventory_item_name.trim())
                  return false
        }
            return true;
    }

    async cartLogoVisibility(){

        const common_page_object = new CommonPage(this.page)
        const cart_visibility = await common_page_object.cart_logo.isVisible();
        return cart_visibility;
         
    }

    async ClickEachElementToCart(){
        
        //Getting the add to cart button of all products
        const number_of_products = await this.countAllProducts();
        
        //Clicking each product cart button
        
        for(let i=0; i<number_of_products; i++){
          await this.product_item.nth(i).locator('button').click();
        }
        
        const common_page_object = new CommonPage(this.page);
        if(await common_page_object.cart_button_badge.isVisible()){
            return common_page_object.cart_button_badge.innerText();
        }

        return 0;

    }

    async getExpectedOptions(){
        const common_page_object = new CommonPage(this.page);

        const sort_dropdown_values = this.dropdown_options.allInnerTexts();
        const expected_dropdown_values = common_page_object.sortDropdownData();
        const isIdentical = JSON.stringify(sort_dropdown_values) == JSON.stringify(expected_dropdown_values); 
        return isIdentical;
    }

    async verifySelectOfNameZToAOption(){

        const expected_option = 'Name (Z to A)';
        await  this.page.locator('.product_sort_container').selectOption('za');

        const option_value = await this.page.locator('.product_sort_container option[value="za"]').innerText();
        console.log("Option Value", option_value)
        //const selected_option = await option_value.textContent();

        if(expected_option == option_value){
            return true;
        }
        else
            return false;
       
}

async verifySelectOfPriceLowToHighOption() {
    const expected_option = 'Price (low to high)';
    await  this.page.locator('.product_sort_container').selectOption('lohi');

    const option_value = await this.page.locator('.product_sort_container option[value="lohi"]').innerText();
    console.log("Option Value", option_value)
        //const selected_option = await option_value.textContent();

        if(expected_option == option_value){
            return true;
        }
        else
            return false;
}


async verifySelectOfPriceHighToLowOption() {
    const expected_option = 'Price (high to low)';
    await  this.page.locator('.product_sort_container').selectOption('hilo');

    const option_value = await this.page.locator('.product_sort_container option[value="hilo"]').innerText();
    console.log("Option Value", option_value)
        //const selected_option = await option_value.textContent();

        if(expected_option == option_value){
            return true;
        }
        else
            return false;
}





    
}