module.exports = (pageObject) => {
    pageObject
        .click('@menuButton')
        .waitForElementVisible('@cancelOption', 1000)
        .click('@cancelOption')
        .waitForElementVisible('@widInput', 500)
}