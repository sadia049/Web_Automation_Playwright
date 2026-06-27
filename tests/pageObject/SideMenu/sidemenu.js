export class SideMenu{

    /**
     * @param {import('@playwright/test').Page} page 
     */
    constructor(page){
        this.page = page;
        this.sidebar_icon = page.locator('#react-burger-menu-btn');
        this.all_items_sidebar = page.locator('#inventory_sidebar_link');
        this.about_sidebar = page.locator('#about_sidebar_link');
        this.logout_sidbar = page.locator('#logout_sidebar_link');


    }
}