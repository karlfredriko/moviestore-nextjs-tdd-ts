export default function MoviesPage({ movies }: Movies) {
  return (
    <div>
      <h2>Populära filmer</h2>
      {movies.map((movie) => (
        <h3>{movie.title}</h3>
      ))}
    </div>
  );
}
