import React, { useState } from 'react'
import './App.css'

//components
import HeaderContainer from "./components/HeaderContainer"
import ListContainer from "./components/ListContainer"
import SVContainer from "./components/SVContainer"
import OutputContainer from "./components/OutputContainer"
import ErrorContainer from './components/ErrorContainer.jsx'

// Main function to generate list
import genList from "./utils/genList.js"

// Data
import initialListData from './data/initialListData.js'
import sampleListData from "./data/sampleListData.js"
import GroupsContainer from './components/GroupsContainer.jsx'


function App() {

  let [listData, setListData] = useState(sampleListData);

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

  // -------------------------------- Start :: Functions for Groups -----------------
  // Function to Add Group
  const handleAddGroup = () => {
    const grpLabel = "";
    const grpName = "";

    setListData(prevState => ({
      ...prevState,
      groups:{
        groupNames: [...prevState.groups.groupNames,{
          groupLabel: grpLabel,
          groupName: grpName,
        }],
        groupValues: [...prevState.groups.groupValues]
    }
    }));
  };

// Function to Update Group Label (TODO)
  const handleGrpLabelChange = (e, index) => {
    const updatedSVName = e.target.value;
    setListData(prevState => ({
      ...prevState,
      styleVars: {
        ...prevState.styleVars,
        name: prevState.styleVars.name.map((name, idx) => idx === index ? updatedSVName : name),
      }
    }));
  };

  // Function to Update Group Label (TODO)
  const handleGrpNameChange = (e, index) => {
    const updatedSVName = e.target.value;
    setListData(prevState => ({
      ...prevState,
      styleVars: {
        ...prevState.styleVars,
        name: prevState.styleVars.name.map((name, idx) => idx === index ? updatedSVName : name),
      }
    }));
  };


  // Function to Remove Style Var
  const handleRemoveGroup = (indexToRemove) => {

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




  // -------------------------------- End :: Functions for Groups -----------------


  // Function to Generate List
  const handleGenList = () => {
    let { statusCode, errMsg, genOutput } = genList(listData)

    if (statusCode == 1) {
      setOutput(errMsg)
      handleListDataChange("isError", true)
    }
    else if (statusCode == 200) {
      setOutput(genOutput)
      handleListDataChange("isError", false)
    }
  }

  const handleClearOutput = () => {
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
          handleAddGroup={handleAddGroup}
        />

        <ErrorContainer
          isError={listData.isError}
          ErrMsg={output}
        />

         Dubug button
          <button type="button"
          onClick={()=> console.log(listData)}
          >Show List Data</button>


        <div className="contentContainer">
          <ListContainer
            listRows={listData.listRows.join("\n").split(',')}
            handleListRowsChange={handleListRowsChange}
            handleClearText={handleListDataChange}
          />

              { (listData.groups.groupNames.length > 0) && 
                ( <GroupsContainer 
                groups={listData.groups}
                handleAddGroup={handleAddGroup}
                handleGrpLabelChange={handleGrpLabelChange}
                handleGrpNameChange={handleGrpNameChange}
                handleRemoveGroup={handleRemoveGroup}
                />) }
         


          {listData.styleVars.name.map((SVName, index) => {
            return (
              <SVContainer
                key={`"SVContainer-"${index}`}
                index={index}
                SVName={SVName}
                SVValue={listData.styleVars.values[index].join("\n")}
                handleStyleVarChange={handleStyleVarChange}
                handleStyleVarValueChange={handleStyleVarValueChange}
                handleRemoveStylevar={handleRemoveStylevar}
              />
            );
          })}



          <OutputContainer
            isError={listData.isError}
            outputValue={output}
            listFileName={listData.listName}
            handleGenList={handleGenList}
            handleClearOutput={handleClearOutput}
          />

        </div>

      </main>
    </>
  )
}

export default App
