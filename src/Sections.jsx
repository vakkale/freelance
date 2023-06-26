import "./Styles.scss";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

const Sections = () => {
  return (
    <div className="section-wrapper">
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
};

export default Sections;
