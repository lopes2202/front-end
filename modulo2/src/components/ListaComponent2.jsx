import React from 'react'

const ListaComponent2 = () => {

    function Filme(props) {
        return <li>O nome do filme é {props.brand}</li>;
    }

    function NomeFilme(){
        const nomeFilmes = [
            {id: 1, brand: "The notebook"},
            {id: 2, brand: "Até o ultimo homem"},
            {id: 3, brand: "The Batman"}
        ]

        return (
            <div>
                <p>
                    {nomeFilmes.map((filme) => <Filme key={filme.id} brand={filme.brand} />)}
                </p>
            </div>
          )
        
    }

  return (
    <div>
        <NomeFilme/>
    </div>
)

}

export default ListaComponent2