// Function to generate list header and footer
function genHeadFoot(listName) {
    const listHeader = `<define label="${listName}">`;
    const listFooter = `\n</define>`;
    return { listHeader, listFooter };
}

export default genHeadFoot;