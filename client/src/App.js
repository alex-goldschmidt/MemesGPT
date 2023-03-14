import "./App.css";
import Main from "./components/main";
import ChatBox from "./components/chatbox";
import { useState, useEffect } from "react";

const App = () => {
  const [MemeOptions, SetMemeOptions] = useState([]);

  useEffect(() => {
    async function FetchMemesData() {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const MemesData = await response.json();
      const FormattedOptions = FormatMemeOptions(MemesData.data.memes);
      SetMemeOptions(FormattedOptions);
    }
    FetchMemesData();
  }, []);

  const FormatMemeOptions = (data) => {
    const options = [];
    for (let i = 0; i < data.length; i++) {
      options.push({ label: data[i].name, url: data[i].url });
    }
    return options;
  };

  const [Memes, setMemes] = useState([]);

  const CreateMeme = () => {
    const MemeTemplate = document.getElementById("combo-box-demo").value;
    const TopText = document.getElementById("top-text").value;
    const BottomText = document.getElementById("bottom-text").value;

    const NewMeme = {
      template: MemeTemplate,
      topText: TopText,
      bottomText: BottomText,
    };

    setMemes([...Memes, NewMeme]);
  };

  return (
    <div className="container">
      Meme Talk
      <Main Memes={Memes} />
      <ChatBox MemeOptions={MemeOptions} CreateMeme={CreateMeme} />
    </div>
  );
};

export default App;
