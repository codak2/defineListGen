// Function to generate the style variables
function genStyleVars(SVNameArray) {
    let SVOut = '';
    SVNameArray.forEach(sv => {
        SVOut += `<stylevar label="cs:${sv}"/> \n`;
    });
    return SVOut;
}

export default genStyleVars;