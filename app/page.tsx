import MoviesContainer from "./components/movies-container/movies-container";
import Header from "./components/header/header";

export default function Home() {
  return (
    <div>
      <div>
        <Header />
        <MoviesContainer />
      </div>
    </div>
  );
}
