import React, { useState } from 'react';

const FocusBlurExample = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

// aqui ele criou duas constantes e setou o valores de cada uma, uma com um bool false e outro com uma string vazia

  const handleFocus = () => {
    setIsFocused(true);
  };

  // essa função serve pra chamar a função setisFocused e dar um valor true, caso o usuário esteja dentro do input

  const handleBlur = () => {
    setIsFocused(false);
  };

  // essa função serve pra chamar a função setisFocused e dar um valor false e assim causando blur na pagina, significando que não está focado no input e o usuario não selecionou a caixa de input

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // aqui ele recebe o valor do input, caso o usuario digite algo

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>React onFocus and onBlur Example</h2>
      <input
        type="text"
        value={inputValue} // aqui ele chama o valor do input, no caso o que o usuario vai digitar
        onFocus={handleFocus} // quando o usuario estiver com a caixa de input selecionada, vai focar
        onBlur={handleBlur} // quando o usuario não estiver com a caixa de input selecionada, vai usar o metodo blur
        onChange={handleChange} // isso aqui é pra quando sempre o usuario digitar algo, atualizar na mesma hora que o usuario digitar
        placeholder="Click or tab to focus"
        style={{
          padding: '10px',
          fontSize: '16px',
          border: isFocused ? '2px solid green' : '1px solid gray',
        }}
      />
      <div style={{ marginTop: '20px' }}>
        {isFocused ? <p>The input is focused!</p> : <p>The input is not focused.</p>}
      </div>
      <p>Input value: {inputValue}</p>
    </div>
  );
};

export default FocusBlurExample;

