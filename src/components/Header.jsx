import "../styles/header.scss";
import logo from "../../public/assets/Logo.png";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const phoneNumber = "+5492616416111";
const whatsappURL = `https://wa.me/${phoneNumber}`;

export const Header = () => {
  return (
    <header>
      <img className='logo' src={logo} />
      <nav>
        <a href={whatsappURL} target='_blank' rel='noreferrer noopener'>
          <i className='bi bi-whatsapp' />
        </a>
        <a
          href='https://www.linkedin.com/in/pablo-manchon-richardi-471346252/'
          target='_blank'
          rel='noreferrer noopener'>
          <i className='bi bi-linkedin' />
        </a>
        <a
          href='https://github.com/pablomanchon'
          target='_blank'
          rel='noreferrer noopener'>
          <i className='bi bi-github' />
        </a>

        <motion.h3 whileHover={{ scale: 1.2, y: -10, x: -5, rotate: -5 }}>
          <Link to='perfil' smooth={true} duration={500}>
            Sobre mi
          </Link>
        </motion.h3>
        <motion.h3 whileHover={{ scale: 1.2, y: -10, x: 5, rotate: 5 }}>
          <Link to='projects' smooth={true} duration={500} offset={-100}>
            Proyectos
          </Link>
        </motion.h3>
        <motion.h3 whileHover={{ scale: 1.2, y: -10, x: -5, rotate: -5 }}>
          <Link to='languages' smooth={true} duration={500} offset={-100}>
            Lenguajes
          </Link>
        </motion.h3>
        <motion.h3 whileHover={{ scale: 1.2, y: -10, x: 5, rotate: 5 }}>
          <Link to='contact' smooth={true} duration={500} offset={-100}>
            Contactame
          </Link>
        </motion.h3>
      </nav>
    </header>
  );
};
