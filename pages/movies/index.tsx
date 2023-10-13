import { getAllMovies } from "@/__mock__/data/movies";
import ShowMoviePoster from "@/components/ShowPosters/ShowMoviePoster";

export default function MoviesPage() {
  const movies: Movie[] = getAllMovies();
  return (
    <div>
      <h2>Populära filmer</h2>
      <ShowMoviePoster movies={movies} />
    </div>
  );
}
