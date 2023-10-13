import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="headerWrapper">
        <header>
          <h1>
            Välkommen till <Link href="./">Moviestore</Link>
          </h1>

          <p>Vi erbjuder de senaste filmerna och TV-serierna</p>
        </header>
        <nav>
          <Link href="./movies">Filmer</Link>
          <Link href="./series">TV-Serier</Link>
        </nav>
      </div>
      <hr />
    </>
  );
}
