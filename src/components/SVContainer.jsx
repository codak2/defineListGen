
import React from 'react'

const SVContainer = (props) => {
  return (
    <>
    <div id="stylevarContainer" className='container2'>
            <label htmlFor=""> Stylevar Values <br />
              <textarea name="" id="" 
              placeholder='Enter Stylevar Values' 
              cols="30" 
              rows="40"
              value={props.SVValue}
              onChange={(e) => props.handleStyleVarValueChange(e, props.index)}
              />
            </label>

            <label htmlFor=""> Stylevar Name <br />
              <input type="text" 
              placeholder='Enter Stylevar Name'
              value={props.SVName}
              onChange={(e) => props.handleStyleVarChange(e, props.index)}
              />
            </label>

            <button type="button"
            onClick={() => props.handleRemoveStylevar(props.index)}
            >Remove Stylevar</button>
          </div>
    </>
  )
}

export default SVContainer

// TODO: lost focus while typing stylevar name