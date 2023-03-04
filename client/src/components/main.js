import "../styles/main.css";
import { useState, useEffect } from "react";
import PalpatinePicture from "../images/Palpatine.JPG";

const Main = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const messageTimer = setTimeout(() => {
      setShowMessage(true);
    }, 3000);
    return () => clearTimeout(messageTimer);
  }, []);

  useEffect(() => {
    const imageTimer = setTimeout(() => {
      setShowImage(true);
    }, 6000);
    return () => clearTimeout(imageTimer);
  }, [showMessage]);

  return (
    <div className="Main">
      <div className="InitialMessagesContainer">
        {showMessage ? (
          <p className="initialText">
            Why haven't you created a meme yet? C'mon man
          </p>
        ) : (
          <p></p>
        )}
        {showImage && (
          <img className="initialMeme" src={PalpatinePicture} alt="Palpatine" />
        )}
      </div>
    </div>
  );
};

export default Main;
