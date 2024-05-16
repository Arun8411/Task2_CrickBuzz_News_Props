import React from "react";

function Prop({ imgLink, title, message, linkMessage, linkMessageText }) {
  return (
    <>
      <div
        style={{
          border: "2px solid #000",
          marginBottom: "20px",
          width: "800px",
          padding: "10px",
        }}
      >
        <img src={imgLink} alt="newsImage" />
        <h1>{title}</h1>
        <p>{message}</p>
        <a href={linkMessage}> {linkMessageText}</a>
      </div>
    </>
  );
}

export default Prop;
