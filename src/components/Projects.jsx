import "../styles/projects.scss";
import cartasBares from "../../public/assets/proyectos/cartas-bares.webp";
import eRichardi from "../../public/assets/proyectos/i-e-richardi.png"
import zafiroSyv from "../../public/assets/proyectos/Zafiro-ctacte.png"
import tanoStock from "../../public/assets/proyectos/Tano-stock.png"
import { motion } from "framer-motion";
import { useState } from "react";
import { Project } from "./Project";

const projects = [
  {
    name: "Cartas",
    description:
      "Un proyecto para bares y restaurantes, simplemente escaneas el QR en tu mesa, y obtendrás el menu del lugar",
    image: cartasBares,
    url: "https://cartas-bares.vercel.app/",
  },
  {
    name: "Instituto Enológico Richardi",
    description: "Página web para un instituto de enología, consta de 4 secciones (Inicio, Servicios, About us, Contacto)",
    image: eRichardi,
    url: "https://institutoinvestigacionrichardi.com/"
  },
  {
    name: "Zafiro - Stock y Ventas",
    description: "Aplicación de Stock y Ventas",
    image: zafiroSyv,
    github: "https://github.com/pablomanchon/zafiro-ventas-electron"
  },
  {
    name: "Tano Stock - Stock, Ventas y Gastronomía",
    description: "Aplicación de Stock y Ventas con extras de gastronomía y control de horarios para empleados",
    image: tanoStock,
    github: "https://github.com/pablomanchon/stock-java"
  },
];

export const Projects = () => {
  const [isInView, setIsInView] = useState(false);

  return (
    <section name='projects' className='projects'>
      <div className='title'>
        <motion.h2
          onViewportEnter={() => setIsInView(true)}
          onViewportLeave={() => setIsInView(false)}
          animate={
            isInView
              ? { x: 0, opacity: 1, transition: { duration: 0.5 } }
              : { x: -100, opacity: 0 }
          }
        >
          Projects
        </motion.h2>
        <motion.hr
          animate={
            isInView
              ? { opacity: 1, width: "90%", transition: { delay: 0.5 } }
              : { opacity: 0, width: 0 }
          }
        />
      </div>
      <div className='cards'>
        {projects.map((project, key) => (
          <Project key={key} index={key} project={project} />
        ))}
      </div>
    </section>
  );
};
