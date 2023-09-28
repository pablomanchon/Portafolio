import { useState } from "react";
import "../styles/footer.scss";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import axios from "axios";

export const Footer = () => {
  const phoneNumber = "+5492616416111";
  const whatsappURL = `https://wa.me/${phoneNumber}`;
  const [form, setForm] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm((f) => {
      return { ...f, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    axios
      .post("https://formspree.io/f/xayglnel", form, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        toast.success("¡Email enviado con exito!");
        setIsSubmitting(false);
      })
      .catch(() => {
        toast.error("Error al enviar el mensaje");
        setIsSubmitting(false);
      });
  };

  return (
    <footer name='contact'>
      <form onSubmit={(e) => handleSubmit(e)} className='email'>
        <h3>¡Contactame!</h3>
        <input
          placeholder='example@gmail.com'
          className='input'
          type='email'
          name='email'
          onChange={(e) => handleChange(e)}
          required
        />
        <textarea
          name='message'
          className='input'
          onChange={(e) => handleChange(e)}
          required
        />
        <button type='submit' disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar"}
        </button>
      </form>
      <section className='contact'>
        <ul>
          <motion.li whileHover={{ scale: 1.2 }}>
            <a href={whatsappURL} target='_blank' rel='noreferrer noopener'>
              <i className='bi bi-whatsapp' />
              <span>+54 9 2616416111</span>
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }}>
            <a
              href='https://www.linkedin.com/in/pablo-manchon-richardi-471346252/'
              target='_blank'
              rel='noreferrer noopener'>
              <i className='bi bi-linkedin' />
              <span>Pablo Manchon Richardi</span>
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }}>
            <a
              href='https://github.com/pablomanchon'
              target='_blank'
              rel='noreferrer noopener'>
              <i className='bi bi-github' />
              <span>pablomanchon</span>
            </a>
          </motion.li>
        </ul>
      </section>
    </footer>
  );
};
