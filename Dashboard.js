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
                <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",border:"2px solid black",height:"30vh"}}>
                    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <h3>Recently Added User</h3>
                    </div>
                    
                {display.map(post=>{
                    return(
                        
                   
                <div style={{display:"flex",height:"30vh",width:"200px"}}>
                  <div style={{display:"flex"}}>
                      <div style={{display:"flex",flexDirection:"column"}}>
                  <div>
                        <p>name</p>
                    </div>
                    <div>
                        <p>username</p>
                    </div>
                    </div>
                    <div style={{display:"flex",flexDirection:"column"}}>
                    <div style={{display:"flex",flexDirection:"column"}}>
                      <h3 style={{marginTop:10}}> {post.uname}</h3>
                      </div> 
                      </div>
                      
                      <div style={{display:"flex",flexDirection:"column"}}>
                      <h3 style={{display:"flex",flexDirection:"column",marginTop:65,marginLeft:-50}}>{post.username}</h3> 
                  </div>
                  </div>
                </div>
                 )
                })}
                </div>
                <div style={{border:"2px solid black",height:"30vh"}}>
                    <p>Total Food</p>
                </div>

                <div style={{border:"2px solid black",height:"30vh"}}>
                    <p>Total User</p>
                </div>

            </div>
           
        </div>
    )}

export default Dashboard
