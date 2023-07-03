/* import xctf from "./Graphics/xctf-feature-2.png";
import external_link from "./Graphics/external-link.svg";
import Gradient from "./Gradient";
import quote from "./Graphics/quote.svg";
import star from "./Graphics/star.svg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Wyatt Thomas",
      title: "President of VT Club XCTF",
      quote:
        "Volkan completely changed the dynamic of our online presence and did so seamlessly. Volkan has definitely established an outstanding website for us and continuously makes valuable improvements. Propose a problem and he will take an initiative to develop the best solution for you.",
    },
  ];
  return (
    <div className="testimonials">
      <div className="quote-icon">
        <img src={quote} alt="quote" />
      </div>
      <div className="quote">{testimonials[0].quote}</div>
      <div className="name-row">
        <span className="stars">
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
        </span>
        <span className="name">{testimonials[0].name}</span>
      </div>
    </div>
  );
};

const Section3 = () => {
  return (
    <div className="section recent-project">
      <div className="text-wrapper">
        <h3 className="title">My most recent project:</h3>
        <h4 className="row">
          <a href="https://vtclubxctf.org/" target="_blank" rel="noreferrer">
            <span>VT Club XCTF</span>
            <span>
              <img src={external_link} alt="external link" />
            </span>
          </a>
        </h4>
      </div>
      <div className="graphic bigger">
        <img src={xctf} alt="xctf" />
      </div>
      <Testimonials />
    </div>
  );
};

export default Section3;
 */