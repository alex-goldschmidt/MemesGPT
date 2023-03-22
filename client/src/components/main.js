import "../styles/main.css";
import PalpatinePicture from "../images/Palpatine.JPG";

const Main = ({ Memes }) => {
  return (
    <div className="Main">
      <div className="MessagesContainer">
        <div className="BotResponses">
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
          {/*Memes.map((meme, index) => (
            <img className="BotResponse" key={index} alt={meme.template}>
              {meme.template} <br />
              {meme.topText} <br />
              {meme.bottomText}
            </img>
          ))*/}
        </div>
        <div className="UserResponses">
          {Memes.map((meme, index) => (
            <p className="UserResponse" key={index}>
              {meme.template} <br />
              {meme.topText} <br />
              {meme.bottomText}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
