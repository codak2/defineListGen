import React from 'react'

const SVContainer = () => {
  return (
    <>
    <div id="stylevarContainer" className='container2'>
            <label htmlFor=""> Stylevar Values <br />
              <textarea name="" id="" placeholder='Enter Stylevar Values' cols="40" rows="40"></textarea>
            </label>

            <label htmlFor=""> Stylevar Name <br />
              <input type="text" placeholder='Enter Stylevar Name' />
            </label>

            <button type="button">Remove Stylevar</button>
          </div>
    </>
  )
}

export default SVContainer