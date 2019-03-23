describe('Tests aula 22/03', () => {

	beforeEach(() => {
		browser.waitForAngularEnabled(false);
		browser.get('http://automationpractice.com/index.php');
	});

	it('Should add item to cart', () => {
		element(by.css('.blockbestsellers:nth-child(1)')).click();
		element(by.css('#blockbestsellers > .ajax_block_product:nth-child(1) .replace-2x')).click();
		element(by.name('Submit')).click();
		var productAddedElement = element(by.css('h2:nth-child(2)'));
		var expectedConditions = protractor.ExpectedConditions;
		browser.wait(expectedConditions.textToBePresentInElement(productAddedElement, 'Product successfully added to your shopping cart', 2000))
	});

	it('Should block checkout if email not valid', () => {
		element(by.css('.blockbestsellers:nth-child(1)')).click();
		element(by.css('#blockbestsellers > .ajax_block_product:nth-child(1) .replace-2x')).click();
		element(by.name('Submit')).click();
		element(by.css('.button-container > a')).click();
		//element(by.css('#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium > span')).click();
		//element(by.id('email')).sendKeys('dsadsadsa@aaaa');
		//element(by.id('passwd')).sendKeys('dsdasdasdd');
		//element(by.id('SubmitLogin')).click();
	})
});