module.exports = (pageObject, widValue) => {
    pageObject
        .clearValue('@widInput')
        .setValue('@widInput', widValue)
}