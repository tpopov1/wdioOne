const Element = require('../../../src/framework/element');
const BaseForm = require('../../../src/framework/baseForm');

class FoundForm extends BaseForm {

    constructor(){
        super("//div[@class='leftcol large']","foundForm");
    }

    foundForm = () => new Element("//div[@class='leftcol large']","foundForm");

}

module.exports = FoundForm;
