import React from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  let myStyle = {
    color: props.mode === "dark" ? "white" : "#474141",
    backgroundColor: props.mode === "dark" ? "#474141" : "white",
  };
  return (
    <>
      <div
        classNameName="container my-3 mx-3"
        style={{ color: props.mode === "dark" ? "white" : "#474141" }}
      >
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample " style={myStyle}>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
              >
                <strong> Analyse your Text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>TextUtils is the text utilty Software.</strong> It is
                created by using React-Js , it can be used to manipulate the
                text format It counts the characters,remove the extra spaces and
                can convert the text into upper-case or lower-case characters .
                <code> TextUtils also supports Dark and Light Modes!</code>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={myStyle}
              >
                <strong> Free to use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>TextUtils is Free to use</strong> It can be used by
                anyone ,it is a free words and charcter counter
                <code> software</code>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={myStyle}
              >
                <strong> Browser Compatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>
                  This word counter software works on every browser.
                </strong>
                TextUtils is supported by Browsers like
                <code> Chrome,Firefox, Microsoft-Edge, Safari,Opera etc</code>
                It suits to count characters on Facebook,Blog ,Books, Excel
                Documents ,PDF etc
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
