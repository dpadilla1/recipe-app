import React from 'react'
import CardGroup from 'react-bootstrap/CardGroup'

import MealCard from './Card'


var CardList = ({ 
  data, 
  filter,
}) => { 
  var cards = "";
  if (data != null){
    var input = filter.toLowerCase();
  
    // Gather list of cards
    cards = data
      // filtering out the cards that...
      .filter((card, i) => {
        return (
          // ...are not matching the current search value
          !card.Name.toLowerCase().indexOf(input)
        )
      })
      // ...output a <Card /> component for each Card
      .map((card, i) => {
      // only display cards that match current input string
        return (
          <MealCard 
            id={card.ID}
            key={i}
            mealCard={card}
          />
        )
      })
  }
  
  
  /* ##### the component's output ##### */
  return ( 
    <div className='container'>
      <CardGroup>
       {cards}
      </CardGroup>
    </div>
  )
}

export default CardList;