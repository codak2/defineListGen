
// Function to validate the test data
function validateListData(testData) {

    // Validation to check if any input is empty
    if (!testData.listName || !testData.styleVars || !testData.rowLabel || !testData.listRows || !testData.groups) {
        throw new Error('Missing required properties. Please check all the fields and try again.');
    }


    // Validations for Style Variables
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


    // Validation for Groups
    const { groupNames: grpNames, groupValues: grpVals} = testData.groups;

    // Validation: If no. of group values doesn't match no. of list rows
    if (grpVals.length != testData.listRows.length){
        throw new Error('The number of group values does not match the number of list rows. Please check and try again.');
    }

    
    grpNames.forEach((grp,index)=>{
       

 // Validation: group label is empty when group name has data or vice versa
        if((!grp.groupLabel && grp.groupName) || (grp.groupLabel && !grp.groupName)){
            throw new Error("Group Name and Group Label cannot be empty. Please make sure they both have when trying again.");
        }


         // Validation: check if any group label not mentioned in group values
        if (!grpVals.includes(grp.groupLabel)){
            throw new Error(`${grp.groupLabel} is not assigned to any row. Please check and try again.`);
        }

        // Validation: if Invalid data entered
        if (typeof grp.groupLabel !== 'string' || typeof grp.groupName !== 'string') {
    throw new Error(`Invalid data type for groupName or groupLabel. Expecting strings.`);
}


        // Validation: check for duplicate group labels or group names
    const labelSet = new Set();
    const nameSet = new Set();

grpNames.forEach(grp => {
    if (labelSet.has(grp.groupLabel)) {
        throw new Error(`Duplicate group label found: ${grp.groupLabel}. Please check and try again.`);
    }
    if (nameSet.has(grp.groupName)) {
        throw new Error(`Duplicate group name found: ${grp.groupName}. Please check and try again.`);
    }
    labelSet.add(grp.groupLabel);
    nameSet.add(grp.groupName);
});

       

    })

     // Validation: check if any group value not mentioned in group labels
        grpVals.forEach(val => {
    if (!grpNames.some(grp => grp.groupLabel === val)) {
        throw new Error(`${val} in groupValues is not defined in any group label. Please review your data.`);
    }
});



   

}

export default validateListData;