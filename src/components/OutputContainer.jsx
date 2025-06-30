import React from 'react'

import downloadAsFile from "../utils/downloadAsFile.js"
import copyToClipboard from "../utils/copyToClipboard.js"

const OutputContainer = (props) => {

  return (
    <>
              <div id="outputContainer" className='container2' style={{ "width": "20rem" }}>
            <label htmlFor=""> Output <br />
              <textarea name="" id="" 
              placeholder='Output will be generated here....' 
              cols="40" rows="30"
              value={props.isError ? "Please fix the Error and Try Again." : props.outputValue}
              readOnly
              />
            </label>

            <div className="container1">
              <button type="button"
              onClick={props.handleGenList}
              >Generate List</button>
              <button type="button"
              onClick={()=>downloadAsFile(props.outputValue, props.listFileName)}
              >Download as File</button>
              <button type="button"
              onClick={()=>copyToClipboard(props.outputValue)}
              >Copy to Clipboard</button>
              <button type="button"
              onClick={props.handleClearOutput}
              >Clear Output</button>
            </div>
          </div>
    </>
  )
}

export default OutputContainer