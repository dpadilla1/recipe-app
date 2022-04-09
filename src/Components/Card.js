import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MealCard = ({ 
  id, 
  mealCard,
}) => (
    <div>
        <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src="https://w0.peakpx.com/wallpaper/181/86/HD-wallpaper-double-patty-cheeseburger-thumbnail.jpg" />
            <Card.Body>
                <Card.Title>{mealCard.Name}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
  </div>
)

export default MealCard