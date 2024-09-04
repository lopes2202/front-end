import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThirdComponents from './components/ThirdComponents'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className='App'></div>
      
    <ThirdComponents/>
    </>
  )
}

export default App
