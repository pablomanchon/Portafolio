import { useState } from "react";
import "../styles/footer.scss";

export const Footer = () => {
  const [form, setForm] = useState({ asunto: "", message: "" });

  const handleChange = (e) => {
    setForm((old) => {
      const f = { ...old, [e.target.name]: e.target.value };
      return f;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <footer>
      <section>
        <form className='email'>
          <h3>¡Contactame!</h3>
          <input
            className='input'
            type='text'
            name='asunto'
            onChange={(e) => handleChange(e)}
          />
          <textarea
            name='message'
            className='input'
            onChange={(e) => handleChange(e)}
          />
          <button onClick={(e) => handleSubmit(e)}>Enviar</button>
        </form>
      </section>
    </footer>
  );
};
