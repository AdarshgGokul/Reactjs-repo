import React from "react";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import './Notification.css'



function Notification(){
    return(
        <> 
        <h1 >Notification</h1>
        <Button variant=" btn text-start btn-primary btn-lg"><FontAwesomeIcon icon={faCircleCheck} />  Information Message</Button><br></br>
        <Button variant="btn text-start btn-success btn-lg"><FontAwesomeIcon icon={faCircleCheck} />  Success Message</Button><br></br>
        <Button variant="btn text-start btn-warning btn-lg"><FontAwesomeIcon icon={faBell} />  Warning Message</Button><br></br>
        <Button variant="btn text-start btn-danger btn-lg"><FontAwesomeIcon icon={faCircleExclamation} />  Error Message</Button>
        </>
    )
}
export default Notification