import "../styles/about.scss";
import perfil from "../../public/assets/perfil.webp";
import { motion, useAnimation } from "framer-motion";

const variantshr1 = {
  inView: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.4,
    },
  },
  noView: {
    opacity: 0,
    x: -200,
  },
};
const variantshr2 = {
  inView: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.4,
    },
  },
  noView: {
    opacity: 0,
    x: 200,
  },
};
const variants = {
  inView: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      type: "spring",
    },
  },
  noView: {
    opacity: 0,
    x: -200,
  },
};

export const About = () => {
  const control = useAnimation();

  return (
    <section name='perfil' className='perfil'>
      <img className='perfil-imagen' src={perfil} alt='imagen-perfil' />
      <motion.div
        variants={variants}
        initial='noView'
        onViewportEnter={() => {
          control.start("inView");
        }}
        onViewportLeave={() => control.start("noView")}
        animate={control}
        className='about'
      >
        <motion.hr
          initial='noView'
          variants={variantshr1}
          animate={control}
          className='first-hr'
        />
        <h3>Programador Full-Stack</h3>
        <p>
          Desarrollador fullstack con experiencia la creación de aplicaciones web y de escritorio. Me especializo en Java, Spring Boot, React y Electron con NestJs, integrando frontend y backend con bases de datos SQL. Busco aportar soluciones eficientes y escalables en proyectos tecnológicos.
        </p>
        <div className='icons'>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href='https://github.com/pablomanchon'
          >
            <i className='bi bi-github' />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href='https://www.linkedin.com/in/pablo-manchon-richardi-471346252/'
          >
            <i className='bi bi-linkedin' />
          </motion.a>
        </div>
        <motion.hr
          initial='noView'
          variants={variantshr2}
          animate={control}
          className='last-hr'
        />
      </motion.div>
    </section>
  );
};
