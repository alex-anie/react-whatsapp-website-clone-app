// import AngleRight from "../assets/svg/AngleRight";
import PropTypes from "prop-types";

export default function LearnMoreBtn({ buttonText, Icon, className }) {
  return (
    <>
      <button className={`calls-section-btn ${className}`}>
        <span>{buttonText}</span>
        <span>
          <Icon width={20} height={20} />
        </span>
      </button>
    </>
  );
}

LearnMoreBtn.propTypes = {
  buttonText: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
  className: PropTypes.string,
};
