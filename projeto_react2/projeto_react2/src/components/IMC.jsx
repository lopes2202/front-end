import React, { useState } from 'react';
import './IMC.css';

const IMC = () => {
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [resultadoImc, setResultadoImc] = useState("");
    const [classificacaoImc, setClassificacaoImc] = useState("");

    const calcularClassificacao = (imc) => {
        if (imc < 16) return 'Magreza Grave';
        if (imc >= 16 && imc <= 16.9) return 'Magreza Moderada';
        if (imc >= 17 && imc <= 18.5) return 'Magreza Leve';
        if (imc >= 18.6 && imc <= 24.9) return 'Peso Ideal';
        if (imc >= 25 && imc <= 29.9) return 'Sobrepeso';
        if (imc >= 30 && imc <= 34.9) return 'Obesidade Grau I';
        return 'Classificação não encontrada';
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const calculoImc = (peso / ((altura / 100) ** 2)).toFixed(2);
        setResultadoImc(calculoImc);
        setClassificacaoImc(calcularClassificacao(calculoImc));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Calcule seu IMC</h1>
                <input
                    type='number'
                    placeholder='Altura (cm)'
                    required
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                />
                <input
                    type='number'
                    placeholder='Peso (kg)'
                    required
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                />
                <button type="submit">Calcular IMC</button>

                <input
                    type="text"
                    value={resultadoImc ? `Seu IMC é: ${resultadoImc}` : ''}
                    readOnly
                    placeholder="O resultado do IMC aparecerá aqui"
                />
                <input
                    type="text"
                    value={classificacaoImc ? `Classificação: ${classificacaoImc}` : ''}
                    readOnly
                    placeholder="A classificação aparecerá aqui"
                />
            </form>
        </div>
    );
}

export default IMC;
