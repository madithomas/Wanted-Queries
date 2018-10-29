module.exports = (pageObject, formInfo) => {
    pageObject
        .clearValue('@widInput')
        .setValue('@widInput', formInfo.wid)
        .clearValue('@reasonInput')
        .setValue('@reasonInput', formInfo.reason)
        .clearValue('@cancelDateInput')
        .setValue('@cancelDateInput', formInfo.cancelDate)
}