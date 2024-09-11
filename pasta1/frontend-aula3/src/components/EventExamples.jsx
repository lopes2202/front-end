import React, { useState } from 'react';

const EventExamples = () => {
  // Estados para os valores e controles de eventos
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Função chamada quando o botão é clicado
  const handleClick = () => {
    alert("Botão clicado!");
  };

  // aqui ele recebe o valor do input, caso o usuario digite algo
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

// aqui ele criou duas constantes e setou o valores de cada uma, uma com um bool false e outro com uma string vazia

const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      alert("Enter foi pressionado");
    }
  };

  // Função chamada quando o input ganha foco
  const handleFocus = () => {
    setIsFocused(true);
  };

  // essa função serve pra chamar a função setisFocused e dar um valor false e assim causando blur na pagina, significando que não está focado no input e o usuario não selecionou a caixa de input
  const handleBlur = () => {
    setIsFocused(false);
  };

  // Função chamada quando o formulário é enviado
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão de envio do formulário
    setSubmitMessage("Formulário enviado com sucesso!");
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Exemplo de Eventos no React</h2>
      
      {/* onClick */}
      <button onClick={handleClick}>
        Clique Aqui (onClick)
      </button>
      
      {/* onChange, onKeyDown, onFocus, onBlur */}
      <div style={{ marginTop: '20px' }}>
        <input
          type="text"
          value={inputValue} // aqui ele chama o valor do input, no caso o que o usuario vai digitar
          onChange={handleChange}   // isso aqui é pra quando sempre o usuario digitar algo, atualizar na mesma hora que o usuario digitar 
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}  // quando o usuario estiver com a caixa de input selecionada, vai focar
          onBlur={handleBlur} // quando o usuario não estiver com a caixa de input selecionada, vai usar o metodo blur
          placeholder="Digite algo ou pressione Enter"
          style={{
            padding: '10px',    
            border: isFocused ? '2px solid blue' : '1px solid gray',
          }}
        />
      </div>
      <p>Valor do input: {inputValue}</p>
      <p>{isFocused ? "O input está focado" : "O input não está focado"}</p>

      {/* onSubmit */}
      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <button type="submit">Enviar Formulário (onSubmit)</button>
      </form>
      {submitMessage && <p>{submitMessage}</p>}
    </div>
  );
}

export default EventExamples;
