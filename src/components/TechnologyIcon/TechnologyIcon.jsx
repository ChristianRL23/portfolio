import './TechnologyIcon.scss';

const TechnologyIcon = ({ technologyIcon, technologyName }) => {
  return (
    <div className="technology">
      <img className="technology__image" src={technologyIcon} alt="HTML logo" />
      <h6 className="technology__name">{technologyName}</h6>
    </div>
  );
};
export default TechnologyIcon;
