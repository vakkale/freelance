import { useEffect } from "react";
import code from "./Graphics/code.svg";
import { useRef } from "react";

const text = `{
    "search_terms": {
        "product_id": "prid_7HeuV9sJ24",
        "name": "Valued Customer",
        "date_of_birth": "1990-01-01",
        "document": "F299932",
        "location": "US"
      },
      "user": "usr_9063hsd2GhK284",
     "customer_reference": "your-db-id-3b24110"
}`;

const CodeTyping = () => {
  return (
    <div className="code-typing-container">
      <pre>
        <code>{text}</code>
      </pre>
    </div>
  );
};

const LargeCard3 = () => {
  const icon = code;
  const title = "Powered by the latest technology";
  const text =
    "Websites have evolved into powerful tools that make a real impact. With my expertise in modern design and development technologies, I ensure you stay ahead of the curve by creating captivating products that immerse users in an unforgettable experience.";

  const codeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const code = document.querySelector("code");
          code.style.display = "block";
          const text = code.textContent;
          const textArray = text.split("");
          code.textContent = "";
          let line = 0;
          textArray.forEach((letter, i) => {
            let span = document.createElement("span"); // Create a <span> element
            span.textContent = letter; // Set the text content of the <span> to the current letter

            //for each new line, add a line number
            if (i === 0) {
              line++;
              let letter2 = `${line}      `;
              let span2 = document.createElement("span");
              span2.textContent = letter2;
              span2.textContent = letter2;
              span2.style.color = "rgb(117, 122, 149)";
              code.appendChild(span2);
            }
            if (letter === "\n") {
              line++;
              letter += `${line}      `;
              span.textContent = letter;
              span.style.color = "rgb(117, 122, 149)";
            }

            if (
              letter === "{" ||
              letter === "}" ||
              letter === ":" ||
              letter === ","
            ) {
              span.style.color = "white"; // Change the color of specific letters
            }

            setTimeout(() => {
              code.appendChild(span); // Append the <span> element to the code element
            }, 20 * i);
          });

          observer.unobserve(codeRef.current);
        } else {
          const code = document.querySelector("code");
          code.style.display = "none";
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(codeRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="lg-card card-5" ref={codeRef}>
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
