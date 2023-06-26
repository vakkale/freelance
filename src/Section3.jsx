import xctf from "./Graphics/xctf-feature-2.png";
import external_link from "./Graphics/external-link.svg";
import Gradient from "./Gradient";
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
      <Gradient />
    </div>
  );
};

export default Section3;
