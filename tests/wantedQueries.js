var wantedPage = {}
var testData = require('../test-assets/testData')
var fillOutForm = require('../test-assets/fillOutForm')
var clickByText = require('../test-assets/clickByText')
var navToEnter = require('../test-assets/navToEnter')
var navToModify = require('../test-assets/navToModify')
var navToCancel = require('../test-assets/navToCancel')
var fillWID = require('../test-assets/fillWID')
var cancelTestData = require('../test-assets/cancelTestData')

module.exports = {
    beforeEach: browser => {
        browser.resizeWindow(1366, 768)
        wantedPage = browser.page.wantedPage(),
            wantedPage.navigate()
                .waitForElementPresent('@titleText', 1000)
    },
    after: browser => {
        browser.end()
    },
    'Home Screen': () => {
        wantedPage
            .expect.element('@welcomeScreen').to.be.present
    },
    'All Valid Fields': () => {
        navToEnter(wantedPage)
        testData.allValidInput.forEach(allValidInput => {
            fillOutForm(wantedPage, allValidInput)
            wantedPage
                .click('@submitButton')
                .waitForElementVisible('@queryBody', 500)
        })
    },
    'Valid Required Fields w/ Some Optional': () => {
        navToEnter(wantedPage)
        testData.validSomeOptional.forEach(validSomeOptional => {
            fillOutForm(wantedPage, validSomeOptional)
            wantedPage
                .click('@submitButton')
                .waitForElementVisible('@queryBody', 500)
        })
    },
    'Invalid Character Input': () => {
        navToEnter(wantedPage)
        testData.invalidCharacterInput.forEach(invalidCharacterInput => {
            fillOutForm(wantedPage, invalidCharacterInput)
            wantedPage
                .click('@submitButton')
                .waitForElementVisible('@errorMessage', 500)
        })
    },
    'Insufficient Length Input': () => {
        navToEnter(wantedPage)
        testData.insufficientLengthInput.forEach(insufficientLengthInput => {
            fillOutForm(wantedPage, insufficientLengthInput)
            wantedPage
                .click('@submitButton')
                .waitForElementVisible('@errorMessage', 500)
        })
    },
    'Excessive Length Input': () => {
        navToEnter(wantedPage)
        testData.excessiveLengthInput.forEach(excessiveLengthInput => {
            fillOutForm(wantedPage, excessiveLengthInput)
            wantedPage
                .click('@submitButton')
                .waitForElementVisible('@errorMessage', 500)
        })
    },
    'Required Fields Incomplete': () => {
        navToEnter(wantedPage)
        testData.requiredFieldsIncomplete.forEach(requiredFieldsIncomplete => {
            fillOutForm(wantedPage, requiredFieldsIncomplete)
            wantedPage
                .click('@submitButton')
                .waitForElementVisible('@errorMessage', 500)
        })
    },
    'Valid Boundary Values': () => {
        navToEnter(wantedPage)
        testData.validBoundaryValues.forEach(validBoundaryValues => {
            fillOutForm(wantedPage, validBoundaryValues)
            wantedPage
                .click('@submitButton')
                .waitForElementVisible('@errorMessage', 500)
        })
    },
    'Clear Button': () => {
        navToEnter(wantedPage)
        fillOutForm(wantedPage, testData.allValidInput[0])
        wantedPage
            .click('@clearButton')
            .expect.element('@hdrInput').text.to.equal('')
    },
    'Navigate to Modify Wanted Screen': () => {
        navToModify(wantedPage)
    },
    'Modify Wanted: All Valid Fields': () => {
        navToModify(wantedPage)
        fillWID(wantedPage, '1234567890')
        fillOutForm(wantedPage, testData.allValidInput[0])
        wantedPage
            .click('@submitButton')
            .waitForElementVisible('@queryBody', 500)
    },
    'Modify Wanted: Valid Required Fields w/ Some Optional': () => {
        navToModify(wantedPage)
        fillWID(wantedPage, '1234567890')
        fillOutForm(wantedPage, testData.validSomeOptional[0])
        wantedPage
            .click('@submitButton')
            .waitForElementVisible('@errorMessage', 500)
    },
    'Modify Wanted: Invalid Character Input': () => {
        navToModify(wantedPage)
        fillWID(wantedPage, '1234567890')
        fillOutForm(wantedPage, testData.invalidCharacterInput[0])
        wantedPage
            .click('@submitButton')
            .waitForElementVisible('@errorMessage', 500)
    },
    'ModifyWanted: Insufficient Length Input': () => {
        navToModify(wantedPage)
        fillWID(wantedPage, '1234567890')
        fillOutForm(wantedPage, testData.insufficientLengthInput[0])
        wantedPage
            .click('@submitButton')
            .waitForElementVisible('@errorMessage', 500)
    },
    'Modify Wanted: Excessive Length Input': () => {
        navToModify(wantedPage)
        fillWID(wantedPage, '1234567890')
        fillOutForm(wantedPage, testData.excessiveLengthInput[0])
        wantedPage
            .click('@submitButton')
            .waitForElementVisible('@errorMessage', 500)
    },
    'Modify Wanted: Required Fields Incomplete': () => {
        navToModify(wantedPage)
        fillWID(wantedPage, '1234567890')
        fillOutForm(wantedPage, testData.requiredFieldsIncomplete[0])
        wantedPage
            .click('@submitButton')
            .waitForElementVisible('@errorMessage', 500)
    },
    'Modify Wanted: Valid Boundary Values': () => {
        navToEnter(wantedPage)
        fillWID(wantedPage, '1234567890')
        fillOutForm(wantedPage, testData.validBoundaryValues[0])
        wantedPage
            .click('@submitButton')
            .waitForElementVisible('@queryBody', 500)
    },
    'Modify Wanted: Valid Warrant ID Field': () => {
        navToModify(wantedPage)
        testData.validWidInput.forEach(validWidInput => {
            fillWID(wantedPage, validWidInput.wid)
            fillOutForm(wantedPage, validWidInput)
            wantedPage
                .click('@submitButton')
                .waitForElementVisible('@queryBody', 500)
        })
    },
    'Modify Wanted: iInvalid Warrant ID Field': () => {
        navToModify(wantedPage)
        testData.invalidWidInput.forEach(invalidWidInput => {
            fillWID(wantedPage, invalidWidInput.wid)
            fillOutForm(wantedPage, invalidWidInput)
            wantedPage
                .click('@submitButton')
                .waitForElementVisible('@errorMessage', 500)
        })
    },
    'Navigate to Cancel Wanted Screen': () => {
        navToCancel(wantedPage)
    },
    'Cancel Existing Warrant': () => {
        navToCancel(wantedPage)
        fillCancelForm(wantedPage, cancelTestData.validInput[0])
        wantedPage
            .click('@submitButton')
            .waitForElementVisible('@queryBody', 500)
    },
    'Cancel Wanted: Valid Boundary Values': () => {
        navToCancel(wantedPage)
        cancelTestData.validBoundaryValues.forEach(validBoundaryValues => {
            fillCancelForm(wantedPage,validBoundaryValues)
            wantedPage
                .click('@submitButton')
                .waitForElementVisible('@queryBody')
        })
    },
    'Cancel Wanted: Insufficient Length Input': () => {
        navToCancel(wantedPage)
        cancelTestData.insufficientLengthInput.forEach(insufficientLengthInput => {
            fillCancelForm(wantedPage, insufficientLengthInput)
            wantedPage
                .click('@submitButton')
                .waitForElementVisible('@errorMessage')
        })
    },
    'Cancel Wanted: Excessive Length Input': () => {
        navToCancel(wantedPage)
        cancelTestData.excessiveLengthInput.forEach(excessiveLengthInput => {
            fillCancelForm(wantedPage, excessiveLengthInput)
            wantedPage
                .click('@submitButton')
                .waitForElementVisible('@errorMessage')
        })
    },
    'Cancel Wanted: Incomplete Fields Input': () => {
        navToCancel(wantedPage)
        cancelTestData.incompleteFieldsInput.forEach(incompleteFieldsInput => {
            fillCancelForm(wantedPage, incompleteFieldsInput)
            wantedPage
                .click('@submitButton')
                .waitForElementVisible('@errorMessage')
        })
    },
    'Cancel Wanted: Invalid Character Input': () => {
        navToCancel(wantedPage)
        cancelTestData.invalidCharacterInput.forEach(invalidCharacterInput => {
            fillCancelForm(wantedPage, invalidCharacterInput)
            wantedPage
                .click('@submitButton')
                .waitForElementVisible('@errorMessage')
        })
    },
}