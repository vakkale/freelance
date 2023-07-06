import featuredimage from "./Graphics/xctf-feature-2.png";
import quoteleft from "./Graphics/quote-left.svg";
import quoteright from "./Graphics/quote-right.svg";
import stars from "./Graphics/stars.svg";

const testimonials = [
  {
    name: "Wyatt Thomas",
    title: "VT Club XCTF President",
    quote:
      "With his redesign of our website, Volkan transformed it from a place a few people went each month to check competition dates to a frequently visited website that is as useful as it is aesthetically pleasing.",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <div className="testimonial-name">{testimonials[0].name}</div>
      <div className="testimonial-title">{testimonials[0].title}</div>
      <div className="testimonial-text">
        <span>
          <img src={quoteleft} alt="" />
        </span>
        {testimonials[0].quote}
        <span>
          <img src={quoteright} alt="" />
        </span>
      </div>
      <div className="testimonial-stars">
        <img src={stars} alt="" />
      </div>
    </div>
  );
};

const FeaturedProject = () => {
  return (
    <>
      <div className="featured-image">
        <img
          src={featuredimage}
          alt="The VT Club XCTF website displayed on a laptop and tablet."
        />
      </div>
      <Testimonials />
    </>
  );
};

export default FeaturedProject;
