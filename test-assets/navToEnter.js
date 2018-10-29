module.exports = (pageObject) => {
    pageObject
        .click('@menuButton')
        .waitForElementVisible('@enterOption', 1000)
        .click('@enterOption')
        .waitForElementVisible('@hdrInput', 500)
}