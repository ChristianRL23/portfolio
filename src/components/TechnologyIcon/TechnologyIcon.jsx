import './TechnologyIcon.scss';

const TechnologyIcon = ({ technologyIcon, technologyName }) => {
  return (
    <div className="technology__icon">
      <img className="icon-image" src={technologyIcon} alt="HTML logo" />
      <h6 className="icon-name">{technologyName}</h6>
    </div>
  );
};
export default TechnologyIcon;
