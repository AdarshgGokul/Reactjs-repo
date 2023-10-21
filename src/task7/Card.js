import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Card from 'react-bootstrap/Card';
import './Card.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Cards() {
  return (
    <div className="bg">
        <Container>
            <h1>Learn 4.0 Technologies</h1>
            <p>Get trained by alumini of IIT's and top companies like Amazon,Microsoft, Intel,
                Nividia, Qualcomm, etc. Learn directly from professionals involved in product
                development
            </p>
            <Row><Col>
        <Card className="Card1" style={{ width: '20rem', height:'15rem' }}>
        <Card.Body>
        <Card.Title>Data Scientist</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>
            A data scientist uses data to understand and explain the phenomena around them,
            and help organizations make better decisions.
        </Card.Text>
        <Card.Img style={{width:'5rem', height:'4rem',}} variant="top" src="https://www.springboard.com/blog/wp-content/uploads/2020/07/what-does-a-data-scientist-in-finance-do.png"/>
    
        </Card.Body>
        
    </Card>
    </Col>
    <Col>
        <Card className="Card2" style={{ width: '20rem', height:'15rem'}}>
      <Card.Body>
        <Card.Title>IOT Developer</Card.Title>
        <Card.Text>
            who can develop, manage, and monitor IoT devices and
            systems by combining three core components – data, technology, and research.
        </Card.Text>
        
        <Card.Img style={{width:'5rem', height:'4rem'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV06ng_AJQfglQDVsEC0Yei4DyZntOj9aBmA&usqp=CAU'/>
      </Card.Body>
    </Card>
    </Col>
    </Row>&nbsp;
    <Row>
        <Col>
        
        <Card className="Card3" style={{ width: '20rem', height:'15rem' }}>
      <Card.Body>
        <Card.Title>VR Developer</Card.Title>
        <Card.Text>
        "Virtual" has had the meaning of "being something in essence or effect, 
        though not actually or in fact" since the mid-1400s.
        </Card.Text>
        
        <Card.Img style={{width:'5rem', height:'4rem'}} src='https://teslasuit.io/wp-content/uploads/TITLE-TS-and-TG_03-1.jpg'/>
      </Card.Body>
    </Card>
    </Col>
        
    <Col> 
        <Card className="Card4" style={{ width: '20rem', height:'15rem' }}>
      <Card.Body>
        <Card.Title>ML Engineer</Card.Title>
        <Card.Text>
        The mathematical foundations of ML are provided by mathematical optimization (mathematical programming) methods.
        </Card.Text>
        
        <Card.Img style={{width:'5rem', height:'4rem'}} src='https://cdn.dribbble.com/users/844541/screenshots/11583081/ai_engineer.png'/>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
        
    </div>
  );
}

export default Cards;
