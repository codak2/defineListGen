import React from 'react'

const OutputContainer = (props) => {
  return (
    <>
              <div id="outputContainer" className='container2' style={{ "width": "20rem" }}>
            <label htmlFor=""> Output <br />
              <textarea name="" id="" 
              placeholder='Output will be generated here....' 
              cols="40" rows="40"
              value={props.outputValue}
              readOnly
              />
            </label>

            <div className="container1">
              <button type="button">Generate List</button>
              <button type="button">Save to file</button>
              <button type="button">Copy Output</button>
              <button type="button">Clear Output</button>
            </div>
          </div>
    </>
  )
}

export default OutputContainer