import React from 'react'
import { CardGroup } from 'react-bootstrap'

//import MealCard from './Card'
import SlideModal from './SlideModal'


var CardList = ({ 
  data, 
  filter,
  selectedTags
}) => { 
  var cards = "No results";
  if (data != null) {
    var input = filter.toLowerCase();

    // Gather list of cards
    cards = data
      .filter((card, i) => {
        let tagArr = card.Tags.toLowerCase().split(', ');
        let drop = true;
        // filter by selected tags
        if (selectedTags != null) {
          selectedTags.forEach((selectedTag) => {
            if (!tagArr.includes(selectedTag.value)) {
              drop = false;
              return;
            }
          })
        }
        if (!drop) return drop;
        // filter by name
        if (input === ""){
          return true;
        }
        let check = card.Name.toLowerCase().indexOf(input);
        return (check >= 0)
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