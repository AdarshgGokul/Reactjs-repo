import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Congrats_Card.css'


function Card1() {
  return (
    
    <Card className="Main">
      <h1>Congratulation</h1>
      <Card.Body id="cd"> 
        <center>
        <Card.Img variant="top" src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" />
        <Card.Title>Kiran V</Card.Title>
        <Card.Text>
          Vishnu Institute of Computer Education and Technology, Bhimavaram
        </Card.Text>
        <Card.Img  className="Watch" variant="top" src="https://imgs.search.brave.com/JlqI_d8BZiZt3ZxNV2aQNpkZU32zMZSBK5Ea7KHvi2k/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS81MDIt/NTAyNTgyN19zbWFy/dC13YXRjaGVzLXBu/Zy1pbWFnZS1zbWFy/dC13YXRjaC1pbWFn/ZXMtcG5nLnBuZw"/>
        </center>
      </Card.Body>
    </Card>
    
  );
}

export default Card1;
