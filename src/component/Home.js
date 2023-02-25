import React, { useState } from "react";

const Home = () => {
  let [text, setText] = useState("");
  let handlechange = (e) => {
    setText(e.target.value);
    console.log(text);
  };
  let handlesubmit = () => {
    console.log(text);
  };
  let handleUpper = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    alert(`Convert in Uppercase : ${newtext}`);
  };
  let handleLower = () => {
    let newtext = text.toLocaleLowerCase();
    setText(newtext);
    if (newtext.length > 0) {
      alert(`Convert in Uppercase : ${newtext}`);
    }
  };
  let handleclear = () => {
    let newtext = "";
    setText(newtext);
    alert(`Clear Field`);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert(`Copied to Clipboard!`);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    alert("Extra spaces removed!");
  };


  const ReverseWord=()=>{
    const rWord=text.split(' ').reverse().join(' ');
    setText(rWord)
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="text-center">
            <h1>Text Manupulate</h1>
          </div>
          <textarea
            rows="8"
            value={text}
            onChange={handlechange}
            placeholder="Input Text Here..."
          ></textarea>

          <div className="container my-3">
            <button
              onClick={handlesubmit}
              className="btn btn-primary mx-2 my-2"
            >
              Get Value
            </button>
            <button onClick={handleUpper} className="btn btn-primary mx-2 my-2">
              Uppercase
            </button>
            <button
              type="submit"
              onClick={handleLower}
              className="btn btn-primary mx-2 my-2"
            >
              Lowercase
            </button>
            <button
              type="submit"
              onClick={handleCopy}
              className="btn btn-primary mx-2 my-2"
            >
              Copy
            </button>
            <button
              type="submit"
              onClick={handleclear}
              className="btn btn-primary mx-2"
            >
              Clear
            </button>
            <button
              type="submit"
              onClick={handleExtraSpaces}
              className="btn btn-primary mx-2"
            >
              Remove Space
            </button>
            <button
              type="submit"
              onClick={ReverseWord}
              className="btn btn-primary mx-2"
            >
              Reverse Word
            </button>
          </div>
          <div className="my-5">
            <h2>Your text summary</h2>
            <p>
              {
                text.split(" ").filter((element) => {
                  return element.length !== 0;
                }).length
              }{" "}
              words and {text.length} characters
            </p>

            <p>
              {0.008 *
                text.split(" ").filter((element) => {
                  return element.length !== 0;
                }).length}{" "}
              Minutes read
            </p>

            <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
