import "../styles/about.scss";
import perfil from "../../public/assets/perfil.jpg";
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
      <img className='perfil-imagen' src={perfil} />
      <motion.div
        variants={variants}
        initial='noView'
        onViewportEnter={() => {
          control.start("inView");
        }}
        onViewportLeave={() => control.start("noView")}
        animate={control}
        className='about'>
        <motion.hr
          initial='noView'
          variants={variantshr1}
          animate={control}
          className='first-hr'
        />
        <h3>Desarrollador web Full-Stack</h3>
        <p>
          Me gusta estar en constante aprendizaje y evolución, razón por la que
          decidí dar un giro a mi carrera profesional y dedicarme por completo
          al mundo del desarrollo web. Me siento cómodo trabajando en equipo, me
          considero una persona organizada y comprometida con mi trabajo
        </p>
        <div className='icons'>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href='https://github.com/pablomanchon'>
            <i className='bi bi-github' />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href='https://www.linkedin.com/in/pablo-manchon-richardi-471346252/'>
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
