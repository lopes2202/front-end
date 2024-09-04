import React from 'react'

const SecondComponents = () => {
    const jogos = [
        {
            nome: "CS 2",
            anoQueLancou: 2023,
            categoria: "FPS"
        },
        {
            nome: "Valorant",
            anoQueLancou: 2020,
            categoria: "FPS"
        },
        {
            nome: "Dying Light",
            anoQueLancou: 2015,
            categoria: "Sobrevivencia/Terror"
        },
        {
            nome: "Minecraft",
            anoQueLancou: 2011,
            categoria: "Ação e Aventura"
        },
        {
            nome: "Left 4 Dead",
            anoQueLancou: 2008,
            categoria: "Sobrevivencia/Terror"
        },
    ]
    const jogosOrdenados = [...jogos].sort((a, b) => a.nome.localeCompare(b.nome))

    return (
        <>
            <ul>
                {jogos.map((jogo) => (
                    <li key={jogo.nome}>
                        Nome do Jogo: {jogo.nome} | Ano que ele lançou: {jogo.anoQueLancou} | Categoria: {jogo.categoria}
                    </li>
                ))}
            </ul>
            <ol>
                {jogosOrdenados.map((jogo) => (
                    <li key={jogo.nome}>
                        Nome do Jogo: {jogo.nome} | Ano que ele lançou: {jogo.anoQueLancou} | Categoria: {jogo.categoria}
                    </li>
                ))}
            </ol>
        </>
    );
};

export default SecondComponents