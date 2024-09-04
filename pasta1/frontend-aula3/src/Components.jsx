import React from 'react'

const Components = () => {
    const alunos = [
        {
            nome: "Gabriel",
            sobrenome: "Lopes",
        },
        {
            nome: "Caio",
            sobrenome: "Correa",
        },
    ]
        

return (
 
        <div><p>Alunos: {alunos[0].nome} {alunos[0].sobrenome}, {alunos[1].nome} {alunos[1].sobrenome} </p></div>
)
}


export default Components