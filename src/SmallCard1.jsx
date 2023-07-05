import waterdrop from "./Graphics/waterdrop.svg";
import lifevest from "./Graphics/lifevest.svg";
import formfunction from "./Graphics/formfunction.svg";
import focussupport from "./Graphics/focussupport.svg";

const SmallCard1 = () => {
  const content = [
    {
      icon: waterdrop,
      title: "Perfect balance of form and function",
      text: "With my projects, functionality is as important as visuals. I strive to achieve both ease-of-use and attention to detail so that your visitors get the best of both worlds and walk away satisfied.",
      graphic: formfunction,
      alt: "Illustration of a website with gears and a lightbulb.",
    },
    {
      icon: lifevest,
      title: "Individualized focus and support",
      text: "As a freelance developer, I offer a highly personalized service tailored to your unique needs. With open communication and direct collaboration, I ensure that your website reflects your vision and brand identity. You can expect prompt responses, flexibility, and my undivided attention throughout the development process.",
      graphic: focussupport,
      alt: "Two speech bubbles.",
    },
  ];

  return (
    <div className="sm-card-container">
      {content.map((item, index) => {
        return (
          <div className={`sm-card ${index === 0 ? `card-2` : `card-3`}`}>
            <div className="card-header header-small">
              <span className="card-icon">
                <img src={item.icon} alt="" />
              </span>
              <span className="card-title">{item.title}</span>
            </div>
            <div className="card-text">{item.text}</div>
            <div
              className="card-graphic"
              style={{
                backgroundImage: `url(${item.graphic})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default SmallCard1;
