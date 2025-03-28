// Function to generate a single row element
function genRow(rowName, index, SVNameArray, SVValueArray, rowLabel,isRowValues) {

    let value = isRowValues ? `value="${index + 1}"` : ""
    let rowOutput = `<row label="${rowLabel}${index + 1}" ${value}`;

    // Add style variable values
    SVNameArray.forEach((svName, svIndex) => {
        rowOutput += ` cs:${svName}="${SVValueArray[svIndex][index]}"`;
    });

    // Close the row tag and add the row name
    rowOutput += `>${rowName}</row>\n`;

    return rowOutput;
}

export default genRow;