import "./Styles.scss";
import LargeCard1 from "./LargeCard1";
import SmallCard1 from "./SmallCard1";
import LargeCard2 from "./LargeCard2";
import LargeCard3 from "./LargeCard3";

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
      <LargeCard1 />
      <SmallCard1 />
      <LargeCard2 />
      <LargeCard3 />
    </div>
  );
};

export default Sections;
