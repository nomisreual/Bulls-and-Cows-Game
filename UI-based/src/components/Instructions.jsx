import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

//popup dialog box for game instructions

export default function Instructions() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}
       sx={{ 
        borderColor: "green", 
        color: "green", 
        mr:2,
        '&:hover': {
          borderColor: "darkgreen",
          color: "darkgreen",
        }
      }}
    >
      
        How to play
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"🎯 Instructions "}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          🔹 The secret number has 4 unique digits.
          </DialogContentText>
          <DialogContentText>
          🔹 If you guess the right number in the right place, you get a bull.
          </DialogContentText>
          <DialogContentText>
          🔹 If you guess the right number but in the wrong place, you get a cow.
          </DialogContentText>
          <DialogContentText>
          <p> You have 3 levels:</p>
              <ul>
                <li>Easy: 25 guesses</li>
                <li>Medium: 10 guesses</li>
                <li>Hard: 5 guesses</li>
              </ul>
          </DialogContentText>

          <DialogContentText>🔹 Let's start guessing!</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
