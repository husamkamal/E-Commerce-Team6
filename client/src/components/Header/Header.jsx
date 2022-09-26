import './Header.css';

function Header() {
  return (
    <header>
      <nav className="container">
        <div className="navbar navbar-shoping">
          <li>
            <a href="/" className="nav-link">
              new arrivals
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              shop
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              collections
            </a>
          </li>
        </div>

        <a href="/" className="logo">
          <span>S</span>hoOp
        </a>

        <div className="navbar navbar-user">
          <li>
            <a href="/" className="nav-link">
              search
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              sign in
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              bag(2)
            </a>
          </li>
        </div>
      </nav>
    </header>
  );
}

export default Header;
