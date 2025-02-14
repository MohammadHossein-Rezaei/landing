import "./mainLayout.css";
import { useMediaQuery } from "react-responsive";
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
            <img src="/public/images/client-databiz.svg" alt="databiz" />
          </li>
          <li>
            <img src="/public/images/client-audiophile.svg" alt="audiophile" />
          </li>
          <li>
            <img src="/public/images/client-meet.svg" alt="meet" />
          </li>
          <li>
            <img src="/public/images/client-maker.svg" alt="maker" />
          </li>
        </ul>
      </div>

      {isDesktop ? (
        <img
          src="/public/images/image-hero-mobile.png"
          alt="Mobile Image"
          className="desktop-image banner 2"
        />
      ) : (
        <img
          src="/public/images/image-hero-desktop.png"
          alt="Desktop Image"
          className="mobile-image banner "
        />
      )}
    </div>
  );
}
