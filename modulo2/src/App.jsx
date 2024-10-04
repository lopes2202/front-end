import { useState } from 'react'
import './App.css'
import ListaComponent from './components/ListaComponent'
import ListaComponent2 from './components/ListaComponent2'
import ListaComponent3 from './components/ListaComponent3'
import FormComponent from './components/FormComponent'
import FormComponent2 from './components/FormComponent2'
import FormComponent3 from './components/FormComponent3'
import FormComponent4 from './components/FormComponent4'
import FormComponent5 from './components/formComponent5'
import Formcomponent6 from './components/FormComponent6'
import FormComponent7 from './components/FormComponent7'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ListaComponent/>
      <ListaComponent2/>
      <ListaComponent3/>
      <FormComponent/>
      <FormComponent2/>
      <FormComponent3/>
      <FormComponent4/> <br></br>
      <FormComponent5/>
      <Formcomponent6/>
      <FormComponent7/>
    </div>
  )
}

export default App
