import { useState } from "react";

// Components
import DownloadButton from "../components/DownloadButton";
import Navlinks from "../components/Navlinks";
import WhatsAppLogo from "../components/WhatsAppLogo";
import Features from "./Features";
import Hamburger from "../assets/svg/Hamburger";
import Download from "../assets/svg/Download";

export default function Navbar() {
  const [features, setFeatures] = useState(true);

  function toggleFeatures() {
    setFeatures((prevFeature) => !prevFeature);
    console.log("clicked is made");
  }

  return (
    <>
      <main>
        {/* ::DESKTOP:: */}
        <header className="navbar-container desktop">
          <nav className="navbar">
            <div className="logo">
              <WhatsAppLogo />
            </div>

            <div className="navlink-container">
              <Navlinks toggleFeatures={toggleFeatures} features={features} />
            </div>

            <div className="download-button-wrapper">
              <DownloadButton />
            </div>
          </nav>
        </header>
        <nav className={features ? "navbar-feature hidden" : "navbar-feature"}>
          <Features />
        </nav>

        {/* ::MOBILE:: */}
        <header className="navbar-container-mobile mobile">
          <nav className="mobile-navbar">
            <div className="hamburger-menu-icon">
              <Hamburger />
            </div>

            <div className="mobile-logo">
              <WhatsAppLogo />
            </div>

            <div className="mobile-download-wrapper">
              <span className="mobile-download">
                <Download />
              </span>
            </div>
          </nav>
        </header>
      </main>
    </>
  );
}
