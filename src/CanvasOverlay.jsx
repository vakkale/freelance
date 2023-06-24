import React, { useEffect, useState } from "react";
import "./CanvasOverlay.scss";
import portrait from "./Graphics/volkan.png";

const NavBar = () => {
  const [scrollbarAtTop, setScrollbarAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setScrollbarAtTop(true);
      } else {
        setScrollbarAtTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`nav-bar ${scrollbarAtTop ? "transparent" : ""}`}>
      <div className="nav-item">
        <a href="#about-me">About</a>
      </div>
      <div className="nav-item">
        <a href="#my-projects">Projects</a>
      </div>
      <div className="nav-item">
        <a href="#contact-me">Contact</a>
      </div>
    </nav>
  );
};

const CanvasOverlay = () => {
  return (
    <>
      <NavBar />
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
              <a href="#my-projects">View my Work</a>
            </button>
            <button className="button-clear">
              <a href="#contact-me">Get a Free Quote</a>
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
