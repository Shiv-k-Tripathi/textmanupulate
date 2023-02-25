import React from "react";
 export default function Parent  ()  {
    const [message, setMessage] = React.useState("Hello World");
    const chooseMessage = (message) => {
      setMessage(message);
    };
    return (
      <div>
        <h1>{message}</h1>
        <Child chooseMessage={chooseMessage} />
      </div>
    );
  };
  const Child = ({ chooseMessage }) => {
    let msg =Math.floor(Math.random() * 1000);;
    return (
      <div>
        <button onClick={() => chooseMessage(msg)}>Change    Message</button>
      </div>
    );
  };