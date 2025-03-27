import React from 'react'

const ListContainer = (props) => {
  return (
    <>
    <div id="listContainer" className='container2'>
            <label htmlFor=""> List Rows <br />
              <textarea name="" id="" 
              placeholder='Enter List Rows' 
              cols="40" 
              rows="40"
              value={props.listRows}
              onChange={props.handleListRowsChange}
              />
            </label>

            <button type="button"
            onClick={() => props.handleClearText('listRows', "")}
            >Clear List Rows</button>
          </div>
    </>
  )
}

export default ListContainer