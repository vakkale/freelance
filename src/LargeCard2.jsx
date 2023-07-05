import conversion from "./Graphics/conversion.svg";
import heart from "./Graphics/heart.svg";
import like from "./Graphics/like.svg";
import cash from "./Graphics/cash.svg";

function Droplets() {
  return (
    <div className="droplets-container">
      <div className="drop-zone">
        {[...Array(10)].map((item, index) => {
          return (
            <div className={`drop drop-${index + 1}`}>
              <img
                src={index % 2 === 1 ? heart : index % 3 === 0 ? like : cash}
                alt=""
              />
            </div>
          );
        })}
      </div>
      <div className="mask-line"></div>
    </div>
  );
}

const LargeCard2 = () => {
  const icon = conversion;
  const title = "Convert visits into meaningful results";
  const text =
    "Whether you need e-commerce solutions or a platform to amplify views on your blog, I will optimize your website to maximize conversions and transform mere visits into tangible, meaningful results for your business.";

  return (
    <div className="lg-card card-4">
      <div className="text-area">
        <div className="card-header header-large">
          <span className="card-icon">
            <img src={icon} alt="" />
          </span>
          <span className="card-title">{title}</span>
        </div>
        <div className="card-text">{text}</div>
      </div>
      <Droplets />
    </div>
  );
};

export default LargeCard2;
