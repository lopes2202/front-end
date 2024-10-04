import React, { useState } from 'react';

const MyForm = () => {
  const [name, setName] = useState("");

  return (
    <form>
      <label>
        Bota seu nome:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  );
};

const FormComponent2 = () => {
  return (
    <div>
      <MyForm />
    </div>
  );
};

export default FormComponent2;
