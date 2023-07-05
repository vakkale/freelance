import "./Styles.scss";
import Section1 from "./Section1";
import SmallCard1 from "./SmallCard1";
import Section3 from "./Section3";

const Sections = () => {
  const title1 = "Stunning modern websites made just for you";
  const subtitle1 =
    "Unlock your online potential with a captivating, modern website tailored to your unique vision. Experience the perfect blend of vibrant design and seamless functionality that sets your brand apart.";

  const Title = ({ title, subtitle }) => {
    return (
      <>
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
      </>
    );
  };

  return (
    <div className="section-wrapper">
      <Title title={title1} subtitle={subtitle1} />
      <Section1 />
      <SmallCard1 />
    </div>
  );
};

export default Sections;
