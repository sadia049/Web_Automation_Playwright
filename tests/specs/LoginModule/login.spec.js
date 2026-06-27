import {test, expect} from '@playwright/test';
import { Login } from '../../pageObject/LoginPage/login.js'
import LoginData from '../../TestData/LoginData/login.json' with { type: 'json' };


test('Verify Login with valid username and password', async({page})=>{

    const login_object =  new Login(page);
    await login_object.verifyLogin(LoginData.valid_username, LoginData.valid_password);
    
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

})

test('Verify Login with invalid username and password', async({page})=>{

    const login_object = new Login(page);
    await login_object.verifyLogin(LoginData.invalid_username, LoginData.invalid_password);
    const error_text = await login_object.error_message.innerText();
    await expect(error_text).toBeTruthy()
})

for(const user of LoginData.users){

    test(`Verify Data driven testing with ${user.username}`, async({page})=>{
    const login_object =  new Login(page);
    await login_object.verifyLogin(user.username, user.password);
    
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    })
}
