import { About } from "./components/About";
import { Header } from "./components/Header";
import { Languages } from "./components/Languages";
import { Projects } from "./components/Projects";
import "./styles/app.scss";

function App() {
  return (
    <>
      <Header />
      <About />
      <Languages />
      <Projects />
    </>
  );
}

export default App;
