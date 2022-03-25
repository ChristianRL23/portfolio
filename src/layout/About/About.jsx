import './About.scss';
import htmlIcon from './iconos/html-icon.svg';
import cssIcon from './iconos/css-icon.svg';
import jsIcon from './iconos/js-icon.svg';
import reactIcon from './iconos/react-icon.svg';
import sassIcon from './iconos/sass-icon.svg';
import gitIcon from './iconos/git-icon.svg';
import TechnologyIcon from '../../components/TechnologyIcon/TechnologyIcon';
import tsIcon from './iconos/typescript.svg';
import githubIcon from './iconos/github-icon-1.svg';
import reduxIcon from './iconos/redux-icon.svg';
import reactRouterIcon from './iconos/react-router-icon.svg';

const About = () => {
  return (
    <section className="about">
      <h2 className="about__title">Acerca de mi</h2>
      <div className="about__information">
        <h4 className="information__subtitle">¿Quién soy yo?</h4>
        <p className="information__text">
          Soy una persona responsable y profesional que le gusta el diseño web y
          ser minucioso con los detalles a fin de crear interfaces bonitas y
          atractivas.
        </p>
        <p className="information__text">
          Comencé a estudiar tecnologías relacionados con el desarrollo web a
          finales de 2020. Desde entonces no he dejado de prepararme para ser
          desarrollador Front-End.
        </p>
        <p className="information__text">
          Actualmente me encuentro buscando mi priemera oportunidad laboral por
          lo que si es de su agrado la manera en la que trabajo estoy disponible
          en todo momento para platicar con usted.
        </p>
        <div className="technologies">
          <h4 className="technologies__subtitle">Tecnologías que uso</h4>
          <div className="technologies__icons">
            <TechnologyIcon technologyIcon={htmlIcon} technologyName="HTML" />
            <TechnologyIcon technologyIcon={cssIcon} technologyName="CSS" />
            <TechnologyIcon
              technologyIcon={jsIcon}
              technologyName="Javascript"
            />
            <TechnologyIcon technologyIcon={reactIcon} technologyName="React" />
            <TechnologyIcon
              technologyIcon={tsIcon}
              technologyName="TypeScript"
            />
            <TechnologyIcon technologyIcon={sassIcon} technologyName="Sass" />
            <TechnologyIcon technologyIcon={reduxIcon} technologyName="Redux" />
            <TechnologyIcon
              technologyIcon={reactRouterIcon}
              technologyName="React Router"
            />
            <TechnologyIcon technologyIcon={gitIcon} technologyName="Git" />
            <TechnologyIcon
              technologyIcon={githubIcon}
              technologyName="Github"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
