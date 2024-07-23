import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  // convertded to uppercase
  const handleupclick = () => {
    // console.log("uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to UpperCase! ", " Success ");
  };
  // converted to Lowecase
  const handleloclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to LowerCase! ", " Success ");
  };
  // clears the textbox
  const handleclearclick = () => {
    let newText = " ";
    setText(newText);
    props.showAlert(" Text box is Cleared ", "success");
  };
  // copies the text
  const handleCopyText = () => {
    // let text = document.getElementById("mybox");
    // text.select();
    navigator.clipboard.writeText(text);
    props.showAlert(" Text is copied ", " success ");
  };
  // remve extra spaces
  const handleSpaceClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" Extra Spaces has been Removed ", " success ");
  };
  const handleonchange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div
        className="container "
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1 className="mb-3">{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "#625c5c" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="mybox"
            rows="8"
            onChange={handleonchange}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleupclick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleloclick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleclearclick}
        >
          Clear
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopyText}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleSpaceClick}
        >
          Remove Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>

        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}
          -minutes to read the text
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to Preview !"}</p>
      </div>
    </>
  );
}
