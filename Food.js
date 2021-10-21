import React,{useState, useEffect} from 'react'
import {Tab,Tabs, Button} from '@material-ui/core';
import  EditIcon  from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';




import './Food.css'
import { useHistory } from 'react-router';
import Foodpopup from './Foodpopup';
import {Link} from 'react-router-dom';







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
                alert("Food Deletd Sucessfully")
            })
        })
    }
    const showDetails = async() => {
        const res= await fetch("http://localhost:3333/food")
        .then((res)=>res.json())
        .then((data)=>setDisplay(data))
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
                <h1 style={{display:"flex",justifyContent:"center",backgroundColor:"whitesmoke"}}>List of Food</h1>
                {/* <tr style={{display:"flex",flexDirection:"row",justifyContent:"space-around",marginRight:300}}>
                    <td >Name</td>
                    </tr>
                    <tr>
                    <td >Details</td>
                    </tr>
                    <tr>
                    <td >Calorie</td>
                </tr> */}
                <div style={{display:"flex",flexDirection:"row"}}>
               <table style={{display:"flex",flexDirection:"row",marginLeft:100}}>
                   <tr >
                       <th>Name</th>
                       
                   </tr>
                   </table>
                   <table style={{display:"flex",flexDirection:"row",marginLeft:200}}>
                   <tr >
                       <th>Details</th>
                       
                   </tr>
                   </table>
                   <table style={{display:"flex",flexDirection:"row",marginLeft:170}}>
                   <tr >
                       <th>Calorie</th>
                       
                   </tr>
                   </table>
                   </div>
            {display.map(post =>{
                return(
                    
                    
                    <div style={{width:"100%",height:"10vh"}}>
                       
                       
                         <div style={{display:"flex",flexDirection:"row",alignItems:"center",flex:1,justifyContent:"space-around"}}>
                              
                        
                        

                        <card style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around",flex:1,border:"2px solid grey",backgroundColor:"whitesmoke"}}>
                        {/* <p>{post.id}</p> */}
                        
                        <p >{post.fname}</p>
                        <p>{post.fdetail}</p>
                        <p>{post.fcal}</p>
                        <Link to={"Editfood/"+post.id}>
                        <Button 
                        // onClick={()=>history.push("Editfood")}
                        color="primary"    
                        startIcon={<EditIcon />}
                        variant="contained" 
                         >    
                        </Button>
                        </Link>
                        <Button 
                        color="primary"
                        startIcon={<DeleteIcon />}
                        variant="contained"
                        onClick={()=>deleteUser(post.id)}></Button>
                        </card>
                        
                        
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
