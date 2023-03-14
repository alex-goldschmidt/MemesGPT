import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import "../styles/chatbox.css";

const ChatBox = ({ MemeOptions, CreateMeme }) => {
  return (
    <div className="ChatParent">
      <div className="ChatForm">
        <Autocomplete
          className="MemeTemplate"
          disablePortal
          id="combo-box-demo"
          options={MemeOptions}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              className="dropdown-input"
              label="Meme"
              InputLabelProps={{
                style: { color: "white" },
              }}
              sx={{
                "& .MuiInputBase-input": {
                  color: "white",
                },
                "& .MuiAutocomplete-popupIndicator": {
                  color: "white",
                },
              }}
            />
          )}
        />
        <TextField
          id="top-text"
          label="Top Text"
          variant="outlined"
          autoComplete="off"
          InputLabelProps={{
            style: { color: "white" },
          }}
          sx={{
            "& .MuiInputBase-input": {
              color: "white",
            },
          }}
        />
        <TextField
          id="bottom-text"
          label="Bottom Text"
          variant="outlined"
          autoComplete="off"
          InputLabelProps={{
            style: { color: "white" },
          }}
          sx={{
            "& .MuiInputBase-input": {
              color: "white",
            },
          }}
        />
        <Button
          variant="contained"
          startIcon={<SendIcon />}
          onClick={CreateMeme}
        >
          Generate
        </Button>
        <div></div>
      </div>
    </div>
  );
};

export default ChatBox;
