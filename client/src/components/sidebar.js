import "../styles/sidebar.css";
import React from "react";

const Sidebar = ({ Memes }) => {
  let firstMemeTemplate = "";
  if (Memes.length > 0) {
    // Get the first meme and its template
    const firstMeme = Memes[0];
    firstMemeTemplate = firstMeme.template;
  }
  return (
    <div className="sidebar">
      <h2 className="StartNewChat">+ Start New Chat</h2>
      {firstMemeTemplate && (
        <React.Fragment>
          <p className="SavedChat">{firstMemeTemplate}</p>
        </React.Fragment>
      )}
    </div>
  );
};

export default Sidebar;
