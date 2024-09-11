import React from 'react';

const Events = () => {
    // Função de evento que é chamada quando o botão é clicado
    const handleClick = (e) => {
        console.log(e); // Exibe o evento no console do navegador
        alert("Evento com função!"); // Exibe um alerta ao usuário
    }

    // Outra função que é chamada quando o botão é clicado
    const callNames = () => {
        alert("Testando"); // Exibe uma mensagem de teste
    }

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            {/* Evento inline - Chama diretamente uma função ao clicar */}
            <button onClick={() => alert("Os nomes estão em ordem alfabética, inclusive nas listas anteriores!")}>
                Clique Aqui
            </button>

            {/* Evento com função separada - Chama a função handleClick ao clicar */}
            <div style={{ marginTop: '20px' }}>
                <button onClick={handleClick}>Clique com Função</button>
            </div>

            {/* Evento com outra função separada - Chama a função callNames ao clicar */}
            <div style={{ marginTop: '20px' }}>
                <button onClick={callNames}>Clique com Função</button>
            </div>
        </div>
    );
}

export default Events;


