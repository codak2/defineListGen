const testData = require('./testData.json');
// console.log(testData);

// make style vars
let SVNameArray = testData.styleVars.name;
let SVOut='';

SVNameArray.forEach(sv => {
    SVOut += `<stylevar label="cs:${sv}"/> \n`;
});

console.log(SVOut);


// list header + footer
let listName = testData.listName;

let listHeader = `<define label="${listName}">`;
let listFooter = `\n</define>`;

console.log(listHeader);


// make a row
// <row label="Br1" cs:cat="type1">Brand 1</row>

let rowsArray = testData.listRows;
let rowLabel = testData.rowLabel;
let listRowsOut = '';

rowsArray.forEach( (rowName,index) => {
    listRowsOut += `<row label="${rowLabel}${index+1}" value="${index+1}">${rowName}</row>\n`;
});


console.log(listRowsOut, listFooter);

