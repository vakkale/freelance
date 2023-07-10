import mail from "./Graphics/mail.svg";
import mailicon from "./Graphics/mailicon.svg";

const LargeCard4 = () => {
  return (
    <div className="lg-card card-8">
      <div className="form-container">
        <div className="card-header form-header" id="contact-me">
          <span className="card-icon form-icon">
            <img src={mailicon} alt="" />
          </span>
          <span className="card-title form-title">Reach out to me today!</span>
        </div>
        <form name="contact" method="POST" netlify>
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <input
              type="text"
              name="first-name"
              placeholder="First Name"
              required
            />
          </p>
          <p>
            <input
              type="text"
              name="last-name"
              placeholder="Last Name"
              required
            />
          </p>
          <p>
            <input type="email" name="email" placeholder="Email" required />
          </p>
          <p>
            <textarea
              name="message"
              placeholder="Describe your project..."
              required
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
