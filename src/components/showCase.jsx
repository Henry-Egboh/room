import Nav from "./Nav";
import DesktopImage1 from "../assets/desktop-image-hero-1.jpg";
import IconArrow from "../assets/icon-arrow.svg";

const ShowCase = () => {
  return (
      <main className="showCase">
        {/* nav section */}
        <div className="imgNavPositioning">
          <div>
          <img src={DesktopImage1} alt="Desktop image" className="showCaseImage" />
          </div>
          <div className="navBarPositioning"><Nav /></div>
        </div>
        {/* right side text */}
        <div className="showCaseTextContainer">
          <div className="showCaseText">
            <h2>Discover innovative ways to decorate</h2>
            <p>
              We provide unmatched quality, comfort, and style for property
              owners across the country. Our experts combine form and function
              in bringing your vision to life. Create a room in your own style
              with our collection and make your property a reflection of you and
              what you love.
            </p>
          </div>
          <div className="shopBtn">
            <div><p>SHOP NOW</p></div>
            <div><img src={IconArrow} alt="Icon Arrow" /></div>
          </div>
        </div>
      </main>
  );
};

export default ShowCase;
