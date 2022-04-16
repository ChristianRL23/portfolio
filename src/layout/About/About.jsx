import './About.scss';
import TechnologyIcon from '../../components/TechnologyIcon/TechnologyIcon';

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="about__title">About me</h2>
      <div className="about__information">
        <h4 className="information__subtitle">Who i am?</h4>
        <p className="information__text">
          I'm a 21 year old guy originally from Mexico City but currently living
          in Querétaro who likes web design and being meticulous with details in
          order to create beautiful and attractive web interfaces.
        </p>
        <p className="information__text">
          I started to study full time and self-taught technologies related to
          web development at the end of 2020. Since then i have not stopped
          preparing to become a Front-End developer, and in fact, i have no
          plans to stop studying as i want to be a{' '}
          <span>
            professional developer who always deliver an excellent work.
          </span>
        </p>
        <p className="information__text">
          Currently i'm looking for my first job opportunity, so i invite you to
          take a look at some projects that i have developed in order to
          demonstrate what i can do. If you like the way i work, i'm available
          at all times to talk with you.
        </p>
        <div className="technologies">
          <h4 className="technologies__subtitle">Technologies that i use</h4>
          <div className="technologies__icons">
            <TechnologyIcon
              technologyIcon="/icons/html-icon.svg"
              technologyName="HTML"
            />
            <TechnologyIcon
              technologyIcon="/icons/css-icon.svg"
              technologyName="CSS"
            />
            <TechnologyIcon
              technologyIcon="/icons/js-icon.svg"
              technologyName="Javascript"
            />
            <TechnologyIcon
              technologyIcon="/icons/react-icon.svg"
              technologyName="React"
            />
            <TechnologyIcon
              technologyIcon="/icons/typescript.svg"
              technologyName="TypeScript"
            />
            <TechnologyIcon
              technologyIcon="/icons/sass-icon.svg"
              technologyName="Sass"
            />
            <TechnologyIcon
              technologyIcon="/icons/redux-icon.svg"
              technologyName="Redux"
            />
            <TechnologyIcon
              technologyIcon="/icons/react-router-icon.svg"
              technologyName="React Router"
            />
            <TechnologyIcon
              technologyIcon="/icons/git-icon.svg"
              technologyName="Git"
            />
            <TechnologyIcon
              technologyIcon="/icons/github-icon-1.svg"
              technologyName="Github"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
