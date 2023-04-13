import "./App.css";
import Main from "./components/main";
import ChatBox from "./components/chatbox";
import SideBar from "./components/sidebar";
import { useState, useEffect } from "react";
import UserMessage from "./server-models/models/UserMessage";

const App = () => {
  const [MemeOptions, SetMemeOptions] = useState([]);

  useEffect(() => {
    async function FetchMemesData() {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const MemesData = await response.json();
      const MemeNameAndURL = GetMemeNameAndURL(MemesData.data.memes);
      SetMemeOptions(MemeNameAndURL);
    }
    FetchMemesData();
  }, []);

  const GetMemeNameAndURL = (data) => {
    const options = [];
    for (let i = 0; i < data.length; i++) {
      options.push({ label: data[i].name, url: data[i].url });
    }
    return options;
  };

  const [Memes, setMemes] = useState([]);

  const CreateMeme = async () => {
    const MemeTemplate = document.getElementById("options").value;
    const selectedOption = MemeOptions.find(
      (option) => option.label === MemeTemplate
    );
    const MemeURL = selectedOption.url;
    const TopText = document.getElementById("top-text").value;
    const BottomText = document.getElementById("bottom-text").value;

    const NewMeme = {
      template: MemeTemplate,
      url: MemeURL,
      topText: TopText,
      bottomText: BottomText,
    };

    setMemes([...Memes, NewMeme]);
    //saveUserMessage(MemeTemplate, TopText, BottomText);
    try {
      const response = await saveUserMessage(MemeTemplate, TopText, BottomText);
      const result = await response.json();
      console.log("User message saved successfully.", result);
    } catch (error) {
      console.log("Error saving user message:", error);
    }
  };

  async function saveUserMessage(template, topText, bottomText) {
    const data = { template, topText, bottomText };
    try {
      const response = await fetch("http://localhost:3001/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return response;
    } catch (error) {
      console.log("Error saving user message:", error);
      throw error;
    }
  }

  return (
    <div className="container">
      Meme Talk
      <Main Memes={Memes} />
      <ChatBox MemeOptions={MemeOptions} CreateMeme={CreateMeme} />
      <SideBar Memes={Memes} />
    </div>
  );
};

export default App;
