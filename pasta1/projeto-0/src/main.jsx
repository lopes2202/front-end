import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

const titulo = <h1>Olá mundo!</h1>
const secao = <div tabIndex = "0"></div>
const nome = "Jose";
const mensagem = <h1>Ola {nome}</h1>
const botao = <button onClick={() => {
}}>Confirmar</button>