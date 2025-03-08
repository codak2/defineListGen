const testData = require('./testData.json');

// Function to validate the test data
function validateTestData(testData) {
    if (!testData.listName || !testData.styleVars || !testData.rowLabel || !testData.listRows) {
        throw new Error('Missing required properties in the test data.');
    }

    const { name: SVNameArray, values: SVValueArray } = testData.styleVars;

    if (!Array.isArray(SVNameArray) || !Array.isArray(SVValueArray)) {
        throw new Error('styleVars.name and styleVars.values should be arrays.');
    }

    if (SVNameArray.length !== SVValueArray.length) {
        throw new Error('The number of style variables does not match the number of value arrays.');
    }

    if (SVValueArray.some(arr => arr.length !== testData.listRows.length)) {
        throw new Error('The number of values for each style variable does not match the number of rows.');
    }

    if (!Array.isArray(testData.listRows) || testData.listRows.length === 0) {
        throw new Error('listRows should be a non-empty array.');
    }
}

// Function to generate the style variables
function generateStyleVariables(SVNameArray) {
    let SVOut = '';
    SVNameArray.forEach(sv => {
        SVOut += `<stylevar label="cs:${sv}"/> \n`;
    });
    return SVOut;
}

// Function to generate list header and footer
function generateListHeaderFooter(listName) {
    const listHeader = `<define label="${listName}">`;
    const listFooter = `\n</define>`;
    return { listHeader, listFooter };
}

// Function to generate a single row element
function generateRow(rowName, index, SVNameArray, SVValueArray, rowLabel) {
    let rowOutput = `<row label="${rowLabel}${index + 1}" value="${index + 1}"`;

    // Add style variable values
    SVNameArray.forEach((svName, svIndex) => {
        rowOutput += ` cs:${svName}="${SVValueArray[svIndex][index]}"`;
    });

    // Close the row tag and add the row name
    rowOutput += `>${rowName}</row>\n`;

    return rowOutput;
}

// Function to generate all row elements
function generateRows(rowsArray, SVNameArray, SVValueArray, rowLabel) {
    let listRowsOut = '';

    rowsArray.forEach((rowName, index) => {
        listRowsOut += generateRow(rowName, index, SVNameArray, SVValueArray, rowLabel);
    });

    return listRowsOut;
}

// Main function to handle the entire process
function generateList(testData) {
    try {
        // Validate the test data
        validateTestData(testData);

        // Destructure needed values from testData
        const { name: SVNameArray, values: SVValueArray } = testData.styleVars;
        const { listName, rowLabel, listRows } = testData;

        // Generate style variables and list header/footer
        const SVOut = generateStyleVariables(SVNameArray);
        const { listHeader, listFooter } = generateListHeaderFooter(listName);

        // Generate rows
        const listRowsOut = generateRows(listRows, SVNameArray, SVValueArray, rowLabel);

        // Output the final result
        console.log(SVOut);
        console.log(listHeader);
        console.log(listRowsOut + listFooter);

    } catch (error) {
        console.error('Error generating list:', error.message);
    }
}

// Call the main function
generateList(testData);
