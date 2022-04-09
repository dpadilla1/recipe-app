import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MealCard = ({ 
  id, 
  mealCard,
}) => (
    <div>
        <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src={mealCard.img} />
            <Card.Body>
                <Card.Title>{mealCard.Name}</Card.Title>
                <Card.Text>
                    Description Text
                </Card.Text>
                <Button 
                    variant="primary"
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href=mealCard.SlidesLink;
                        }}>Slide</Button>
            </Card.Body>
        </Card>
  </div>
)

export default MealCard