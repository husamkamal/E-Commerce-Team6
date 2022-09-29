import axios from 'axios';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Header.css';

function Header() {
  const { state } = useLocation();
  const navigation = useNavigate();
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
  const logout = async () => {
    const res = await axios.get('/api/v1/logout');
    toast(res.data);
    navigation('/login');
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
            <Link to="/catalog" className={navClass()} style={colorLink}>
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
        {state ? (
          <div className="navbar navbar-user">
            <li style={{ color: 'white' }}>{state}</li>
            <li>
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                }}
                type="button"
                onClick={logout}
              >
                logOut
              </button>
            </li>
            <li>
              <Link to="/cart" className={navClass()} style={colorLink}>
                bag(2)
              </Link>
            </li>
          </div>
        ) : (
          <div className="navbar navbar-user">
            <li>
              <Link to="/register" className={navClass()} style={colorLink}>
                register
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
        )}
      </nav>
    </header>
  );
}

export default Header;
