import { useState } from 'react'
import './App.css'

//components
import HeaderContainer from "./components/HeaderContainer"
import ListContainer from "./components/ListContainer"
import SVContainer from "./components/SVContainer"
import OutputContainer from "./components/OutputContainer"



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main id='mainContainer'>

        <HeaderContainer /> 

        <div className="contentContainer">
            <ListContainer />
            <SVContainer />
            <OutputContainer />
        </div>

      </main>
    </>
  )
}

export default App
