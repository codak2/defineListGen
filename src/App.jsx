import React, { useState } from 'react'
import './App.css'

//components
import HeaderContainer from "./components/HeaderContainer"
import ListContainer from "./components/ListContainer"
import SVContainer from "./components/SVContainer"
import OutputContainer from "./components/OutputContainer"

// function
import genList from "./utils/genList.js"



function App() {

  const initialListData={
    listName: "",
    styleVars: {
      name: [],
      values: [],
    },
    rowLabel: "",
    isRowValues: false,
    isCollapseDupes: false,
    listRows: [
    ]
  }

  let [listData, setListData] = useState({
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
    isRowValues: true,
    isCollapseDupes: true,
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

  let [output, setOutput] = useState("");

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

  const handleAddRowValues = (e) => {
    handleListDataChange('isRowValues', !listData.isRowValues)
  }

  const handleCollapseDupes = (e) => {
    handleListDataChange('isCollapseDupes', !listData.isCollapseDupes)
  }

  // Function to Add Style Vars
  const handleAddStylevar = () => {
    const newSVName = ""; 
    const newSVValues = [""]; 

    setListData(prevState => ({
      ...prevState,
      styleVars: {
        name: [...prevState.styleVars.name, newSVName], 
        values: [...prevState.styleVars.values, newSVValues],
      }
    }));
  };

// Function to Update List Rows
  const handleListRowsChange = (e) => {
    handleListDataChange('listRows', e.target.value.split('\n'));
  };

// Function to Update Style Var Name
const handleStyleVarChange = (e, index) => {
  const updatedSVName = e.target.value;
  setListData(prevState => ({
    ...prevState,
    styleVars: {
      ...prevState.styleVars,
      name: prevState.styleVars.name.map((name, idx) => idx === index ? updatedSVName : name), 
    }
  }));
};



// Function to Update Style Var Values
const handleStyleVarValueChange = (e, index) => {
  const updatedSVValues = e.target.value.split('\n');  // Split input by newlines
  setListData(prevState => ({
    ...prevState,
    styleVars: {
      ...prevState.styleVars,
      values: prevState.styleVars.values.map((values, idx) => idx === index ? updatedSVValues : values), // Update specific index
    }
  }));
};


// Function to Remove Style Var
  const handleRemoveStylevar = (indexToRemove) => {
  
    if (indexToRemove !== -1) {
      setListData(prevState => {
        const newStyleVarsName = prevState.styleVars.name.filter((name, index) => index !== indexToRemove);
        const newStyleVarsValues = prevState.styleVars.values.filter((values, index) => index !== indexToRemove);
  
        return {
          ...prevState,
          styleVars: {
            name: newStyleVarsName,
            values: newStyleVarsValues,
          }
        };
      });
    }
  }

// Function to Generate List
const handleGenList = () =>{
  setOutput(genList(listData))
}

const handleClearOutput = () =>{
  setOutput("")
}

const handleResetListData = () => {
  setListData(initialListData)
  handleClearOutput()
}
  


  return (
    <>
      <main id='mainContainer'>

        <HeaderContainer
          listName={listData.listName}
          handleListNameChange={handleListNameChange}
          rowLabel={listData.rowLabel}
          handleRowLabelChange={handleRowLabelChange}
          isAddRowValues={listData.isRowValues}
          handleAddRowValues={handleAddRowValues}
          isCollapseDupes={listData.isCollapseDupes}
          handleCollapseDupes={handleCollapseDupes}
          handleAddStylevar={handleAddStylevar}
          handleResetListData={handleResetListData}
        />

<button type="button"
          onClick={()=> console.log(listData)}
          >Show List Data</button>

        <div className="contentContainer">
          <ListContainer
            listRows={listData.listRows.join("\n").split(',')}
            handleListRowsChange={handleListRowsChange}
            handleClearText={handleListDataChange}
          />



          {listData.styleVars.name.map((SVName, index) => {
            return(
              <SVContainer
                    key={`${SVName}-${index}`}
                    index={index}
                    SVName={SVName}
                    SVValue={listData.styleVars.values[index].join("\n").split(',')}
                    handleStyleVarChange={handleStyleVarChange}
                    handleStyleVarValueChange={handleStyleVarValueChange}
                    handleRemoveStylevar={handleRemoveStylevar}
                  />
            );
          })}



          <OutputContainer
            outputValue={output}
            handleGenList={handleGenList}
            handleClearOutput={handleClearOutput}
          />

        </div>

      </main>
    </>
  )
}

export default App
