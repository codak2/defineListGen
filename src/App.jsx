import { useState } from 'react'
import './App.css'

//components
import HeaderContainer from "./components/HeaderContainer"
import ListContainer from "./components/ListContainer"
import SVContainer from "./components/SVContainer"
import OutputContainer from "./components/OutputContainer"



function App() {
  
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

  let [output, setOutput] = useState([]);


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

const handleAddStylevar = () =>{
  // TODO: handleAddStylevar
  console.log("TODO: handleAddStylevar")
}

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
        /> 

        <div className="contentContainer">
            <ListContainer 
            listRows={listData.listRows.join("\n").split(',')}
            handleListRowsChange={handleListRowsChange}
            handleClearText={handleListDataChange}
            />
            <SVContainer />


            <OutputContainer
            outputValue={output.join("\n")}
            
            />

        </div>

      </main>
    </>
  )
}

export default App
