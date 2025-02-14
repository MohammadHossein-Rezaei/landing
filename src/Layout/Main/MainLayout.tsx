import "./mainLayout.css";
import { useMediaQuery } from "react-responsive";
import logomain from "/images/image-hero-desktop.png";
import logomainDesk from "/images/image-hero-desktop.png";
import maker from "/images/client-maker.svg";
import meet from "/images/client-meet.svg";
import audi from "/images/client-audiophile.svg";
import databiz from "/images/client-databiz.svg";

export default function MainLayout() {
  const isDesktop = useMediaQuery({ minWidth: 675 });
  return (
    <div className="main-layout">
      <div className="main-container">
        <h1 className="main-title">
          Make <br /> remote work
        </h1>
        <p className="main-p">
          Get your team in sync, no matter your location. <br /> streamline
          processes, create team rituals,and <br /> watch productivity soar.
        </p>
        <button className="main-button">
          <b>Learn More</b>
        </button>
        <ul className="list-main">
          <li>
            <img src={databiz} alt="databiz" />
          </li>
          <li>
            <img src={audi} alt="audiophile" />
          </li>
          <li>
            <img src={meet} alt="meet" />
          </li>
          <li>
            <img src={maker} alt="maker" />
          </li>
        </ul>
      </div>

      {isDesktop ? (
        <img
          src={logomainDesk}
          alt="Mobile Image"
          className="desktop-image banner 2"
        />
      ) : (
        <img
          src={logomain}
          alt="Desktop Image"
          className="mobile-image banner "
        />
      )}
    </div>
  );
}
