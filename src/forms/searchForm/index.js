const Element = require('../../../src/framework/element');
const BaseForm = require('../../../src/framework/baseForm');

class SearchForm extends BaseForm {

    constructor(){
        super("//input[@id='store_nav_search_term']","searchField");
    }

    searchField = () => new Element("//input[@id='store_nav_search_term']","searchField"); 

    async clickSearchField(){
        return this.searchField().click();
    }

    async writeTextSearchField(game){
        return this.searchField().type(game);
    }

    async clickEnterButton(){
        return browser.keys('\uE007	');
    }
}

module.exports = SearchForm;

