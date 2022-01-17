import Logo from '../../components/Logo/Logo';
import './Hero.scss';

const Hero = () => {
  return (
    <header className="hero">
      <nav className="navbar">
        <div className="navbar__left">
          <Logo />
        </div>
        <div className="navbar__right">
          <a className="navbar__right-link" href="#">
            Acerca
          </a>
          <a className="navbar__right-link" href="#">
            Proyectos
          </a>
          <a className="navbar__right-link" href="#">
            Contacto
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Hero;
