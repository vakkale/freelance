import rocket from "./Graphics/rocket.svg";
import checkmark from "./Graphics/checkmark.svg";

const SmallCard2 = () => {
  const content = [
    {
      features: [
        "Responsive layout across devices",
        "Vibrant, dynamic animations",
        "Custom components to serve your unique needs",
        "SEO optimization to ensure you’re seen on Google",
      ],
      title: "Tailored specifically for your project",
      subtitle: "Countless features",
      text: "From custom functionalities to seamless integrations, I ensure that every aspect of your website is tailored to perfection. Whether you’re a business looking to expand or an artist ready to renovate your online portfolio, I can make it happen.",
    },
    {
      graphic: rocket,
      alt: "Illustration of a rocket.",
      title: "Ditch the cookie-cutter websites",
      subtitle: "Break free",
      text: "With my web development services, there are no limits to what we can create together. Say goodbye to drag-and-drop site builders – I offer a personalized experience tailored to your unique vision. Let's build something extraordinary that can't be replicated elsewhere.",
    },
  ];

  return (
    <div className="sm-card-container">
      {content.map((item, index) => {
        return (
          <div
            className={`sm-card white-card ${
              index === 0 ? "card-6" : "card-7"
            }`}
          >
            <div
              className={`white-card-illustration
            ${index === 0 ? "checks" : "rocket"}`}
            >
              {item.features ? (
                item.features.map((feature) => {
                  return (
                    <div className="feature">
                      <span>
                        {" "}
                        <img src={checkmark} alt="" />
                      </span>
                      <span>{feature}</span>
                    </div>
                  );
                })
              ) : (
                <img src={item.graphic} alt={item.alt} />
              )}
            </div>
            <div className="card-header">
              <span className="card-subtitle">{item.subtitle}</span>
              <span className="card-title">{item.title}</span>
            </div>
            <div className="card-text">{item.text}</div>
          </div>
        );
      })}
    </div>
  );
};

export default SmallCard2;
