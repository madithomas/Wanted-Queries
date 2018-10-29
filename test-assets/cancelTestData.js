module.exports = {
    validInput: [
        {
            widInput: '1234567890',
            reason: "Yzma didn't actually succeed in poisoning Kuzco",
            cancelDate: '01012020'
        },
    ],
    validBoundaryValues: [
        {
            widInput: '1234567890',
            reason: "Yzma didn't actually succeed in poisoning Kuzco",
            cancelDate: '01012020'
        },
        {
            widInput: '1234567890',
            reason: "Sheateabat",
            cancelDate: '01012020'
        },
        {
            widInput: '1234567890',
            reason: "SheateabatSheateabatSheateabatSheateabatSheateabatSheateabat",
            cancelDate: '01012020'
        },
        {
            widInput: '1234567890',
            reason: 'SheateabatSheateabatSheateabatSheateabatSheateabatSheateabatSheateabatSheateabatSheateabatSheateabatSheateabatSheateabatSheateabatSheateabatSheateabat',
            cancelDate: '01012020'
        },
        {
            widInput: '1234567890',
            reason: "Yzma didn't actually succeed in poisoning Kuzco",
            cancelDate: '0101202020'
        },
    ],
    insufficientLengthInput: [
        {
            widInput: '123456789',
            reason: 'Yzma is ridiculous',
            cancelDate: '01012020'
        },
        {
            widInput: '1234567890',
            reason: 'Yzma isnt',
            cancelDate: '01012020'
        },
        {
            widInput: '1234567890',
            reason: 'Yzma is ridiculous',
            cancelDate: '010120202'
        },
    ],
    excessiveLengthInput: [
        {
            widInput: '12345678901',
            reason: 'Yzma is ridiculous',
            cancelDate: '01012020'
        },
        {
            widInput: '123456789',
            reason: 'SheateabatSheateabatSheateabatSheateabatSheateabatSheateabatSheateabatSheateabatSheateabatSheateabatSheateabatSheateabatSheateabatSheateabatSheateabatS',
            cancelDate: '01012020'
        },
        {
            widInput: '123456789',
            reason: 'Yzma is ridiculous',
            cancelDate: '01012020201'
        },
    ],
    incompleteFieldsInput: [
        {
            widInput: ' \uE003',
            reason: 'Yzma is ridiculous',
            cancelDate: '01012020'
        },
        {
            widInput: '1234567890',
            reason: ' \uE003',
            cancelDate: '01012020'
        },
        {
            widInput: '1234567890',
            reason: 'Yzma is ridiculous',
            cancelDate: ' \uE003'
        },
    ],
    invalidCharacterInput: [
        {
            widInput: 'Abcdefghij',
            reason: 'Yzma is ridiculous',
            cancelDate: '01012020'
        },
        {
            widInput: '!@#$%^&*()',
            reason: 'Yzma is ridiculous',
            cancelDate: '01012020'
        },
        {
            widInput: '1234567890',
            reason: 'Yzma is ridiculous',
            cancelDate: 'Abcdefghij'
        },
        {
            widInput: '1234567890',
            reason: 'Yzma is ridiculous',
            cancelDate: '!@#$%^&*()'
        },
    ],

}