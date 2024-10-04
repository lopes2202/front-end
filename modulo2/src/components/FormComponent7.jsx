import React, { useState } from 'react'; 

const FormComponent7 = () => {

    function MyForm() {
        const [inputs, setInputs] = useState({});

        const handleChange = (event) => {
            const name = event.target.name;
            const value = event.target.value;
            setInputs(values => ({ ...values, [name]: value }))
        }

        const handleSubmit = (event) => {
            event.preventDefault();
            console.log(inputs);
        }

        return (
            <form onSubmit={handleSubmit}>
                <label>Digite seu nome:
                    <input
                        type="text"
                        name="username"
                        value={inputs.username || ""}
                        onChange={handleChange}
                    />
                </label>
                <br></br>
                <label>Digite sua idade:
                    <input
                        type="number"
                        name="age"
                        value={inputs.age || ""}
                        onChange={handleChange}
                    />
                </label>
                <br></br>
                <label>Digite o curso que voce faz:
                    <input
                        type="text"
                        name="curso"
                        value={inputs.curso || ""}
                        onChange={handleChange}
                    />
                </label>
                <br></br>
                <label>Qual nome do seu professor de frontend? 
                    <input
                        type="text"
                        name="professor"
                        value={inputs.professor || ""}
                        onChange={handleChange}
                    />
                </label>
                <input type="submit" />
            </form>
        )
    }

    return (
        <div><MyForm/></div>
    )
}


export default FormComponent7