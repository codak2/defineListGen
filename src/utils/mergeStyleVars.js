const mergeStyleVars = (listData, dupRowIndexes,orgRowIndexes) =>{

    let {name: SVNamesArr, values: SVValuesArr} = listData.styleVars;

    SVValuesArr.forEach((SVValues)=>{
        // merge duplicate stylevar values in original row
        orgRowIndexes.forEach((orgItemIdx, orgIdx)=>{
            dupRowIndexes.forEach((dupItemIdx, dupIdx)=>{
                // 
                if((orgIdx == dupIdx) && SVValues[orgItemIdx] != SVValues[dupItemIdx]){
                    // Concatenate the values and update SVValues[orgItemIdx]
                    SVValues[orgItemIdx] += "," + SVValues[dupItemIdx];
                }
            })
        })

        
        // removing duplicate stylevar rows
        dupRowIndexes.sort((a, b) => b - a).forEach(index => {
            SVValues.splice(index, 1);
            console.log("SVValues=>",SVValues,index)
        });
        
    })
}

export default mergeStyleVars;