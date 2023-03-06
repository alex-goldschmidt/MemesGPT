import "./App.css";
import Main from "./components/main";
import ChatBox from "./components/chatbox";

const App = () => {
  return (
    <div className="container">
      Meme Talk
      <Main />
      <ChatBox />
    </div>
  );
};

export default App;
