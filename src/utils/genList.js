import genHeadFoot from "./genHeadFoot.js";
import genStyleVars from "./genStyleVars.js"
import genRows from "./genRows.js"
import validateListData from "./validateListData.js"


// Main function to handle the entire process
function genList(testData) {
    try {
        // Validate the test data
        validateListData(testData);

        // Destructure needed values from testData
        const { name: SVNameArray, values: SVValueArray } = testData.styleVars;
        const { listName, rowLabel, listRows,isRowValues } = testData;

        // Generate style variables and list header/footer
        const SVOut = genStyleVars(SVNameArray);
        const { listHeader, listFooter } = genHeadFoot(listName);

        // Generate rows
        const listRowsOut = genRows(listRows, SVNameArray, SVValueArray, rowLabel,isRowValues);

        // Output the final result
        console.log(SVOut+listHeader+listRowsOut + listFooter);

        let finalOutput = SVOut + listHeader + listRowsOut + listFooter;

        return {statusCode: 200, errMsg: null, genOutput: finalOutput}

    } catch (error) {
        console.error('Error generating list:', error.message);
        return {statusCode: 1, errMsg: error.message, genOutput: null }
    }
}

export default genList;