import "../styles/projects.scss";
import cartasBares from "../../public/assets/proyectos/cartas-bares.png";
import pokemons from "../../public/assets/proyectos/pokemons.png";
import tiendaRopa from "../../public/assets/proyectos/tienda-ropa.png";

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
  const esPar = (num) => {
    return num % 2 === 0;
  };

  return (
    <section className='projects'>
      <h2>Projects</h2>
      <hr />
      <div className='cards'>
        {projects.map((project, key) => (
          <div className='card' key={key}>
            {esPar(key) ? (
              <>
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
                <hr />
                <a className='project' href={project.url}>
                  <img src={project.image} alt={project.name} />
                </a>
              </>
            ) : (
              <>
                <a className='project' href={project.url}>
                  <img src={project.image} alt={project.name} />
                </a>
                <hr />
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
