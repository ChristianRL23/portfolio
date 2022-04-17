import Button from '../../components/Button/Button';
import './Hero.scss';

const Hero = () => {
  return (
    <header className="hero">
      <div className="hero__title">
        <h1 className="hero__title-name">Christian Uriel Ramírez Lara</h1>
        <h2 className="hero__title-role">Front-End Developer</h2>
        <Button textContent="Download CV" />
      </div>
    </header>
  );
};

export default Hero;
