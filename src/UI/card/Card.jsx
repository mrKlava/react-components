import React from 'react'

function Card(props) {
  return (
    <div className="card">

        <div className="card_front">
            {props.card.front}
        </div>

        <div className="card_back">
            {props.card.back}
        </div>

  </div>
  );
}

export default Card