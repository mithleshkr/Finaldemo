import React,{useState, useEffect} from 'react'
import {Tab,Tabs, Button} from '@material-ui/core';
import {useHistory} from "react-router-dom";


function Dashboard() {

    const [display, setDisplay] = useState([]);
    useEffect(()=>{
        showDetails();

    },[])

    const showDetails = async() => {
        const res= await fetch("http://localhost:3333/user")
        .then((res)=>res.json())
        .then((data)=>setDisplay(data))
    }




    const history=useHistory();
    return (
        <div style={{display:"flex",flex:1,height:"100vh"}}>
            <div className="sidebar" style={{display:"flex",flex:1,height:"100vh",flexDirection:"column"}}>
                <div className="tab" style={{display:"flex",flex:8,alignItems:"center",justifyContent:"center"}}>
                            <Tabs value={0}> 
                         <Tab label="Dashboard" />
                       </Tabs>
                        <Tabs> 
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
                
                <div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
                <div style={{display:"flex",height:"30vh",backgroundColor:"whitesmoke",width:"400px",alignItems:"center",marginTop:50,justifyContent:"center"}}>
                    Total Food
                </div>

                <div style={{display:"flex",height:"30vh",backgroundColor:"whitesmoke",width:"400px",alignItems:"center",marginTop:50,justifyContent:"center"}}>
                    Total User
                </div>
                </div>
                
                        
                    
                
                <div style={{display:"flex",justifyContent:"center"}}>
                    
                {display.map(post =>{
                    return(
                    
                <div style={{display:"flex",height:"30vh",backgroundColor:"whitesmoke",width:"400px",marginTop:50,flexDirection:"column"}}>
                    
                    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
                    <p>{post.uname}</p> 
                    <p>{post.username}</p>
                    
                    </div>
                </div>
                
                    )
                })}
                </div>

        

            </div>
           
        </div>
    )}

export default Dashboard
