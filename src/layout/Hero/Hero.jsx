import Button from '../../components/Button/Button';
import Logo from '../../components/Logo/Logo';
import './Hero.scss';

const Hero = () => {
  return (
    <header className="hero">
      {/* <nav className="navbar">
        <div className="navbar__left">
          <Logo />
        </div>
        <div className="navbar__right">
          <a className="navbar__right-link" href="#">
            About
          </a>
          <a className="navbar__right-link" href="#">
            Projects
          </a>
          <a className="navbar__right-link" href="#">
            Contact
          </a>
        </div>
      </nav> */}
      <div className="hero__title">
        <h1 className="hero__title-name">Christian Uriel Ramírez Lara</h1>
        <h2 className="hero__title-role">Front-End Developer</h2>
        <Button textContent="Download CV" />
      </div>
    </header>
  );
};

export default Hero;
