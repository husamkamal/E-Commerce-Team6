import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div>
      <Header />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
