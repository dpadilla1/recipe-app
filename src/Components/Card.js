import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

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
                <Link to={{
                    pathname: "/slide",
                    hash: "1111",
                }} 
                    state={mealCard}
                >
                    <Button 
                        variant="primary"
                    >
                        Slide
                    </Button>
                </Link>
            </Card.Body>
        </Card>
  </div>
)

export default MealCard