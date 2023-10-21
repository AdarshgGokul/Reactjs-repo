import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React from 'react';
import { Card, Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';
import Items from '../DAY1/day1';
import Card1 from '../DAY1/Congrats_Card';
import Sol from '../task3/sol';
import SocialButton from '../task4/SocialButtons';
import Notification from '../task5/Notification';
import Login from '../task6/Loginpage';
import Cards from '../task7/Card';


function NavScroll() {
  return (
    <BrowserRouter>
    <Navbar expand="lg">
  <Navbar.Brand href="#home">My Task</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
<Nav className="mr-auto">
    <Nav.Link as={Link} to={'/day1'} >Task1</Nav.Link>
    <Nav.Link as={Link} to={'/Congrats_Card'} >Task2</Nav.Link>
    <Nav.Link as={Link} to={'/sol'} >Task3</Nav.Link>
    <Nav.Link as={Link} to={'/SocialButton'} >Task4</Nav.Link>
    <Nav.Link as={Link} to={'/Notification'} >Task5</Nav.Link>
    <Nav.Link as={Link} to={'/Loginpage'} >Task6</Nav.Link>
    <Nav.Link as={Link} to={'/Card'} >Task7</Nav.Link>
    
  </Nav>
</Navbar.Collapse>
</Navbar>
<Routes>
  <Route path='/day1' element={<Items/>}/>
  <Route path='/Congrats_Card' element={<Card1/>}/>
  <Route path='/sol' element={<Sol/>}/>
  <Route path='/SocialButton' element={<SocialButton/>}/>
  <Route path='/Notification' element={<Notification/>}/>
  <Route path='/Loginpage' element={<Login/>}/>
  <Route path='/Card' element={<Cards/>}/>
</Routes>
</BrowserRouter>
  );
}



export default NavScroll