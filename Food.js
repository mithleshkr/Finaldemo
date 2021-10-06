import React from 'react'
import {Tab,Tabs, Button} from '@material-ui/core';

import './Food.css'
import { useHistory } from 'react-router';
import Foodpopup from './Foodpopup';


function Food() {
    const history =useHistory();
    return (<>
        <div className="sidebar">
            <div className="tab" >
            <br/> <br/> <br/><br/><br/><br/><br/>
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
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            
            <Button variant="contained" color="secondary" onClick={()=>history.push("/")} style={{marginLeft:40}} >Logout</Button>

            
        </div>
        <div >
            <Foodpopup />
        </div>
        </>
    )
}

export default Food
