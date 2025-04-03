
// Function to validate the test data
function validateListData(testData) {
    if (!testData.listName || !testData.styleVars || !testData.rowLabel || !testData.listRows) {
        throw new Error('Missing required properties. Please check all the fields and try again.');
    }

    const { name: SVNameArray, values: SVValueArray } = testData.styleVars;

    if (!Array.isArray(SVNameArray) || !Array.isArray(SVValueArray)) {
        throw new Error('styleVars.name and styleVars.values should be arrays.');
    }

    if (SVNameArray.length !== SVValueArray.length) {
        throw new Error('The number of style variables does not match the number of value arrays.');
    }

    SVNameArray.forEach(svname => {
        if (svname.trim() == ""){
            throw new Error('StyleVar name cannot be empty. Please enter value for StyleVar name');
        }
    })

    if (SVValueArray.some(arr => arr.length !== testData.listRows.length)) {
        throw new Error('The number of values for each style variable does not match the number of rows.');
    }

    if (!Array.isArray(testData.listRows) || testData.listRows.length === 0) {
        throw new Error('listRows should be a non-empty array.');
    }
}

export default validateListData;