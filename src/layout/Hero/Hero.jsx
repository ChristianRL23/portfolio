import Button from '../../components/Button/Button';
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
      <div className="hero__title">
        <h1 className="hero__title-name">Christian Uriel Ramírez Lara</h1>
        <h2 className="hero__title-role">Desarrollador Front-End</h2>
        <Button textContent="Contactar" />
      </div>
    </header>
  );
};

export default Hero;
