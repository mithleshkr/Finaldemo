import * as React from "react";
import { Button } from "@material-ui/core";

import { Dialog } from "@material-ui/core";
import { DialogContent } from "@material-ui/core";

import { DialogTitle } from "@material-ui/core";

export default function Foodpopup() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{display:"flex",justifyContent:"center",marginTop:-60,position:"relative"}}>
      <Button  variant="contained" onClick={handleClickOpen}>
        Add Food
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Food Details</DialogTitle>
        <DialogContent></DialogContent>
      </Dialog>
    </div>
  );
}
