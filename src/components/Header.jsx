import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <h3>Home</h3>
      </Link>

      <nav className="header-nav">
        <a
          href="https://github.com/alincrvan/job-portal"
          target="_blank"
          rel="noreferrer"
        >
          Source Code
        </a>

        <a
          href="https://alincrvan.github.io/Landing-page/"
          target="_blank"
          rel="noreferrer"
        >
          Landing Page
        </a>

        <a href="https://tinyurl.com/2u7bchv9" target="_blank" rel="noreferrer">
          Figma Prototype
        </a>

        <a
          href="https://github.com/alincrvan/email-server"
          target="_blank"
          rel="noreferrer"
        >
          Java Project
        </a>
      </nav>
    </header>
  );
}
