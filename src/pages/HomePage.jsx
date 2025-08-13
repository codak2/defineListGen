import React, { useState } from 'react'
import '../App.css'

import axios from 'axios';

//components
import HeaderContainer from "../components/HeaderContainer.jsx"
import ListContainer from "../components/ListContainer.jsx"
import SVContainer from "../components/SVContainer.jsx"
import OutputContainer from "../components/OutputContainer.jsx"
import ErrorContainer from '../components/ErrorContainer.jsx'
import GroupsContainer from '../components/GroupsContainer.jsx'
import Loader from "../components/Loader.jsx"
import DrawerAppBar from '../components/DrawerAppBar.jsx';

// Data
import initialListData from '../data/initialListData.js'
import sampleListData from "../data/sampleListData.js"

// const API_URL = process.env.VITE_APP_API_URL;
const API_URL = import.meta.env.VITE_APP_API_URL;
const APP_ENV = import.meta.env.VITE_APP_ENV;
// console.log("env=> ",import.meta.env)

// validations utility
import validateListData from '../utils/validateListData.js';


function App() {

  let [listData, setListData] = useState(sampleListData);

  let [output, setOutput] = useState("");

  const [loading, setLoading] = useState(false);


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

// Function to Update Group Values
const handleGrpValueChange = (e) => {
  const updatedText = e.target.value;
  const updatedGrpValues = updatedText.split("\n");

  setListData(prevState => ({
    ...prevState,
    groups: {
      ...prevState.groups,
      groupValues: updatedGrpValues
    }
  }));
};


// Function to Update Group Label
  const handleGrpLabelChange = (e, index) => {
    const updatedGrpLabel = e.target.value;
    setListData(prevState => ({
      ...prevState,
      groups: {
        ...prevState.groups,
        groupNames: prevState.groups.groupNames.map((group, idx) => idx === index ? {groupLabel: updatedGrpLabel, groupName: group.groupName} : group),
      }
    }));
  };

  // Function to Update Group Name
  const handleGrpNameChange = (e, index) => {
    const updatedGrpName = e.target.value;
    setListData(prevState => ({
      ...prevState,
      groups: {
        ...prevState.groups,
        groupNames: prevState.groups.groupNames.map((group, idx) => idx === index ? {groupLabel: group.groupLabel, groupName: updatedGrpName} : group),
      }
    }));
  };


  // Function to Remove Group
  const handleRemoveGroup = (indexToRemove) => {

    if (indexToRemove !== -1) {
      setListData(prevState => {
        const newGroupNamesArray = prevState.groups.groupNames.filter((name, index) => index !== indexToRemove);

        return {
          ...prevState,
          groups: {
            ...prevState.groups,
            groupNames: newGroupNamesArray,
            groupValues: (newGroupNamesArray.length > 0) ? prevState.groups.groupValues : []
          }
        };
      });
    }
  }




  // -------------------------------- End :: Functions for Groups -----------------


  // Function to Generate List
  const handleGenList = () => {

    try{
      // Validations for List Data
    validateListData(listData);

    // clearing previous output
    setOutput("");
      handleListDataChange("isError", false);

    }catch(err){
      if (APP_ENV === "development"){
        console.error('Error generating list:', err.message);
      }
      setOutput(err.message);
      handleListDataChange("isError", true);
      return;
    }


    

    

    // console.log("API URL:", import.meta.env);

    setLoading(true)

  axios.post(`${API_URL}/api/definelist`, {
      listData : listData
    })
.then(res => {
  if (APP_ENV === "development"){
    console.log("From API: ",res.data);
    console.log("API response: ",res);
  }
  setLoading(false)
  setOutput(res.data);
  handleListDataChange("isError", false);
})
.catch(err => {
  const errorMessage = err.response?.data?.message || "Unexpected error occurred";
  if (APP_ENV === "development"){
    console.error("Error=> ",err);
    console.error("API Error Message =>", errorMessage);
  }
  setLoading(false)
  setOutput(errorMessage);
  handleListDataChange("isError", true);
});

  }

  const handleClearOutput = () => {
    // validate if outputValue has error
    if (listData.isError) {
      alert("Please fix the error before clearing the output.");
      return;
    }
    // Clear the output value
    setOutput("")
  }

  const handleResetListData = () => {
    setListData(initialListData)
    handleClearOutput()
  }



  return (
    <>
      <main id='mainContainer'>
        { loading && <Loader /> } 
        <DrawerAppBar />
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

{/*
         Dubug button
          <button type="button"
          onClick={()=> console.log(listData)}
          >Show List Data</button>
  */}

        <div className="contentContainer">
          <ListContainer
            listRows={listData.listRows.join("\n").split(',')}
            handleListRowsChange={handleListRowsChange}
            handleClearText={handleListDataChange}
          />

              { ((listData.groups.groupNames.length > 0) || (listData.groups.groupValues.length > 0)) && 
                ( <GroupsContainer 
                groups={listData.groups}
                handleAddGroup={handleAddGroup}
                handleGrpValueChange={handleGrpValueChange}
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
