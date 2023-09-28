import "../styles/header.scss";
import logo from "../../public/assets/Logo.png";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
export const Header = () => {
  return (
    <header>
      <img className='logo' src={logo} />
      <nav>
        <motion.h3 whileHover={{ scale: 1.2, y: -10, x: -5, rotate: -5 }}>
          <Link to='perfil' smooth={true} duration={500} offset={-100}>
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
