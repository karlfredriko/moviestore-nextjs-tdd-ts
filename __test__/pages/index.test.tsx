import { render, screen } from "@testing-library/react";
import HomePage from "@/pages";
import "@testing-library/jest-dom";

describe("homepage", () => {
  it("has a text string ", () => {
    render(<HomePage />);

    const heading = screen.getByRole("heading", {
      name: /Välkommen till Moviestore/i,
    });

    expect(heading).toBeInTheDocument();
    // const textToTest = screen.getByText("pages/index.tsx");
    // expect(textToTest).toBeInTheDocument();
  });
  it("should have the text 'Vi erbjuder de senaste filmerna och TV-serierna'", () => {
    render(<HomePage />);

    const text = screen.getByText(
      "Vi erbjuder de senaste filmerna och TV-serierna"
    );

    // const text = screen.getByRole("paragraph", {
    //   name: /Vi erbjuder de senaste filmerna och TV-serierna/,
    // });

    expect(text).toBeInTheDocument;
  });
});
