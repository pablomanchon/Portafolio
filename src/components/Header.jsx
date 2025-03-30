import "../styles/header.scss";
import logo from "../../public/assets/Logo.webp";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const phoneNumber = "+5492616416111";
const whatsappURL = `https://wa.me/${phoneNumber}`;

export const Header = () => {
  return (
    <header>
      <img className='logo' src={logo} alt='logo-header' />
      <nav>
        <a href={whatsappURL} target='_blank' rel='noreferrer noopener'>
          <i className='bi bi-whatsapp' />
        </a>
        <a
          href='https://www.linkedin.com/in/pablo-manchon-richardi-471346252/'
          target='_blank'
          rel='noreferrer noopener'
        >
          <i className='bi bi-linkedin' />
        </a>
        <a
          href='https://github.com/pablomanchon?tab=repositories'
          target='_blank'
          rel='noreferrer noopener'
        >
          <i className='bi bi-github' />
        </a>
        <div id="nav-pc">
          <Link to='perfil' smooth={true} duration={500} offset={-100}>
            Sobre mi
          </Link>
          <Link to='projects' smooth={true} duration={500} offset={-80}>
            Proyectos
          </Link>
          <Link to='languages' smooth={true} duration={500} offset={-50}>
            Lenguajes
          </Link>
          <Link to='contact' smooth={true} duration={500} offset={30}>
            Contactame
          </Link>
        </div>
      </nav>
    </header>
  );
};
