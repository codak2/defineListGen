import genRow from "./genRow.js";

// Function to generate all row elements
function genRows(rowsArray, SVNameArray, SVValueArray, rowLabel,isRowValues) {
    let listRowsOut = '';

    rowsArray.forEach((rowName, index) => {
        listRowsOut += genRow(rowName, index, SVNameArray, SVValueArray, rowLabel,isRowValues);
    });

    return listRowsOut;
}

export default genRows;