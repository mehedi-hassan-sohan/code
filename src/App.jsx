import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cometic from './component/Cosmetic/Cometic'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
   <Cometic></Cometic>
    </div>
  )
}

export default App
