module.exports = (pageObject) => {
    pageObject
        .click('@menuButton')
        .waitForElementVisible('@modifyOption', 1000)
        .click('@modifyOption')
        .waitForElementVisible('@widInput', 500)
}