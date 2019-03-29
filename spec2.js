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
        element(by.css('#block_top_menu > ul > li:nth-child(2) > a')).click();
        var expectedConditions= element(by.css('#center_column > h1 > span.heading-counter'));
        expect(expectedConditions.getText()).toEqual('There are 5 products.');   
    });
});