import React from 'react'
import { useState } from 'react';

const FormComponent5 = () => {

    function MyForm() {
        const [textarea, setTextarea] = useState(
            "The content of a textarea goes in the value attribute"
        );

        const handleChange = (event) => {
            setTextarea(event.target.value)
        }

        return (
            <form>
                <textarea value={textarea} onChange={handleChange} />
            </form>
        )
    }

    return (
        <div><MyForm/></div>
    )
}

export default FormComponent5