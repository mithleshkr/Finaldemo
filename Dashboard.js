import React from 'react'
import {Tab,Tabs, Button} from '@material-ui/core';
import {useHistory} from "react-router-dom";


function Dashboard() {
    const history=useHistory();
    return (
        <div className="sidebar">
            <div className="tab" >
            <br/> <br/> <br/><br/><br/><br/><br/>
            <Tabs value={0}> 
                <Tab label="Dashboard" />
            </Tabs>
            <Tabs > 
                <Tab label="Food" onClick={() => history.push("Food")}/>
            </Tabs>
            <Tabs>
                <Tab label="User" onClick={() => history.push("User")} />
            </Tabs>

            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            
            <Button variant="contained" color="secondary" onClick={()=>history.push("/")} style={{marginLeft:40}} >Logout</Button>

            
        </div>
    )
}

export default Dashboard
