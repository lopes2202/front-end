import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const titulo = <h1>Olá mundo!</h1>
  const secao = <div tabIndex = "0"></div>
  const nome = "Gabriel";
  const mensagem = <h1>Ola {nome}</h1>
  const botao = <button onClick={() => {}}>Confirmar</button>

  return (
    <>
    {titulo}
    {secao}
    {mensagem}
    {botao}
    </>
  )
}



export default App
