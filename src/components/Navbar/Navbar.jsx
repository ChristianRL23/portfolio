import { useState, useEffect } from 'react';
import Logo from '../Logo/Logo';
import './Navbar.scss';

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarTransparent, setNavbarTransparent] = useState(true);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    console.log(scrollPosition);
    if (scrollPosition >= 75 && navbarTransparent === true) {
      setNavbarTransparent(false);
    } else if (scrollPosition < 75 && navbarTransparent === false) {
      setNavbarTransparent(true);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  return (
    <nav className={`navbar${navbarTransparent ? '--transparent' : ''}`}>
      <div className="navbar__left">
        <Logo />
      </div>
      <div className="navbar__right">
        <a className="navbar__right-link" href="#about">
          About
        </a>
        <a className="navbar__right-link" href="#projects">
          Projects
        </a>
        <a className="navbar__right-link" href="#contact">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
