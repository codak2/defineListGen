"use client";

import Image from "next/image";
import styles from "./page.module.css";
import React, { useState } from "react";

export default function Home() {

  const [listData, setListData] = useState({
    listName: "BrandList",
    styleVars: {
      name: ["category", "country", "timezone"],
      values: [
        [
          "type1",
          "type1",
          "type1",
          "type1",
          "type2",
          "type2",
          "type2",
          "type2",
        ],
        ["US", "US", "US", "US", "UK", "UK", "UK", "UK"],
        ["EST", "EST", "EST", "EST", "GMT", "GMT", "GMT", "GMT"],
      ],
    },
    rowLabel: "Br",
    listRows: [
      "Brand 1",
      "Brand 2",
      "Brand 3",
      "Brand 4",
      "Brand 5",
      "Brand 6",
      "Brand 7",
      "Brand 8",
    ],
  });

  const [output, setOutput] = useState([]);


const handleListDataChange = (key, value) => {
  setListData(prevState => ({
    ...prevState,
    [key]: value,
  }));
};


const handleListNameChange = (e) => {
  handleListDataChange('listName', e.target.value);
};

const handleRowLabelChange = (e) => {
  handleListDataChange('rowLabel', e.target.value);
};

const handleListRowsChange = (e) => {
  handleListDataChange('listRows', e.target.value.split('\n'));
};

const handleStyleVarChange = (e) => {
  handleListDataChange('styleVars', {
    ...listData.styleVars,
    name: e.target.value.split(','),
  });
};

const handleStyleVarValueChange = (e) => {
  handleListDataChange('styleVars', {
    ...listData.styleVars,
    values: e.target.value.split(','),
  });
};





// Function to validate the test data
function validateTestData(listData) {
    if (!listData.listName || !listData.styleVars || !listData.rowLabel || !listData.listRows) {
        throw new Error('Missing required properties in the test data.');
    }

    const { name: SVNameArray, values: SVValueArray } = listData.styleVars;

    if (!Array.isArray(SVNameArray) || !Array.isArray(SVValueArray)) {
        throw new Error('styleVars.name and styleVars.values should be arrays.');
    }

    if (SVNameArray.length !== SVValueArray.length) {
        throw new Error('The number of style variables does not match the number of value arrays.');
    }

    if (SVValueArray.some(arr => arr.length !== listData.listRows.length)) {
        throw new Error('The number of values for each style variable does not match the number of rows.');
    }

    if (!Array.isArray(listData.listRows) || listData.listRows.length === 0) {
        throw new Error('listRows should be a non-empty array.');
    }
}

// Function to generate the style variables
function generateStyleVariables(SVNameArray) {
    let SVOut = [];
    SVNameArray.forEach(sv => {
        SVOut.push(`<stylevar label="cs:${sv}"/>`);
    });
        
    return SVOut;
}

// Function to generate list header and footer
function generateListHeaderFooter(listName) {
    const listHeader = `<define label="${listName}">`;
    const listFooter = `</define>`;
    return { listHeader, listFooter };
}

// Function to generate a single row element
function generateRow(rowName, index, SVNameArray, SVValueArray, rowLabel) {
    let rowOutput = `<row label="${rowLabel}${index + 1}" value="${index + 1}"`;

    // Add style variable values
    SVNameArray.forEach((svName, svIndex) => {
        rowOutput += ` cs:${svName}="${SVValueArray[svIndex][index]}"`;
    });

    // Close the row tag and add the row name
    rowOutput += `>${rowName}</row>`;

    return rowOutput;
}

// Function to generate all row elements
function generateRows(rowsArray, SVNameArray, SVValueArray, rowLabel) {
    let listRowsOut = [];

    rowsArray.forEach((rowName, index) => {
        listRowsOut.push(generateRow(rowName, index, SVNameArray, SVValueArray, rowLabel));
    });


    return listRowsOut;
}

// Main function to handle the entire process
function generateList(listData) {
    try {
        // Validate the test data
        validateTestData(listData);

        // Destructure needed values from listData
        const { name: SVNameArray, values: SVValueArray } = listData.styleVars;
        const { listName, rowLabel, listRows } = listData;

        // Generate style variables and list header/footer
        const SVOut = generateStyleVariables(SVNameArray);
        const { listHeader, listFooter } = generateListHeaderFooter(listName);

        // Generate rows
        const listRowsOut = generateRows(listRows, SVNameArray, SVValueArray, rowLabel);

        // Output the final result

        let finalOutput = Array(SVOut, listHeader, listRowsOut, listFooter).flat(99);

        // console.log(SVOut);
        // console.log(listHeader);
        // console.log(listRowsOut + listFooter);
        return finalOutput;

    } catch (error) {
        console.error('Error generating list:', error.message);
    }
}


  


  const genOut = () => {
    setOutput(generateList(listData));
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        
          <input
            type="text"
            value={listData.listName}
            onChange={handleListNameChange}
            placeholder="List Name"
          />

          <input
            type="text"
            value={listData.rowLabel}
            onChange={handleListRowsChange}
            placeholder="Rows Prefix / Labels"
          />
        
          <textarea
            value={listData.listRows.join("\n")}  // Join the listRows array into a string with newlines
            onChange={handleListDataChange}
            rows="10" cols="100"
            placeholder="Enter List Rows"
          />
<div>

<input
            type="text"
            value={listData.styleVars.name.join(', ')} // Join the array values with commas for easier input
            onChange={handleStyleVarChange}
            placeholder="Enter stylevar name"
          />


<textarea
            value={listData.styleVars.values.join(', ')} // Join the array values with commas
            onChange={handleStyleVarValueChange}
            placeholder="Enter stylevar values"
          />

</div>


<textarea
            value={output.join("\n")}
            disabled
            rows="20" cols="100"
            className={styles.output}
            placeholder="OUTPUT"
          />

        
        

        <button onClick={genOut}> Generate list</button>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://forstasurveys.zendesk.com/hc/en-us"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn from KB
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
