import React,{useState, useEffect} from 'react'
import {Tab,Tabs, Button} from '@material-ui/core';
import {useHistory, withRouter} from "react-router-dom";


function Prefilled(props) {

const [data, setData]= useState([])

    console.warn("props",props.match.params.id);
    useEffect( async ()=>{
       let result= await fetch("http://localhost:3333/food/"+props.match.params.id);
       result = await result.json();
       setData(result)
    })

   

    const history=useHistory();
    return (
        <div style={{display:"flex",flex:1,height:"100vh"}}>
            <div className="sidebar" style={{display:"flex",flex:1,height:"100vh",flexDirection:"column"}}>
                <div className="tab" style={{display:"flex",flex:8,alignItems:"center",justifyContent:"center"}}>
                            <Tabs > 
                         <Tab label="Dashboard" />
                       </Tabs>
                        <Tabs value={0} > 
                         <Tab label="Food" onClick={() => history.push("Food")}/>
                         </Tabs>
                         <Tabs  >
                         <Tab label="User" onClick={() => history.push("User")} />
                         </Tabs>
                    
                </div>
                <div>
                <Button  variant="contained" color="secondary" onClick={()=>history.push("/")}  >Logout</Button>
                </div>


            </div>
            <div style={{display:"flex",flex:7,height:"100vh",flexDirection:"column"}}>
           
            <input type="text" defaultValue={data.fname}/>
            <button>Update food</button>

            </div>
           
        </div>
    )}

export default withRouter(Prefilled);
