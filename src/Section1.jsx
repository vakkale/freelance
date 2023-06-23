import "./Styles.scss";
import home_art_laptop from "./Graphics/home_art_laptop.svg";

const Section1 = () => {
  const title1 = "Harness the Power of the Web.";
  const text1 =
    "In today's fast-paced digital landscape, having a compelling online presence is crucial for businesses to thrive. By carefully crafting websites that align with your brand identity and goals, I aim to create a digital experience that not only captivates your audience but also drives tangible results for your business.";
    const text2 =
    "Whether you're looking to build a new website from scratch or revamp an existing one, I'm here to help! E-commerce sites, professional portfolios, landing pages, and more - I've got you covered."

  return (
    <div className="section-wrapper">
      <div className="graphic">
        <img src={home_art_laptop} alt="laptop" />
      </div>
      <div className="text-wrapper">
        <h3 className="title">{title1}</h3>
        <p className="text">{text1}</p>
        <p className="text">{text2}</p>
      </div>
    </div>
  );
};

export default Section1;
