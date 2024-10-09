import React, { useState } from 'react';
import './IMC.css'

const IMC = () => {
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const calculoImc = (peso / ((altura / 100) ** 2)).toFixed(2);
        alert(`Seu IMC é: ${calculoImc}`);
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
            </form>
        </div>
    );
}

export default IMC;
