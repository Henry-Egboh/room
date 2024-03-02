import Nav from "./Nav";
import DesktopImage1 from "../assets/desktop-image-hero-1.jpg";
import IconArrow from "../assets/icon-arrow.svg";
import IconAngleLeft from "../assets/icon-angle-left.svg";
import IconAngleRight from "../assets/icon-angle-right.svg";
import { Link } from "react-router-dom";

const ShowCase = () => {
  return (
    <main className="showCase">
      <div className="imgNavPositioning">
        <div>
          <img
            src={DesktopImage1}
            alt="Desktop image"
            className="showCaseImage"
          />
        </div>
        <div className="navBarPositioning">
          <Nav />
        </div>
      </div>
      {/* right side text */}
      <div className="showCaseTextContainer">
        {/* text content */}
        <section className="showCaseTextWrap">
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
          {/* shop now button */}
          <div className="shopBtn">
            <div>
              <p>
                <Link to="/shop" className="shopLink">
                  SHOP NOW
                </Link>
              </p>
            </div>
            <div>
              <img src={IconArrow} alt="Icon Arrow" />
            </div>
          </div>
        </section>
        {/* carousel btns */}
        <section className="arrowBtns">
          <div>
            <img src={IconAngleLeft} alt="Icon Angle Left" />
          </div>
          <div>
            <img src={IconAngleRight} alt="Icon Angle Right" />
          </div>
        </section>
      </div>
    </main>
  );
};

export default ShowCase;
