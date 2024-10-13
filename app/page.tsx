import MoviesContainer from "./components/movies-container/movies-container";
import Header from "./components/header/header";
import Formulario from "./components/icones-do-terror/formulario";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div className="page-background">
      <div className="page-container">
        <Header />
        <MoviesContainer />
        <Formulario />
      </div>
      <Footer />
    </div>
  );
}
