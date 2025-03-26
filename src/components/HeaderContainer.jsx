import React from 'react'

const HeaderContainer = () => {
  return (
    <>
            <div id="headerContainer" className='container1'>
          <label htmlFor=""> List Name <br />
            <input type="text" placeholder='Enter List Name' />
          </label>

          <label htmlFor=""> Row Prefix <br />
            <input type="text" placeholder='Enter Row Prefix (e.g. Br)' />
          </label>

          <label htmlFor="" className='center'> Add Row Values <br />
            <input type="checkbox" />
          </label>

          <label htmlFor="" className='center'> Collapse Duplicates <br />
            <input type="checkbox" />
          </label>

          <button type="button">Add Stylevar</button>
        </div>
    </>
  )
}

export default HeaderContainer