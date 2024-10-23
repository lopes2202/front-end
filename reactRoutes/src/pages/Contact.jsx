import './Contact.css'

const Contact = () => {
  const handleSubmit = (event) => {
      event.preventDefault(); // Impede o comportamento padrão do formulário
      alert('Formulário enviado!');
  };

  return (
      <form onSubmit={handleSubmit}>
          <div>
              <h1>Me contate</h1>
              <input type="text" placeholder="Nome" className="input" required /> <br />
              <input type="email" placeholder="Email" className="input" required />
              <input type="submit" value="Enviar" className="input" />
          </div>
      </form>
  );
};

export default Contact;