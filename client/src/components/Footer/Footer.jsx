import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="container">
      <div className="footerbar footer-customer">
        <h3 className="title-footerbar">customer service</h3>
        <li className="footer-item">
          <Link href="/" className="footer-link">
            contact
          </Link>
        </li>
        <li className="footer-item">
          <a href="/" className="footer-link">
            track order
          </a>
        </li>
        <li className="footer-item">
          <a href="/" className="footer-link">
            delivery & returns
          </a>
        </li>
        <li className="footer-item">
          <a href="/" className="footer-link">
            payments
          </a>
        </li>
        <li className="footer-item">
          <a href="/" className="footer-link">
            make a return
          </a>
        </li>
        <li className="footer-item">
          <a href="/" className="footer-link">
            faq
          </a>
        </li>
      </div>
      <div className="footerbar footer-info">
        <h3 className="title-footerbar">info</h3>
        <li className="footer-item">
          <a href="/" className="footer-link">
            gift vouchers
          </a>
        </li>
        <li className="footer-item">
          <a href="/" className="footer-link">
            size guide
          </a>
        </li>
        <li className="footer-item">
          <a href="/" className="footer-link">
            careers
          </a>
        </li>
        <li className="footer-item">
          <a href="/" className="footer-link">
            about us
          </a>
        </li>
        <li className="footer-item">
          <a href="/" className="footer-link">
            guide
          </a>
        </li>
        <li className="footer-item">
          <a href="/" className="footer-link">
            legal policies
          </a>
        </li>
      </div>
      <div className="footerbar footer-follow">
        <h3 className="title-footerbar">follow us</h3>
        <li className="footer-item">
          <div className="follow-box">
            {/* <i className="bx bxl-facebook-square"></i> */}
            <a href="/" className="footer-link">
              facebook
            </a>
          </div>
          <div className="follow-box">
            {/* <i className="bx bxl-instagram"></i> */}
            <a href="/" className="footer-link">
              instagram
            </a>
          </div>
        </li>
      </div>
      <div className="footerbar footer-customer">
        <h3 className="title-footerbar">contact us</h3>
        <li className="footer-item">
          <a href="/" className="footer-link">
            hello @gmail.com
          </a>
        </li>
        <li className="footer-item">
          <a href="/" className="footer-link">
            +972598756948
          </a>
        </li>
      </div>
    </footer>
  );
}

export default Footer;
