import "../styles/languages.scss";
import javaLogo from "../assets/logos-lenguajes/java-logo.png";
import reactLogo from "../assets/logos-lenguajes/react-logo.png";
import viteLogo from "../assets/logos-lenguajes/vite-logo.png";
import sqlLogo from "../assets/logos-lenguajes/sql-logo.png";
import javascriptLogo from "../../assets/logos-lenguajes/javascript-logo.png";
import springLogo from "../assets/logos-lenguajes/spring-logo.png";
import apiLogo from "../assets/logos-lenguajes/api-logo.png";
import { AnimatePresence, motion } from "framer-motion";

export const Languages = () => {
  return (
    <div className='languages'>
      <ul>
        <AnimatePresence>
          <li>
            <img className='logo' src={reactLogo} />
            <span>React</span>
          </li>
          <li>
            <img className='logo' src={viteLogo} />
            <span>Vite</span>
          </li>
          <li>
            <img className='logo' src={sqlLogo} />
            <span>SQL</span>
          </li>
          <li>
            <img className='logo' src={javascriptLogo} />
            <span>JavaScript</span>
          </li>
          <li>
            <img className='logo' src={javaLogo} />
            <span>Java</span>
          </li>
          <li>
            <img className='logo' src={springLogo} />
            <span>Spring</span>
          </li>
          <li>
            <img className='logo' src={apiLogo} />
            <span>APIs</span>
          </li>
        </AnimatePresence>
      </ul>
      <hr />
      <motion.h3
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -200 }}
        className='title'>
        Developer stacks
      </motion.h3>
    </div>
  );
};
