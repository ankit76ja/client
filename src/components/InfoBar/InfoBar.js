import React from 'react'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import CancelIcon from '@material-ui/icons/Cancel';
import {Link} from 'react-router-dom';

import './InfoBar.css';

const InfoBar = () => {
    return (
        <div className="infoBarContainer">
            <div className="leftSide">
                <SupervisorAccountIcon/>
                <h3 className="roomHeader">My Room</h3>
            </div>
            <div className="rightSide">
                <Link to="/"><CancelIcon/></Link>
            </div>
        </div>
        
    )
}

export default InfoBar
