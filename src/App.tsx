import { useState } from 'react'
import { Header } from './Components/Header'
import {  NewTask } from './Components/NewTask'
import { Tasks } from './Components/Tasks'
import { GlobalStyle } from './styles/global'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <NewTask/>
      <Tasks/>
    </div>
  )
}

export default App
