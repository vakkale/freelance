import mail from "./Graphics/mail.svg";
import mailicon from "./Graphics/mailicon.svg";

const LargeCard4 = () => {
  return (
    <div className="lg-card card-8">
      <div className="form-container">
        <div className="card-header form-header">
          <span className="card-icon form-icon">
            <img src={mailicon} alt="" />
          </span>
          <span className="card-title form-title">Reach out to me today!</span>
        </div>
        <form name="contact" method="POST" data-netlify="true">
          <p>
            <input
              type="text"
              name="form-first-name"
              placeholder="First Name"
            />
          </p>
          <p>
            <input type="text" name="form-last-name" placeholder="Last Name" />
          </p>
          <p>
            <input type="email" name="form-email" placeholder="Email" />
          </p>
          <p>
            <textarea
              name="form-message"
              placeholder="Describe your project..."
            />
          </p>
          <p>
            <button type="submit" className="form-button">
              SUBMIT
            </button>
          </p>
        </form>
      </div>
      <div className="illustration">
        <img src={mail} alt="" />
      </div>
    </div>
  );
};

export default LargeCard4;
