const Section2 = () => {
  const title = "Everything You Need to Succeed Online";
  const content = [
    {
      image: "",
      title: "Eye-Catching Design",
      text: "With my expertise in eye-catching design, I create websites that grab attention, engage visitors, and make a lasting impact. From striking color schemes to seamless user interfaces, I craft a digital masterpiece that reflects your brand's unique personality and draws users in.",
    },
    {
      image: "",
      title: "Personal Touch",
      text: "Experience the advantage of personalized attention for your project. By working closely with you, understanding your specific needs, and providing dedicated support throughout the process, I ensure that your website stands out from the cookie-cutter solutions offered by big companies.",
    },
    {
      image: "",
      title: "E-Commerce",
      text: "Looking for top-notch e-commerce solutions? Look no further! With more people shopping online than ever, don't miss out on the opportunity to establish a successful online presence and maximize your e-commerce potential.",
    },
  ];

  return (
    <div className="section col bg-left">
      <h3 className="title">{title}</h3>
      <div className="cards-wrapper">
        {content.map((item, index) => {
          return (
            <div className="card" key={index}>
              <div className="card-image">
                <img src={item.image} alt="" />
              </div>
              <h4 className="card-title">{item.title}</h4>
              <p className="card-text">{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section2;
