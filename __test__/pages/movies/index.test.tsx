import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import MoviesPage from "@/pages/movies";
import { getAllMovies } from "@/__mock__/data/movies";

// SKAPADE TOM ARRAY
// let movies: Movie[] = [];

// HÄMTADE FILM-DATA INNAN
const movies: Movie[] = getAllMovies();

describe("Movie page", () => {
  beforeEach(() => {
    // HÄMTADE FILM-DATA TILL TOM ARRAY
    // movies = getAllMovies();
    render(<MoviesPage movies={movies} />);
    // RETURNERADE ARRAY MED FILM-DATA FÖR TESTEN
    // return movies;
  });
  it("should have a heading with the text 'Populärar filmer'", () => {
    // render(<MoviesPage movies={[]} />);

    const heading = screen.getByRole("heading", { name: /Populära filmer/i });

    expect(heading).toBeInTheDocument();
  });
  it("should have 20 movies", () => {
    // const movies = getAllMovies();
    expect(movies).toHaveLength(20);
  });
  it("should have a poster", () => {
    // const movies = getAllMovies();
    // render(<MoviesPage movies={movies} />);
    const poster = screen.getByRole("img", { name: movies[0].title });
    expect(poster).toBeInTheDocument();
  });
});
