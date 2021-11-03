import React,{useState, useEffect} from 'react'
import {Tabs,Tab, Button} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import  EditIcon  from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {Link} from 'react-router-dom';
import Userpopup from './Userpopup';

import { Dialog } from "@material-ui/core";
import { DialogContent } from "@material-ui/core";

import { DialogTitle } from "@material-ui/core";

function User() {

    const [display, setDisplay] = useState([]);

    const [uname, setUname] = useState("");
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] =useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState ("");
    const [userId, setUserId] = useState(null)

    useEffect(()=>{
        showDetails();

    },[])
    function deleteUser(id)
    {
        fetch(`http://localhost:3333/user/${id}`,{
            method:'DELETE'
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("User deleted successfully")
            })
        })
    }

    const showDetails = async() => {
        const res= await fetch("http://localhost:3333/user").then((result)=>{
            result.json().then((resp)=>{
                setDisplay(resp)
                // setFname(resp[0].fname)
                // setFdetails(resp[0].fdetail)
                // setFcal(resp[0].fcal);
                // setUserId(resp[0].id)
            })
        })
    }

    const [open, setOpen] = React.useState(false);

    function editProduct  (id) {
      setOpen(true);
      console.warn("function called",display[id-1])
      let item= display[id-1];
      setUname(item.uname)
      setAge(item.age)
      setHeight(item.height)
      setWeight(item.weight)
      setUsername(item.username)
      setPassword(item.password)
      setUserId(item.id)
     
    };
  
    function updateUser (){
        let item={uname, age, height, weight, username, password, userId}
        fetch(`http://localhost:3333/user/${userId}`,{
            method: 'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(item)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.warn(resp)
                showDetails()
                alert("Update Successfully")
            })
        })
    }
  
    const handleClose =() => {
      setOpen(false);
    };
  


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
                <h1 style={{display:"flex",justifyContent:"center"}}>List of User</h1>
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
                   <table style={{display:"flex",flexDirection:"row",marginLeft:90}}>
                   <tr >
                       <th>Age</th>
                       
                   </tr>
                   </table>
                   <table style={{display:"flex",flexDirection:"row",marginLeft:60}}>
                   <tr >
                       <th>Height(cm)</th>
                       
                   </tr>
                   </table>
                   <table style={{display:"flex",flexDirection:"row",marginLeft:30}}>
                   <tr >
                       <th>Weight</th>
                       
                   </tr>
                   </table>
                   <table style={{display:"flex",flexDirection:"row",marginLeft:70}}>
                   <tr >
                       <th>username</th>
                       
                   </tr>
                   </table>
                   <table style={{display:"flex",flexDirection:"row",marginLeft:80}}>
                   <tr >
                       <th>password</th>
                       
                   </tr>
                   </table>
                   </div>
            {display.map(post =>{
                return(

                    
                    <div style={{width:"100%",height:"10vh"}}>
                       
                       
                         <div style={{display:"flex",flexDirection:"row",alignItems:"center",flex:1,justifyContent:"space-around",width:1205}}>
                              
                        
                        

                        <card style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",flex:1,backgroundColor:"whitesmoke"}}>
                        
                        
                        <p>{post.uname}</p>
                        <p>{post.age}</p>
                        <p>{post.height}</p>
                        <p>{post.weight}</p>
                        <p>{post.username}</p>
                        <p>{post.password}</p>
                        {/* <Link to={"Edituser/"+post.id}> */}
                        <Button 
                        onClick={() => editProduct(post.id)}
                        color="primary"    
                        startIcon={<EditIcon />}
                        variant="contained" 
                         >    
                        </Button>

                        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>User Details</DialogTitle>
        <DialogContent>
            <div style={{display:"flex",justifyContent:"center"}}>
            <form style={{display:"flex",flexDirection:"column"}}>
                    <input type="text" placeholder="Name" value={uname} onChange={(e)=>setUname(e.target.value)} /> <br /> <br />
                    <input type="text" placeholder="Details" value={age} onChange={(e)=>setAge(e.target.value)} /> <br /> <br />
                    <input type="number" placeholder="Calorie" value={height} onChange={(e)=>setHeight(e.target.value)} /> <br /> <br />
                    <Button variant="contained" color="primary" size="small" type="button" onClick={updateUser}>Update food</Button>
            </form>
            </div>
        </DialogContent>
      </Dialog>

                        {/* </Link> */}
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


            
            <div style={{display:"flex",flex:7,height:"100vh",flexDirection:"column",marginLeft:-650}}>
           
            <Userpopup />

            </div>
           
        </div>
    )}
        
export default User
