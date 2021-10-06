import React from 'react'
import {Tabs,Tab, Button} from '@material-ui/core';
import {useHistory} from 'react-router-dom';

function User() {
    const history=useHistory();
    return (
        <div className="sidebar">
            <div className="tab" >
                <br/> <br/> <br/><br/><br/><br/><br/>
            <Tabs > 
                <Tab label="Dashboard" onClick={() => history.push("Dashboard")}/>
            </Tabs>
            <Tabs > 
                <Tab label="Food" onClick={() => history.push("Food")}/>
            </Tabs>
            <Tabs value={0}>
                <Tab label="User"  />
            </Tabs>

            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            
            <Button variant="contained" color="secondary" onClick={()=>history.push("/")} style={{marginLeft:40}}>Logout</Button>
            
        </div>
    )
}


export default User
