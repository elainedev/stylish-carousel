import TextComponent from "./components/TextComponent";
import Carousel from "./components/Carousel";
import "./styles.scss";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="section text-section">
        <TextComponent />
      </div>
      <div className="section carousel">
        <Carousel />
      </div>
    </div>
  );
};

export default LandingPage;
