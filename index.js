const testData = require('./testData.json');
console.log(testData);

// make style vars
let SVNameArray = testData.styleVars.name;

SVNameArray.forEach((sv,i) => {
    console.log(`<stylevar label="cs:${sv}"/> `);
    
});




// make a row


