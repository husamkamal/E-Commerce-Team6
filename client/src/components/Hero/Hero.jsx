import Header from '../Header/Header';
import './Hero.css';
import '../Header/Header.css';

function Hero() {
  return (
    <section className="hero">
      <Header />
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span>new</span>
            <br />
            collection
          </h1>
          <p>
            our easiest chuck-on-and-go stapies come with a <br />
            serious style heritage that liberating comfy
            <br />
            and supremely cool.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
