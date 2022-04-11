import React from 'react'
import { CardGroup } from 'react-bootstrap'

//import MealCard from './Card'
import SlideModal from './SlideModal'


var CardList = ({ 
  data, 
  filter,
}) => { 
  var cards = "";
  if (data != null){
    var input = filter.toLowerCase();
    var inputArr = input.split(', ');
  
    // Gather list of cards
    cards = data
      // filtering out the cards that...
      .filter((card, i) => {
        let tagArr = card.Tags.toLowerCase().split(', ');
        if (input === ""){
          return true;
        }
        if (inputArr.length === 1) {
          let check = card.Name.toLowerCase().indexOf(input);
          return (
            // ...are not matching the current search value
            check >= 0 || tagArr.includes(input)
          )
        }
        else {
          let tagArr = card.Tags.toLowerCase().split(', ');
          tagArr.forEach(t => console.log(t))
          for (let i = 0; i < inputArr.length; i++) {
            if (!tagArr.includes(inputArr[i]) && card.Name.toLowerCase().indexOf(inputArr[i])) {
              return false;
            }
          }
          return true;
        }
      })
      // ...output a <Card /> component for each Card
      .map((card, i) => {
      // only display cards that match current input string
        return (
          <SlideModal 
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