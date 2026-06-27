import {test, expect} from '@playwright/test';
import {Homepage} from '../../pageObject/HomePage/homepage.js';
import {CommonPage} from '../../pageObject/CommonPage/common.js'
import {Login} from '../../pageObject/LoginPage/login.js';
import LoginData from '../../TestData/LoginData/login.json' with { type: 'json' };
import { SideMenu } from '../../pageObject/SideMenu/sidemenu.js';

test('Count the product in  Home Page', async({page})=>{

    const login_page = new Login(page)
    await login_page.verifyLogin(LoginData.valid_username, LoginData.valid_password);

    const home_page_object = new Homepage(page)
    const number_of_product = await home_page_object.countAllProducts();
    console.log(number_of_product);
    await expect(home_page_object.product_item_name).toHaveCount(number_of_product);

  

})

test ('Verify Click on each item link navigates to the item details page', async({page})=>{
     
    const login_page = new Login(page)
    await login_page.verifyLogin(LoginData.valid_username, LoginData.valid_password);

    const home_page_object = new Homepage(page);
    const result = await home_page_object.clickOnEachItem()
    await expect(result).toBeTruthy();
})

test('Verify if cart logo is visible', async({page}) =>{
  const login_page = new Login(page)
  await login_page.verifyLogin(LoginData.valid_username, LoginData.valid_password);

  const home_page_object = new Homepage(page);
  const visibility = await  home_page_object.cartLogoVisibility();
  console.log(visibility)


})

test('Verify pressing the cart logo takes to checkout page', async({page})=>{
   
  const login_page = new Login(page)
  await login_page.verifyLogin(LoginData.valid_username, LoginData.valid_password);

  const common_page_object = new CommonPage(page)
  await common_page_object.cart_logo.click();
  expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

  
})

test('Verify if each element is added to cart', async({page})=>{

  const login_page = new Login(page)
  await login_page.verifyLogin(LoginData.valid_username, LoginData.valid_password);
  
  //Checking that all the products are added to cart
  const homepage_object = new Homepage(page);
  const badge_result = await homepage_object.ClickEachElementToCart();
  const number_of_products = await homepage_object.countAllProducts();

  //COmparaing the number of products with the cart badge to make sure each product is added to cart
  await expect ( number_of_products.toString()).toEqual(badge_result);
      

})

test('Verify Clicking on all_items sidemenu', async({page})=>{
  const login_page = new Login(page)
  await login_page.verifyLogin(LoginData.valid_username, LoginData.valid_password); 
  
  const side_menu_object = new SideMenu(page);
  await side_menu_object.sidebar_icon.click();
  await side_menu_object.all_items_sidebar.click();

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  
})

test('Verify Clicking on about sidemenu', async({page})=>{
  const login_page = new Login(page)
  await login_page.verifyLogin(LoginData.valid_username, LoginData.valid_password); 

  const side_menu_object = new SideMenu(page);
  await side_menu_object.sidebar_icon.click();
  await side_menu_object.about_sidebar.click();
  console.log(page.title);
  await expect(page).toHaveTitle('Sauce Labs: Cross Browser Testing, Selenium Testing & Mobile Testing');
  
})

test('Verify Clicking on logout sidemenu', async({page})=>{
  const login_page = new Login(page)
  await login_page.verifyLogin(LoginData.valid_username, LoginData.valid_password); 

  const side_menu_object = new SideMenu(page);
  await side_menu_object.sidebar_icon.click();
  await side_menu_object.logout_sidbar.click();

  await expect(page).toHaveURL('https://www.saucedemo.com/');
  
})

test('Verify dropdown is visible', async({page})=>{
  const login_page = new Login(page)
  await login_page.verifyLogin(LoginData.valid_username, LoginData.valid_password); 

  const homepage_object = new Homepage(page)
  await expect(homepage_object.dropdown).toBeVisible();

})

test('validate the dropdown contains the expected and right options', async({page})=>{
  const login_page = new Login(page)
  await login_page.verifyLogin(LoginData.valid_username, LoginData.valid_password); 
  const homepage_object = new Homepage(page)
  await expect(homepage_object.getExpectedOptions).toBeTruthy();


  
})

test('Validate visibility of "Name (Z to A)" text after selecting from dropdown options', async({page})=>{
  
  const login_page = new Login(page)
  await login_page.verifyLogin(LoginData.valid_username, LoginData.valid_password); 

  const home_page_object = new Homepage(page);
  const is_selected = await home_page_object.verifySelectOfNameZToAOption();

  await expect(is_selected).toBeTruthy();

})

test('Validate visibility of "LowToHigh" text after selecting from dropdown options', async({page})=>{
  
  const login_page = new Login(page)
  await login_page.verifyLogin(LoginData.valid_username, LoginData.valid_password); 

  const home_page_object = new Homepage(page);
  const is_selected = await home_page_object.verifySelectOfPriceLowToHighOption();

  await expect(is_selected).toBeTruthy();

})

test('Validate visibility of "HighToLow" text after selecting from dropdown options', async({page})=>{
  
  const login_page = new Login(page)
  await login_page.verifyLogin(LoginData.valid_username, LoginData.valid_password); 

  const home_page_object = new Homepage(page);
  const is_selected = await home_page_object.verifySelectOfPriceHighToLowOption;

  await expect(is_selected).toBeTruthy();

})











