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
                    Description Text
                </Card.Text>
                <Button 
                    variant="primary"
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href=mealCard.DocsLink;
                        }}>Docs Bookmark</Button>
            </Card.Body>
        </Card>
  </div>
)

export default MealCard