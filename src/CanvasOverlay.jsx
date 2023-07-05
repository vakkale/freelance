import "./CanvasOverlay.scss";
import portrait from "./Graphics/volkan.png";

const CanvasOverlay = () => {
  return (
    <>
      <div className="canvas-overlay">
        <div className="intro-text">
          <div className="text-section">
            <span>👋</span>
            <span>
              {" "}
              Hi I’m Volkan, a freelance web developer! I specialize in creating
              stunning and user-friendly websites that make a lasting impact.
              Let's work together to bring your digital vision to life!
            </span>
          </div>
          <div className="button-section">
            <button className="button-orange">
              <a href="#my-projects">View my work</a>
            </button>
            <button className="button-clear">
              <a href="#contact-me">Get in touch</a>
            </button>
          </div>
        </div>
        <div className="portrait">
          <img src={portrait} alt="It's me, Volkan!" />
        </div>
      </div>
    </>
  );
};
export default CanvasOverlay;
