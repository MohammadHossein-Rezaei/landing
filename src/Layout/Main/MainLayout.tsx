import "./mainLayout.css";
import { useMediaQuery } from "react-responsive";
import logomain from "/images/image-hero-desktop.png";
type Props = {};

export default function MainLayout({}: Props) {
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
            <img src="/images/client-databiz.svg" alt="databiz" />
          </li>
          <li>
            <img src="/images/client-audiophile.svg" alt="audiophile" />
          </li>
          <li>
            <img src="/images/client-meet.svg" alt="meet" />
          </li>
          <li>
            <img src="/images/client-maker.svg" alt="maker" />
          </li>
        </ul>
      </div>

      {isDesktop ? (
        <img
          src="/images/image-hero-mobile.png"
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
