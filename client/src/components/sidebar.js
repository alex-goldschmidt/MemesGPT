import "../styles/sidebar.css";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";

const Sidebar = ({ Memes }) => {
  const [showSidebar, setShowSidebar] = useState(true);
  let firstMemeTemplate = "";
  if (Memes.length > 0) {
    // Get the first meme and its template
    const firstMeme = Memes[0];
    firstMemeTemplate = firstMeme.template;
  }

  const handleCloseSidebar = () => {
    setShowSidebar(false);
  };

  const handleOpenSidebar = () => {
    setShowSidebar(true);
  };

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 540) {
      setShowSidebar(false);
    }
  }, []);

  return (
    <>
      {showSidebar ? (
        <div className="sidebar">
          <div className="sidebarHeader">
            <Button variant="outlined" className="StartNewChat">
              New Chat
            </Button>
            <CloseIcon className="close" onClick={handleCloseSidebar} />
          </div>
          {firstMemeTemplate && (
            <>
              <div className="savedChatContainer">
                <p className="SavedChat">{firstMemeTemplate}</p>
                <CloseIcon className="closeChat" />
              </div>
            </>
          )}
        </div>
      ) : (
        <MenuIcon className="menu-icon" onClick={handleOpenSidebar} />
      )}
    </>
  );
};

export default Sidebar;
