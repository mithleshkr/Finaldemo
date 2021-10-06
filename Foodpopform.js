import React, { useState } from "react";
import { TextField,Button } from "@material-ui/core";


function Foodpopform() {
  const [fname, setFname] = useState("");
  const [fdetail, setFdetails] = useState("");
  const [fcal, setFcal] = useState("");

  function save() {
    console.warn({ fname, fdetail, fcal });
    let data={fname, fdetail, fcal}
    fetch("http://localhost:3333/food",{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
     }).then((result)=>{
         console.warn("result",result);
        

     })
  }
  return (
    <div>
      <form style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
        <TextField
          label="Food Name"
          placeholder="Enter Food Name"
          type="text"
          value={fname}
          onChange={(e) => {
            setFname(e.target.value);
          }}
          name="ptitle"
        />{" "}
        <br /> <br />
        <TextField
          label="Details"
          placeholder="Enter food details"
          type="text"
          value={fdetail}
          onChange={(e) => {
            setFdetails(e.target.value);
          }}
          name="ptype"
        />{" "}
        <br /> <br />
        <TextField
          label="Calorie"
          placeholder="Enter Food Calorie"
          type="text"
          value={fcal}
          onChange={(e) => {
            setFcal(e.target.value);
          }}
          name="prole"
        />{" "}
        <br /> <br />
        <br /> <br />
        <Button variant="contained" color="primary" type="button" onClick={save}>
          Save
        </Button>
      </form>
    </div>
  );
}

export default Foodpopform;
