import code from "./Graphics/code.svg";

const CodeTyping = () => {
  return <div className="code-typing-container"></div>;
};

const LargeCard3 = () => {
  const icon = code;
  const title = "Powered by the latest technology";
  const text =
    "Websites have evolved into powerful tools that make a real impact. With my expertise in modern design and development technologies, I ensure you stay ahead of the curve by creating captivating products that immerse users in an unforgettable experience.";

  return (
    <div className="lg-card card-5">
      <div className="text-area">
        <div className="card-header header-large">
          <span className="card-icon">
            <img src={icon} alt="" />
          </span>
          <span className="card-title">{title}</span>
        </div>
        <div className="card-text">{text}</div>
      </div>
      <CodeTyping />
    </div>
  );
};

export default LargeCard3;
