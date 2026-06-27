import {test, expect} from '@playwright/test';
import {Homepage} from '../../pageObject/HomePage/homepage.js';
import {CommonPage} from '../../pageObject/CommonPage/common.js'
import {Login} from '../../pageObject/LoginPage/login.js';
import {productDetails} from '../../pageObject/DetailsPage/productDetailsPage.js';
import LoginData from '../../TestData/LoginData/login.json' with { type: 'json' };

test.describe('verify Adding item from Details page', async()=>{

   test('Verify Clicking first 3 items', async({page})=>{
    
    const login_page = new Login(page)
    await login_page.verifyLogin(LoginData.valid_username, LoginData.valid_password);

    const click3products = new productDetails(page);  
    await click3products.addToCartFirstThreeProducts();

    const common_page_object = new CommonPage(page);
    const cart_button_badge = await common_page_object.cart_button_badge.innerText();

    await expect(parseInt(cart_button_badge,10)).toEqual(3);
    
    


   })

   test('Verify Removing item from details page', async({page})=>{
       
    const login_page = new Login(page)
    await login_page.verifyLogin(LoginData.valid_username, LoginData.valid_password);

    const remove3products = new productDetails(page);
    await remove3products.addToCartFirstThreeProducts();
    const cart_badge = await remove3products.removeCartFirstThreeProducts(); 

    await expect(parseInt(cart_badge,10)).toEqual(1);
    
    
})
})