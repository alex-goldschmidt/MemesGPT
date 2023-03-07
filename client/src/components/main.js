import "../styles/main.css";
import PalpatinePicture from "../images/Palpatine.JPG";

const Main = () => {
  return (
    <div className="Main">
      <div className="MessagesContainer">
        <div className="BotResponses">
          <p className="initialText">
            Why haven't you created a meme yet? C'mon man.
          </p>

          <img
            className="initialMeme"
            src={PalpatinePicture}
            alt="Palpatine Meme"
          />
        </div>
        <div className="UserResponses"></div>
      </div>
    </div>
  );
};

export default Main;
