import AngleDown from "../assets/svg/AngleDown";
import AngleUp from "../assets/svg/AngleUp";

export default function Navlinks(props) {
  //   const [features, setFeatures] = useState(true);

  //   function toggleFeatures() {
  //     setFeatures((prevFeature) => !prevFeature);
  //     console.log("clicked is made");
  //   }

  return (
    <>
      <ul className="navlinks">
        <li className="features-nav-btn" onClick={props.toggleFeatures}>
          <button>
            <span className="feature-nav-text"> Features </span>
            <span className="feature-nav-icon">
              {props.features ? (
                <AngleDown width={20} height={20} />
              ) : (
                <AngleUp width={20} height={20} />
              )}
            </span>
          </button>
        </li>
        <li>
          <a href="">Privacy</a>
        </li>

        <li>
          <a href="">Help Center</a>
        </li>

        <li>
          <a href="">Blog</a>
        </li>

        <li>
          <a href="">For Business</a>
        </li>

        <li>
          <a href="">WhatsApp Web</a>
        </li>

        <li>
          <a href="">Download</a>
        </li>
      </ul>
    </>
  );
}
