import "../styles/main.css";
import PalpatinePicture from "../images/Palpatine.JPG";
import React, { useRef, useEffect } from "react";

const Main = ({ Memes }) => {
  const lastBotResponseRef = useRef(null);

  useEffect(() => {
    if (lastBotResponseRef.current) {
      lastBotResponseRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, [Memes]);

  return (
    <div className="Main">
      <div className="MessagesContainer">
        <div className="InitialMessage">
          <p className="initialText">
            Why haven't you created a meme yet? C'mon man.
          </p>
          <img
            className="initialMeme"
            src={PalpatinePicture}
            alt="Palpatine Meme"
          />
        </div>
        {Memes.map((meme, index) => (
          <React.Fragment key={index}>
            <div className="UserResponse">
              {meme.template} <br />
              {meme.topText} <br />
              {meme.bottomText}
            </div>
            <div ref={index === Memes.length - 1 ? lastBotResponseRef : null}>
              <img className="BotResponse" src={meme.url} alt="Meme" />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Main;
