import "../styles/header.scss";
import logo from "../assets/Logo.png";
import { motion } from "framer-motion";
export const Header = () => {
  return (
    <header>
      <img className='logo' src={logo} />
      <nav>
        <motion.h3 whileHover={{ scale: 1.2, y: -10, x: -5, rotate: -5 }}>
          About me
        </motion.h3>
        <motion.h3 whileHover={{ scale: 1.2, y: -10, x: 5, rotate: 5 }}>
          Projects
        </motion.h3>
        <motion.h3 whileHover={{ scale: 1.2, y: -10, x: -5, rotate: -5 }}>
          Languages
        </motion.h3>
      </nav>
    </header>
  );
};
