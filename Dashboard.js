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
               <div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly",marginTop:60}}>
                   <div style={{height:"80vh",backgroundColor:"whitesmoke",width:"300px"}}>
                        <div style={{display:"flex",justifyContent:"center"}}>
                            <h1>1</h1>
                        </div>
                        <div style={{display:"flex",marginTop:350,justifyContent:"center"}}>
                            <p>Total Number of User</p>
                        </div>

                   </div>
                   <div style={{height:"80vh",backgroundColor:"whitesmoke",width:"300px"}}>
                        <div style={{display:"flex",justifyContent:"center"}}>
                            <h1>2</h1>
                        </div>
                        <div style={{display:"flex",marginTop:350,justifyContent:"center"}}>
                            <p>Total number of Food</p>
                        </div>
                   </div>
                   <div style={{height:"80vh",backgroundColor:"whitesmoke",width:"300px"}}>
                       <div style={{display:"flex",justifyContent:"space-evenly"}}>
                        <div>
                            <p>Name</p>
                        </div>
                        <div>
                            <p>UserName</p>
                        </div>
                        </div>
                        {display.map(post =>{
                            return(
                                
                        <div style={{display:"flex",justifyContent:"space-evenly"}}>
                        <div>
                            <h5>{post.uname}</h5>
                        </div>
                        <div>
                            <h5>{post.username}</h5>
                        </div>
                        </div>
                        
                        )
                    })}
                        <div style={{display:"flex",justifyContent:"center",marginTop:300,alignItems:"center"}}>
                            <p>Recently Added User</p>
                        </div>
                   </div>
               </div>
                

            </div>
           
        </div>
    )}

export default Dashboard
