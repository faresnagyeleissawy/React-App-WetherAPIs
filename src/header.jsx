import "./style.css";
function HeaderHandel() {
  return (
    <header class="header">
      <nav class="nav">
        <ul class="nav__links">
          <li class="nav__item">
            <a class="nav__link" href="#section--1">
              Features
            </a>
          </li>
          <li class="nav__item">
            <a class="nav__link" href="#section--2">
              Operations
            </a>
          </li>
          <li class="nav__item">
            <a class="nav__link" href="#section--3">
              Testimonials
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default HeaderHandel;
