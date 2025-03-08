const testData = require('./testData.json');
// console.log(testData);

// make style vars
let SVNameArray = testData.styleVars.name;
let SVOut='';

SVNameArray.forEach(sv => {
    SVOut += `<stylevar label="cs:${sv}"/> \n`;
});

console.log(SVOut);



// make a row


