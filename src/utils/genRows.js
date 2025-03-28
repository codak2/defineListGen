import genRow from "./genRow.js";

// Function to generate all row elements
function genRows(rowsArray, SVNameArray, SVValueArray, rowLabel) {
    let listRowsOut = '';

    rowsArray.forEach((rowName, index) => {
        listRowsOut += genRow(rowName, index, SVNameArray, SVValueArray, rowLabel);
    });

    return listRowsOut;
}

export default genRows;