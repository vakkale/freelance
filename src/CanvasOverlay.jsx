import "./CanvasOverlay.scss";
import portrait from "./Graphics/volkan.png";

const CanvasOverlay = () => {

  return (
    <>
      <div className="canvas-overlay" id="canvas-overlay">
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
          {/* If this looks stupid its because it is. I put the a tags inside the buttons at first and did all the styling without them spanning the entire button and I can't be bothered re-styling the whole things." */}
          <div className="button-section">
            <a href="#my-projects">
              <button className="button-orange">
                <a href="#my-projects">View my work</a>
              </button>
            </a>
            <a href="#contact-me">
              <button className="button-clear">
                <a href="#contact-me">Get in touch</a>
              </button>
            </a>
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
