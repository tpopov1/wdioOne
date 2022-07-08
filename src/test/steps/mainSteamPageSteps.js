const { Given, When, Then } = require('@cucumber/cucumber');
const expectChai = require('chai').expect;

const SearchForm = require('../../../src/forms/searchForm');
const FoundForm = require('../../../src/forms/foundForm');

const foundForm = new FoundForm();
const searchForm = new SearchForm();

/**
 * Check is main steam page opened
 */
Given(/^the user is on the main page$/, async () => {
await browser.url("https://store.steampowered.com"); 
return expectChai(await searchForm.waitForFormIsOpened(), `Form '${searchForm.getFormName()}' is opened`).to.be.true;
});

/**
 * Search the needed game
 */
When(/^the user search '(.*)' game$/, async (game) => {
    await searchForm.clickSearchField();
    await searchForm.writeTextSearchField(game);
    await searchForm.clickEnterButton();
});

/**
 * Found Form is present (with waiting for the new page open)
 */
Then(/^the foundForm appears$/, async () => { 
    return expectChai(await foundForm.waitForFormIsOpened()).to.be.true;
});
