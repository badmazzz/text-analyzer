import React, { useState } from "react";

export default function Textarea(props) {
  const [text, setText] = useState("Enter your Text here");
  let change = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };
  let start = (event) => {
    if (event.target.value.match("Enter your Text here")) setText("");
  };
  let words = text.split(" ").filter(function (n) {return n !== "";}).length;
  return (
    <>
      <div>
        <h1
          className={`bg-${props.mode} text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          {" "}
          {props.title}{" "}
        </h1>
        <div className="mb-3">
          <textarea
            htmlFor="mybox"
            className={`form-control bg-${props.mode}`}
            value={text}
            onChange={change}
            id="mybox"
            rows="8"
            onClick={start}
            style={{ color: props.mode === "light" ? "black" : "white" }}
          ></textarea>
        </div>

        <button
          disabled={text.length === 0}
          className="btn btn-secondary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-secondary mx-1 my-1"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-secondary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-secondary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-secondary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <p>
          {words} words and {text.length} Characters are there <br />
          {words * 0.08} minuts requried to read this paragraph. <br />
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
