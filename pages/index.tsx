import { getAllMovies } from "@/__mock__/data/movies.js";
import MoviesPage from "./movies";

export default function HomePage() {
  const movies = getAllMovies();

  return (
    <div>
      <section>
        <h1>Välkommen till Moviestore</h1>
        <p>Vi erbjuder de senaste filmerna och TV-serierna</p>
      </section>
      <hr />
      <MoviesPage movies={movies} />
    </div>
  );
}
