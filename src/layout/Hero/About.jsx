import './About.scss';

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
      </div>
      <div className="about__technologies">
        <h4 className="technologies__subtitle">Tecnologías que uso</h4>
        <div className="technologies__icons"></div>
      </div>
    </section>
  );
};

export default About;
