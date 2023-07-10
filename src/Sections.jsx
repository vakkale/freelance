import "./Styles.scss";
import LargeCard1 from "./LargeCard1";
import SmallCard1 from "./SmallCard1";
import LargeCard2 from "./LargeCard2";
import LargeCard3 from "./LargeCard3";
import FeaturedProject from "./FeaturedProjects";
import SmallCard2 from "./SmallCard2";
import LargeCard4 from "./LargeCard4";
import externallink from "./Graphics/externallink.svg";

const Sections = () => {
  const title1 = "Stunning modern websites made just for you";
  const subtitle1 =
    "Unlock your online potential with a captivating, modern website tailored to your unique vision. Experience the perfect blend of vibrant design and seamless functionality that sets your brand apart.";

  const title2 = "Check out my most recent project";

  const title3 = "Ready to take the next step?";
  const subtitle3 =
    "Complete the form below and let's start turning your ideas into reality. I'm excited to hear from you and discuss how I can help you achieve your goals.";

  const Title2 = () => {
    return (
      <>
        <div className="title" id="my-projects">
          {title2}
        </div>
        <div className="subtitle">
          Created for{" "}
          <a href="https://www.vtclubxctf.org" target="_blank" rel="noreferrer">
            <span>Virginia Tech’s Club Cross Country/Track & Field</span>
            <span>
              <img src={externallink} alt="" />
            </span>
          </a>
          team, the website serves as an online hub for their hundreds of
          members. From weekly newsletters to different levels of training
          plans, everything a student-athlete needs is here.
        </div>
      </>
    );
  };

  const Title = ({ title, subtitle, title_id }) => {
    return (
      <>
        <div className="title" id={`${title_id ? title_id : ""}`}>
          {title}
        </div>
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
      <Title2 />
      <FeaturedProject />
      <SmallCard2 />
      <Title title={title3} subtitle={subtitle3}/>
      <LargeCard4 />
    </div>
  );
};

export default Sections;
