import { useState } from 'react'
import './App.css'
import ListaComponent from './components/ListaComponent'
import ListaComponent2 from './components/ListaComponent2'
import ListaComponent3 from './components/ListaComponent3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ListaComponent/>
      <ListaComponent2/>
      <ListaComponent3/>
    </div>
  )
}

export default App
