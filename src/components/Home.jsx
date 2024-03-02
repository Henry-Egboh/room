import ImageGallery from "./ImageGallery";
// import ShowCaseSlide1 from "./ShowCaseSlide1";
// import ShowCaseSlide2 from "./ShowCaseSlide2";
import ShowCase from "./ShowCase";

const Home = () => {
  return (
    <header>
      <ShowCase />
      {/* <ShowCaseSlide1 /> */}
      {/* <ShowCaseSlide2 /> */}
      <ImageGallery />
    </header>
  );
};

export default Home;
