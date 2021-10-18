import * as React from "react";
import { Button } from "@material-ui/core";

import { Dialog } from "@material-ui/core";
import { DialogContent } from "@material-ui/core";

import { DialogTitle } from "@material-ui/core";


export default function Userpopup() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{display:"flex",justifyContent:"center",marginTop:550,position:"relative"}}>
      <Button  variant="contained" color="primary" onClick={handleClickOpen}>
        Add Food
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>User Details</DialogTitle>
        <DialogContent>
            
        </DialogContent>
      </Dialog>
    </div>
  );
}
