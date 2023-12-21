import React, { useContext } from "react";
import { AppContext } from "../App";

function Picture({ key }) {
  const { correctWord } =
    useContext(AppContext);

  const selectPicture = () => {
    if (correctWord === "1984") {
      return "images/image1.png"
    }
    if (correctWord === "2007") {
      return "images/image2.png"
    }
    if (correctWord === "2014") {
      return "images/image3.png"
    }
    if (correctWord === "2009") {
      return "images/image4.png"
    }
  };
  return (
    <img src={selectPicture()} className="picture" alt="picture" />
    // <img src={selectPicture()} className="App-logo" alt="logo" />
  );
}

export default Picture;
