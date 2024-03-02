import Nav from "./Nav";
import DesktopImage3 from "../assets/desktop-image-hero-3.jpg";
import IconArrow from "../assets/icon-arrow.svg";
import IconAngleLeft from "../assets/icon-angle-left.svg";
import IconAngleRight from "../assets/icon-angle-right.svg";
import { Link } from "react-router-dom";

const ShowCaseSlide2 = () => {
  return (
    <main className="showCase">
      <div className="imgNavPositioning">
        <div>
          <img
            src={DesktopImage3}
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
            <h2>Manufactured with the best materials</h2>
            <p>
              Our modern furniture store provide a high level of quality. Our
              company has invested in advanced technology to ensure that every
              product is made as perfect and as consistent as possible. With
              three decades of experience in this industry, we understand what
              customers want for their home and office.
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

export default ShowCaseSlide2;
