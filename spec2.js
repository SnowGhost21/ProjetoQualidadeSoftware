describe('Tests spec2', () => {

    beforeEach(() => {
        browser.waitForAngularEnabled(false);
        browser.get('http://automationpractice.com/index.php');
    });

    it('Should redirect page when buy', () => {
        element(by.css('homeslider-container:nth-child(2) .btn')).click();
        var titlePage = browser.getTitle();
        var expectedConditions = protractor.ExpectedConditions;
        browser.wait(expectedConditions.textToBePresentInElement(titlePage, 'Create and develop your business with PrestaShop', 2000))
    });

    it('Should search a item and find equal or similar', () => {
        element(by.id('search_query_top')).sendKeys("dress");
        element(by.name('Submit')).click();
        var resultPage = element(by.css('#center_column > h1 > span.heading-counter')).getText();
        var expectedConditions = protractor.ExpectedConditions;
        browser.wait(expectedConditions.textToBePresentInElement(resultPage, '7 results have been found.', 2000))
    });

    it('Should see product detail', () => {
        element(by.css('.blockbestsellers:nth-child(1)')).click();
        element(by.css('#blockbestsellers > .ajax_block_product:nth-child(1) .replace-2x')).click();
        var titlePage = browser.getTitle();
        var expectedConditions = protractor.ExpectedConditions;
        browser.wait(expectedConditions.textToBePresentInElement(titlePage, 'Printed Chiffon Dress - My Store', 2000))
    });
});