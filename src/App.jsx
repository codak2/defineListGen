import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main id='mainContainer'>

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


        <div className="contentContainer">

          <div id="listContainer" className='container2'>
            <label htmlFor=""> List Rows <br />
              <textarea name="" id="" placeholder='Enter List Rows' cols="40" rows="40"></textarea>
            </label>

            <button type="button">Clear List Rows</button>
          </div>


          <div id="stylevarContainer" className='container2'>
            <label htmlFor=""> Stylevar Values <br />
              <textarea name="" id="" placeholder='Enter Stylevar Values' cols="40" rows="40"></textarea>
            </label>

            <label htmlFor=""> Stylevar Name <br />
              <input type="text" placeholder='Enter Stylevar Name' />
            </label>

            <button type="button">Remove Stylevar</button>
          </div>


          <div id="outputContainer" className='container2' style={{ "width": "20rem" }}>
            <label htmlFor=""> Output <br />
              <textarea name="" id="" placeholder='Output will be generated here....' cols="40" rows="40"></textarea>
            </label>

            <div className="container1">
              <button type="button">Generate List</button>
              <button type="button">Save to file</button>
              <button type="button">Copy Output</button>
              <button type="button">Clear Output</button>
            </div>
          </div>

        </div>

      </main>
    </>
  )
}

export default App
