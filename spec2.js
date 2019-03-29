describe('Tests spec2', () => {

    beforeEach(() => {
        browser.waitForAngularEnabled(false);
        browser.get('http://automationpractice.com/index.php');
    });

    it('Should redirect page when buy', () => {
        element(by.css('#homepage-slider .bx-wrapper .bx-next')).click();
        element(by.css('#homepage-slider')).click();
        var titlePage = browser.getTitle();
        expect(titlePage).toEqual('Create and develop your business with PrestaShop');
    });

    it('Should see product detail', () => {
        element(by.css('.blockbestsellers:nth-child(1)')).click();
        element(by.css('#blockbestsellers > .ajax_block_product:nth-child(1) .replace-2x')).click();
        var titlePage = browser.getTitle();
        var expectedConditions = protractor.ExpectedConditions;
        browser.wait(expectedConditions.textToBePresentInElement(titlePage, 'Printed Chiffon Dress - My Store', 2000))
    });
});