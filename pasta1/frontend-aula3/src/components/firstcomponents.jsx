import React from 'react'

const Firstcomponents = () => {

    const Nome = "Gabriel Lopes"
    const Matricula = 2314290121
    const Professor = "Felipe"
    const Disciplina = "Construção de Frontend"

  return (
    <div>
        <p>
            Olá meu nome é {Nome}, minha matricula é {Matricula}.
        </p>
        <p>
            O nome do meu professor é {Professor} e a matéria que ele ensina é {Disciplina}
        </p>    
    </div>
  )
}

export default Firstcomponents