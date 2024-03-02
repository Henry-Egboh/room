import Nav from "./Nav";
import DesktopImage2 from "../assets/desktop-image-hero-2.jpg";
import IconArrow from "../assets/icon-arrow.svg";
import IconAngleLeft from "../assets/icon-angle-left.svg";
import IconAngleRight from "../assets/icon-angle-right.svg";
import { Link } from "react-router-dom";

const ShowCaseSlide1 = () => {
  return (
    <main className="showCase">
      <div className="imgNavPositioning">
        <div>
          <img
            src={DesktopImage2}
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
            <h2>We are available all across the globe</h2>
            <p>
              With stores all over the world, it{`&lsquo;`}s easy for you to
              find furniture for your home or place of business. Locally, we
              {`u+2019`}re in most major cities throughout the country. Find the
              branch nearest you using our store locator. Any questions? Don
              {`&apos;`}t hesitate to contact us today.
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

export default ShowCaseSlide1;
