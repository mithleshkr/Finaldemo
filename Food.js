import React,{useState, useEffect} from 'react'
import {Tab,Tabs, Button} from '@material-ui/core';


import './Food.css'
import { useHistory } from 'react-router';
import Foodpopup from './Foodpopup';


function Food() {

    const [display, setDisplay] = useState([]);
    useEffect(()=>{
        showDetails();

    },[])
    function deleteUser(id)
    {
        fetch(`http://localhost:3333/food/${id}`,{
            method:'DELETE'
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Are You Sure want to Delete?")
            })
        })
    }
    const showDetails = async() => {
        const response= await fetch("http://localhost:3333/food")
        .then((res)=>res.json())
        .then((data)=>setDisplay(data))
    }
    function selectUser(id){
        alert("hi")
        
    }
    


    const history =useHistory();
    return ( 
        <div style={{display:"flex",flex:1,height:"100vh"}}>
            <div className="sidebar" style={{display:"flex",flex:1,height:"100vh",flexDirection:"column"}}>
                <div className="tab" style={{display:"flex",flex:8,alignItems:"center",justifyContent:"center"}}>
                            <Tabs > 
                         <Tab label="Dashboard" onClick={() => history.push("Dashboard")}/>
                       </Tabs>
                        <Tabs value={0}> 
                         <Tab label="Food" />
                         </Tabs>
                         <Tabs>
                         <Tab label="User" onClick={() => history.push("User")} />
                         </Tabs>
                    
                </div>
                <div>
                <Button  variant="contained" color="secondary" onClick={()=>history.push("/")}  >Logout</Button>
                </div>


            </div>
            <div style={{display:"flex",flex:7,height:"100vh",flexDirection:"column"}}>
            {display.map(post =>{
                return(

                    
                    <div style={{width:"100%",height:"10vh"}}>
                    
                         <div style={{display:"flex",flexDirection:"row",alignItems:"center",flex:1,justifyContent:"space-around"}}>
                              
                        
                        <p>{post.id}</p>
                        <p >{post.fname}</p>
                        <p>{post.fdetail}</p>
                        <p>{post.fcal}</p>
                        <button onClick={selectUser}>Update</button>
                        <button onClick={()=>deleteUser(post.id)}>Delete</button>
                        </div>
                        
                    </div>
                    
                )
            })}

            </div>
            <div style={{marginTop:600,position:"absolute",marginLeft:700}}>
            <Foodpopup />
            </div>
        </div>
    
        
    )
    
}

export default Food
