describe('Champs Automation Test',async()=>{
    it('Login', async()=>{
        const loginBtn = await $('//android.view.View[@content-desc="Log In"]')
        const username = await $('//android.widget.EditText[1]')
        const password = await $('//android.widget.EditText[2]')
        await username.click()
        await username.setValue('champs')
        await password.click()
        await password.setValue('123')
        await password.setValue('123')
        //click on element
        await loginBtn.click()
    })
    it('Assert elements exist and click on show more button',async()=>{
        const showMoreButton = await $('//android.view.View[@content-desc="Show More"]')

        await expect(showMoreButton).toBeExisting()
        await expect(showMoreButton).toBeDisplayed()

        await showMoreButton.click()
    })
    it('Make some scrolling inside the app', async()=>{
        const label = await $('//android.view.View[@content-desc="Achieve your KPIs to optimise your commission!"]')
        await expect(label).toBeDisplayed()
    })
    it('Wait for some mins', async()=>{
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')
        await expect($('//android.view.View[@content-desc="EARN (USD)"]')).toBeExisting()
    })
})