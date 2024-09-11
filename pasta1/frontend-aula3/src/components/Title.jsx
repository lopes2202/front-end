import { useState } from "react";


export default function Title(){
    const [nome, setNome] = useState('Mundo')
    return (
        <div>
            <h1>Olá {nome}</h1>
            <button onClick={() => setNome('Gabriel')}>Entrar</button>
        </div>
    )
}

function handleClick(){
        setNome('Bola8')
        console.log("Clicou")

};
<button onClick={handleClick}>clicar</button>


