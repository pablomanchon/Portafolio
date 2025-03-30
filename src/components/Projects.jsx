import "../styles/projects.scss";
import cartasBares from "../../public/assets/proyectos/cartas-bares.webp";
import pokemons from "../../public/assets/proyectos/pokemons.webp";
import lunaMistica from "../../public/assets/proyectos/lunaMistica.webp";
import velascoNaturals from "../../public/assets/proyectos/naturalsVelasco.webp";
import eCommerce from "../../public/assets/proyectos/eCommerce.webp";
import eRichardi from "../../public/assets/proyectos/i-e-richardi.png"
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
      "Un proyecto en el que consumo una API de pókemon, lo hice para practicar animaciones",
    image: pokemons,
    url: "https://pokemons-bice.vercel.app/",
  },
  {
    name: "Instituto Enológico Richardi",
    description: "Página web para un instituto de enología, consta de 4 secciones (Inicio, Servicios, About us, Contacto)",
    image: eRichardi,
    url: "https://mediumseagreen-donkey-505845.hostingersite.com/"
  },
  {
    name: "Naturals Velasco",
    description: "E-Commerce de ropa y perfumes con carrito de compras",
    image: velascoNaturals,
    url: "https://ecommerce-velasco.vercel.app/",
  },
  {
    name: "E-Commerce",
    description: "E-Commerce variado con Next.js",
    image: eCommerce,
    url: "https://ecommerce-pablomanchon.vercel.app/",
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
