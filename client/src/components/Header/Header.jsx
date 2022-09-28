import { useLocation, Link } from 'react-router-dom';
import './Header.css';

function Header() {
  console.log(useLocation());
  const colorLink = {
    color: useLocation().pathname === '/' ? '#fff' : '#000',
  };

  const navClass = () => {
    if (useLocation().pathname === '/') return 'white';
    return 'black';
  };

  const positionHeader = {
    position: useLocation().pathname === '/' ? 'absolute' : null,
  };
  return (
    <header style={positionHeader}>
      <nav className="container">
        <div className="navbar navbar-shoping">
          <li>
            <Link to="/" className={navClass()} style={colorLink}>
              new arrivals
            </Link>
          </li>
          <li>
            <Link to="/" className={navClass()} style={colorLink}>
              shop
            </Link>
          </li>
          <li>
            <Link to="/" className={navClass()} style={colorLink}>
              collections
            </Link>
          </li>
        </div>

        <Link to="/" className="logo" style={colorLink}>
          <span>S</span>hoOp
        </Link>

        <div className="navbar navbar-user">
          <li>
            <Link to="/" className={navClass()} style={colorLink}>
              search
            </Link>
          </li>
          <li>
            <Link to="/login" className={navClass()} style={colorLink}>
              sign in
            </Link>
          </li>
          <li>
            <Link to="/cart" className={navClass()} style={colorLink}>
              bag(2)
            </Link>
          </li>
        </div>
      </nav>
    </header>
  );
}

export default Header;
