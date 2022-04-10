import React from 'react'
import Card from 'react-bootstrap/Card';
import SlideModal from './SlideModal'

const MealCard = ({ 
  id, 
  mealCard,
}) => (
    <div className='floatCard' style={{ float: 'left' }}>
        <Card style={{ width: '140px' }}>
            <Card.Img variant="top" src={mealCard.img} />
            <Card.Body>
                <Card.Title style={{fontSize:"14px"}}>
                    {mealCard.Name}
                </Card.Title>
                <SlideModal mealInfo = {mealCard} />
            </Card.Body>
        </Card>
    </div>
)

export default MealCard