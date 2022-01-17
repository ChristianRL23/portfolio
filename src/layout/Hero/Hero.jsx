import Logo from '../../components/Logo/Logo';
import './Hero.scss';

const Hero = () => {
  return (
    <header className="hero">
      <Logo />
      <nav className="navbar">
        <a href="#">Acerca</a>
        <a href="#">Proyectos</a>
        <a href="#">Contacto</a>
      </nav>
    </header>
  );
};

export default Hero;
