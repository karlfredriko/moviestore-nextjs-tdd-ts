import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import MoviesPage from "@/pages/movies";
import { getAllMovies } from "@/__mock__/data/movies";

describe("Movie page", () => {
  it("should have a heading with the text 'Populärar filmer'", () => {
    render(<MoviesPage movies={[]} />);

    const heading = screen.getByRole("heading", { name: /Populära filmer/i });

    expect(heading).toBeInTheDocument();
  });
  it("should have 20 movies", () => {
    const movies = getAllMovies();
    expect(movies).toHaveLength(20);
  });
});
