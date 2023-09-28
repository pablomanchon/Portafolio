import { ToastContainer } from "react-toastify";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Languages } from "./components/Languages";
import { Projects } from "./components/Projects";
import "./styles/app.scss";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Header />
      <About />
      <Languages />
      <Projects />
      <Footer />
      <ToastContainer
        position='bottom-left'
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        className={"notifications"}
        toastClassName={"notification"}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
