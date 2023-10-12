export default function MoviesPage({ movies }: Movies) {
  return (
    <div>
      <h2>Populära filmer</h2>
      {movies.map(({ id, title, poster }) => (
        <div key={id}>
          <h3>{title}</h3>
          <img src={poster} alt={title} />
        </div>
      ))}
    </div>
  );
}
