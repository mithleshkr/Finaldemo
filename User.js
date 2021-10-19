import React,{useState, useEffect} from 'react'
import {Tabs,Tab, Button} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import  EditIcon  from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {Link} from 'react-router-dom';
import Userpopup from './Userpopup';

function User() {

    const [display, setDisplay] = useState([]);
    useEffect(()=>{
        showDetails();

    },[])
    function deleteUser(id)
    {
        fetch(`http://localhost:3333/user/${id}`,{
            method:'DELETE'
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Are You Sure want to Delete?")
            })
        })
    }

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
                            <Tabs > 
                         <Tab label="Dashboard" onClick={() => history.push("Dashboard")}/>
                       </Tabs>
                        <Tabs> 
                         <Tab label="Food" onClick={() => history.push("Food")}/>
                         </Tabs>
                         <Tabs  value={0}>
                         <Tab label="User"  />
                         </Tabs>
                    
                </div>
                <div>
                <Button  variant="contained" color="secondary" onClick={()=>history.push("/")}  >Logout</Button>
                </div>
            </div>
                <div style={{display:"flex",flex:7,height:"100vh",flexDirection:"column"}}>
                <h1 style={{display:"flex",justifyContent:"center",backgroundColor:"whitesmoke"}}>List of User</h1>
                {/* <tr style={{display:"flex",flexDirection:"row",justifyContent:"space-around",marginRight:300}}>
                    <td >Name</td>
                    </tr>
                    <tr>
                    <td >Details</td>
                    </tr>
                    <tr>
                    <td >Calorie</td>
                </tr> */}
            {display.map(post =>{
                return(

                    
                    <div style={{width:"100%",height:"10vh"}}>
                       
                       
                         <div style={{display:"flex",flexDirection:"row",alignItems:"center",flex:1,justifyContent:"space-between"}}>
                              
                        
                        

                        <card style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",flex:1,}}>
                        
                        
                        <p>{post.uname}</p>
                        <p>{post.age}</p>
                        <p>{post.height}</p>
                        <p>{post.weight}</p>
                        <p>{post.username}</p>
                        <p>{post.password}</p>
                        <Link to={"Edituser/"+post.id}>
                        <Button 
                        
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


            
            <div style={{display:"flex",flex:7,height:"100vh",flexDirection:"column"}}>
           
            <Userpopup />

            </div>
           
        </div>
    )}
        
export default User
