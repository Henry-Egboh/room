import AboutDark from "../assets/image-about-dark.jpg";
import AboutLight from "../assets/image-about-light.jpg";

const ImageGallery = () => {
  return (
    <section className="imageGallery">
      <div>
        <img src={AboutDark} alt="About Dark" className="aboutImg" />
      </div>
      <div className="aboutText">
        <h2>ABOUT OUR FURNITURE</h2>
        <p>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <div>
        <img src={AboutLight} alt="About Light" className="aboutImg" />
      </div>
    </section>
  );
};

export default ImageGallery;
