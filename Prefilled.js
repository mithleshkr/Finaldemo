import React,{useState, useEffect} from 'react'
import {Tab,Tabs, Button, TextField} from '@material-ui/core';
import {useHistory, withRouter} from "react-router-dom";


function Prefilled(props) {

const [data, setData]= useState([])
const [fname, setFname] = useState("");
const [fdetail, setFdetails] = useState("");
const [fcal, setFcal] = useState("");

   
    useEffect( async ()=>{
       let result= await fetch("http://localhost:3333/food/"+props.match.params.id);
       result = await result.json();
       setData(result)
       setFname(result.fname)
       setFdetails(result.fdetail)
       setFcal(result.fcal);
    },[])
     function editProduct()
    {
        let item = {fname,fdetail,fcal}
        fetch("http://localhost:3333/food/"+props.match.params.id, {
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(item)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.warn(resp)
                

        })
        })
    }



   

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
                
           <form style={{display:"flex",flexDirection:"column",alignItems:"center",marginTop:200}}>
            <input
            onChange={(e)=>setFname(e.target.value)}
            type="text" defaultValue={data.fname}/> <br />
            <input
            onChange={(e)=>setFdetails(e.target.value)}
            variant="outlined" type="text" defaultValue={data.fdetail}/> <br />
            <input
            onChange={(e)=>setFcal(e.target.value)}
            type="text" defaultValue={data.fcal}/> <br />
            <Button 
            onClick={()=>editProduct(data.id)}
            variant="contained" color="primary">Update food</Button>
            </form>

            </div>
           
        </div>
    )}

export default withRouter(Prefilled);
