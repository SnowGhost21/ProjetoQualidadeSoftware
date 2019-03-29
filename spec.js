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
		var expectedConditions = protractor.ExpectedConditions;
		var container = element(by.css('.button-container > a'));
		browser.wait(expectedConditions.elementToBeClickable(container), 2500);
		element(by.css('.button-container > a')).click();
		element(by.css('#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium > span')).click();
		element(by.id('email')).sendKeys('dsadsadsa@aaaa');
		element(by.id('passwd')).sendKeys('dsdasdasdd');
		element(by.id('SubmitLogin')).click();
		var errorElement = element(by.css('.alert ul li, .alert ol li'));
		browser.wait(expectedConditions.textToBePresentInElement(errorElement, 'Invalid email address.', 1000))
	});

	it('Should clear an item at cart', () => {
		element(by.css('.blockbestsellers:nth-child(1)')).click();
		element(by.css('#blockbestsellers > .ajax_block_product:nth-child(1) .replace-2x')).click();
		element(by.name('Submit')).click();
		var productAddedElement = element(by.css('h2:nth-child(2)'));
		var expectedConditions = protractor.ExpectedConditions;
		browser.wait(expectedConditions.textToBePresentInElement(productAddedElement, 'Product successfully added to your shopping cart', 2000))
		element(by.css('.button.button-medium span')).click();
		element(by.css('.icon-trash')).click();
		var productRemovedElement = element(by.css('.alert'));
		var expectedConditions = protractor.ExpectedConditions;
		browser.wait(expectedConditions.textToBePresentInElement(productRemovedElement, 'Your shopping cart is empty.', 2000))
	});

	it('Should search an item and find equal or similar', () => {
		element(by.id('search_query_top')).sendKeys('dress');
		element(by.css('.button-search')).click();
		element(by.css('.ajax_block_product:nth-child(1) .replace-2x')).click();
		const title = element(by.css('.pb-center-column h1')).getText();
		expect(title).toEqual('Printed Summer Dress');
	});


});