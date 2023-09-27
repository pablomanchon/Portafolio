import "../styles/projects.scss";
import cartasBares from "../../public/assets/proyectos/cartas-bares.png";
import pokemons from "../../public/assets/proyectos/pokemons.png";
import tiendaRopa from "../../public/assets/proyectos/tienda-ropa.png";
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
    name: "Pokemons",
    description:
      "Un proyecto en el que consumo una API de pókemon, lo hice para practicar mi frontend",
    image: pokemons,
    url: "https://pokemons-bice.vercel.app/",
  },
  {
    name: "Tienda de ropa",
    description:
      "Una tienda de ropa con carrito de compras y backend en Spring, este es el link a su version BETA",
    image: tiendaRopa,
    url: "https://front-velasco-git-falsasprendas-pablomanchon.vercel.app/",
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
          }>
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
