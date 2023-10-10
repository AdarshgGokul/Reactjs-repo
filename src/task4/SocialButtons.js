import React from "react";
import Button from 'react-bootstrap/Button';
import './SocialButtons.css'


function SocialButton(){
    return(
       <center> 
        <h1>Social Buttons</h1>
        <Button variant="warning">Like</Button>
        <Button variant="light">Comment</Button>
        <Button variant="primary">Share</Button>


       </center>
    )
}
export default SocialButton