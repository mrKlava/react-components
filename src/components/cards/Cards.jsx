import React from 'react'

import { Card } from '../../UI'

import './cards.scss'

function Cards(props) {
  console.log(props.data)
  return (
    <div className="cards">
      {(props.data.cards).map((card, key) => {
        return <Card card={card} key={key} />
      })}
    </div>
  );
}

export default Cards