import MoviesContainer from "./components/movies-container/movies-container";
import Header from "./components/header/header";
import Formulario from "./components/formulario/formulario";
import Footer from "./components/footer/footer";
import "@fortawesome/fontawesome-svg-core/styles.css"
import IconesDoTerror from "./components/icones-do-terror/icones-do-terror";

export default function Home() {
  return (
    <div className="page-background">
      <div className="page-container">
        <Header />
        <MoviesContainer />
        <IconesDoTerror />
        <Formulario />
      </div>
      <Footer />
    </div>
  );
}
