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

  //use a map function instead?
  const FormatMemeOptions = (data) => {
    const options = [];
    for (let i = 0; i < data.length; i++) {
      options.push({ label: data[i].name, url: data[i].url });
    }
    return options;
  };

  return (
    <div className="container">
      Meme Talk
      <Main />
      <ChatBox MemeOptions={MemeOptions} />
    </div>
  );
};

export default App;
