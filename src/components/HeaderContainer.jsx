import React from 'react'

const HeaderContainer = (props) => {
  return (
    <>
            <div id="headerContainer" className='container1'>
          <label htmlFor=""> List Name <br />
            <input 
            type="text" 
            placeholder='Enter List Name'
            value={props.listName}
            onChange={props.handleListNameChange}
            />
          </label>

          <label htmlFor=""> Row Label Prefix <br />
            <input 
            type="text" 
            placeholder='Enter Row Prefix (e.g. Br)' 
            value={props.rowLabel}
            onChange={props.handleRowLabelChange}
            />
          </label>

          <label htmlFor="" className='center'> Add Row Values <br />
            <input 
            type="checkbox" 
            checked={props.isAddRowValues} 
            onChange={props.handleAddRowValues}/>
          </label>

          <label htmlFor="" className='center'> Collapse Duplicates <br />
            <input type="checkbox"
            checked={props.isCollapseDupes}
            onChange={props.handleCollapseDupes} />
          </label>

          <button type="button"
          onClick={props.handleAddStylevar}
          >Add Stylevar</button>

          <button type="button"
          onClick={props.handleAddGroup}
          >Add Group</button>



          

          <button type="button"
          onClick={props.handleResetListData}
          >Reset All</button>

        </div>
    </>
  )
}

export default HeaderContainer